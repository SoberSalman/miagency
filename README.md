# MIAGENCY - Insurance Landing Page

A modern, responsive insurance landing page built with **Next.js 14**, **React 18**, and **Tailwind CSS**.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001)

## 📁 Project Structure

```
miagency/
├── components/              # React components
│   └── landing-page.jsx     # Main landing page component
├── pages/                   # Next.js pages
│   ├── _app.js             # App wrapper
│   ├── _document.js        # HTML document
│   ├── index.js            # Homepage
│   └── api/
│       └── submit-quote.js # Form API endpoint
├── public/                  # Static files
│   └── robots.txt          # SEO robots file
├── styles/                  # Global styles
│   └── globals.css         # Tailwind & animations
├── docs/                    # Documentation
│   ├── GETTING_STARTED.md
│   ├── DEPLOYMENT.md
│   └── ...
├── Configuration files
│   ├── tailwind.config.js
│   ├── next.config.js
│   ├── postcss.config.js
│   ├── vercel.json
│   ├── .eslintrc.json
│   └── .prettierrc.json
└── package.json
```

## 📚 Documentation

- **[GETTING_STARTED.md](./docs/GETTING_STARTED.md)** - Developer guide
- **[DEPLOYMENT.md](./docs/DEPLOYMENT.md)** - Vercel deployment
- **[PRODUCTION_CHECKLIST.md](./docs/PRODUCTION_CHECKLIST.md)** - Pre-launch checklist
- **[QUICK_REFERENCE.md](./docs/QUICK_REFERENCE.md)** - Quick commands

## 🎨 Features

✅ Responsive design (mobile-first)
✅ SEO optimized (meta tags, structured data)
✅ Accessible (ARIA labels, semantic HTML)
✅ Form validation
✅ Smooth animations
✅ Fast performance
✅ Vercel ready

## 🔧 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Check code quality
```

## 🌐 Deployment

Deploy to Vercel:
1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploys on every push

## 📧 Contact Form

Form submits to `/api/submit-quote`. Connect to:
- SendGrid
- Nodemailer
- Custom backend
- Database

See [DEPLOYMENT.md](./docs/DEPLOYMENT.md#api-integration-setup)

## 📄 License

© 2024 MIAGENCY. All rights reserved.
