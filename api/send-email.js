// api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Replace with your SMTP host
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: "vincentphamsoftware@gmail.com", // Replace with your email
        pass: "phui lggx fkpl gyry", // Replace with your password or app-specific password
      },
    });

    // Set up email data
    let mailOptions = {
      from: '"Vincent Pham" <vincentphamsoftware@gmail.com>',
      to: "vincentphamsoftware@gmail.com", // Where you want to receive the email
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ status: 'success', message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error: Could not send email' });
    }
  } else {
    res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }
}
