import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ScrollProgress from "@/components/ScrollProgress";
import { COMPANY } from "@/lib/constants";
import "@fontsource-variable/sora";
import "@fontsource-variable/inter";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#14171c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.siteUrl),
  title: {
    default: "Kamal Engineering | Scaffolding, Painting & Insulation Services in India",
    template: "%s | Kamal Engineering",
  },
  description: COMPANY.description,
  applicationName: COMPANY.name,
  keywords: [
    "scaffolding services India",
    "scaffolding contractor Surat",
    "scaffolding on rent Gujarat",
    "cuplock scaffolding",
    "tube and coupler scaffolding",
    "H frame scaffolding",
    "scaffolding erection and dismantling",
    "industrial painting contractor",
    "protective coating services",
    "thermal insulation contractor",
    "cold insulation services",
    "refinery shutdown scaffolding",
    "turnaround scaffolding services",
    "Kamal Engineering",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: COMPANY.siteUrl,
    siteName: COMPANY.name,
    title: "Kamal Engineering | Scaffolding, Painting & Insulation Services",
    description: COMPANY.description,
    images: [{ url: "/images/hero-main.jpg", width: 1536, height: 1024, alt: "Kamal Engineering scaffolding at an industrial site" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamal Engineering | Scaffolding, Painting & Insulation",
    description: COMPANY.description,
    images: ["/images/hero-main.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "Industrial Services",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: COMPANY.name,
  description: COMPANY.description,
  url: COMPANY.siteUrl,
  email: COMPANY.email,
  telephone: COMPANY.phone.primary,
  image: `${COMPANY.siteUrl}/images/hero-main.jpg`,
  logo: `${COMPANY.siteUrl}/Kamal Engg Logo.png`,
  slogan: COMPANY.legalLine,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.line1,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.state,
    postalCode: COMPANY.address.postalCode,
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  openingHours: "Mo-Sa 09:00-19:00",
  knowsAbout: [
    "Scaffolding erection and dismantling",
    "Cuplock scaffolding",
    "Tube and coupler scaffolding",
    "H-Frame scaffolding",
    "Industrial protective painting",
    "Thermal and cold insulation",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Industrial Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Scaffolding Erection & Dismantling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industrial Protective Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Thermal & Cold Insulation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Scaffolding Material Supply & Hire" } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-lg focus:bg-safety focus:px-5 focus:py-3 focus:font-semibold focus:text-steel-950"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
