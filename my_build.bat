@echo off
setlocal enabledelayedexpansion

set "src=D:\Qsync\Webs\XYZ\so"
set "dst=T:\Documents\Home"

if not exist "%src%\" (
    echo 源目录不存在: %src%
    pause
    exit /b 1
)

if not exist "%dst%\" mkdir "%dst%"

xcopy "%src%" "%dst%" /E /Y /I /H /R /K >nul
pause

echo 正在生成站点...
hugo -d "%dst%"
pause

echo 操作完成
pause