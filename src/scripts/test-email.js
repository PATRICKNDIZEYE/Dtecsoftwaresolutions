const nodemailer = require('nodemailer');

async function main() {
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
    from: '"Test User" <demo@dtecsoftwaresolutions.com>',
    to: 'ndiyizeye123@gmail.com, patrickndizeye02@gmail.com',
    subject: 'Test Email from DTEC Software Solutions',
    replyTo: 'test@example.com',
    text: `
This is a test email to verify the SMTP configuration.

Name: Test User
Email: test@example.com
Subject: Test Email

Message:
This is a test message to verify that the email sending functionality works correctly.
    `,
    html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
  <h2 style="color: #333; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">Test Email</h2>
  
  <div style="margin: 20px 0;">
    <p><strong>Name:</strong> Test User</p>
    <p><strong>Email:</strong> test@example.com</p>
    <p><strong>Subject:</strong> Test Email</p>
  </div>
  
  <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
    <h3 style="margin-top: 0; color: #333;">Message:</h3>
    <p>This is a test message to verify that the email sending functionality works correctly.</p>
  </div>
  
  <div style="margin-top: 30px; font-size: 12px; color: #777; border-top: 1px solid #eaeaea; padding-top: 10px;">
    <p>This is a test email from the DTEC Software Solutions website.</p>
  </div>
</div>
    `,
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

main().catch(console.error);