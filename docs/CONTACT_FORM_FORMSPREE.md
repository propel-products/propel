# Contact Form - Formspree Setup (Quick Start)

## ✅ Problem Solved

**Issue:** Resend requires domain verification to send to `enquiries@ocoiom.com`  
**Solution:** Switched to Formspree - no domain verification needed!

---

## 🚀 Quick Setup (5 Minutes)

### 1. Create Formspree Account
- Go to: https://formspree.io
- Sign up (free account)

### 2. Create Form
- Click "New Form"
- Name: "OCO Contact Form"
- Email: `enquiries@ocoiom.com`
- Click "Create"

### 3. Get Form Endpoint
- Copy the form URL: `https://formspree.io/f/YOUR_FORM_ID`

### 4. Add to Vercel
- Go to Vercel Dashboard → Settings → Environment Variables
- Add: `NEXT_PUBLIC_FORMSPREE_ENDPOINT` = `https://formspree.io/f/YOUR_FORM_ID`
- Redeploy

### 5. Test
- Submit contact form
- Check `enquiries@ocoiom.com` for email ✅

---

## ✅ What Changed

- **ContactForm.jsx**: Now uses Formspree endpoint directly
- **No API route needed**: Formspree handles everything
- **No domain verification**: Works immediately
- **Direct to enquiries@ocoiom.com**: No forwarding needed

---

## 📊 Formspree Free Tier

- ✅ 50 submissions/month
- ✅ No domain verification
- ✅ Spam protection included
- ✅ Email notifications
- ✅ Submission logs

**Upgrade if needed:**
- Starter: $10/month (250 submissions)
- Professional: $25/month (1,000 submissions)

---

## 🔄 Migration from Resend

**Old Setup:**
- Used Resend API
- Required domain verification
- Sent to verified email only

**New Setup:**
- Uses Formspree
- No verification needed
- Sends directly to `enquiries@ocoiom.com`

**No code changes needed** - Just add the Formspree endpoint!

---

## 📝 Next Steps

1. ✅ Create Formspree account
2. ✅ Create form with `enquiries@ocoiom.com`
3. ✅ Add endpoint to Vercel environment variables
4. ✅ Test form submission
5. ✅ Verify emails arrive at `enquiries@ocoiom.com`

---

**Status:** Ready to configure - Just need Formspree form ID!

