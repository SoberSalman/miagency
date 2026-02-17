# MIAGENCY - Professional Insurance Landing Page

A modern, responsive landing page for MIAGENCY built with React, Next.js, and Tailwind CSS. Features a professional design inspired by leading insurance providers with full SEO optimization and accessibility compliance.

## Features

✨ **Production-Ready**
- Built with Next.js 14 for optimal performance
- Tailwind CSS for rapid, responsive styling
- SEO-friendly markup with structured data (schema.org)
- Fully accessible with ARIA labels and semantic HTML

📱 **Responsive Design**
- Mobile-first approach
- Works seamlessly on all devices
- Touch-friendly interactions

🎨 **Premium Aesthetics**
- Professional color scheme (teal & navy)
- Smooth animations and transitions
- Carefully crafted typography
- High-quality user experience

🔒 **Security & Performance**
- Security headers configured
- Optimized for fast loading
- Safe form validation
- Ready for Vercel deployment

## Components

- **Navigation**: Responsive header with mobile menu
- **Hero Section**: Compelling headline and CTAs
- **Services Section**: Insurance types with icons
- **Trust Section**: Customer statistics and benefits
- **Contact Form**: Fully validated with error handling
- **Footer**: Links and contact information

## Quick Start

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
miagency/
├── pages/
│   ├── _app.js          # App wrapper
│   ├── _document.js     # HTML document setup
│   └── index.js         # Home page with SEO
├── styles/
│   └── globals.css      # Global styles & animations
├── landing-page.jsx     # Main component
├── tailwind.config.js   # Tailwind configuration
├── next.config.js       # Next.js configuration
├── postcss.config.js    # PostCSS configuration
├── package.json         # Dependencies
└── vercel.json          # Vercel deployment config
```

## Customization

### Update Company Info
Edit `landing-page.jsx` and `pages/index.js`:
- Phone number: `1-800-MIAGENCY`
- Email: `hello@miagency.com`

### Add Your Images
1. Create a `public` folder for static assets
2. Replace hero section placeholder with your image
3. Add service icons or update them

### Modify Colors
Edit `tailwind.config.js` to customize colors

## Deployment to Vercel

1. Push to GitHub
2. Connect to Vercel dashboard
3. Set environment variables
4. Deploy (automatic on push)

## SEO Features

- ✅ Meta tags & Open Graph
- ✅ Structured data (schema.org)
- ✅ Semantic HTML
- ✅ Mobile-friendly
- ✅ Fast loading

## Accessibility

- ✅ ARIA labels
- ✅ Semantic HTML
- ✅ Keyboard navigation
- ✅ High contrast
- ✅ Form validation

## Browser Support

- Chrome, Firefox, Safari, Edge (latest)
- Mobile browsers supported
