# Formspree Setup Guide

The contact form is now configured to use Formspree, which doesn't require domain verification and can send emails to any address.

## Setup Instructions

### 1. Create a Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account (or sign in if you already have one)

### 2. Create a New Form
1. Go to [https://formspree.io/forms](https://formspree.io/forms)
2. Click "New Form"
3. Give it a name (e.g., "OCO Contact Form")
4. Set the email where you want to receive submissions: `enquiries@ocoiom.com`
5. Click "Create Form"

### 3. Get Your Form Endpoint
1. After creating the form, you'll see a form endpoint URL like:
   `https://formspree.io/f/xpzqkqpn`
2. Copy this endpoint

### 4. Update the Contact Form
1. Open `components/ContactForm.jsx`
2. Find the line with `https://formspree.io/f/xpzqkqpn`
3. Replace `xpzqkqpn` with your actual Formspree form ID

### 5. Configure Email Settings (Optional)
1. In Formspree dashboard, go to your form settings
2. Set "Reply-To" to use the submitter's email (already configured in code)
3. Customize the email subject if desired
4. Enable email notifications

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

