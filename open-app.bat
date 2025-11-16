@echo off
echo Opening Pharmasampark App...
start http://localhost:8000/index.html
timeout /t 3
echo.
echo If the app didn't open, make sure the server is running!
echo Run start-server.bat first, then open http://localhost:8000/index.html in your browser
pause

