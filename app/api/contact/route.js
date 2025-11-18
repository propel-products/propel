import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json({ 
        success: false, 
        message: 'Email service is not configured. Please contact the administrator.' 
      }, { status: 500 });
    }

    const data = await request.json();
    let { name, email, company, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ 
        success: false, 
        message: 'Please fill in all required fields.' 
      }, { status: 400 });
    }

    // Sanitize and trim inputs
    name = name.trim();
    email = email.trim();
    company = company ? company.trim() : '';
    message = message.trim();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        success: false, 
        message: 'Please enter a valid email address.' 
      }, { status: 400 });
    }

    // Send email using Resend
    // NOTE: Until domain is verified, Resend can only send to verified email addresses
    // For production: Verify ocoiom.com at resend.com/domains and update 'from' to use verified domain
    const emailResult = await resend.emails.send({
      from: 'OCO Website <onboarding@resend.dev>', // Update this with your verified domain after verification
      to: process.env.RESEND_VERIFIED_EMAIL || 'andy@propel.im', // Temporary: use verified email until domain verified
      replyTo: email,
      subject: `New Contact Form Submission from ${name}${company ? ` - ${company}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 12px; margin-bottom: 20px; border-radius: 4px;">
            <p style="margin: 0; color: #856404; font-size: 14px;">
              <strong>⚠️ Temporary Setup:</strong> This email was sent to a verified address. 
              Intended recipient: <strong>enquiries@ocoiom.com</strong>
            </p>
          </div>
          <h2 style="color: #FF5007;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This email was sent from the OCO website contact form.</p>
          <p style="color: #999; font-size: 11px; margin-top: 20px;">
            To receive emails directly at enquiries@ocoiom.com, verify the domain at resend.com/domains
          </p>
        </div>
      `,
      text: `
⚠️ TEMPORARY SETUP: Intended recipient: enquiries@ocoiom.com

New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}

Message:
${message}

---
This email was sent from the OCO website contact form.
To receive emails directly at enquiries@ocoiom.com, verify the domain at resend.com/domains
      `.trim(),
    });

    if (emailResult.error) {
      console.error('Resend error:', JSON.stringify(emailResult.error, null, 2));
      return NextResponse.json({ 
        success: false, 
        message: 'Something went wrong. Please try again.' 
      }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully! We\'ll get back to you soon.' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Something went wrong. Please try again.' 
    }, { status: 500 });
  }
}
