@echo off
echo Starting Pharmasampark Server...
echo.
echo Server will be available at: http://localhost:8000/index.html
echo.
echo Press Ctrl+C to stop the server
echo.
python -m http.server 8000
pause

