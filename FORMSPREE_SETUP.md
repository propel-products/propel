# Formspree Setup Guide

The contact form is now configured to use Formspree, which doesn't require domain verification and can send emails directly to `enquiries@ocoiom.com`.

## ✅ Why Formspree?

- ✅ **No domain verification required** - Works immediately
- ✅ **Send to any email address** - Including `enquiries@ocoiom.com`
- ✅ **No DNS configuration** - Zero setup hassle
- ✅ **Built-in spam protection** - Automatic filtering
- ✅ **Free tier available** - 50 submissions/month

## Setup Instructions (5 Minutes)

### Step 1: Create a Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Click "Sign Up" (or "Sign In" if you have an account)
3. Verify your email address

### Step 2: Create a New Form
1. After signing in, you'll be taken to your dashboard
2. Click **"New Form"** button
3. Fill in the form details:
   - **Form Name:** "OCO Contact Form"
   - **Email to receive submissions:** `enquiries@ocoiom.com`
   - **Form Type:** Standard Form
4. Click **"Create Form"**

### Step 3: Get Your Form Endpoint
1. After creating the form, you'll see your form endpoint URL:
   ```
   https://formspree.io/f/xxxxxxxxxx
   ```
2. Copy the entire URL (the `xxxxxxxxxx` part is your form ID)

### Step 4: Add Form Endpoint to Environment Variables

#### Option A: Environment Variable (Recommended)
Add to Vercel Dashboard → Settings → Environment Variables:
- **Name:** `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
- **Value:** `https://formspree.io/f/YOUR_FORM_ID`
- **Environment:** Production, Preview, Development

#### Option B: Direct Update (Quick Test)
Or temporarily update `components/ContactForm.jsx`:
```javascript
const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
```

### Step 5: Test the Form
1. Go to your website's contact page
2. Fill out and submit the form
3. Check `enquiries@ocoiom.com` for the email
4. Check Formspree dashboard for submission logs

## Current Configuration

- **Form Endpoint:** `https://formspree.io/f/xpzqkqpn` (update with your form ID)
- **To Email:** `enquiries@ocoiom.com` (set in Formspree dashboard)
- **Reply-To:** Submitter's email address (automatic)

## Free Tier Limits

Formspree's free tier includes:
- 50 submissions/month
- No domain verification required
- Can send to any email address
- Spam protection included

## Upgrading (if needed)

If you exceed 50 submissions/month:
- **Starter Plan:** $10/month - 250 submissions
- **Professional Plan:** $25/month - 1,000 submissions

## Benefits of Formspree

✅ No domain verification required  
✅ No DNS configuration needed  
✅ Works immediately after setup  
✅ Built-in spam protection  
✅ Email notifications  
✅ Form submission logs  

## Testing

1. Fill out the contact form at `/contact`
2. Submit the form
3. Check `enquiries@ocoiom.com` for the email
4. Check Formspree dashboard for submission logs

