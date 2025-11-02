# Domain Setup Plan: www.ocoiom.com

## 📋 Current Status

**Current Domain References:**
- Codebase references: `https://oco.com` (placeholder)
- Email domain: `enquiries@ocoiom.com` ✅ (correct)
- Target domain: `www.ocoiom.com`

**Deployment Platform:**
- Vercel (configured via `vercel.json`)
- Repository: GitHub (propel-products/oco)

---

## 🎯 Step-by-Step Domain Connection Plan

### **Phase 1: Vercel Domain Configuration** ⚙️

#### Step 1.1: Add Domain to Vercel Project
1. **Go to Vercel Dashboard:**
   - Navigate to: https://vercel.com/dashboard
   - Select your OCO project

2. **Access Domain Settings:**
   - Click on **Settings** tab
   - Click on **Domains** in the left sidebar

3. **Add Domain:**
   - Enter: `www.ocoiom.com`
   - Click **Add**
   - Vercel will generate DNS configuration instructions

4. **Vercel will provide DNS records:**
   - **Type**: CNAME or A record
   - **Name**: `www` (for www.ocoiom.com)
   - **Value**: Vercel's assigned DNS target (e.g., `cname.vercel-dns.com` or IP address)

#### Step 1.2: Configure Root Domain (ocoiom.com)
1. **Add root domain:**
   - Also add: `ocoiom.com` (without www)
   - Vercel will handle redirecting root → www

2. **Enable Automatic HTTPS:**
   - Vercel automatically provisions SSL certificates
   - This happens after DNS records are configured

---

### **Phase 2: DNS Configuration** 🌐

#### Step 2.1: Access Domain Registrar
1. **Log into your domain registrar** (where you purchased `ocoiom.com`)
   - Common registrars: GoDaddy, Namecheap, Google Domains, etc.

2. **Navigate to DNS Management:**
   - Find "DNS Settings" or "DNS Management" section

#### Step 2.2: Configure DNS Records

**Option A: CNAME Record (Recommended)**
```
Type: CNAME
Name: www
Value: [Vercel-provided CNAME target]
TTL: 3600 (or Auto)
```

**Option B: A Record (If CNAME not supported)**
```
Type: A
Name: www
Value: [Vercel-provided IP address]
TTL: 3600 (or Auto)
```

**Root Domain Redirect:**
```
Type: A
Name: @ (or blank, represents root domain)
Value: [Vercel-provided IP address]
TTL: 3600
```

**OR use URL Redirect:**
```
Type: URL Redirect
Name: @
Value: https://www.ocoiom.com
```

#### Step 2.3: DNS Propagation
- DNS changes can take **15 minutes to 48 hours** to propagate
- Most changes take effect within **1-2 hours**
- Check propagation status: https://www.whatsmydns.net/#A/ocoiom.com

---

### **Phase 3: Code Updates** 💻

#### Step 3.1: Update Domain References

**Files to Update:**

1. **`app/layout.js`**
   - Update `metadataBase: new URL('https://www.ocoiom.com')`
   - Update `openGraph.url: 'https://www.ocoiom.com'`

2. **`app/sitemap.js`**
   - Update `baseUrl = 'https://www.ocoiom.com'`

3. **`app/robots.js`**
   - Update `sitemap: 'https://www.ocoiom.com/sitemap.xml'`

4. **`components/StructuredData.jsx`**
   - Update all `"url": "https://www.ocoiom.com"` references
   - Update logo and image URLs
   - Update all breadcrumb URLs

5. **All Page Metadata Files:**
   - `app/page.js`
   - `app/about/page.js`
   - `app/services/page.js`
   - `app/contact/page.js`
   - `app/resources/page.js`
   - Update `url` and `canonical` fields

#### Step 3.2: Update Environment Variables (if any)
- Check Vercel Dashboard → Settings → Environment Variables
- Update any domain-specific environment variables

---

### **Phase 4: Verification & Testing** ✅

#### Step 4.1: DNS Verification
```bash
# Check DNS resolution
dig www.ocoiom.com
nslookup www.ocoiom.com
```

#### Step 4.2: HTTPS Verification
- Verify SSL certificate is active:
  - Visit: https://www.ocoiom.com
  - Check for padlock icon in browser
  - Should redirect HTTP → HTTPS automatically

#### Step 4.3: Domain Redirects
- Test root domain redirect:
  - Visit: http://ocoiom.com → Should redirect to https://www.ocoiom.com
  - Visit: https://ocoiom.com → Should redirect to https://www.ocoiom.com

#### Step 4.4: Site Functionality
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms submit properly
- [ ] Images load
- [ ] Mobile responsiveness works
- [ ] SEO metadata displays correctly

#### Step 4.5: SEO Verification
- Submit sitemap to Google Search Console:
  - Sitemap URL: `https://www.ocoiom.com/sitemap.xml`
- Verify robots.txt:
  - Check: `https://www.ocoiom.com/robots.txt`
- Test Open Graph tags:
  - Use: https://www.opengraph.xyz/url/https://www.ocoiom.com

---

### **Phase 5: Post-Launch Tasks** 🚀

#### Step 5.1: Google Search Console
1. **Add Property:**
   - Go to: https://search.google.com/search-console
   - Add property: `https://www.ocoiom.com`

2. **Verify Ownership:**
   - Choose verification method (HTML file, meta tag, or DNS record)
   - Vercel can help with meta tag verification

3. **Submit Sitemap:**
   - Submit: `https://www.ocoiom.com/sitemap.xml`

#### Step 5.2: Analytics Setup
- Update Google Analytics property to use `www.ocoiom.com`
- Update any tracking codes if domain-specific

#### Step 5.3: Email Links Verification
- Verify all email links (`enquiries@ocoiom.com`) work correctly
- Test contact forms send to correct email address

---

## 📝 Quick Checklist

### Pre-Deployment
- [ ] Domain `ocoiom.com` purchased and active
- [ ] DNS management access available
- [ ] Vercel account and project ready

### Vercel Configuration
- [ ] Added `www.ocoiom.com` to Vercel project
- [ ] Added `ocoiom.com` (root) to Vercel project
- [ ] Received DNS configuration instructions from Vercel

### DNS Configuration
- [ ] Added CNAME/A record for `www`
- [ ] Configured root domain redirect
- [ ] Verified DNS propagation

### Code Updates
- [ ] Updated `app/layout.js` domain references
- [ ] Updated `app/sitemap.js` baseUrl
- [ ] Updated `app/robots.js` sitemap URL
- [ ] Updated `components/StructuredData.jsx` URLs
- [ ] Updated all page metadata files
- [ ] Committed and pushed changes
- [ ] Deployed to Vercel

### Verification
- [ ] Site loads at https://www.ocoiom.com
- [ ] Root domain redirects to www
- [ ] SSL certificate active
- [ ] All pages accessible
- [ ] Forms working
- [ ] Mobile responsive

### Post-Launch
- [ ] Submitted to Google Search Console
- [ ] Verified sitemap submission
- [ ] Tested robots.txt
- [ ] Updated analytics (if applicable)
- [ ] Tested all email links

---

## 🔧 Troubleshooting

### DNS Issues
**Problem:** Domain not resolving
- **Solution:** Wait for DNS propagation (up to 48 hours)
- Check DNS records are correct
- Verify TTL settings

**Problem:** SSL certificate not provisioning
- **Solution:** Ensure DNS records point to Vercel
- Wait for automatic SSL provisioning (usually < 1 hour)
- Check Vercel dashboard for SSL status

### Redirect Issues
**Problem:** Root domain not redirecting to www
- **Solution:** Configure redirect in Vercel dashboard or DNS
- Use Vercel's redirect rules in `vercel.json` if needed

### Code Update Issues
**Problem:** Old domain still showing
- **Solution:** Clear browser cache
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Verify deployment in Vercel

---

## 📞 Support Resources

**Vercel Documentation:**
- Custom Domains: https://vercel.com/docs/concepts/projects/domains
- DNS Configuration: https://vercel.com/docs/concepts/projects/domains/add-a-domain

**Domain Registrar Help:**
- Contact your domain registrar's support
- Each registrar has different DNS management interfaces

---

## 🎯 Next Steps

1. **Start with Vercel Configuration:**
   - Add domain in Vercel dashboard
   - Note down DNS instructions provided

2. **Configure DNS:**
   - Update DNS records at your registrar
   - Wait for propagation

3. **Update Code:**
   - Update all domain references to `www.ocoiom.com`
   - Deploy changes to Vercel

4. **Verify & Launch:**
   - Test all functionality
   - Submit to search engines
   - Monitor for any issues

---

**Ready to connect? Let's start with Vercel domain configuration!** 🚀

