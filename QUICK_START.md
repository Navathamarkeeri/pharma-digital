# Quick Start Guide - Pharmasampark App

## 🚀 How to Open the App

### Method 1: Using Batch Files (Easiest - Windows)

1. **Double-click `start-server.bat`**
   - This will start the local server
   - Keep this window open

2. **Double-click `open-app.bat`**
   - This will open the app in your browser
   - OR manually go to: `http://localhost:8000/index.html`

### Method 2: Using Command Line

1. **Open PowerShell or Command Prompt** in this folder

2. **Start the server:**
   ```powershell
   python -m http.server 8000
   ```

3. **Open your browser** and go to:
   ```
   http://localhost:8000/index.html
   ```

### Method 3: Direct File Open (May have limitations)

1. **Double-click `index.html`**
   - ⚠️ Note: Some features may not work due to browser security restrictions
   - Recommended: Use Method 1 or 2 instead

## 📋 Requirements

- ✅ **Python 3.x** (You have Python 3.13.1 - Perfect!)
- ✅ **Modern Web Browser** (Chrome, Firefox, Edge, Safari)
- ✅ **Internet Connection** (for CDN libraries)

## 🔑 Demo Login Credentials

Once the app opens, you can login with:

**Pharma Company:**
- Email: `pharma@company.com`
- Password: `pharma123`

**Doctor:**
- Email: `doctor@hospital.com`
- Password: `doctor123`

**Admin:**
- Email: `admin@pharmasampark.com`
- Password: `admin123`

Or use the quick login buttons on the login page!

## 🐛 Troubleshooting

### Server won't start?
- Make sure Python is installed: `python --version`
- Check if port 8000 is already in use
- Try a different port: `python -m http.server 8080`

### App doesn't load?
- Make sure the server is running
- Check browser console for errors (F12)
- Try refreshing the page (Ctrl+F5)
- Make sure you're using: `http://localhost:8000/index.html` (not `file://`)

### No internet connection?
- The app needs internet for React and Tailwind CSS CDN
- Make sure you're connected to the internet

## 📝 Notes

- Keep the server window open while using the app
- To stop the server, press `Ctrl+C` in the server window
- The app uses mock data (no backend required)
- All data is stored in browser memory (lost on refresh)

## ✅ What to Expect

When you open the app, you should see:
1. **Demo Mode Warning Banner** (yellow banner at top)
2. **Login Page** with demo credentials
3. **Quick Login Buttons** for easy access
4. **Toast Notifications** (instead of alerts) when you perform actions

Enjoy testing the app! 🎉

