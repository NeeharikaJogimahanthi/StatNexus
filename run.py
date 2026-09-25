"""
StatNexus: Karmayogi AI — Prototype Launcher
Problem Statement ID: 26101 | MoSPI DIID
Runs the FastAPI Backend & Serves the React UI on http://127.0.0.1:8000/
"""

import os
import sys
import time
import subprocess
import webbrowser
import threading
import urllib.request
import uvicorn

# Ensure UTF-8 output on Windows consoles
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

def free_port(port=8000):
    """Frees port on Windows before starting uvicorn to prevent Errno 10048."""
    if sys.platform == "win32":
        try:
            output = subprocess.check_output("netstat -ano", shell=True, text=True)
            my_pid = os.getpid()
            for line in output.splitlines():
                if f":{port}" in line and "LISTENING" in line:
                    parts = line.strip().split()
                    pid = int(parts[-1])
                    if pid != my_pid and pid > 0:
                        subprocess.run(f"taskkill /F /PID {pid}", shell=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            time.sleep(0.5)
        except Exception:
            pass

def open_browser():
    if os.getenv("NO_BROWSER") == "1":
        return
    url = "http://127.0.0.1:8000"
    health_url = f"{url}/api/health"
    print("\n>>> Waiting for StatNexus server to initialize before opening browser...")
    max_wait = 25  # seconds
    start_time = time.time()
    server_ready = False

    while time.time() - start_time < max_wait:
        try:
            req = urllib.request.Request(health_url, headers={"User-Agent": "StatNexus-Launcher"})
            with urllib.request.urlopen(req, timeout=1) as response:
                if response.status == 200:
                    server_ready = True
                    break
        except Exception:
            pass
        time.sleep(0.3)

    if server_ready:
        print(f"\n>>> Server is LIVE! Launching browser at {url} ...\n")
    else:
        print(f"\n>>> Launching browser at {url} ...\n")

    try:
        webbrowser.open(url)
    except Exception as e:
        print(f"Please open {url} manually in your browser. ({e})")

if __name__ == "__main__":
    print("==========================================================================")
    print("  StatNexus: Karmayogi AI — Official MoSPI DIID Web Platform")
    print("  Problem Statement ID: 26101 | Category: Software")
    print("  Theme: Smart Education | Organization: MoSPI DIID")
    print("==========================================================================")
    print("  Features (StatNexus Platform Architecture):")
    print("  1. Define Officer Profile (Identify role and competency)")
    print("  2. Recommend Courses (Access iGOT courses)")
    print("  3. Create Quizzes (Generate adaptive MCQs from uploaded materials via NVIDIA NIM)")
    print("  4. Detect Skill Gaps (Utilize AI diagnostics across 4 MoSPI domains)")
    print("  5. Analyze Performance (Provide continuous feedback & gap-to-mastery tracking)")
    print("==========================================================================")
    print("  Serving directly at: http://127.0.0.1:8000/")
    print("  API Docs at: http://127.0.0.1:8000/docs")
    print("==========================================================================\n")

    # Free port 8000 if previously occupied
    free_port(8000)

    # Launch browser in a background thread
    threading.Thread(target=open_browser, daemon=True).start()

    # Run uvicorn server binding directly to 127.0.0.1
    try:
        config = uvicorn.Config("main:app", host="127.0.0.1", port=8000, log_level="info")
        server = uvicorn.Server(config)
        server.run()
    except KeyboardInterrupt:
        print("\nServer stopped by user.")
    except Exception as e:
        print(f"\nServer encountered error: {e}")

