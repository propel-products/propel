# Propel Operations Handbook

Technical documentation for the Propel website. For a marketing overview, see the main `README.md`.

---

## Document Map

1. **Project Snapshot** – Stack, layout, local development
2. **Deployment & Domains** – Vercel, DNS, verification
3. **Contact Form & Email** – Resend email delivery
4. **SEO & Indexing** – Sitemap, robots, structured data
5. **Launch Checklist** – Pre/post-launch tasks

---

## 1. Project Snapshot

| Item | Details |
| --- | --- |
| Framework | Next.js 14 (App Router), React 18, Tailwind CSS |
| Hosting | Vercel (auto-deploys from `main`) |
| Design System | Brand orange (`#FF5007`), black/white contrast |
| Pages | `/`, `/services`, `/about`, `/contact`, `/privacy`, `/cookies` |

### Local Development

```bash
npm install
npm run dev
# visit http://localhost:3000
```

- Requires Node 18+
- Scripts: `npm run lint`, `npm run build`, `npm run start`

---

## 2. Deployment & Domains

### Domain Setup (`propel.im`)

1. **Add domain to Vercel** – Project → Settings → Domains → add `propel.im`
2. **Update DNS** – Point to Vercel's nameservers or add CNAME record
3. **Wait for propagation** – typically <1 hr
4. **Verify HTTPS** – `https://propel.im` should show valid TLS cert

### Verification Checks

- `dig propel.im` → returns Vercel IP/CNAME
- `https://propel.im/robots.txt` references the sitemap
- `https://propel.im/sitemap.xml` lists production URLs

---

## 3. Contact Form & Email

Using [Resend](https://resend.com) for email delivery:

1. Create Resend account and add API key to Vercel env vars (`RESEND_API_KEY`)
2. Verify `propel.im` domain in Resend dashboard
3. Contact form sends to `enquiries@propel.im`

---

## 4. SEO & Indexing

### Google Search Console

1. Visit [Google Search Console](https://search.google.com/search-console)
2. Add `https://propel.im`
3. Verify via DNS TXT record or HTML file
4. Submit sitemap: `https://propel.im/sitemap.xml`

### Structured Data

JSON-LD schema is embedded via `components/StructuredData.jsx`:
- Organization schema
- WebSite schema with search action
- Service schemas for each offering

Test at: https://search.google.com/test/rich-results

---

## 5. Launch Checklist

### Pre-Launch

- [ ] All pages load without errors
- [ ] Contact form sends emails successfully
- [ ] Favicon and OG images display correctly
- [ ] Mobile responsive on all pages
- [ ] Analytics configured

### Post-Launch

- [ ] Submit sitemap to Google Search Console
- [ ] Monitor Vercel Analytics
- [ ] Test all contact flows
- [ ] Verify structured data in Search Console

---

## Useful Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Resend Dashboard**: https://resend.com/emails
- **Google Search Console**: https://search.google.com/search-console
- **PageSpeed Insights**: https://pagespeed.web.dev
- **Rich Results Test**: https://search.google.com/test/rich-results
