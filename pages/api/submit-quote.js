/**
 * API Route: Submit Quote Request
 * Email provider: Resend (free tier — 3,000 emails/month)
 *
 * Setup (one-time, free):
 * 1. Go to https://resend.com → sign up free
 * 2. Get your API key from the dashboard
 * 3. Create .env.local in project root with:
 *    RESEND_API_KEY=re_your_key_here
 *    RESEND_TO_EMAIL=info@marriuminsurance.com
 *
 * The form works without setup (returns success, logs to console).
 * Emails activate automatically once RESEND_API_KEY is set.
 */

const AGENCY_EMAIL = 'info@marriuminsurance.com';
const AGENCY_NAME = 'MARRIUM Insurance';

function buildPersonalEmail(data) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0f2744; padding: 32px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #d4af37; font-size: 22px; margin: 0;">New Personal Insurance Quote Request</h1>
        <p style="color: #e8dcc8; margin: 8px 0 0; font-size: 14px;">Received via marriuminsurance.com</p>
      </div>
      <div style="background: #fdfaf5; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e8dcc8;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; color: #666; font-size: 13px; width: 40%;">Full Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; font-weight: 600; color: #0f2744;">${data.name}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; color: #666; font-size: 13px;">State</td><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; font-weight: 600; color: #0f2744;">${data.state || '—'}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; color: #666; font-size: 13px;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; font-weight: 600; color: #0f2744;">${data.phone}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; color: #666; font-size: 13px;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; font-weight: 600; color: #0f2744;">${data.email}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; color: #666; font-size: 13px;">Coverage Type</td><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; font-weight: 600; color: #d4af37;">${data.coverageType || '—'}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; color: #666; font-size: 13px;"># Drivers</td><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; font-weight: 600; color: #0f2744;">${data.drivers || '—'}</td></tr>
          <tr><td style="padding: 10px 0; color: #666; font-size: 13px;"># Vehicles</td><td style="padding: 10px 0; font-weight: 600; color: #0f2744;">${data.vehicles || '—'}</td></tr>
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #fff3cd; border-radius: 6px; border-left: 4px solid #d4af37;">
          <p style="margin: 0; font-size: 13px; color: #856404;"><strong>Action required:</strong> Contact this client within 24 hours by phone or email.</p>
        </div>
      </div>
    </div>
  `;
}

function buildBusinessEmail(data) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0f2744; padding: 32px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #d4af37; font-size: 22px; margin: 0;">New Business Insurance Quote Request</h1>
        <p style="color: #e8dcc8; margin: 8px 0 0; font-size: 14px;">Received via marriuminsurance.com</p>
      </div>
      <div style="background: #fdfaf5; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e8dcc8;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; color: #666; font-size: 13px; width: 40%;">Business Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; font-weight: 600; color: #0f2744;">${data.businessName}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; color: #666; font-size: 13px;">State</td><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; font-weight: 600; color: #0f2744;">${data.state || '—'}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; color: #666; font-size: 13px;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; font-weight: 600; color: #0f2744;">${data.phone}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; color: #666; font-size: 13px;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; font-weight: 600; color: #0f2744;">${data.email}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; color: #666; font-size: 13px;">Business Type</td><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; font-weight: 600; color: #d4af37;">${data.businessType || '—'}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; color: #666; font-size: 13px;">Annual Revenue</td><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; font-weight: 600; color: #0f2744;">${data.revenue || 'Not provided'}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; color: #666; font-size: 13px;"># Employees</td><td style="padding: 10px 0; border-bottom: 1px solid #e8dcc8; font-weight: 600; color: #0f2744;">${data.employees || '—'}</td></tr>
          <tr><td style="padding: 10px 0; color: #666; font-size: 13px;"># Partners</td><td style="padding: 10px 0; font-weight: 600; color: #0f2744;">${data.partners || '—'}</td></tr>
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #fff3cd; border-radius: 6px; border-left: 4px solid #d4af37;">
          <p style="margin: 0; font-size: 13px; color: #856404;"><strong>Action required:</strong> Contact this business client within 24 hours — commercial leads are time-sensitive.</p>
        </div>
      </div>
    </div>
  `;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const data = req.body;
  const isPersonal = data.formType === 'personal';
  const isBusiness = data.formType === 'business';

  // Basic validation
  if (isPersonal && (!data.name || !data.phone || !data.email || !data.state)) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (isBusiness && (!data.businessName || !data.phone || !data.email || !data.state)) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const subject = isPersonal
    ? `Personal Quote Request — ${data.name} (${data.state})`
    : `Business Quote Request — ${data.businessName} (${data.state})`;

  const html = isPersonal ? buildPersonalEmail(data) : buildBusinessEmail(data);

  // Log for dev/debugging
  console.log(`[MARRIUM] New ${data.formType} quote request:`, {
    name: data.name || data.businessName,
    phone: data.phone,
    email: data.email,
    state: data.state,
    type: data.coverageType || data.businessType,
  });

  // Send via Resend if API key is configured
  if (process.env.RESEND_API_KEY) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `MARRIUM Insurance <onboarding@resend.dev>`,
          to: [process.env.RESEND_TO_EMAIL || AGENCY_EMAIL],
          reply_to: data.email,
          subject,
          html,
        }),
      });

      if (!response.ok) {
        const err = await response.text();
        console.error('[MARRIUM] Resend error:', err);
        // Still return success to the user — don't block the form
      }
    } catch (err) {
      console.error('[MARRIUM] Email send failed:', err.message);
      // Still return success to the user
    }
  } else {
    console.log('[MARRIUM] No RESEND_API_KEY set — email not sent. Add it to .env.local to activate.');
  }

  return res.status(200).json({ success: true });
}
