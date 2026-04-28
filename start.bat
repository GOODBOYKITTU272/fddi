@echo off
setlocal
cd /d "%~dp0"

echo ========================================
echo    AIST Ace - Local Dev Runner
echo ========================================
echo.

where node >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Node.js is not installed or not on PATH.
  echo         Please install Node 18+ from https://nodejs.org and rerun this script.
  pause
  exit /b 1
)

echo [1/3] Node found:
node --version
echo.

if not exist node_modules (
  echo [2/3] Installing dependencies (first run, ~1-2 min)...
  call npm install --no-audit --no-fund
  if errorlevel 1 (
    echo.
    echo [ERROR] npm install failed. Check your internet connection and try again.
    pause
    exit /b 1
  )
) else (
  echo [2/3] Dependencies already installed - skipping.
)

echo.
echo [3/3] Starting dev server at http://localhost:5173 ...
echo       (Press Ctrl+C to stop the server)
echo.
call npm run dev
