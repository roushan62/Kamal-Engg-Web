import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Kamal Engineering | Engineered Scaffolding Solutions for Construction & Industry",
    template: "%s | Kamal Engineering",
  },
  description:
    "Professional scaffolding erection, dismantling, supply & service across India. H-Frame, Tubular (Tube & Coupler), Cuplock scaffolding systems. Safety-compliant, trained crew, fast mobilization for construction, industrial, and infrastructure projects.",
  keywords: [
    "scaffolding services",
    "scaffolding erection",
    "scaffolding dismantling",
    "H-Frame scaffolding",
    "tubular scaffolding",
    "tube and coupler scaffolding",
    "cuplock scaffolding",
    "scaffolding rental",
    "scaffolding supply",
    "industrial scaffolding",
    "construction scaffolding",
    "scaffolding India",
    "safety scaffolding",
    "Kamal Engineering",
  ],
  authors: [{ name: "Kamal Engineering" }],
  metadataBase: new URL("https://kamalengineering.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Kamal Engineering",
    title: "Kamal Engineering | Engineered Scaffolding Solutions",
    description:
      "Professional scaffolding erection, dismantling, supply & service across India. Safety-compliant, trained crew, fast mobilization.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-body antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
