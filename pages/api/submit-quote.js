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

// ── Security helpers ──────────────────────────────────────────────────────────

function escHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  if (email.length > 254) return false;
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
}

const rateMap = new Map();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60_000;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateMap.get(ip) || { count: 0, start: now };
  if (now - entry.start > RATE_WINDOW) {
    rateMap.set(ip, { count: 1, start: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  rateMap.set(ip, entry);
  return false;
}
const AGENCY_NAME = 'MARRIUM Insurance';

const coverageLabels = {
  auto: 'Auto Insurance',
  homeowners: 'Homeowners Insurance',
  umbrella: 'Umbrella Coverage',
  'high-value-home': 'High-Value Homes',
  landlord: 'Landlord Policy',
  renters: 'Renters Insurance',
  other: 'Other / Not Sure',
};

const businessLabels = {
  restaurant: 'Restaurant',
  hospitality: 'Hospitality / Hotel',
  contractors: 'Contractors & Trades',
  'commercial-property': 'Commercial Property',
  'professional-liability': 'Professional Liability',
  'commercial-auto': 'Commercial Auto & Fleet',
  specialty: 'Specialty Risk',
  umbrella: 'Umbrella Coverage',
  epl: 'Employment Practices (EPL)',
  cyber: 'Cybersecurity',
  'workers-comp': 'Workers Compensation',
  other: 'Other / Not Sure',
};

const coverageExtraLabels = {
  auto:            { drivers: '# of Drivers', vehicles: '# of Vehicles' },
  homeowners:      { homeValue: 'Estimated Home Value', yearBuilt: 'Year Built' },
  umbrella:        { existingPolicies: 'Existing Policies', coverageLimit: 'Desired Umbrella Limit' },
  'high-value-home': { homeValue: 'Estimated Home Value', squareFootage: 'Square Footage' },
  landlord:        { numProperties: '# of Rental Properties', propertyType: 'Property Type' },
  renters:         { personalProperty: 'Est. Personal Property Value' },
};

function row(label, value, last = false, highlight = false) {
  const border = last ? '' : 'border-bottom: 1px solid #e8dcc8;';
  const color = highlight ? '#d4af37' : '#0f2744';
  return `<tr>
    <td style="padding: 10px 0; ${border} color: #666; font-size: 13px; width: 40%;">${escHtml(label)}</td>
    <td style="padding: 10px 0; ${border} font-weight: 600; color: ${color};">${escHtml(value) || 'Not provided'}</td>
  </tr>`;
}

function buildPersonalEmail(data) {
  const coverageType = data.coverageType || 'other';
  const extraFields = coverageExtraLabels[coverageType] || {};
  const extraRows = Object.entries(extraFields)
    .map(([key, label]) => row(label, data[key]))
    .join('');

  const commentsSection = data.comments
    ? `<div style="margin-top: 20px; padding: 16px; background: #f0f4ff; border-radius: 6px; border-left: 4px solid #0f2744;">
        <p style="margin: 0 0 6px; font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 1px;">Additional Comments</p>
        <p style="margin: 0; font-size: 14px; color: #0f2744;">${escHtml(data.comments)}</p>
      </div>`
    : '';

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0f2744; padding: 32px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #d4af37; font-size: 22px; margin: 0;">New Personal Insurance Quote Request</h1>
        <p style="color: #e8dcc8; margin: 8px 0 0; font-size: 14px;">Received via miagencyus.com</p>
      </div>
      <div style="background: #fdfaf5; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e8dcc8;">
        <table style="width: 100%; border-collapse: collapse;">
          ${row('Full Name', data.name)}
          ${row('State', data.state)}
          ${row('Phone', data.phone)}
          ${row('Email', data.email)}
          ${row('Coverage Type', coverageLabels[coverageType] || coverageType, false, true)}
          ${extraRows}
        </table>
        ${commentsSection}
        <div style="margin-top: 24px; padding: 16px; background: #fff3cd; border-radius: 6px; border-left: 4px solid #d4af37;">
          <p style="margin: 0; font-size: 13px; color: #856404;"><strong>Action required:</strong> Contact this client within 24 hours by phone or email.</p>
        </div>
      </div>
    </div>
  `;
}

function buildBusinessEmail(data) {
  const businessType = data.businessType || 'other';

  const commentsSection = data.comments
    ? `<div style="margin-top: 20px; padding: 16px; background: #f0f4ff; border-radius: 6px; border-left: 4px solid #0f2744;">
        <p style="margin: 0 0 6px; font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 1px;">Additional Comments</p>
        <p style="margin: 0; font-size: 14px; color: #0f2744;">${escHtml(data.comments)}</p>
      </div>`
    : '';

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0f2744; padding: 32px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #d4af37; font-size: 22px; margin: 0;">New Business Insurance Quote Request</h1>
        <p style="color: #e8dcc8; margin: 8px 0 0; font-size: 14px;">Received via miagencyus.com</p>
      </div>
      <div style="background: #fdfaf5; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e8dcc8;">
        <table style="width: 100%; border-collapse: collapse;">
          ${row('Business Name', data.businessName)}
          ${row('State', data.state)}
          ${row('Phone', data.phone)}
          ${row('Email', data.email)}
          ${row('Business Type', businessLabels[businessType] || businessType, false, true)}
          ${row('Annual Revenue', data.revenue)}
          ${row('# of Employees', data.employees)}
          ${row('# of Partners', data.partners, true)}
        </table>
        ${commentsSection}
        <div style="margin-top: 24px; padding: 16px; background: #fff3cd; border-radius: 6px; border-left: 4px solid #d4af37;">
          <p style="margin: 0; font-size: 13px; color: #856404;"><strong>Action required:</strong> Contact this business client within 24 hours — commercial leads are time-sensitive.</p>
        </div>
      </div>
    </div>
  `;
}

const ALLOWED_FORM_TYPES = ['personal', 'business'];
const ALLOWED_COVERAGE_TYPES = ['auto', 'homeowners', 'umbrella', 'high-value-home', 'landlord', 'renters', 'other'];
const ALLOWED_BUSINESS_TYPES = ['restaurant', 'hospitality', 'contractors', 'commercial-property', 'professional-liability', 'commercial-auto', 'specialty', 'umbrella', 'epl', 'cyber', 'workers-comp', 'other'];

function validateInput(data) {
  if (typeof data !== 'object' || data === null) return 'Invalid payload';
  if (!ALLOWED_FORM_TYPES.includes(data.formType)) return 'Invalid form type';
  if (data.name && data.name.length > 100) return 'Name too long';
  if (data.businessName && data.businessName.length > 150) return 'Business name too long';
  if (data.email && data.email.length > 254) return 'Email too long';
  if (data.phone && data.phone.length > 20) return 'Phone too long';
  if (data.state && data.state.length > 50) return 'State too long';
  if (data.comments && data.comments.length > 2000) return 'Comments too long';
  if (data.coverageType && !ALLOWED_COVERAGE_TYPES.includes(data.coverageType)) return 'Invalid coverage type';
  if (data.businessType && !ALLOWED_BUSINESS_TYPES.includes(data.businessType)) return 'Invalid business type';
  return null;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please wait a moment and try again.' });
  }

  // Honeypot check — bots fill hidden fields, humans don't
  const data = req.body;
  if (data.website) {
    return res.status(200).json({ success: true });
  }

  // Input validation
  const inputError = validateInput(data);
  if (inputError) {
    return res.status(400).json({ error: inputError });
  }

  const isPersonal = data.formType === 'personal';
  const isBusiness = data.formType === 'business';

  // Email format validation
  if (!isValidEmail(data.email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Required field checks
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
