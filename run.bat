@echo off
title StatNexus: Karmayogi AI - MoSPI DIID (Problem Statement ID: 26101)
color 0A
echo ===============================================================================
echo   StatNexus: Karmayogi AI - Official MoSPI DIID Learning ^& Skill Platform
echo   Problem Statement ID: 26101 ^| Category: Software
echo   Organization: Ministry of Statistics ^& Programme Implementation (MoSPI)
echo   Department: Data Informatics ^& Innovation Division (DIID)
echo ===============================================================================
cd /d "%~dp0"

:: Check if Python is installed
where python >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [OK] Python detected! Starting FastAPI backend server on http://127.0.0.1:8000 ...
    echo.
    echo [*] NOTE: Keep this terminal window OPEN while using StatNexus in your browser.
    echo [*] The browser will open automatically once the server has fully initialized.
    echo [*] Press Ctrl+C in this window to stop the server at any time.
    echo.
    python run.py
) else (
    echo [INFO] Python is not installed on this device.
    echo Launching the StatNexus interactive web application directly in your web browser...
    echo.
    start "" "index.html"
)
pause
