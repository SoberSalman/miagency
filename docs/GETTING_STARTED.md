# Getting Started - MIAGENCY Landing Page

Quick start guide for developers working on the MIAGENCY insurance landing page.

## 🚀 Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Start Editing
- Main component: `landing-page.jsx`
- Pages: `pages/index.js`
- Styles: `styles/globals.css` and Tailwind classes
- API routes: `pages/api/`

## 📁 Project Structure

```
miagency/
├── pages/
│   ├── _app.js              # App wrapper
│   ├── _document.js         # HTML document + meta tags
│   ├── index.js             # Homepage
│   └── api/
│       └── submit-quote.js  # Quote form API endpoint
│
├── landing-page.jsx         # Main component (all sections)
│
├── styles/
│   └── globals.css          # Global styles + animations
│
├── public/
│   └── robots.txt           # SEO robots file
│
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
├── postcss.config.js        # PostCSS setup
├── .eslintrc.json           # ESLint rules
├── .prettierrc.json         # Code formatting rules
├── package.json             # Dependencies
├── vercel.json              # Vercel deployment config
├── SETUP.md                 # Setup guide
├── DEPLOYMENT.md            # Deployment guide
└── GETTING_STARTED.md       # This file
```

## 🎨 Customization Guide

### Update Company Information

**In `landing-page.jsx`:**
```javascript
// Phone number (around line 340)
{ icon: PhoneIcon, title: 'Phone', text: '1-800-MIAGENCY' },

// Email (around line 341)
{ icon: Mail, title: 'Email', text: 'hello@miagency.com' },

// Office location (around line 342)
{ icon: MapPin, title: 'Office', text: 'Available Nationwide' }
```

### Add Your Logo

Replace the shield icon in navigation:
```javascript
// Around line 25 in landing-page.jsx
<img src="/logo.png" alt="MIAGENCY" className="w-10 h-10" />
```

Place `logo.png` in the `public/` folder.

### Replace Hero Image

The hero section has a placeholder:
```javascript
// Around line 152 in landing-page.jsx - replace with:
<img
  src="/hero-image.jpg"
  alt="MIAGENCY Insurance"
  className="w-full h-full object-cover rounded-2xl"
/>
```

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  teal: {
    600: '#your-primary-color',
  },
  blue: {
    600: '#your-secondary-color',
  },
}
```

Update gradient in `landing-page.jsx`:
```javascript
className="bg-gradient-to-r from-your-color-1 to-your-color-2"
```

### Modify Services

Edit services array in `landing-page.jsx` (around line 73):
```javascript
const services = [
  { icon: Car, title: 'Your Service', description: 'Your description' },
  // ...
];
```

## 🔌 API Integration

### Form Submission

The contact form submits to `/api/submit-quote`. Currently, it just validates.

To connect to email service:

**Option 1: SendGrid**
```bash
npm install @sendgrid/mail
```

Set environment variables in `.env.local`:
```
SENDGRID_API_KEY=your_key
SENDGRID_FROM_EMAIL=hello@miagency.com
```

Update `pages/api/submit-quote.js` with SendGrid logic.

**Option 2: Nodemailer**
```bash
npm install nodemailer
```

Configure SMTP settings in environment variables.

## 🎯 Key Components

### Navigation
- Sticky header with responsive mobile menu
- Logo and company name
- Navigation links

### Hero Section
- Large headline with gradient text
- Subheadline
- Two CTA buttons (quote & learn more)
- Placeholder for hero image

### Services Section
- 4 service cards (auto, home, life, business)
- Icons and descriptions
- Hover animations

### Trust Section
- Statistics (years, customers, satisfaction, support)
- Trust indicators list
- Benefits with checkmarks

### Contact Form
- 5 fields (name, email, phone, service type, message)
- Client-side validation
- Error messages
- Success message on submit

### Footer
- Company info
- Links
- Contact details
- Legal links

## 🎭 Animations

Scroll animations are automatic with `[data-animate]` attribute.

Add custom animations in `styles/globals.css`:
```css
@keyframes myAnimation {
  from { /* starting state */ }
  to { /* ending state */ }
}

.animate-myAnimation {
  animation: myAnimation 0.6s ease-out forwards;
}
```

## 📱 Responsive Breakpoints

Tailwind breakpoints used:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up

Example: `md:grid-cols-2` = 2 columns on desktop, 1 on mobile.

## ♿ Accessibility

All interactive elements include:
- `aria-label` for buttons
- `aria-required="true"` for form fields
- Semantic HTML (`<button>`, `<form>`, etc.)
- High contrast colors
- Keyboard navigation support

## 🚀 Deployment

### To Vercel

```bash
# One-time setup
vercel login

# Deploy to production
vercel --prod

# Deploy to staging
vercel
```

See `DEPLOYMENT.md` for complete guide.

## 🐛 Debugging

### Check Console
```bash
npm run dev
# Open DevTools (F12) → Console tab
```

### Lint Code
```bash
npm run lint
```

### Build Locally
```bash
npm run build
npm start
```

### Check Performance
1. Open DevTools → Lighthouse
2. Run audit
3. Check Core Web Vitals

## 📝 Code Style

- Semicolons: required
- Quotes: single quotes
- Line width: 100 characters
- Indentation: 2 spaces
- Trailing commas: ES5

Enforced by `.prettierrc.json`.

Format code:
```bash
npm run prettier --write .
```

## 🤝 Common Tasks

### Add New Section
1. Create component in `landing-page.jsx`
2. Add section ID for navigation
3. Include `data-animate` for scroll animation
4. Add navigation link

### Change Fonts
1. Update imports in `pages/_document.js`
2. Update `tailwind.config.js` fontFamily
3. Use new font classes in components

### Add SEO Meta Tags
1. Update `pages/index.js`
2. Modify structured data
3. Update `pages/_document.js` if global

### Connect to CMS
1. Create data fetching in `pages/index.js`
2. Pass data to `MiagencyLanding` component
3. Update component to use props

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [Vercel Docs](https://vercel.com/docs)

## 💡 Tips

1. **Hot Reload**: Changes save automatically during `npm run dev`
2. **Browser Sync**: Open multiple devices to same localhost:3000
3. **Mobile Testing**: DevTools → Device toolbar (Ctrl+Shift+M)
4. **Lighthouse**: Check performance regularly
5. **Git**: Commit early and often

## ❓ Need Help?

Check these files first:
- `SETUP.md` - Installation & setup
- `DEPLOYMENT.md` - Production deployment
- `GETTING_STARTED.md` - This file
- Project comments in code
