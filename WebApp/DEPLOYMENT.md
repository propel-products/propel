# OCO Website - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Option 1: Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from your project directory
cd /Users/airmac/Products/Oco/WebApp
vercel

# Deploy to production
vercel --prod
```

### Option 2: GitHub + Vercel (Best for ongoing development)
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial OCO website"

# Create GitHub repository and push
git remote add origin https://github.com/yourusername/oco-website.git
git branch -M main
git push -u origin main

# Then:
# 1. Go to vercel.com
# 2. Click "Add New Project"
# 3. Import your GitHub repository
# 4. Click "Deploy"
```

## 🔧 Environment Variables

If you add email services later, add these in Vercel Dashboard → Settings → Environment Variables:

```
SENDGRID_API_KEY=your_sendgrid_key
EMAIL_FROM=noreply@oco.com
EMAIL_TO=hello@oco.com
```

## 🌐 Custom Domain Setup

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Add your domain (e.g., oco.com)

2. **Update DNS Records:**
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.19.61`

3. **Update sitemap and robots.txt:**
   - Replace `https://oco.com` with your actual domain in:
     - `app/sitemap.js`
     - `app/robots.js`

## 📧 Email Integration Options

### Option 1: Formspree (Easiest)
1. Go to https://formspree.io
2. Create free account
3. Create new form
4. Update `components/ContactForm.jsx`:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

### Option 2: SendGrid (Professional)
1. Install: `npm install @sendgrid/mail`
2. Update `app/api/contact/route.js`:
```javascript
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'hello@oco.com',
  from: 'noreply@oco.com',
  subject: 'New Contact Form Submission',
  text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
};

await sgMail.send(msg);
```

### Option 3: Resend (Modern)
1. Install: `npm install resend`
2. Update `app/api/contact/route.js`:
```javascript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'noreply@oco.com',
  to: 'hello@oco.com',
  subject: 'New Contact Form Submission',
  html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Message: ${data.message}</p>`
});
```

## 📊 Analytics Setup

### Google Analytics
Add to `app/layout.js`:
```javascript
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## 🔍 SEO Checklist

- [x] Meta tags on all pages
- [x] Sitemap.xml generated
- [x] Robots.txt configured
- [x] 404 page created
- [ ] Submit sitemap to Google Search Console
- [ ] Add Open Graph images
- [ ] Test with Google PageSpeed Insights

## 🎯 Performance Optimization

### Current Status:
- ✅ Next.js Image optimization
- ✅ Tailwind CSS purging
- ✅ Static generation
- ✅ Code splitting

### Additional Optimizations:
```bash
# Add image optimization
npm install next-optimized-images

# Add compression
npm install compression

# Add caching headers in next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

## 🚨 Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test contact form submission
- [ ] Test mobile responsiveness
- [ ] Check all navigation links
- [ ] Verify SSL certificate
- [ ] Test page load speeds
- [ ] Submit to Google Search Console
- [ ] Set up monitoring (Uptime Robot, etc.)

## 📞 Support

If you need help with deployment:
1. Check Vercel documentation: https://vercel.com/docs
2. Review Next.js deployment guide: https://nextjs.org/docs/deployment
3. Contact support through your deployment platform

---

**Your OCO website is ready to launch! 🎉**
