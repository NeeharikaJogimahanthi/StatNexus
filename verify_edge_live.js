const { spawn } = require('child_process');
const http = require('http');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const userDataDir = 'C:\\Users\\Neeharika\\AppData\\Local\\Temp\\edge_verify_clean';

const edge = spawn(edgePath, [
  `--user-data-dir=${userDataDir}`,
  '--headless=new',
  '--remote-debugging-port=9224',
  'http://127.0.0.1:8000/'
]);

setTimeout(() => {
  http.get('http://127.0.0.1:9224/json', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const targets = JSON.parse(data);
      const page = targets.find(t => t.url.includes('8000')) || targets[0];
      const ws = new WebSocket(page.webSocketDebuggerUrl);

      ws.addEventListener('open', () => {
        ws.send(JSON.stringify({ id: 1, method: 'Runtime.enable' }));

        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 10,
            method: 'Runtime.evaluate',
            params: {
              expression: `(() => {
                const root = document.getElementById('root');
                const main = root?.querySelector('main');
                const mainChildren = Array.from(main?.children || []).map(c => ({
                  tag: c.tagName,
                  textStart: c.innerText.substring(0, 100).replace(/\\n/g, ' ')
                }));
                const signInBtn = document.getElementById('header-signin-btn');
                const signOutBtn = document.getElementById('header-signout-btn');
                return {
                  htmlLength: root?.innerHTML?.length || 0,
                  mainChildrenCount: mainChildren.length,
                  mainChildren: mainChildren,
                  headerSignInBtnPresent: !!signInBtn,
                  headerSignOutBtnPresent: !!signOutBtn,
                  bodyStart: document.body?.innerText?.substring(0, 300).replace(/\\n/g, ' ')
                };
              })()`,
              returnByValue: true
            }
          }));
        }, 2000);
      });

      ws.addEventListener('message', (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id === 10) {
          console.log('\n===== LIVE EDGE VERIFICATION =====');
          console.log(JSON.stringify(msg.result?.result?.value, null, 2));
          console.log('===================================\n');
          edge.kill();
          process.exit(0);
        }
      });
    });
  }).on('error', err => {
    console.error('CDP connect error:', err.message);
    edge.kill();
    process.exit(1);
  });
}, 2500);
