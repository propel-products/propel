# Domain Verification & Testing Checklist

## ✅ DNS & Domain Configuration

### DNS Verification
- [ ] **Domain Resolution**
  ```bash
  # Test DNS resolution
  dig www.ocoiom.com
  nslookup www.ocoiom.com
  ```
  - Expected: Should return Vercel IP addresses or CNAME

- [ ] **Root Domain Redirect**
  - Visit: `http://ocoiom.com`
  - Should redirect to: `https://www.ocoiom.com`
  - Visit: `https://ocoiom.com`
  - Should redirect to: `https://www.ocoiom.com`

- [ ] **WWW Domain**
  - Visit: `http://www.ocoiom.com`
  - Should redirect to: `https://www.ocoiom.com`
  - Visit: `https://www.ocoiom.com`
  - Should load the site

### SSL Certificate Verification
- [ ] **HTTPS Active**
  - Check browser padlock icon is present
  - Certificate should be valid and trusted
  - No SSL warnings or errors

- [ ] **Certificate Details**
  - Issued by: Vercel (or Let's Encrypt)
  - Valid for: `*.vercel.app` and `www.ocoiom.com`
  - Expiry date: Should be far in future

- [ ] **SSL Labs Test**
  - Visit: https://www.ssllabs.com/ssltest/analyze.html?d=www.ocoiom.com
  - Expected grade: A or A+

---

## ✅ Site Functionality Testing

### Page Loading
- [ ] **Homepage** (`/`)
  - Loads correctly
  - All images display
  - Navigation works
  - Mobile responsive

- [ ] **About Page** (`/about`)
  - Loads correctly
  - Content displays properly
  - Images load

- [ ] **Services Page** (`/services`)
  - Loads correctly
  - Service cards display
  - All links work

- [ ] **Contact Page** (`/contact`)
  - Loads correctly
  - Contact form displays
  - Email/phone links work

- [ ] **Resources Page** (`/resources`)
  - Loads correctly
  - Content displays properly

- [ ] **Holding Page** (`/holding`)
  - Loads correctly (if using)
  - Logo displays
  - Contact info correct

### Navigation Testing
- [ ] **Desktop Navigation**
  - All links work
  - Logo links to homepage
  - "Get Started" button works
  - Mobile menu (if applicable)

- [ ] **Mobile Navigation**
  - Hamburger menu opens/closes
  - All links accessible
  - Mobile menu closes on link click

### Form Testing
- [ ] **Contact Form**
  - All fields render correctly
  - Validation works
  - Form submits successfully
  - Email receives submission

---

## ✅ SEO & Metadata Verification

### Robots.txt
- [ ] **Accessibility**
  - Visit: `https://www.ocoiom.com/robots.txt`
  - Should display correctly
  - Sitemap URL correct: `https://www.ocoiom.com/sitemap.xml`

### Sitemap
- [ ] **Sitemap.xml**
  - Visit: `https://www.ocoiom.com/sitemap.xml`
  - Should list all pages
  - All URLs use `https://www.ocoiom.com`
  - No `oco.com` references

### Meta Tags
- [ ] **Open Graph Tags**
  - Test with: https://www.opengraph.xyz/url/https://www.ocoiom.com
  - All OG tags present
  - Images load correctly

- [ ] **Twitter Cards**
  - Test with: https://cards-dev.twitter.com/validator
  - Cards display correctly

- [ ] **Structured Data**
  - Test with: https://search.google.com/test/rich-results
  - No errors
  - All schemas valid
  - URLs use `www.ocoiom.com`

### Domain References
- [ ] **Code Verification**
  ```bash
  # Check for any remaining oco.com references (excluding docs)
  grep -r "https://oco.com" app/ components/ --exclude-dir=node_modules
  ```
  - Should find NO results (or only in documentation files)

---

## ✅ Performance Testing

### Page Speed
- [ ] **Google PageSpeed Insights**
  - Visit: https://pagespeed.web.dev/analysis?url=https://www.ocoiom.com
  - Mobile score: 90+
  - Desktop score: 90+

- [ ] **Core Web Vitals**
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

### Browser Testing
- [ ] **Chrome** (latest)
  - All features work
  - No console errors

- [ ] **Safari** (latest)
  - All features work
  - No console errors

- [ ] **Firefox** (latest)
  - All features work
  - No console errors

- [ ] **Edge** (latest)
  - All features work
  - No console errors

### Mobile Testing
- [ ] **iPhone** (Safari)
  - Responsive layout
  - Touch interactions work
  - No horizontal scroll

- [ ] **Android** (Chrome)
  - Responsive layout
  - Touch interactions work
  - No horizontal scroll

---

## ✅ Email & Contact Verification

### Email Links
- [ ] **Email Link**
  - `mailto:hello@ocoiom.com` opens email client
  - Email address correct

### Phone Links
- [ ] **Phone Link**
  - `tel:+44162400000` works on mobile
  - Phone number correct

---

## ✅ Redirect Testing

### HTTP to HTTPS
- [ ] **HTTP Redirect**
  - `http://www.ocoiom.com` → `https://www.ocoiom.com`
  - `http://ocoiom.com` → `https://www.ocoiom.com`

### Root to WWW
- [ ] **Root Redirect**
  - `https://ocoiom.com` → `https://www.ocoiom.com`

### Trailing Slash
- [ ] **Trailing Slash Handling**
  - `/about` and `/about/` both work
  - No duplicate content issues

---

## 🔧 Quick Test Commands

```bash
# DNS Check
dig www.ocoiom.com +short

# SSL Check
openssl s_client -connect www.ocoiom.com:443 -servername www.ocoiom.com

# HTTP Headers
curl -I https://www.ocoiom.com

# Check redirects
curl -I http://www.ocoiom.com
curl -I http://ocoiom.com
curl -I https://ocoiom.com
```

---

## 📋 Verification Tools

- **DNS Propagation**: https://www.whatsmydns.net/#A/www.ocoiom.com
- **SSL Check**: https://www.ssllabs.com/ssltest/
- **PageSpeed**: https://pagespeed.web.dev/
- **Open Graph**: https://www.opengraph.xyz/
- **Structured Data**: https://search.google.com/test/rich-results
- **Mobile-Friendly**: https://search.google.com/test/mobile-friendly

---

## ✅ Final Verification Checklist

Before marking as complete:
- [ ] All DNS records configured correctly
- [ ] SSL certificate active and valid
- [ ] All pages load without errors
- [ ] All domain references updated to `www.ocoiom.com`
- [ ] SEO metadata correct
- [ ] Forms submit successfully
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Performance scores acceptable

---

**Status:** ⏳ In Progress
**Last Verified:** [Date]
**Verified By:** [Name]

