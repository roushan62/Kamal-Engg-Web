# Kamal Engineering — Website

**Scaffolding • Painting • Insulation**
Multi-discipline industrial services contractor — Sayan, Surat, Gujarat. Pan-India service.

Live site runs entirely on **GitHub → Vercel**. No separate server, no third-party hosting, no database.

---

## Quick Start for the Owner (Non-Technical)

You only need to do **two things** to go live:

### Step 1 — Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in **with your GitHub account**.
2. Click **Add New… → Project**.
3. Find this repository (`Kamal-Engg-Web`) and click **Import**.
4. Leave every setting as it is. Click **Deploy**.
5. Wait ~2 minutes. Your website is live.

### Step 2 — Make the contact form email you

The form needs one free key so enquiries land in your inbox.

1. Go to **[web3forms.com](https://web3forms.com)**.
2. Type `sales.kamalengg01@gmail.com` in the box and click **Create Access Key**.
3. Check that Gmail inbox — you will receive an **Access Key** (a long code).
4. Back in Vercel, open your project → **Settings → Environment Variables**.
5. Add these two, then click **Save** on each:

   | Name | Value |
   |------|-------|
   | `CONTACT_TO_EMAIL` | `sales.kamalengg01@gmail.com` |
   | `WEB3FORMS_ACCESS_KEY` | *(paste the key from your email)* |

6. Go to the **Deployments** tab → click the **…** menu on the latest one → **Redeploy**.
7. Open your live site, go to **Contact**, and submit a test enquiry. It should arrive in Gmail.

> **Check it is working anytime:** visit `your-site-url/api/contact` in a browser.
> It should say `"emailConfigured": true`.

That is the entire setup. Nothing else to maintain.

---

## What Happens When Someone Submits the Form

1. The form posts to `/api/contact` — a Vercel serverless function (part of this repo).
2. The function validates the input, blocks spam bots (honeypot + rate limiting).
3. It sends you a **formatted HTML email** with all the enquiry details.
4. You can hit **Reply** in Gmail and it replies straight to the customer.

If Web3Forms ever fails, the route automatically falls back to Resend or Formspree — but only if you have configured those. See `.env.example`.

---

## Site Structure

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, three disciplines, services, why us, clients, process, safety, projects, industries |
| About | `/about` | Story, mission/vision, values, capabilities, team contacts, process |
| Services | `/services` | 7 service lines in detail + full material inventory |
| Projects | `/projects` | Filterable portfolio by sector |
| Industries | `/industries` | 6 sectors with typical applications |
| Safety | `/safety` | Practices, scaffold tagging, standards, PPE, golden rules |
| FAQ | `/faq` | 15 searchable/filterable questions |
| Contact | `/contact` | Enquiry form, team cards, company details, map |

Plus auto-generated `/sitemap.xml` and `/robots.txt`.

---

## Editing Content (No Coding Needed for Most Things)

Almost all text lives in three files. Edit them on GitHub directly — Vercel redeploys automatically when you save.

| What you want to change | File |
|---|---|
| Phone, email, address, hours, stats | `src/lib/constants.ts` |
| Services, features, specs | `src/data/services.ts` |
| Projects, clients, industries, FAQs, safety, materials | `src/data/content.ts` |

**Photos:** replace files in `public/images/` keeping the same filename, and the site updates automatically.

---

## Tech Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** — custom industrial design system in `src/app/globals.css`
- **Framer Motion** — scroll reveals, page transitions, animated counters
- **Self-hosted fonts** (Sora + Inter via Fontsource) — no external font requests, faster loads
- **Vercel serverless** — contact API only

### Performance & Quality

- Static pre-rendering for all 8 pages
- AVIF/WebP image optimisation with long-lived cache headers
- Self-hosted fonts (no render-blocking Google Fonts request)
- `prefers-reduced-motion` respected across every animation
- Security headers configured in `next.config.ts`
- Full keyboard navigation, skip-to-content link, ARIA labels, focus rings
- JSON-LD structured data (`GeneralContractor` + `FAQPage`) for Google

---

## Local Development (Optional)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

---

## Content Accuracy Notes

- **Stats** are conservative (`50+ projects`, `5+ years`) — update in `src/lib/constants.ts` when you have firm numbers.
- **Client names** are presented as end-user sites served through principal contractors, with a clear disclaimer. No endorsement or direct-contract claim is made.
- **Safety** references IS 3696, IS 4014 and the BOCW Act as practices followed. No certifications are claimed that the company does not hold.
- **Project photos** are representative industrial imagery. Swap in real site photos in `public/images/` when available.
