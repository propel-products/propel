# Post-Launch Tasks Guide

## 🚀 Phase 1: Google Search Console Setup

### Step 1.1: Add Property
1. **Navigate to Google Search Console**
   - Visit: https://search.google.com/search-console
   - Sign in with Google account

2. **Add Property**
   - Click "Add Property"
   - Select "URL prefix" option
   - Enter: `https://www.ocoiom.com`
   - Click "Continue"

### Step 1.2: Verify Ownership
**Option A: HTML File (Recommended)**
1. Download the HTML verification file from Google
2. Upload to: `public/google-verification.html` (or root)
3. Ensure accessible at: `https://www.ocoiom.com/google-verification.html`
4. Click "Verify" in Search Console

**Option B: HTML Tag (Easier)**
1. Copy the meta tag from Google
2. Add to `app/layout.js` in the `<head>` section:
   ```jsx
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
3. Deploy changes
4. Click "Verify" in Search Console

**Option C: DNS Record**
1. Add TXT record at domain registrar
2. Wait for DNS propagation
3. Click "Verify" in Search Console

### Step 1.3: Submit Sitemap
1. **In Search Console:**
   - Go to "Sitemaps" in left sidebar
   - Enter: `sitemap.xml`
   - Click "Submit"

2. **Verify Sitemap:**
   - Should show status: "Success"
   - All pages indexed

3. **Monitor Indexing:**
   - Check "Coverage" report
   - Review any errors or warnings

---

## 📊 Phase 2: Analytics Setup

### Option A: Google Analytics 4 (GA4)

#### Step 2.1: Create GA4 Property
1. **Go to Google Analytics**
   - Visit: https://analytics.google.com
   - Create new property: "OCO Limited"
   - Select "Web" platform

2. **Get Measurement ID**
   - Copy Measurement ID (format: `G-XXXXXXXXXX`)

#### Step 2.2: Install GA4 Code
**Update `app/layout.js`:**
```jsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Existing head content */}
        
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>
        {/* Existing body content */}
      </body>
    </html>
  );
}
```

3. **Replace `G-XXXXXXXXXX`** with your actual Measurement ID

4. **Deploy Changes**

#### Step 2.3: Verify Analytics
- Install Google Tag Assistant browser extension
- Visit site and verify tags fire
- Check Real-Time reports in GA4

### Option B: Vercel Analytics (Simpler)
1. **Enable in Vercel Dashboard**
   - Project → Settings → Analytics
   - Enable Vercel Analytics

2. **Add to Layout** (if needed)
   - Import: `import { Analytics } from '@vercel/analytics/react';`
   - Add: `<Analytics />` in body

---

## 📧 Phase 3: Email Verification

### Step 3.1: Test Contact Form
1. **Submit Test Form**
   - Fill out contact form
   - Submit and verify email received
   - Check spam folder if not received

2. **Verify Email Address**
   - Test: `mailto:enquiries@ocoiom.com`
   - Ensure opens email client correctly

### Step 3.2: Email Service Setup (If Using API Route)
If using SendGrid/Resend/etc.:
1. **Add Environment Variables in Vercel**
   - Dashboard → Settings → Environment Variables
   - Add: `SENDGRID_API_KEY` (or equivalent)
   - Add: `EMAIL_TO=enquiries@ocoiom.com`

2. **Test Email Sending**
   - Submit form
   - Verify email received

---

## 🔍 Phase 4: SEO Optimization

### Step 4.1: Bing Webmaster Tools
1. **Add Site**
   - Visit: https://www.bing.com/webmasters
   - Add property: `https://www.ocoiom.com`

2. **Verify Ownership**
   - Use meta tag (same as Google)
   - Or upload HTML file

3. **Submit Sitemap**
   - Submit: `https://www.ocoiom.com/sitemap.xml`

### Step 4.2: Submit to Other Search Engines
- **Yandex**: https://webmaster.yandex.com
- **DuckDuckGo**: Automatic (indexes via Bing)
- **Baidu** (if targeting China): https://ziyuan.baidu.com

### Step 4.3: Social Media Verification
1. **Facebook Business**
   - Verify domain for Open Graph previews
   - Add meta tag if required

2. **LinkedIn**
   - Verify domain if using LinkedIn insights
   - Add verification meta tag

---

## 📱 Phase 5: Social Media Setup

### Step 5.1: Update Social Profiles
1. **LinkedIn Company Page**
   - Update website URL: `https://www.ocoiom.com`
   - Add company description

2. **Other Platforms**
   - Update website URL on all profiles
   - Add link in bio/description

### Step 5.2: Social Sharing Images
- [ ] Ensure OG images load correctly
- [ ] Test sharing on:
  - LinkedIn
  - Facebook
  - Twitter/X
  - WhatsApp

---

## 🔔 Phase 6: Monitoring & Alerts

### Step 6.1: Uptime Monitoring
**Option A: Uptime Robot (Free)**
1. **Create Account**
   - Visit: https://uptimerobot.com
   - Sign up (free tier available)

2. **Add Monitor**
   - URL: `https://www.ocoiom.com`
   - Type: HTTP(s)
   - Interval: 5 minutes

3. **Configure Alerts**
   - Email alerts for downtime
   - Set up notification channels

**Option B: Vercel Status Page**
- Vercel provides built-in monitoring
- Check dashboard for status

### Step 6.2: Error Monitoring
**Option A: Sentry (Recommended)**
1. **Create Account**
   - Visit: https://sentry.io
   - Create project

2. **Install SDK**
   ```bash
   npm install @sentry/nextjs
   ```

3. **Configure**
   - Add Sentry config
   - Deploy and test

**Option B: Vercel Logs**
- Monitor Vercel function logs
- Check for errors in dashboard

---

## 📈 Phase 7: Performance Monitoring

### Step 7.1: Set Up Performance Budgets
1. **Google PageSpeed Insights**
   - Set up automated monitoring
   - Get alerts if score drops

2. **Core Web Vitals**
   - Monitor in Search Console
   - Track LCP, FID, CLS

### Step 7.2: Regular Audits
**Monthly Checklist:**
- [ ] Run PageSpeed Insights
- [ ] Check Core Web Vitals
- [ ] Review Search Console errors
- [ ] Test all forms
- [ ] Verify all links work

---

## 🔐 Phase 8: Security Setup

### Step 8.1: Security Headers
**Add to `next.config.js`:**
```javascript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
      ],
    },
  ];
}
```

### Step 8.2: Security Testing
- [ ] Run security scan (Sucuri, etc.)
- [ ] Check SSL/TLS configuration
- [ ] Verify HTTPS redirects work

---

## ✅ Post-Launch Checklist

### Immediate (Week 1)
- [ ] Google Search Console verified
- [ ] Sitemap submitted
- [ ] Analytics installed and working
- [ ] Contact form tested
- [ ] All pages indexed
- [ ] Social sharing tested
- [ ] Uptime monitoring active

### Short-term (Month 1)
- [ ] Review Search Console data
- [ ] Check for crawl errors
- [ ] Monitor analytics trends
- [ ] Review performance metrics
- [ ] Update content based on data

### Ongoing (Monthly)
- [ ] Review analytics reports
- [ ] Check Search Console
- [ ] Monitor uptime
- [ ] Performance audits
- [ ] Security scans
- [ ] Update content as needed

---

## 📞 Support Resources

**Vercel Support:**
- Documentation: https://vercel.com/docs
- Support: https://vercel.com/support

**Google Resources:**
- Search Console Help: https://support.google.com/webmasters
- Analytics Help: https://support.google.com/analytics

**Domain/DNS:**
- Contact your domain registrar
- Vercel DNS docs: https://vercel.com/docs/concepts/projects/domains

---

**Status:** Ready to Launch! 🚀
**Next Steps:** Complete Phase 1 (Google Search Console)

