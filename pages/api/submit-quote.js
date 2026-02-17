/**
 * API Route: Submit Quote Request
 *
 * This endpoint handles form submissions from the contact form.
 * Currently validates and logs data. Connect to your email service for production.
 *
 * POST /api/submit-quote
 * Body: { name, email, phone, serviceType, message }
 */

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, serviceType, message } = req.body;

  // Validate input
  if (!name || !email || !phone || !serviceType || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Phone validation (basic)
  const phoneRegex = /^\d{10,}$/;
  const cleanPhone = phone.replace(/\D/g, '');
  if (!phoneRegex.test(cleanPhone)) {
    return res.status(400).json({ error: 'Invalid phone number' });
  }

  try {
    // TODO: Connect to your email service here
    // Example implementations:

    // Option 1: SendGrid
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: process.env.SENDGRID_TO_EMAIL,
    //   from: process.env.SENDGRID_FROM_EMAIL,
    //   subject: `New Quote Request from ${name}`,
    //   html: `
    //     <h2>New Quote Request</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Service Type:</strong> ${serviceType}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `,
    // });

    // Option 2: Nodemailer
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransport({...});
    // await transporter.sendMail({...});

    // Option 3: Log to database
    // await db.quotes.create({
    //   name, email, phone, serviceType, message,
    //   createdAt: new Date(),
    // });

    // Log for debugging (remove in production)
    console.log('Quote request received:', { name, email, phone, serviceType });

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Quote request submitted successfully',
    });
  } catch (error) {
    console.error('Quote submission error:', error);
    return res.status(500).json({
      error: 'Failed to submit quote request',
      message: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
