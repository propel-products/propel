# Google Search Console Setup Guide for OCO Limited

## Adding OCO to Your Existing Google Search Console Account

Yes! You can easily add OCO Limited as a new property in your existing Google Search Console account. This is standard practice for agencies and consultants.

---

## Step-by-Step Setup

### Step 1: Add New Property

1. Go to: https://search.google.com/search-console
2. Click the **property dropdown** in the top-left corner
3. Click **"+ Add property"**

### Step 2: Choose Property Type

You'll see two options:

#### Option A: Domain Property (Recommended)
```
Domain: ocoiom.com
```
**Pros:**
- Covers all subdomains (www, blog, etc.)
- Covers both http and https
- More comprehensive data

**Cons:**
- Requires DNS verification (need access to domain registrar)

#### Option B: URL Prefix
```
URL: https://www.ocoiom.com
```
**Pros:**
- Multiple verification methods
- Easier if you don't have DNS access

**Cons:**
- Only covers the specific URL entered

**Recommendation**: Use Domain Property if you have DNS access.

---

## Step 3: Verification Methods

### Method 1: HTML Meta Tag (Easiest for Next.js) ⭐ RECOMMENDED

1. **In Google Search Console**, select "HTML tag" verification method

2. **Copy the verification code** - it looks like:
   ```
   abc123def456ghi789jkl012
   ```

3. **Add to your environment variables**:
   
   Create/edit `.env.local` in your project root:
   ```bash
   NEXT_PUBLIC_GOOGLE_VERIFICATION=abc123def456ghi789jkl012
   ```

4. **Deploy to Vercel**:
   ```bash
   git add .
   git commit -m "Add Google Search Console verification"
   git push
   ```

5. **Add to Vercel Environment Variables**:
   - Go to Vercel dashboard
   - Select OCO project
   - Settings → Environment Variables
   - Add: `NEXT_PUBLIC_GOOGLE_VERIFICATION` = `your-code`
   - Redeploy

6. **Verify in Google Search Console**:
   - Click "Verify" button
   - Should see success message!

### Method 2: HTML File Upload

1. **Download the verification file** from Google (e.g., `google1234567890abcdef.html`)

2. **Add to your project**:
   ```bash
   # Place in the public folder
   /Users/airmac/Products/Oco/public/google1234567890abcdef.html
   ```

3. **Deploy to Vercel**:
   ```bash
   git add public/google1234567890abcdef.html
   git commit -m "Add Google verification file"
   git push
   ```

4. **Verify it's accessible**:
   - Visit: `https://www.ocoiom.com/google1234567890abcdef.html`
   - Should show the file content

5. **Click "Verify"** in Google Search Console

### Method 3: DNS Verification (For Domain Property)

1. **Get the TXT record** from Google Search Console

2. **Log in to your domain registrar** (where ocoiom.com is registered)
   - GoDaddy, Namecheap, Cloudflare, etc.

3. **Add DNS TXT Record**:
   ```
   Type: TXT
   Name: @ (or leave blank)
   Value: google-site-verification=abc123...
   TTL: 3600 (or default)
   ```

4. **Wait for DNS propagation** (can take up to 48 hours, usually 10-30 minutes)

5. **Click "Verify"** in Google Search Console

### Method 4: Google Analytics (If Already Set Up)

If OCO already has Google Analytics:
1. Select "Google Analytics" verification method
2. Use the same Google account
3. Click "Verify"

---

## Step 4: Submit Sitemap

Once verified:

1. **In Google Search Console**, go to **Sitemaps** (left sidebar)

2. **Add new sitemap**:
   ```
   https://www.ocoiom.com/sitemap.xml
   ```

3. **Click "Submit"**

4. **Wait for processing** (can take a few hours to a few days)

---

## Step 5: Configure Settings

### Set Preferred Domain (if using URL prefix):
1. Go to Settings
2. Set preferred domain to `https://www.ocoiom.com`

### Set Target Country:
1. Go to Settings → International Targeting
2. Set country: **United Kingdom** (or Isle of Man if available)

### Add Additional Users (Optional):
If your client wants access:
1. Go to Settings → Users and permissions
2. Click "Add user"
3. Enter client's email
4. Choose permission level:
   - **Owner**: Full control
   - **Full**: Can view all data and take most actions
   - **Restricted**: Can view most data

---

## What to Do After Setup

### Immediate Actions:

1. **Check Coverage**:
   - Go to Coverage report
   - Look for any errors
   - Fix any issues found

2. **Check Mobile Usability**:
   - Go to Mobile Usability report
   - Ensure no issues

3. **Check Core Web Vitals**:
   - Go to Core Web Vitals report
   - Monitor performance

### Weekly Actions:

1. **Check Performance**:
   - Monitor clicks, impressions, CTR
   - Track keyword rankings
   - Identify opportunities

2. **Check Coverage**:
   - Look for new errors
   - Ensure all pages are indexed

3. **Review Search Queries**:
   - See what people are searching
   - Identify new keyword opportunities

---

## Expected Timeline

### Day 1:
- ✅ Property added and verified
- ✅ Sitemap submitted
- ⏳ Google starts crawling

### Days 2-7:
- ⏳ Initial data appears
- ⏳ Pages start getting indexed
- ⏳ Coverage report populates

### Weeks 2-4:
- ✅ Full data available
- ✅ All pages indexed (ideally)
- ✅ Performance tracking active

---

## Troubleshooting

### "Verification Failed"
**Solutions:**
- Wait 24-48 hours for DNS propagation (if using DNS method)
- Ensure verification file is accessible (if using HTML file)
- Check that meta tag is in the `<head>` section (if using meta tag)
- Clear cache and try again

### "Sitemap Could Not Be Read"
**Solutions:**
- Verify sitemap is accessible: https://www.ocoiom.com/sitemap.xml
- Check for XML syntax errors
- Ensure sitemap is not blocked in robots.txt

### "Pages Not Indexed"
**Solutions:**
- Check robots.txt isn't blocking pages
- Ensure pages don't have `noindex` meta tags (except /resources)
- Request indexing manually for important pages
- Wait - indexing can take time

---

## Managing Multiple Client Properties

### Best Practices:

1. **Use Descriptive Names**:
   - Rename property to "OCO Limited - ocoiom.com"
   - Makes it easy to identify in dropdown

2. **Set Up Property Sets**:
   - Group related properties
   - Compare performance across clients

3. **Regular Monitoring**:
   - Set up weekly email reports
   - Check critical issues daily
   - Review performance weekly

4. **Client Access**:
   - Add client as "Full" or "Restricted" user
   - Keep yourself as "Owner"
   - Document who has access

---

## Quick Reference

### Current Setup for OCO:
- **Website**: https://www.ocoiom.com
- **Sitemap**: https://www.ocoiom.com/sitemap.xml
- **Robots.txt**: https://www.ocoiom.com/robots.txt
- **Verification**: Ready for meta tag method (already configured in code)

### Environment Variable to Add:
```bash
# In .env.local and Vercel
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-code-from-google
```

### Files Modified:
- ✅ `/app/layout.js` - Verification meta tag ready

---

## Next Steps Checklist

- [ ] Go to Google Search Console
- [ ] Add new property for ocoiom.com
- [ ] Choose verification method (recommend meta tag)
- [ ] Get verification code from Google
- [ ] Add code to `.env.local`
- [ ] Add code to Vercel environment variables
- [ ] Deploy changes
- [ ] Click "Verify" in Google Search Console
- [ ] Submit sitemap: https://www.ocoiom.com/sitemap.xml
- [ ] Set target country
- [ ] Add client as user (optional)
- [ ] Monitor initial crawling

---

## Support Resources

- **Google Search Console Help**: https://support.google.com/webmasters
- **Verification Help**: https://support.google.com/webmasters/answer/9008080
- **Sitemap Help**: https://support.google.com/webmasters/answer/183668

---

**Ready to Set Up?** Follow the steps above and OCO Limited will be added to your Google Search Console within minutes!

**Questions?** Check the troubleshooting section or Google's help documentation.

---

**Last Updated**: November 18, 2025
**Status**: Ready for setup

