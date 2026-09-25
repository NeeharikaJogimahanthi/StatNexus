const { spawn } = require('child_process');
const http = require('http');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const userDataDir = 'C:\\Users\\Neeharika\\AppData\\Local\\Temp\\edge_debug_err';

const edge = spawn(edgePath, [
  `--user-data-dir=${userDataDir}`,
  '--headless=new',
  '--remote-debugging-port=9225',
  'http://127.0.0.1:8000/'
]);

setTimeout(() => {
  http.get('http://127.0.0.1:9225/json', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const targets = JSON.parse(data);
      const page = targets.find(t => t.url.includes('8000')) || targets[0];
      const ws = new WebSocket(page.webSocketDebuggerUrl);

      ws.addEventListener('open', () => {
        ws.send(JSON.stringify({ id: 1, method: 'Runtime.enable' }));
        ws.send(JSON.stringify({ id: 2, method: 'Log.enable' }));

        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 10,
            method: 'Runtime.evaluate',
            params: {
              expression: `(() => {
                return {
                  title: document.title,
                  rootFound: !!document.getElementById('root'),
                  bodySnippet: document.body.innerHTML.substring(0, 500)
                };
              })()`,
              returnByValue: true
            }
          }));
        }, 2000);
      });

      ws.addEventListener('message', (event) => {
        const msg = JSON.parse(event.data);
        if (msg.method === 'Runtime.consoleAPICalled' || msg.method === 'Runtime.exceptionThrown') {
          console.log('BROWSER LOG/ERROR:', JSON.stringify(msg.params));
        }
        if (msg.id === 10) {
          console.log('\n===== RESULT =====');
          console.log(JSON.stringify(msg.result?.result?.value, null, 2));
          edge.kill();
          process.exit(0);
        }
      });
    });
  });
}, 2500);
