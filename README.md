# Pharmasampark - Pharma-Doctor Communication Platform

A modern web application for connecting pharmaceutical companies with healthcare professionals, built with React and Tailwind CSS.

## 🚀 Features

- **Pharma Dashboard**: Campaign management, analytics, medical rep management, KOL management, compliance review
- **Doctor Dashboard**: Product feed, Q&A with pharma reps, sample requests, ratings & reviews, educational hub
- **Admin Dashboard**: Platform overview and management
- **Modern UI**: Built with Tailwind CSS for a beautiful, responsive design
- **Toast Notifications**: User-friendly notifications instead of browser alerts
- **Error Handling**: Error boundaries for graceful error handling

## 📋 Requirements

- **Python 3.6+** (for local development server)
- **Modern Web Browser** (Chrome, Firefox, Edge, Safari)
- **Internet Connection** (for CDN libraries: React, Tailwind CSS)

## 🛠️ Installation & Setup

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd "digital pharma"
   ```

2. **Start the local server:**
   ```bash
   # Windows - Double click start-server.bat
   # OR use command line:
   python -m http.server 8000
   ```

3. **Open in browser:**
   - Go to: `http://localhost:8000/index.html`
   - OR double-click `open-app.bat`

### Alternative Methods

**Using Node.js:**
```bash
npx serve .
```

**Using PHP:**
```bash
php -S localhost:8000
```

**Direct file open:**
- Double-click `index.html` (may have limitations due to browser security)

## 🔑 Demo Credentials

**Pharma Company:**
- Email: `pharma@company.com`
- Password: `pharma123`

**Doctor:**
- Email: `doctor@hospital.com`
- Password: `doctor123`

**Admin:**
- Email: `admin@pharmasampark.com`
- Password: `admin123`

**Quick Login:** Use the quick login buttons on the login page for instant access!

## 📁 Project Structure

```
.
├── index.html              # Main application file
├── pharmasampark_app.jsx   # Original JSX file (reference)
├── requirements.txt        # Python requirements (minimal)
├── .gitignore             # Git ignore rules
├── README.md              # This file
├── DEPLOYMENT_CHECKLIST.md # Deployment checklist
├── DEPLOYMENT_SUMMARY.md   # Deployment summary
├── QUICK_START.md         # Quick start guide
├── start-server.bat       # Windows batch file to start server
└── open-app.bat          # Windows batch file to open app
```

## 🚀 Deployment

### Static Hosting (Recommended)

**Netlify:**
1. Drag and drop `index.html` to [netlify.com](https://netlify.com)
2. Done!

**Vercel:**
```bash
npm i -g vercel
vercel
```

**GitHub Pages:**
1. Push to GitHub
2. Go to Settings → Pages
3. Select main branch
4. Your app will be live at `https://username.github.io/repo-name`

## 🛠️ Technology Stack

- **React 18** (via CDN)
- **Tailwind CSS** (via CDN)
- **Babel Standalone** (for JSX transformation)
- **No Build Process Required** - Pure static HTML

## ⚠️ Important Notes

- **Demo/Prototype**: This is a prototype application using mock data
- **No Backend**: All data is stored in browser memory (lost on refresh)
- **Hardcoded Credentials**: Demo credentials are in the code (not for production)
- **CDN Dependencies**: Requires internet connection for React and Tailwind CSS

## 🔒 Security Notice

This application is **NOT ready for production use** with real data. It requires:
- Backend API integration
- Proper authentication system
- Data persistence
- Security hardening
- Compliance features (GDPR, HIPAA)

## 📝 Development

### Making Changes

1. Edit `index.html` directly
2. Refresh browser to see changes
3. No build process needed!

### Code Structure

- All React components are in `index.html`
- Uses Babel Standalone for JSX transformation
- Tailwind CSS for styling
- Toast notification system for user feedback
- Error boundaries for error handling

## 🐛 Troubleshooting

**Server won't start?**
- Check Python is installed: `python --version`
- Try different port: `python -m http.server 8080`

**App doesn't load?**
- Make sure server is running
- Check browser console (F12) for errors
- Hard refresh: `Ctrl+F5`
- Ensure internet connection (for CDN)

**Login not working?**
- Use exact credentials (copy-paste recommended)
- Try quick login buttons
- Check for typos in email/password

## 📄 License

[Add your license here]

## 👥 Contributors

[Add contributors here]

## 📧 Contact

[Add contact information here]

---

**Note:** This is a demo/prototype application. For production use, implement proper backend, authentication, and security measures.
