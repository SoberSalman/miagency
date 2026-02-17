# Quick Reference - MIAGENCY

## 🚀 Launch in 5 Steps

```bash
# 1. Navigate to project
cd /home/salman/Desktop/Projects/miagency

# 2. Install dependencies
npm install

# 3. Start development
npm run dev

# 4. Open in browser
# Visit http://localhost:3000

# 5. When ready, deploy to Vercel
# Push to GitHub, connect to Vercel, done!
```

## 📝 Key Files to Edit

| What | Where | Examples |
|------|-------|----------|
| Company name | `landing-page.jsx` | Change "MIAGENCY" |
| Phone number | `landing-page.jsx` | Change "1-800-MIAGENCY" |
| Email | `landing-page.jsx` | Change "hello@miagency.com" |
| Services | `landing-page.jsx` | Auto, Home, Life, Business |
| Colors | `tailwind.config.js` | Teal, Blue values |
| SEO tags | `pages/index.js` | Title, meta description |
| Logo | `landing-page.jsx` | Replace shield icon |
| Hero image | `landing-page.jsx` | Replace placeholder |

## 🎨 Customize Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  teal: {
    600: '#YOUR_COLOR',  // Primary
  },
  blue: {
    600: '#YOUR_COLOR',  // Secondary
  },
}
```

## 📧 Connect Email Service

### SendGrid
```bash
npm install @sendgrid/mail
```
Edit `pages/api/submit-quote.js` and add API key to Vercel.

### Nodemailer
```bash
npm install nodemailer
```
Configure SMTP settings in environment variables.

## 🌐 Deploy to Vercel

```bash
# 1. Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Visit https://vercel.com
# 3. Click "New Project"
# 4. Select your GitHub repo
# 5. Click "Deploy"

# Done! Your site is live
```

## 📱 Add Your Images

1. Create `public/` folder (if needed)
2. Add images:
   - `public/logo.png` - Your logo
   - `public/hero.jpg` - Hero section image
   - `public/favicon.ico` - Browser icon
3. Update paths in `landing-page.jsx`

## 🔒 Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
NEXT_PUBLIC_API_URL=https://yourdomain.com
```

For production, add to Vercel:
Settings → Environment Variables

## ✨ Common Customizations

### Change Hero Headline
**File**: `landing-page.jsx` (line ~70)
```javascript
<h1>Your Headline Here</h1>
```

### Add Logo
**File**: `landing-page.jsx` (line ~25)
```javascript
<img src="/logo.png" alt="MIAGENCY" />
```

### Update Services
**File**: `landing-page.jsx` (line ~73)
```javascript
const services = [
  { icon: Car, title: 'Your Service', description: '...' },
  // ...
];
```

### Change Contact Info
**File**: `landing-page.jsx` (line ~340)
```javascript
{ icon: PhoneIcon, title: 'Phone', text: 'YOUR_PHONE' },
{ icon: Mail, title: 'Email', text: 'YOUR_EMAIL' },
```

## 🧪 Testing

```bash
# Check for errors
npm run lint

# Build locally
npm run build

# Start production build
npm start
```

## 📊 Performance Check

1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Run audit
4. Check Core Web Vitals (green = good)

## ♿ Accessibility Check

1. Keyboard navigation - Tab through all elements
2. Screen reader - Test with NVDA or JAWS
3. DevTools audit - Check accessibility tab
4. Color contrast - Use WebAIM color contrast checker

## 🐛 Debugging

**Form not submitting?**
- Check browser console (F12)
- Verify API endpoint: `/api/submit-quote`
- Check Vercel function logs if deployed

**Images not showing?**
- Verify file in `public/` folder
- Check correct path in code
- Refresh browser cache (Ctrl+Shift+R)

**Styles not applied?**
- Rebuild CSS: `npm run dev`
- Clear browser cache
- Check Tailwind class names

## 📈 SEO Checklist

- [ ] Meta title and description added
- [ ] Open Graph image set
- [ ] Structured data validated
- [ ] Mobile responsive
- [ ] Page speed good (Lighthouse)
- [ ] No 404 errors

## 🔐 Security Checklist

- [ ] No secrets in `.env.example`
- [ ] All secrets in `.env.local` (local)
- [ ] API credentials in Vercel only
- [ ] Input validation on forms
- [ ] HTTPS enabled

## 📚 Full Guides

- **Getting Started**: See `GETTING_STARTED.md`
- **Deployment**: See `DEPLOYMENT.md`
- **Production Ready**: See `PRODUCTION_CHECKLIST.md`
- **Project Details**: See `PROJECT_SUMMARY.md`

## 🎯 Common Commands

```bash
npm install              # Install dependencies
npm run dev             # Start dev server (http://localhost:3000)
npm run build           # Build for production
npm start               # Start production server
npm run lint            # Check code quality
npm outdated            # Check for updates
npm update              # Update packages

vercel login            # Login to Vercel
vercel --prod           # Deploy to production
vercel                  # Deploy to staging
```

## ⏱️ Timeline

| Task | Time |
|------|------|
| Install & Run | 2 min |
| Add Images | 10 min |
| Update Text | 10 min |
| Connect Email | 10 min |
| Test Locally | 10 min |
| Deploy to Vercel | 5 min |
| **Total** | **~45 min** |

## 🆘 Need Help?

1. Check the relevant guide (GETTING_STARTED, DEPLOYMENT, etc.)
2. Look at code comments
3. Search for the issue in documentation
4. Check Next.js/Tailwind docs
5. Review Vercel logs if deployed

## 🎉 You're All Set!

Your professional insurance landing page is ready. Just add images, update info, and deploy!

Next: Read `GETTING_STARTED.md` →
