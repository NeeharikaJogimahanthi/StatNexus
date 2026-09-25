@echo off
title Launching StatNexus Web Platform...
echo Checking StatNexus backend server status...

powershell -NoProfile -Command "try { $r = Invoke-WebRequest -Uri 'http://127.0.0.1:8000/api/health' -UseBasicParsing -TimeoutSec 1; exit 0 } catch { exit 1 }"
if %ERRORLEVEL% equ 0 (
    echo [OK] StatNexus server is running! Opening browser...
    start "" "http://127.0.0.1:8000"
) else (
    echo [INFO] Backend server is not running yet.
    echo Starting backend server via run.bat...
    start "" "%~dp0run.bat"
)
exit

