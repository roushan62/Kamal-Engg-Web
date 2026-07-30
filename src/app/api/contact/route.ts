import { NextResponse, type NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DEFAULT_RECIPIENT = "sales.kamalengg01@gmail.com";

interface Payload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  location?: string;
  service?: string;
  timeline?: string;
  message?: string;
  website?: string;
}

interface Clean {
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  service: string;
  timeline: string;
  message: string;
}

/* ---------------- helpers ---------------- */

const clip = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validate(p: Payload): { contact: Clean } | { error: string } {
  // Honeypot — silently treat as spam
  if (clip(p.website, 100)) return { error: "SPAM" };

  const name = clip(p.name, 120);
  const email = clip(p.email, 160).toLowerCase();
  const phone = clip(p.phone, 40);
  const message = clip(p.message, 5000);
  const service = clip(p.service, 120) || "Not specified";

  if (name.length < 2) return { error: "Please enter your full name." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    return { error: "Please enter a valid email address." };
  if (phone.replace(/\D/g, "").length < 10)
    return { error: "Please enter a valid phone number." };
  if (message.length < 10)
    return { error: "Please describe your requirement in a little more detail." };

  return {
    contact: {
      name,
      email,
      phone,
      message,
      service,
      company: clip(p.company, 160) || "Not provided",
      location: clip(p.location, 160) || "Not provided",
      timeline: clip(p.timeline, 160) || "Not specified",
    },
  };
}

function clientIp(req: NextRequest) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "Unknown";
}

/* ---------------- email bodies ---------------- */

function buildText(c: Clean, meta: Record<string, string>) {
  return [
    "NEW WEBSITE ENQUIRY — KAMAL ENGINEERING",
    "==========================================",
    "",
    `Name:      ${c.name}`,
    `Company:   ${c.company}`,
    `Email:     ${c.email}`,
    `Phone:     ${c.phone}`,
    `Service:   ${c.service}`,
    `Location:  ${c.location}`,
    `Timeline:  ${c.timeline}`,
    "",
    "PROJECT DETAILS",
    "------------------------------------------",
    c.message,
    "",
    "------------------------------------------",
    `Submitted: ${meta.submittedAt}`,
    `Source:    ${meta.sourceUrl}`,
    `IP:        ${meta.ip}`,
    "",
    `Reply directly to this email to respond to ${c.name}.`,
  ].join("\n");
}

function buildHtml(c: Clean, meta: Record<string, string>) {
  const e = {
    name: escapeHtml(c.name),
    company: escapeHtml(c.company),
    email: escapeHtml(c.email),
    phone: escapeHtml(c.phone),
    service: escapeHtml(c.service),
    location: escapeHtml(c.location),
    timeline: escapeHtml(c.timeline),
    message: escapeHtml(c.message).replace(/\n/g, "<br>"),
    submittedAt: escapeHtml(meta.submittedAt),
    sourceUrl: escapeHtml(meta.sourceUrl),
    ip: escapeHtml(meta.ip),
  };

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:11px 0;border-bottom:1px solid #eceef0;width:120px;color:#6e7684;font-weight:700;font-size:13px;vertical-align:top;">${label}</td>
      <td style="padding:11px 0;border-bottom:1px solid #eceef0;color:#14171c;font-size:14px;">${value}</td>
    </tr>`;

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f6f7f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f7f8;padding:28px 14px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 8px 30px rgba(20,23,28,.10);">

        <tr><td style="height:6px;background:repeating-linear-gradient(-45deg,#f5a623 0 12px,#14171c 12px 24px);"></td></tr>

        <tr><td style="background:#14171c;padding:26px 30px;">
          <div style="color:#f5a623;font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase;">Kamal Engineering</div>
          <div style="color:#ffffff;font-size:21px;font-weight:800;margin-top:6px;">New Website Enquiry</div>
          <div style="color:#8d95a2;font-size:12px;margin-top:5px;">Scaffolding &bull; Painting &bull; Insulation</div>
        </td></tr>

        <tr><td style="padding:28px 30px;">
          <div style="background:#fff9ea;border-left:4px solid #f5a623;border-radius:8px;padding:14px 16px;margin-bottom:22px;">
            <div style="font-size:12px;color:#b45a09;font-weight:800;text-transform:uppercase;letter-spacing:.6px;">Service Requested</div>
            <div style="font-size:16px;color:#14171c;font-weight:700;margin-top:4px;">${e.service}</div>
          </div>

          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
            ${row("Name", `<strong>${e.name}</strong>`)}
            ${row("Company", e.company)}
            ${row("Email", `<a href="mailto:${e.email}" style="color:#b45a09;font-weight:700;text-decoration:none;">${e.email}</a>`)}
            ${row("Phone", `<a href="tel:${e.phone}" style="color:#14171c;font-weight:700;text-decoration:none;">${e.phone}</a>`)}
            ${row("Site Location", e.location)}
            ${row("Timeline", e.timeline)}
          </table>

          <div style="margin-top:24px;">
            <div style="font-size:12px;font-weight:800;color:#6e7684;text-transform:uppercase;letter-spacing:.6px;margin-bottom:9px;">Project Details</div>
            <div style="background:#f6f7f8;border-left:4px solid #14171c;border-radius:8px;padding:15px 16px;color:#2b2f36;font-size:14px;line-height:1.65;">${e.message}</div>
          </div>

          <table role="presentation" width="100%" style="margin-top:22px;border-collapse:collapse;background:#f6f7f8;border-radius:8px;">
            <tr><td style="padding:9px 13px;color:#8d95a2;font-size:11px;font-weight:700;width:90px;">Submitted</td><td style="padding:9px 13px;color:#575e6b;font-size:11px;">${e.submittedAt}</td></tr>
            <tr><td style="padding:9px 13px;color:#8d95a2;font-size:11px;font-weight:700;">Source</td><td style="padding:9px 13px;color:#575e6b;font-size:11px;word-break:break-all;">${e.sourceUrl}</td></tr>
            <tr><td style="padding:9px 13px;color:#8d95a2;font-size:11px;font-weight:700;">IP</td><td style="padding:9px 13px;color:#575e6b;font-size:11px;">${e.ip}</td></tr>
          </table>

          <div style="margin-top:24px;text-align:center;">
            <a href="mailto:${e.email}" style="display:inline-block;background:#f5a623;color:#14171c;font-weight:800;font-size:14px;text-decoration:none;padding:13px 28px;border-radius:8px;">Reply to ${e.name}</a>
          </div>
        </td></tr>

        <tr><td style="background:#14171c;color:#6e7684;padding:16px 30px;text-align:center;font-size:11px;line-height:1.6;">
          Sent automatically from the Kamal Engineering website contact form.<br>Sayan, Surat, Gujarat &mdash; Pan-India Service
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

/* ---------------- providers ---------------- */

async function readBody(res: Response) {
  const text = await res.text();
  if (!text) return null;
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return text;
  }
}

function providerError(data: unknown, fallback: string) {
  if (typeof data === "string" && data) return data.slice(0, 250);
  if (data && typeof data === "object") {
    const r = data as Record<string, unknown>;
    const m = r.message ?? r.error;
    if (typeof m === "string" && m) return m.slice(0, 250);
  }
  return fallback;
}

async function sendWeb3Forms(c: Clean, subject: string, text: string, html: string) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
      subject,
      from_name: "Kamal Engineering Website",
      replyto: c.email,
      name: c.name,
      email: c.email,
      phone: c.phone,
      company: c.company,
      service: c.service,
      location: c.location,
      timeline: c.timeline,
      message: text,
      html,
    }),
  });
  const data = await readBody(res);
  const ok = Boolean(data && typeof data === "object" && "success" in data && data.success);
  if (!res.ok || !ok) throw new Error(providerError(data, "Web3Forms could not deliver the enquiry."));
}

async function sendResend(c: Clean, to: string, subject: string, text: string, html: string) {
  const from = process.env.CONTACT_FROM_EMAIL || "Kamal Engineering <onboarding@resend.dev>";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({ from, to: [to], subject, text, html, reply_to: c.email }),
  });
  const data = await readBody(res);
  if (!res.ok) throw new Error(providerError(data, "Resend could not deliver the enquiry."));
}

async function sendFormspree(c: Clean, subject: string, text: string) {
  const endpoint =
    process.env.FORMSPREE_ENDPOINT ||
    (process.env.FORMSPREE_FORM_ID ? `https://formspree.io/f/${process.env.FORMSPREE_FORM_ID}` : "");
  if (!endpoint) throw new Error("Formspree endpoint is missing.");

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: c.name,
      email: c.email,
      phone: c.phone,
      company: c.company,
      service: c.service,
      location: c.location,
      timeline: c.timeline,
      message: text,
      _subject: subject,
      _replyto: c.email,
    }),
  });
  const data = await readBody(res);
  if (!res.ok) throw new Error(providerError(data, "Formspree could not deliver the enquiry."));
}

/* ---------------- rate limiting (best effort, per instance) ---------------- */

const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function rateLimited(ip: string) {
  if (ip === "Unknown") return false;
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  return false;
}

/* ---------------- handler ---------------- */

export async function POST(request: NextRequest) {
  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request. Please refresh the page and try again." },
      { status: 400 }
    );
  }

  const ip = clientIp(request);

  if (rateLimited(ip)) {
    return NextResponse.json(
      {
        success: false,
        error: "Too many enquiries from this connection. Please wait a few minutes, or call us directly.",
      },
      { status: 429 }
    );
  }

  const result = validate(payload);

  if ("error" in result) {
    // Honeypot triggered — pretend success so bots do not retry
    if (result.error === "SPAM") {
      return NextResponse.json({ success: true, message: "Thank you for your enquiry." });
    }
    return NextResponse.json({ success: false, error: result.error }, { status: 400 });
  }

  const c = result.contact;
  const to = process.env.CONTACT_TO_EMAIL || DEFAULT_RECIPIENT;
  const meta = {
    submittedAt: new Intl.DateTimeFormat("en-IN", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    }).format(new Date()),
    sourceUrl: request.headers.get("referer") || "Website contact form",
    ip,
  };

  const subject = `[Enquiry] ${c.service} — ${c.name}${c.company !== "Not provided" ? ` (${c.company})` : ""}`;
  const text = buildText(c, meta);
  const html = buildHtml(c, meta);

  const providers: Array<{ name: string; send: () => Promise<void> }> = [];

  if (process.env.WEB3FORMS_ACCESS_KEY)
    providers.push({ name: "Web3Forms", send: () => sendWeb3Forms(c, subject, text, html) });
  if (process.env.RESEND_API_KEY)
    providers.push({ name: "Resend", send: () => sendResend(c, to, subject, text, html) });
  if (process.env.FORMSPREE_ENDPOINT || process.env.FORMSPREE_FORM_ID)
    providers.push({ name: "Formspree", send: () => sendFormspree(c, subject, text) });

  if (providers.length === 0) {
    console.error("[contact] No email provider configured.", {
      to,
      name: c.name,
      email: c.email,
      phone: c.phone,
      service: c.service,
    });
    return NextResponse.json(
      {
        success: false,
        error:
          "Our enquiry email service is not configured yet. Please call or WhatsApp us directly — we will respond immediately.",
      },
      { status: 503 }
    );
  }

  const failures: string[] = [];

  for (const p of providers) {
    try {
      await p.send();
      return NextResponse.json({
        success: true,
        message: "Your enquiry has reached Kamal Engineering.",
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown delivery error.";
      failures.push(`${p.name}: ${msg}`);
      console.error(`[contact] delivery failed via ${p.name}:`, msg);
    }
  }

  return NextResponse.json(
    {
      success: false,
      error:
        "We could not send your enquiry right now. Please try again in a moment, or call / WhatsApp us directly.",
      details: process.env.NODE_ENV === "development" ? failures : undefined,
    },
    { status: 502 }
  );
}

export async function GET() {
  const configured = Boolean(
    process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.RESEND_API_KEY ||
      process.env.FORMSPREE_ENDPOINT ||
      process.env.FORMSPREE_FORM_ID
  );
  return NextResponse.json({
    ok: true,
    emailConfigured: configured,
    hint: configured
      ? "Contact form is ready to deliver enquiries."
      : "Set WEB3FORMS_ACCESS_KEY in Vercel to enable email delivery.",
  });
}
