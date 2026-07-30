import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, phone, service, message } = body;

    // Validate required fields
    if (!name || !phone || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const recipientEmail = "sales.kamalengg01@gmail.com";
    const subject = `[New Enquiry] Scaffolding Request from ${name}`;

    // Professional HTML Email Template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Scaffolding Enquiry</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              color: #2b2f36;
              background-color: #f4f5f7;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border: 1px solid #e1e4eb;
              border-radius: 6px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            }
            .header {
              background-color: #1a1d23;
              color: #ffffff;
              padding: 24px;
              border-bottom: 4px solid #f5a623;
              text-align: center;
            }
            .logo-text {
              font-size: 20px;
              font-weight: bold;
              letter-spacing: 1px;
              text-transform: uppercase;
              color: #ffffff;
              margin: 0;
            }
            .logo-subtext {
              font-size: 11px;
              color: #f5a623;
              margin: 4px 0 0 0;
              letter-spacing: 2px;
              text-transform: uppercase;
            }
            .content {
              padding: 30px;
            }
            .title {
              font-size: 18px;
              font-weight: 600;
              color: #1a1d23;
              margin-top: 0;
              margin-bottom: 20px;
              border-bottom: 1px solid #e1e4eb;
              padding-bottom: 10px;
            }
            .field-row {
              margin-bottom: 15px;
              display: flex;
              flex-wrap: wrap;
            }
            .field-label {
              width: 150px;
              font-weight: bold;
              color: #5d6470;
              font-size: 14px;
            }
            .field-value {
              flex: 1;
              color: #1a1d23;
              font-size: 14px;
              min-width: 200px;
            }
            .message-box {
              background-color: #f8f9fa;
              border-left: 4px solid #f5a623;
              padding: 15px;
              margin-top: 20px;
              font-size: 14px;
              line-height: 1.5;
              white-space: pre-wrap;
              color: #2b2f36;
            }
            .footer {
              background-color: #f8f9fa;
              padding: 15px 30px;
              font-size: 11px;
              color: #7a8290;
              border-top: 1px solid #e1e4eb;
              text-align: center;
            }
            .footer p {
              margin: 4px 0;
            }
            .action-badge {
              display: inline-block;
              background-color: #f5a623;
              color: #1a1d23;
              font-weight: bold;
              padding: 3px 8px;
              border-radius: 3px;
              font-size: 12px;
              text-transform: uppercase;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo-text">Kamal Engineering</div>
              <div class="logo-subtext">Scaffolding Erection, Dismantling & Services</div>
            </div>
            <div class="content">
              <h3 class="title">New Client Enquiry Received</h3>
              
              <div class="field-row">
                <div class="field-label">Name:</div>
                <div class="field-value"><strong>${name}</strong></div>
              </div>
              
              <div class="field-row">
                <div class="field-label">Company:</div>
                <div class="field-value">${company || "Not Provided"}</div>
              </div>
              
              <div class="field-row">
                <div class="field-label">Phone:</div>
                <div class="field-value">
                  <a href="tel:${phone}" style="color: #1a1d23; text-decoration: none; font-weight: bold;">
                    ${phone}
                  </a>
                </div>
              </div>
              
              <div class="field-row">
                <div class="field-label">Service Type:</div>
                <div class="field-value">
                  <span class="action-badge">${service}</span>
                </div>
              </div>
              
              <div style="margin-top: 20px; font-weight: bold; color: #5d6470; font-size: 14px;">
                Project Details / Message:
              </div>
              <div class="message-box">${message}</div>
            </div>
            <div class="footer">
              <p>This email was automatically generated from the contact form on your website.</p>
              <p>Please reply directly to the customer's phone or email coordinates.</p>
              <p>&copy; ${new Date().getFullYear()} Kamal Engineering. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Try routing via different services based on set environment variables.
    let emailSent = false;
    let serviceUsed = "none";

    // 1. RESEND INTEGRATION (Industry Standard for Vercel/Next.js)
    if (process.env.RESEND_API_KEY) {
      try {
        console.log("Attempting email dispatch via Resend API...");
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Kamal Engineering <onboarding@resend.dev>", // Or verified domain like info@kamalengg.com once DNS configured
            to: recipientEmail,
            subject: subject,
            html: emailHtml,
            reply_to: phone, // Can be customer contact
          }),
        });

        const data = await res.json();
        if (res.ok) {
          console.log("Resend delivery successful! ID:", data.id);
          emailSent = true;
          serviceUsed = "Resend";
        } else {
          console.error("Resend API error:", data);
        }
      } catch (err) {
        console.error("Resend delivery connection failed:", err);
      }
    }

    // 2. WEB3FORMS FALLBACK
    if (!emailSent && process.env.WEB3FORMS_ACCESS_KEY) {
      try {
        console.log("Attempting email dispatch via Web3Forms API...");
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: process.env.WEB3FORMS_ACCESS_KEY,
            name: name,
            email: "sales.kamalengg01@gmail.com", // Since we don't have customer email always
            subject: subject,
            from_name: "Kamal Engineering Website",
            message: `Name: ${name}\nCompany: ${company}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`,
            html: emailHtml,
          }),
        });

        const data = await res.json();
        if (res.ok && data.success) {
          console.log("Web3Forms delivery successful!");
          emailSent = true;
          serviceUsed = "Web3Forms";
        } else {
          console.error("Web3Forms API error:", data);
        }
      } catch (err) {
        console.error("Web3Forms delivery failed:", err);
      }
    }

    // 3. FORMSPREE FALLBACK
    if (!emailSent && process.env.FORMSPREE_FORM_ID) {
      try {
        console.log("Attempting email dispatch via Formspree...");
        const res = await fetch(`https://formspree.io/f/${process.env.FORMSPREE_FORM_ID}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            company,
            phone,
            service,
            message,
            _subject: subject,
          }),
        });

        if (res.ok) {
          console.log("Formspree delivery successful!");
          emailSent = true;
          serviceUsed = "Formspree";
        } else {
          const data = await res.json();
          console.error("Formspree API error:", data);
        }
      } catch (err) {
        console.error("Formspree delivery failed:", err);
      }
    }

    // Fallback log if no active email delivery service is configured.
    if (!emailSent) {
      console.warn(
        "⚠️ CONTACT FORM SUBMISSION NOT DELIVERED VIA EMAIL!\n" +
        "To enable real email routing on Vercel, please set up one of the following environment variables:\n" +
        "1. RESEND_API_KEY (Recommended: get a key from resend.com)\n" +
        "2. WEB3FORMS_ACCESS_KEY (Get a free key from web3forms.com)\n" +
        "3. FORMSPREE_FORM_ID (Get a form ID from formspree.io)\n" +
        "Current submission payload:",
        { name, company, phone, service, message }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: emailSent
          ? `Enquiry delivered successfully via ${serviceUsed}.`
          : "Enquiry logged successfully. Set up RESEND_API_KEY on Vercel for real-time email routing.",
        delivered: emailSent,
        service: serviceUsed,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
