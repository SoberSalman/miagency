# Deployment Guide - MIAGENCY

Complete guide for deploying MIAGENCY landing page to Vercel and other hosting options.

## Vercel Deployment (Recommended)

### 1. Prerequisites
- GitHub account with the repository pushed
- Vercel account (free at vercel.com)

### 2. Deploy Steps

1. **Connect Repository**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Select your GitHub repository
   - Authorize Vercel to access GitHub

2. **Configure Project**
   - Framework: Next.js (auto-detected)
   - Root Directory: ./ (default)
   - Build Command: `next build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm ci` (default)

3. **Set Environment Variables**
   - Go to Settings → Environment Variables
   - Add any needed variables:
     ```
     NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
     NEXT_PUBLIC_API_URL=https://your-domain.com
     ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (usually 2-3 minutes)
   - Get your live URL

### 3. Custom Domain

1. **Add Domain**
   - Go to Settings → Domains
   - Enter your domain (e.g., miagency.com)
   - Choose DNS or nameserver configuration

2. **Update DNS**
   - Update your domain registrar's DNS settings
   - Point to Vercel's nameservers or use CNAME
   - Wait 24-48 hours for DNS propagation

3. **SSL Certificate**
   - Vercel auto-provisions HTTPS
   - No additional setup needed

## Performance Optimization

### 1. Enable Caching
Already configured in `next.config.js` with:
- Image optimization
- Code splitting
- Automatic compression

### 2. Monitoring
- Visit Vercel Analytics dashboard
- Monitor Core Web Vitals
- Check error logs

### 3. Content Delivery
- Vercel Edge Network distributes globally
- Automatic CDN caching
- Optimized for all regions

## Monitoring & Analytics

### 1. Google Analytics Setup
1. Create Google Analytics account
2. Get your tracking ID (G-XXXXXXXXXX)
3. Add to environment variable: `NEXT_PUBLIC_GOOGLE_ANALYTICS`
4. Analytics script automatically included in `_document.js`

### 2. Vercel Analytics
- Auto-enabled for all projects
- Monitor performance metrics
- Set up alerts for issues

### 3. Error Tracking
- Check Vercel deployment logs
- Monitor function invocations
- Review error reports

## Continuous Deployment

### Automatic Deployments
- Every push to main branch → automatic deployment
- Pull requests get preview deployments
- Automatic rollback on failed builds

### Manual Deployments
```bash
vercel --prod  # Deploy to production
vercel         # Deploy to staging
```

## API Integration Setup

### For Form Submissions

#### Option 1: SendGrid
```bash
npm install @sendgrid/mail
```

Update `.env.local`:
```
SENDGRID_API_KEY=your_api_key
SENDGRID_FROM_EMAIL=hello@miagency.com
SENDGRID_TO_EMAIL=admin@miagency.com
```

Update `pages/api/submit-quote.js`:
```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: process.env.SENDGRID_TO_EMAIL,
  from: process.env.SENDGRID_FROM_EMAIL,
  subject: `New Quote Request from ${name}`,
  html: `<h2>New Quote Request</h2>...`,
});
```

#### Option 2: Nodemailer
```bash
npm install nodemailer
```

Update `pages/api/submit-quote.js`:
```javascript
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

await transporter.sendMail({
  from: process.env.SMTP_FROM,
  to: process.env.SMTP_TO,
  subject: `New Quote from ${name}`,
  html: `...`,
});
```

#### Option 3: Database Storage
Store submissions in a database for later processing:
```javascript
import { db } from '@/lib/db';

await db.quotes.create({
  name,
  email,
  phone,
  serviceType,
  message,
  createdAt: new Date(),
});
```

## Security Checklist

- ✅ HTTPS enabled (automatic on Vercel)
- ✅ Security headers configured (`next.config.js`)
- ✅ Environment variables protected
- ✅ Input validation on API routes
- ✅ CORS configured if needed
- ✅ Rate limiting recommended for production

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
vercel --prod --force
```

### Slow Performance
- Check Vercel Analytics
- Review Next.js build size
- Optimize images
- Check for N+1 API calls

### Forms Not Submitting
1. Check API endpoint: `/api/submit-quote`
2. Verify environment variables set
3. Check browser console for errors
4. Review Vercel function logs

### DNS Issues
1. Verify DNS records pointing to Vercel
2. Clear browser DNS cache
3. Wait for propagation (24-48 hours)
4. Use nslookup to test

## Scaling for Production

### 1. Database
If adding backend persistence:
- Use Vercel Postgres or external DB
- Set connection pooling
- Configure backups

### 2. Email Service
- Choose scalable email provider
- Set up templates
- Configure bounce handling
- Monitor delivery rates

### 3. CDN
- Already included with Vercel
- No additional configuration needed
- Images auto-optimized

### 4. Monitoring
- Set up error tracking (Sentry, etc.)
- Enable Web Analytics
- Configure alerts
- Monitor costs

## Maintenance

### Updates
```bash
npm update          # Update dependencies
npm audit          # Check for vulnerabilities
npm outdated       # See available updates
```

### Backups
- GitHub is your backup
- Vercel keeps deployment history
- Enable GitHub Actions for CI/CD

### Logs
- View in Vercel dashboard
- Access via `vercel logs`
- Monitor analytics

## Cost Estimation

**Vercel Free Tier Includes:**
- Unlimited deployments
- 100 GB bandwidth/month
- 5 serverless functions
- Built-in analytics

**Typical Costs (Low Traffic):**
- Hosting: Free
- Domain: $10-15/year
- Email service: Free-$10/month
- Analytics: Free

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Create issues in your repo
