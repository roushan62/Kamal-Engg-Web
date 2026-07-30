# Kamal Engineering Website

**Engineered Scaffolding Solutions for Construction & Industrial Projects**

A modern, safety-focused B2B industrial services website built with Next.js 16 (App Router), Tailwind CSS v4, and Framer Motion.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (scroll-based reveals, subtle transitions)
- **Deployment:** Vercel (serverless) via GitHub
- **Contact Form:** Vercel serverless API route (`/api/contact`) with email delivery via Web3Forms (free), Resend, or Formspree

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (metadata, nav, footer)
│   ├── page.tsx                # Home page
│   ├── globals.css             # Tailwind v4 + custom theme (colors, animations)
│   ├── robots.ts               # robots.txt generation
│   ├── sitemap.ts              # sitemap.xml generation
│   ├── about/page.tsx          # About Us
│   ├── services/page.tsx       # Services (all 5 with detail sections)
│   ├── safety/page.tsx         # Safety & Compliance
│   ├── projects/page.tsx       # Project Gallery with filter
│   ├── industries/page.tsx     # Industries Served
│   ├── contact/page.tsx        # Contact form + team cards + map placeholder
│   ├── faq/page.tsx            # FAQ (accordion)
│   └── api/contact/route.ts   # Serverless contact form handler
├── components/
│   ├── Navbar.tsx              # Fixed navigation with mobile menu
│   ├── Footer.tsx              # 4-column footer with links & contacts
│   ├── PageHeader.tsx          # Reusable page header with gradient
│   ├── ScrollReveal.tsx        # Framer Motion scroll animation wrapper
│   ├── StatsCounter.tsx        # Animated stats counter strip
│   ├── CTABanner.tsx           # Call-to-action banner (dark/light variants)
│   ├── ServiceCard.tsx         # Service card with icon, features, CTA
│   ├── IndustryCard.tsx        # Industry card with applications list
│   ├── ContactForm.tsx         # Contact form with validation
│   ├── PlaceholderImage.tsx    # CMS-ready image placeholder
│   └── WhatsAppButton.tsx      # Floating WhatsApp button
├── data/
│   ├── services.ts             # 5 service detail objects
│   └── content.ts              # Projects, industries, FAQs, safety, differentiators
└── lib/
    ├── types.ts                # TypeScript interfaces
    └── constants.ts            # Company info, team, navigation, stats
```

## Color Theme

| Token | Hex | Usage |
|-------|-----|-------|
| `steel` | `#2B2F36` | Body text, UI elements |
| `steel-dark` / `navy` | `#1A1D23` | Section backgrounds, footer, headers |
| `safety` | `#F5A623` | Accents, CTAs, badges, icons |
| `white` | `#FFFFFF` | Cards, page backgrounds |

## Pages & SEO Meta

| Page | Title | Description |
|------|-------|-------------|
| Home | Kamal Engineering \| Engineered Scaffolding Solutions for Construction & Industry | Professional scaffolding erection, dismantling, supply & service across India. |
| About | About Us \| Kamal Engineering | A modern, process-driven scaffolding partner built on technical expertise and safety compliance. |
| Services | Our Services \| Kamal Engineering | Comprehensive scaffolding solutions — H-Frame, Tubular, Cuplock, Erection & Dismantling, Supply. |
| Safety | Safety & Compliance \| Kamal Engineering | IS 3696 compliant scaffolding practices with trained crews and documented safety protocols. |
| Projects | Projects \| Kamal Engineering | Project portfolio across industrial, commercial, infrastructure, and residential sectors. |
| Industries | Industries \| Kamal Engineering | Scaffolding solutions for construction, industrial plants, infrastructure, warehousing, and fit-out. |
| Contact | Contact Us \| Kamal Engineering | Get in touch for scaffolding enquiries — call, WhatsApp, or send a message. |
| FAQ | FAQ \| Kamal Engineering | Answers to common questions about our scaffolding services, safety, and billing. |

## Placeholder Image Slots

Real project photos can be swapped in by replacing `<PlaceholderImage>` components with Next.js `<Image>` tags. Here's the complete list:

| # | Page | Label | Aspect Ratio |
|---|------|-------|-------------|
| 1 | Home (project preview) | `[PROJECT PHOTO: Cuplock scaffolding at cement plant]` | video |
| 2 | Home (project preview) | `[PROJECT PHOTO: H-Frame on commercial facade]` | video |
| 3 | Home (project preview) | `[PROJECT PHOTO: Tubular scaffolding under bridge]` | video |
| 4 | About | `[SITE PHOTO: Kamal Engineering team at project site — scaffolding structure in background]` | video |
| 5 | Services (Erection) | `[SITE PHOTO: Scaffolding crew during erection at project site]` | video |
| 6 | Services (H-Frame) | `[PROJECT PHOTO: H-Frame scaffolding on building facade]` | video |
| 7 | Services (Tubular) | `[PROJECT PHOTO: Tubular scaffolding at industrial plant or bridge]` | video |
| 8 | Services (Cuplock) | `[PROJECT PHOTO: Cuplock scaffolding at high-rise or industrial site]` | video |
| 9 | Services (Supply) | `[SITE PHOTO: Scaffolding material yard / inventory display]` | video |
| 10 | Projects (6 cards) | `[PROJECT PHOTO: ...]` — one per project card | video |
| 11 | Industries (4 cards) | `[PROJECT PHOTO: Scaffolding at ...]` — one per industry example | wide |
| 12 | Contact | Google Maps embed iframe | — |

**How to replace:** In any file, search for `<PlaceholderImage label="[...]"` and replace with:
```tsx
<Image src="/images/your-photo.jpg" alt="Description" width={800} height={450} className="rounded-lg object-cover w-full" />
```

## Stats Placeholders (need real data)

All stats are marked `[UPDATE WITH REAL DATA]` — search for this tag to find them:

- Projects Completed: currently shows 120+
- Scaffolding Deployed: currently shows 2,500 MT
- Years Experience: currently shows 8+
- Safety Record: currently shows 100%

## Safety Verification

Search for `[VERIFY WITH OPERATIONS TEAM BEFORE PUBLISHING]` — exact certification statuses must be confirmed before go-live.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment (Vercel)

This project is ready for GitHub → Vercel deployment. No separate backend server is needed; Vercel runs `src/app/api/contact/route.ts` as a serverless function.

1. Push/import this GitHub repo in Vercel.
2. In Vercel, open **Project Settings → Environment Variables**.
3. Add the contact form variables from `.env.example`:
   - `CONTACT_TO_EMAIL=sales.kamalengg01@gmail.com`
   - `WEB3FORMS_ACCESS_KEY=your_free_web3forms_key`
4. Redeploy the project.
5. Test `/contact` by submitting the form. The enquiry should arrive at the configured email.

## Contact Form Integration

The contact form posts to `/api/contact` and the serverless route sends the enquiry email. The route now returns an error if no email service is configured, so submissions are not shown as successful unless delivery is actually attempted through a configured provider.

### Recommended free setup: Web3Forms

1. Go to [Web3Forms](https://web3forms.com/) and create a free access key for `sales.kamalengg01@gmail.com`.
2. Add the key in Vercel as `WEB3FORMS_ACCESS_KEY`.
3. Keep `CONTACT_TO_EMAIL` set to the email address where leads should arrive.
4. Redeploy and test the contact form.

### Optional alternatives

The same `/api/contact` route also supports these environment variables if you prefer another provider:

- `RESEND_API_KEY` and optional `CONTACT_FROM_EMAIL`
- `FORMSPREE_FORM_ID` or `FORMSPREE_ENDPOINT`

No frontend code change is required for any of these providers.

## Design Notes

- **No founder/owner identity** displayed — company is represented as a team/organization
- **No GST number or GST claims** — billing note in FAQ explains current status neutrally
- **Safety language is standards-based** — references IS 3696 and OSHA guidelines without fabricating certifications
- **Contact information** is restricted to the two specified team members with their exact roles
- **Visual language** uses steel grey + safety yellow — industrial, engineering-forward, no construction clichés
