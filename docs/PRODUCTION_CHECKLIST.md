# Production Checklist - MIAGENCY

Complete checklist before deploying to production.

## 🎨 Content & Branding

- [ ] Update company name (if not MIAGENCY)
  - [ ] `landing-page.jsx` - Logo and navigation
  - [ ] `pages/index.js` - Meta tags and title
  - [ ] `pages/_document.js` - Title tags
  - [ ] `public/robots.txt` - Company info

- [ ] Update contact information
  - [ ] Phone number: Search `1-800-MIAGENCY`
  - [ ] Email: Search `hello@miagency.com`
  - [ ] Office location: Search `Available Nationwide`

- [ ] Add your company images
  - [ ] Hero section image (replace placeholder)
  - [ ] Company logo (replace shield icon)
  - [ ] Service section icons (optional)
  - [ ] Favicon: Create `public/favicon.ico`
  - [ ] Open Graph image: Create `public/og-image.jpg` (1200x630px)

- [ ] Update services if needed
  - [ ] Modify service names in `landing-page.jsx`
  - [ ] Update service descriptions
  - [ ] Change service icons (using Lucide React)

- [ ] Customize trust section
  - [ ] Update company statistics
  - [ ] Change benefit points
  - [ ] Update years in business, customer count, etc.

## 🔧 Technical Configuration

- [ ] Update domain in Vercel
  - [ ] Add custom domain to Vercel project
  - [ ] Configure DNS records
  - [ ] Enable SSL/HTTPS

- [ ] Set up environment variables
  - [ ] Add `NEXT_PUBLIC_GOOGLE_ANALYTICS` (optional)
  - [ ] Add any API endpoints needed
  - [ ] Create `.env.production` for Vercel

- [ ] Configure API integration
  - [ ] Choose email service (SendGrid, Nodemailer, etc.)
  - [ ] Update `pages/api/submit-quote.js` with real service
  - [ ] Set API credentials in Vercel environment
  - [ ] Test form submission end-to-end

- [ ] Database setup (if needed)
  - [ ] Choose database (Vercel Postgres, MongoDB, etc.)
  - [ ] Set connection string in environment
  - [ ] Create required tables/collections
  - [ ] Set up backups

## 🔒 Security

- [ ] Review `.env.local` and `.env.example`
  - [ ] No secrets in `.env.example`
  - [ ] All secrets in `.env.local` (local only)
  - [ ] All secrets in Vercel environment variables

- [ ] Verify API security
  - [ ] Input validation on all endpoints
  - [ ] Rate limiting configured
  - [ ] CORS policy set (if needed)
  - [ ] Error messages don't leak sensitive data

- [ ] Check security headers
  - [ ] X-Content-Type-Options: nosniff
  - [ ] X-Frame-Options: SAMEORIGIN
  - [ ] X-XSS-Protection: 1; mode=block
  - [ ] Review `next.config.js` headers section

- [ ] SSL/HTTPS enabled
  - [ ] All pages use HTTPS
  - [ ] Redirect HTTP to HTTPS
  - [ ] Certificate valid and not expired

## 📱 Testing

- [ ] Responsive design testing
  - [ ] Mobile (iPhone 12, 13, etc.)
  - [ ] Tablet (iPad)
  - [ ] Desktop (1920x1080, 2560x1440)
  - [ ] Ultra-wide (3440x1440)

- [ ] Browser compatibility
  - [ ] Chrome (latest)
  - [ ] Firefox (latest)
  - [ ] Safari (latest)
  - [ ] Edge (latest)
  - [ ] Mobile browsers

- [ ] Form testing
  - [ ] Submit form successfully
  - [ ] Validate error messages
  - [ ] Test with various inputs
  - [ ] Check spam/email delivery
  - [ ] Verify database storage (if used)

- [ ] Performance testing
  - [ ] Run Lighthouse audit
  - [ ] Check Core Web Vitals
  - [ ] Page load time < 3 seconds
  - [ ] No console errors
  - [ ] No console warnings

- [ ] Accessibility testing
  - [ ] Test with screen reader (NVDA/JAWS)
  - [ ] Keyboard-only navigation
  - [ ] Tab order correct
  - [ ] Focus visible on all interactive elements
  - [ ] Color contrast passes WCAG AA

- [ ] SEO testing
  - [ ] Meta tags present
  - [ ] Structured data valid
  - [ ] Keywords in content
  - [ ] Internal links work
  - [ ] No 404 errors
  - [ ] Sitemap.xml created

## 📊 Analytics & Monitoring

- [ ] Google Analytics setup
  - [ ] Property created
  - [ ] Tracking ID obtained (G-XXXXXXXXXX)
  - [ ] Added to environment variables
  - [ ] Script loading in page source
  - [ ] Tracking working (check real-time)

- [ ] Error tracking (optional)
  - [ ] Sentry/Rollbar setup (if using)
  - [ ] Error reporting working
  - [ ] Alerts configured

- [ ] Monitoring setup
  - [ ] Uptime monitoring configured
  - [ ] Page speed monitoring
  - [ ] Alert notifications set

## 📝 SEO & Content

- [ ] Create sitemap.xml
  - [ ] Add routes to sitemap
  - [ ] Submit to Google Search Console
  - [ ] Submit to Bing Webmaster Tools

- [ ] Create robots.txt
  - [ ] Already in `public/robots.txt`
  - [ ] Review for correctness
  - [ ] Update sitemap URL

- [ ] Meta descriptions
  - [ ] Check all pages have unique descriptions
  - [ ] Descriptions are 150-160 characters
  - [ ] Keywords naturally included

- [ ] Structured data
  - [ ] Validate with schema.org validator
  - [ ] Organization schema correct
  - [ ] LocalBusiness schema if applicable

- [ ] Open Graph tags
  - [ ] og:title set
  - [ ] og:description set
  - [ ] og:image set (1200x630px)
  - [ ] og:type set
  - [ ] og:url set

## 🚀 Pre-Launch

- [ ] Code review
  - [ ] No console.log statements (or marked for removal)
  - [ ] No TODO comments left
  - [ ] Linting passes: `npm run lint`
  - [ ] No unused imports or variables

- [ ] Build testing
  ```bash
  npm run build
  npm start
  # Test locally before deploying
  ```

- [ ] Content proofread
  - [ ] Check for spelling errors
  - [ ] Check for grammar
  - [ ] Check for brand consistency
  - [ ] Check for accurate information

- [ ] Links testing
  - [ ] All internal links work
  - [ ] External links open correctly
  - [ ] No broken links (404s)
  - [ ] Anchor links scroll correctly

- [ ] File optimization
  - [ ] Images optimized (WebP if possible)
  - [ ] CSS minified
  - [ ] JavaScript minified
  - [ ] Bundle size reasonable

## 🌐 Deployment

- [ ] Push to GitHub
  - [ ] All changes committed
  - [ ] No sensitive data in commits
  - [ ] Branch protection rules set

- [ ] Deploy to Vercel
  - [ ] GitHub connected
  - [ ] Project created
  - [ ] Environment variables added
  - [ ] Domain configured
  - [ ] Deploy triggered
  - [ ] Build succeeds (no warnings/errors)
  - [ ] Site accessible on custom domain

- [ ] Post-deployment testing
  - [ ] Visit live domain
  - [ ] All pages load correctly
  - [ ] Forms submit successfully
  - [ ] Mobile view works
  - [ ] Analytics tracking works
  - [ ] No 404 errors

- [ ] Backup & rollback plan
  - [ ] GitHub repo backed up
  - [ ] Vercel deployment history available
  - [ ] Rollback procedure documented
  - [ ] Previous version accessible if needed

## 📋 Launch Day

- [ ] Announcement
  - [ ] Social media posts prepared
  - [ ] Email campaign ready
  - [ ] Press release prepared (if applicable)

- [ ] Monitoring
  - [ ] Monitor error logs
  - [ ] Monitor analytics
  - [ ] Check email notifications
  - [ ] Respond to form submissions promptly

- [ ] Support
  - [ ] Customer support team briefed
  - [ ] FAQ updated
  - [ ] Contact info verified
  - [ ] Response templates ready

## 🔄 Post-Launch

- [ ] Week 1
  - [ ] Monitor analytics daily
  - [ ] Fix any reported issues
  - [ ] Check form submissions working
  - [ ] Verify email delivery

- [ ] Week 2-4
  - [ ] Monitor page performance
  - [ ] Optimize Core Web Vitals if needed
  - [ ] Analyze user behavior
  - [ ] Gather user feedback

- [ ] Monthly
  - [ ] Review analytics
  - [ ] Check for errors
  - [ ] Update content
  - [ ] Security updates
  - [ ] Dependency updates: `npm outdated`

## ✅ Final Checklist

Before marking as complete:

- [ ] Website is live and accessible
- [ ] All pages loading correctly
- [ ] Forms submitting successfully
- [ ] Analytics tracking working
- [ ] SEO basics in place
- [ ] Mobile responsive and working
- [ ] No console errors
- [ ] Error tracking active
- [ ] Monitoring configured
- [ ] Team trained on maintenance
- [ ] Documentation updated

---

**Launch Date**: ________________

**Launched By**: ________________

**Status**: ☐ Ready ☐ In Progress ☐ Completed

**Notes**:
