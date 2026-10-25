@echo off
title Push Rancer to GitHub
cd /d "%~dp0"
echo ====================================================
echo Pushing Rancer Project to GitHub (Rooban-arch/rancer)
echo ====================================================
echo.

set "GIT_CMD=%LOCALAPPDATA%\Programs\Git\cmd\git.exe"
if not exist "%GIT_CMD%" set "GIT_CMD=git"

%GIT_CMD% branch -M main
%GIT_CMD% push -u origin main --force

echo.
if %ERRORLEVEL% EQU 0 (
    echo ====================================================
    echo SUCCESS! apps/, packages/, and supabase/ are on GitHub!
    echo Refresh your GitHub page to see all folders.
    echo ====================================================
) else (
    echo.
    echo If prompted above, please sign in to your GitHub account in the browser.
)
echo.
pause
