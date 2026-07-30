import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const DEFAULT_RECIPIENT_EMAIL = "sales.kamalengg01@gmail.com";
const MAX_LENGTH = {
  name: 80,
  company: 120,
  email: 120,
  phone: 30,
  service: 100,
  message: 1500,
};

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  message?: unknown;
  botcheck?: unknown;
};

type CleanContact = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type DeliveryService = {
  name: string;
  send: () => Promise<void>;
};

function normalizeText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";

  return value
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[character] ?? character;
  });
}

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "Not available"
  );
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^[+()\-\s\d]{7,30}$/.test(phone);
}

function validatePayload(payload: ContactPayload) {
  const honeypot = normalizeText(payload.botcheck, 200);

  if (honeypot) {
    return {
      error: "Spam submission blocked.",
    };
  }

  const contact: CleanContact = {
    name: normalizeText(payload.name, MAX_LENGTH.name),
    company: normalizeText(payload.company, MAX_LENGTH.company),
    email: normalizeText(payload.email, MAX_LENGTH.email).toLowerCase(),
    phone: normalizeText(payload.phone, MAX_LENGTH.phone),
    service: normalizeText(payload.service, MAX_LENGTH.service),
    message: normalizeText(payload.message, MAX_LENGTH.message),
  };

  if (!contact.name || !contact.email || !contact.phone || !contact.service || !contact.message) {
    return {
      error: "Please fill all required fields: name, email, phone, service and message.",
    };
  }

  if (!isValidEmail(contact.email)) {
    return { error: "Please enter a valid email address." };
  }

  if (!isValidPhone(contact.phone)) {
    return { error: "Please enter a valid phone number." };
  }

  if (contact.message.length < 10) {
    return { error: "Please add a few more project details in the message." };
  }

  return { contact };
}

function buildEmailText(contact: CleanContact, submittedAt: string, sourceUrl: string, clientIp: string) {
  return [
    "New enquiry received from Kamal Engineering website",
    "",
    `Name: ${contact.name}`,
    `Company: ${contact.company || "Not provided"}`,
    `Email: ${contact.email}`,
    `Phone: ${contact.phone}`,
    `Service Required: ${contact.service}`,
    "",
    "Project Details / Message:",
    contact.message,
    "",
    `Submitted At: ${submittedAt}`,
    `Source URL: ${sourceUrl}`,
    `IP Address: ${clientIp}`,
  ].join("\n");
}

function buildEmailHtml(contact: CleanContact, submittedAt: string, sourceUrl: string, clientIp: string) {
  const safe = {
    name: escapeHtml(contact.name),
    company: escapeHtml(contact.company || "Not provided"),
    email: escapeHtml(contact.email),
    phone: escapeHtml(contact.phone),
    service: escapeHtml(contact.service),
    message: escapeHtml(contact.message),
    submittedAt: escapeHtml(submittedAt),
    sourceUrl: escapeHtml(sourceUrl),
    clientIp: escapeHtml(clientIp),
  };

  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>New Kamal Engineering Enquiry</title>
      </head>
      <body style="margin:0;padding:0;background:#f4f5f6;font-family:Arial,Helvetica,sans-serif;color:#2B2F36;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f5f6;padding:24px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #e5e7ea;border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="background:#1A1D23;color:#ffffff;padding:26px 28px;border-bottom:5px solid #F5A623;">
                    <div style="font-size:22px;font-weight:800;letter-spacing:.5px;text-transform:uppercase;">Kamal Engineering</div>
                    <div style="font-size:12px;color:#F5A623;margin-top:6px;letter-spacing:1.5px;text-transform:uppercase;">New Website Enquiry</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:28px;">
                    <h1 style="font-size:20px;line-height:1.35;margin:0 0 18px;color:#1A1D23;">A customer submitted the contact form</h1>
                    <p style="margin:0 0 22px;color:#5b626d;font-size:14px;line-height:1.6;">Please contact the customer using the phone or email below.</p>

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                      <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7ea;width:170px;color:#6b7480;font-weight:700;font-size:14px;">Name</td>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7ea;color:#1A1D23;font-size:14px;"><strong>${safe.name}</strong></td>
                      </tr>
                      <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7ea;width:170px;color:#6b7480;font-weight:700;font-size:14px;">Company</td>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7ea;color:#1A1D23;font-size:14px;">${safe.company}</td>
                      </tr>
                      <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7ea;width:170px;color:#6b7480;font-weight:700;font-size:14px;">Email</td>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7ea;color:#1A1D23;font-size:14px;"><a href="mailto:${safe.email}" style="color:#d98c14;font-weight:700;text-decoration:none;">${safe.email}</a></td>
                      </tr>
                      <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7ea;width:170px;color:#6b7480;font-weight:700;font-size:14px;">Phone</td>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7ea;color:#1A1D23;font-size:14px;"><a href="tel:${safe.phone}" style="color:#1A1D23;font-weight:700;text-decoration:none;">${safe.phone}</a></td>
                      </tr>
                      <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7ea;width:170px;color:#6b7480;font-weight:700;font-size:14px;">Service</td>
                        <td style="padding:12px 0;border-bottom:1px solid #e5e7ea;color:#1A1D23;font-size:14px;"><span style="display:inline-block;background:#F5A623;color:#1A1D23;font-weight:800;border-radius:999px;padding:5px 10px;font-size:12px;text-transform:uppercase;">${safe.service}</span></td>
                      </tr>
                    </table>

                    <div style="margin-top:24px;">
                      <div style="font-size:14px;font-weight:800;color:#6b7480;margin-bottom:10px;">Project Details / Message</div>
                      <div style="background:#f8f9fa;border-left:5px solid #F5A623;border-radius:8px;padding:16px;color:#2B2F36;font-size:14px;line-height:1.6;white-space:pre-wrap;">${safe.message}</div>
                    </div>

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:24px;border-collapse:collapse;background:#f8f9fa;border-radius:8px;">
                      <tr>
                        <td style="padding:10px 12px;color:#6b7480;font-size:12px;font-weight:700;width:130px;">Submitted</td>
                        <td style="padding:10px 12px;color:#2B2F36;font-size:12px;">${safe.submittedAt}</td>
                      </tr>
                      <tr>
                        <td style="padding:10px 12px;color:#6b7480;font-size:12px;font-weight:700;width:130px;">Source</td>
                        <td style="padding:10px 12px;color:#2B2F36;font-size:12px;">${safe.sourceUrl}</td>
                      </tr>
                      <tr>
                        <td style="padding:10px 12px;color:#6b7480;font-size:12px;font-weight:700;width:130px;">IP</td>
                        <td style="padding:10px 12px;color:#2B2F36;font-size:12px;">${safe.clientIp}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="background:#1A1D23;color:#88909b;padding:16px 28px;text-align:center;font-size:12px;">
                    This email was generated automatically from the Kamal Engineering website contact form.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

async function readResponseBody(response: Response) {
  const text = await response.text();

  if (!text) return null;

  try {
    return JSON.parse(text) as unknown;
  } catch {
    return text;
  }
}

function getServiceError(data: unknown, fallback: string) {
  if (typeof data === "string" && data) return data.slice(0, 300);

  if (data && typeof data === "object") {
    const record = data as Record<string, unknown>;
    const message = record.message || record.error;

    if (typeof message === "string" && message) return message.slice(0, 300);
  }

  return fallback;
}

async function sendViaWeb3Forms(contact: CleanContact, subject: string, emailText: string, emailHtml: string) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
      subject,
      from_name: "Kamal Engineering Website",
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      company: contact.company || "Not provided",
      service: contact.service,
      message: emailText,
      html: emailHtml,
    }),
  });

  const data = await readResponseBody(response);
  const success = Boolean(data && typeof data === "object" && "success" in data && data.success);

  if (!response.ok || !success) {
    throw new Error(getServiceError(data, "Web3Forms could not deliver the enquiry."));
  }
}

async function sendViaResend(
  contact: CleanContact,
  recipientEmail: string,
  subject: string,
  emailText: string,
  emailHtml: string
) {
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Kamal Engineering <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [recipientEmail],
      subject,
      text: emailText,
      html: emailHtml,
      reply_to: contact.email,
    }),
  });

  const data = await readResponseBody(response);

  if (!response.ok) {
    throw new Error(getServiceError(data, "Resend could not deliver the enquiry."));
  }
}

async function sendViaFormspree(contact: CleanContact, subject: string, emailText: string) {
  const endpoint = process.env.FORMSPREE_ENDPOINT ||
    (process.env.FORMSPREE_FORM_ID ? `https://formspree.io/f/${process.env.FORMSPREE_FORM_ID}` : "");

  if (!endpoint) {
    throw new Error("Formspree endpoint is missing.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      company: contact.company || "Not provided",
      service: contact.service,
      message: emailText,
      _subject: subject,
    }),
  });

  const data = await readResponseBody(response);

  if (!response.ok) {
    throw new Error(getServiceError(data, "Formspree could not deliver the enquiry."));
  }
}

export async function POST(request: NextRequest) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid form request. Please refresh the page and try again." },
      { status: 400 }
    );
  }

  const validation = validatePayload(payload);

  if ("error" in validation) {
    return NextResponse.json({ success: false, error: validation.error }, { status: 400 });
  }

  const contact = validation.contact;
  const recipientEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_RECIPIENT_EMAIL;
  const submittedAt = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());
  const sourceUrl = request.headers.get("referer") || "Website contact form";
  const clientIp = getClientIp(request);
  const subject = `[Kamal Engineering] New enquiry from ${contact.name}`;
  const emailText = buildEmailText(contact, submittedAt, sourceUrl, clientIp);
  const emailHtml = buildEmailHtml(contact, submittedAt, sourceUrl, clientIp);

  const deliveryServices: DeliveryService[] = [];

  if (process.env.WEB3FORMS_ACCESS_KEY) {
    deliveryServices.push({
      name: "Web3Forms",
      send: () => sendViaWeb3Forms(contact, subject, emailText, emailHtml),
    });
  }

  if (process.env.RESEND_API_KEY) {
    deliveryServices.push({
      name: "Resend",
      send: () => sendViaResend(contact, recipientEmail, subject, emailText, emailHtml),
    });
  }

  if (process.env.FORMSPREE_ENDPOINT || process.env.FORMSPREE_FORM_ID) {
    deliveryServices.push({
      name: "Formspree",
      send: () => sendViaFormspree(contact, subject, emailText),
    });
  }

  if (deliveryServices.length === 0) {
    console.error("Contact form email service is not configured.", {
      recipientEmail,
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      service: contact.service,
    });

    return NextResponse.json(
      {
        success: false,
        error:
          "Email service is not configured yet. Please call or WhatsApp us directly, or configure WEB3FORMS_ACCESS_KEY in Vercel.",
      },
      { status: 503 }
    );
  }

  const errors: string[] = [];

  for (const service of deliveryServices) {
    try {
      await service.send();
      return NextResponse.json(
        {
          success: true,
          message: `Thank you! Your enquiry has been sent to Kamal Engineering via ${service.name}.`,
        },
        { status: 200 }
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown email delivery error.";
      errors.push(`${service.name}: ${message}`);
      console.error(`Contact form delivery failed via ${service.name}:`, message);
    }
  }

  return NextResponse.json(
    {
      success: false,
      error:
        "We could not send the enquiry email right now. Please try again, or call/WhatsApp us directly.",
      details: process.env.NODE_ENV === "development" ? errors : undefined,
    },
    { status: 502 }
  );
}
