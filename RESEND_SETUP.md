# Resend Email Setup Guide

The contact form is now configured to use Resend for sending emails.

## Setup Instructions

### 1. Create a Resend Account
1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 2. Get Your API Key
1. Go to [https://resend.com/api-keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "OCO Website")
4. Copy the API key (starts with `re_`)

### 3. Add Environment Variable

#### For Local Development:
Create a `.env.local` file in the project root:
```
RESEND_API_KEY=re_your_api_key_here
```

#### For Production (Vercel):
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add a new variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Your Resend API key
   - **Environment:** Production, Preview, Development (select all)
4. Click "Save"

### 4. Verify Your Domain (REQUIRED for Production)

**Important:** Resend's free/testing mode only allows sending emails to your verified email address. To send to `enquiries@ocoiom.com`, you MUST verify your domain.

1. Go to [https://resend.com/domains](https://resend.com/domains)
2. Click "Add Domain"
3. Add `ocoiom.com`
4. Follow the DNS setup instructions:
   - Add the provided DNS records to your domain's DNS settings
   - Wait for DNS propagation (can take a few minutes to 24 hours)
   - Resend will verify automatically once DNS records are correct
5. Once verified, update the `from` field in `app/api/contact/route.js`:
   ```javascript
   from: 'OCO Website <noreply@ocoiom.com>',
   ```

**Note:** Until your domain is verified, emails can only be sent to your verified email address (the one you used to sign up for Resend).

### 5. Test the Form

After setting up the API key:
1. Fill out the contact form at `/contact`
2. Submit the form
3. Check `enquiries@ocoiom.com` for the email

## Current Configuration

- **To Email:** `enquiries@ocoiom.com`
- **From Email:** `onboarding@resend.dev` (default Resend address - works for testing)
- **Reply-To:** The email address from the form submission

## Troubleshooting

- **"Failed to send email" error:** Check that `RESEND_API_KEY` is set correctly
- **Emails not arriving:** Check spam folder, verify domain if using custom domain
- **API key issues:** Make sure the key starts with `re_` and is active in your Resend dashboard

## Free Tier Limits

Resend's free tier includes:
- 3,000 emails/month
- 100 emails/day
- Perfect for most small business websites

