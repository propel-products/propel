# Resend Domain Verification Guide

## Current Issue

The contact form is currently sending emails to `andy@propel.im` (verified email) because Resend is in testing mode. To send directly to `enquiries@ocoiom.com`, you need to verify the `ocoiom.com` domain.

---

## Step-by-Step Domain Verification

### 1. Go to Resend Domains

1. Visit: https://resend.com/domains
2. Sign in to your Resend account
3. Click **"Add Domain"** button

### 2. Add Your Domain

1. Enter: `ocoiom.com`
2. Click **"Add Domain"**
3. Resend will provide DNS records to add

### 3. Add DNS Records

Resend will show you DNS records like:

```
Type: TXT
Name: @
Value: resend-domain-verification=abc123...

Type: MX
Name: @
Priority: 10
Value: feedback-smtp.resend.com

Type: TXT
Name: resend._domainkey
Value: p=abc123... (DKIM record)
```

**Add these to your domain registrar** (where ocoiom.com is registered):
- GoDaddy, Namecheap, Cloudflare, etc.
- Go to DNS Management
- Add each record exactly as shown
- Save changes

### 4. Wait for Verification

- DNS propagation: Usually 10-30 minutes, can take up to 48 hours
- Resend will automatically verify once DNS records are correct
- Check status at: https://resend.com/domains

### 5. Update Code After Verification

Once verified, update `/app/api/contact/route.js`:

```javascript
// Change this line:
from: 'OCO Website <onboarding@resend.dev>',
to: 'OCO Website <noreply@ocoiom.com>', // or enquiries@ocoiom.com

// Change this line:
to: process.env.RESEND_VERIFIED_EMAIL || 'andy@propel.im',
to: 'enquiries@ocoiom.com',
```

---

## Temporary Solution (Current)

Until domain is verified:
- ✅ Emails are sent to `andy@propel.im` (verified address)
- ✅ Email includes notice that intended recipient is `enquiries@ocoiom.com`
- ✅ You can forward emails manually or set up email forwarding

### Email Forwarding Setup (Optional)

If you want automatic forwarding:
1. Set up email forwarding in your email provider
2. Forward `andy@propel.im` → `enquiries@ocoiom.com`
3. This works until domain is verified

---

## After Verification Checklist

- [ ] Domain verified in Resend dashboard
- [ ] Updated `from` address to use `@ocoiom.com`
- [ ] Updated `to` address to `enquiries@ocoiom.com`
- [ ] Removed temporary warning message from email template
- [ ] Test contact form submission
- [ ] Verify email arrives at `enquiries@ocoiom.com`

---

## Troubleshooting

### DNS Records Not Verifying

**Check:**
- DNS records added exactly as shown
- No typos in values
- Records saved and propagated (use DNS checker tool)

**Wait:**
- DNS can take up to 48 hours to propagate globally
- Check DNS propagation: https://www.whatsmydns.net

### Still Getting Errors After Verification

**Check:**
- Domain status shows "Verified" in Resend dashboard
- `from` address uses verified domain (`@ocoiom.com`)
- API key is active and correct

### Emails Going to Spam

**After domain verification:**
- SPF, DKIM, and DMARC records are automatically set up by Resend
- This improves deliverability significantly
- Emails should arrive in inbox, not spam

---

## Benefits of Domain Verification

✅ Send to any email address (not just verified ones)
✅ Better email deliverability (SPF, DKIM, DMARC)
✅ Professional `from` address (`@ocoiom.com`)
✅ Higher email limits
✅ Better sender reputation

---

## Quick Reference

- **Resend Domains**: https://resend.com/domains
- **Resend API Keys**: https://resend.com/api-keys
- **Resend Dashboard**: https://resend.com/emails
- **DNS Checker**: https://www.whatsmydns.net

---

**Status**: Temporary solution active - Domain verification pending
**Next Step**: Verify `ocoiom.com` domain in Resend

