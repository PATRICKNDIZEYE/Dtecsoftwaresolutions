import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'mail.dtecsoftwaresolutions.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'demo@dtecsoftwaresolutions.com',
        pass: 'gurrim-magjEn-kuzhy9',
      },
    });

    // Set up email data
    const mailOptions = {
      from: `"${name}" <demo@dtecsoftwaresolutions.com>`,
      to: 'ndiyizeye123@gmail.com, patrickndizeye02@gmail.com',
      subject: subject || `New contact form submission from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject || 'N/A'}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
  <h2 style="color: #333; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">New Contact Form Submission</h2>
  
  <div style="margin: 20px 0;">
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
  </div>
  
  <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
    <h3 style="margin-top: 0; color: #333;">Message:</h3>
    <p style="white-space: pre-line;">${message}</p>
  </div>
  
  <div style="margin-top: 30px; font-size: 12px; color: #777; border-top: 1px solid #eaeaea; padding-top: 10px;">
    <p>This email was sent from the contact form on DTEC Software Solutions website.</p>
  </div>
</div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}