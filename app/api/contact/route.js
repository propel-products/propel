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
    const emailResult = await resend.emails.send({
      from: 'OCO Website <onboarding@resend.dev>', // Update this with your verified domain
      to: 'enquiries@ocoiom.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}${company ? ` - ${company}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF5007;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This email was sent from the OCO website contact form.</p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}

Message:
${message}
      `.trim(),
    });

    if (emailResult.error) {
      console.error('Resend error:', JSON.stringify(emailResult.error, null, 2));
      
      // Provide more specific error messages
      let errorMessage = 'Failed to send email. Please try again later.';
      
      if (emailResult.error.message) {
        // If it's an API key issue
        if (emailResult.error.message.includes('API key') || emailResult.error.message.includes('Unauthorized')) {
          errorMessage = 'Email service configuration error. Please contact support.';
        }
        // If it's a domain/from address issue
        else if (emailResult.error.message.includes('domain') || emailResult.error.message.includes('from')) {
          errorMessage = 'Email configuration issue. Please contact support.';
        }
        // Rate limiting
        else if (emailResult.error.message.includes('rate') || emailResult.error.message.includes('limit')) {
          errorMessage = 'Email service temporarily unavailable. Please try again in a few minutes.';
        }
      }
      
      return NextResponse.json({ 
        success: false, 
        message: errorMessage 
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
