import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { COMPANY, NAV_LINKS, TEAM } from "@/lib/constants";
import { services } from "@/data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-steel-950 text-steel-300">
      <div className="hazard h-1.5" aria-hidden />
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-safety/[0.07] blur-3xl"
        aria-hidden
      />

      <div className="container-x relative">
        {/* CTA strip */}
        <div className="border-b border-white/10 py-12 md:py-14">
          <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-white md:text-[2rem] balance">
                Have a shutdown date or a site to cover?
              </h2>
              <p className="mt-3 text-[0.975rem] leading-relaxed text-steel-400 pretty">
                Send us the scope and drawings — you will typically have an itemised quotation back
                within one working day.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link href="/contact" className="btn btn-amber">
                Request a Quote
                <Icon name="arrow" size={17} />
              </Link>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass"
              >
                <Icon name="whatsapp" size={17} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="inline-flex rounded-xl bg-white px-4 py-3">
              <Image
                src="/Kamal Engg Logo.png"
                alt={COMPANY.name}
                width={200}
                height={64}
                className="h-11 w-auto"
              />
            </div>
            <p className="mt-5 max-w-sm text-[0.925rem] leading-relaxed text-steel-400 pretty">
              A multi-discipline industrial services contractor delivering scaffolding access,
              protective painting and thermal insulation for refineries, plants and construction
              projects across India.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Scaffolding", "Painting", "Insulation"].map((d) => (
                <span key={d} className="chip-dark">
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white">Company</h3>
            <ul className="mt-5 space-y-3">
              {[...NAV_LINKS, { label: "Contact", href: "/contact" }].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[0.9rem] text-steel-400 transition-colors hover:text-safety"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="text-[0.9rem] text-steel-400 transition-colors hover:text-safety"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white">Get in Touch</h3>
            <ul className="mt-5 space-y-4 text-[0.9rem]">
              <li className="flex gap-3">
                <Icon name="map" size={17} className="mt-0.5 shrink-0 text-safety" />
                <span className="text-steel-400">
                  {COMPANY.address.line1}
                  <br />
                  {COMPANY.address.line2}
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" size={17} className="mt-0.5 shrink-0 text-safety" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="break-all text-steel-400 transition-colors hover:text-safety"
                >
                  {COMPANY.email}
                </a>
              </li>
              {TEAM.map((t) => (
                <li key={t.phone} className="flex gap-3">
                  <Icon name="phone" size={17} className="mt-0.5 shrink-0 text-safety" />
                  <span className="text-steel-400">
                    <a
                      href={`tel:+91${t.phone}`}
                      className="font-semibold text-white transition-colors hover:text-safety"
                    >
                      +91 {t.phone}
                    </a>
                    <br />
                    <span className="text-[0.8rem]">
                      {t.name} — {t.department}
                    </span>
                  </span>
                </li>
              ))}
              <li className="flex gap-3">
                <Icon name="clock" size={17} className="mt-0.5 shrink-0 text-safety" />
                <span className="text-steel-400">{COMPANY.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service area */}
        <div className="border-t border-white/10 py-6">
          <p className="text-center text-[0.8rem] text-steel-500">
            <span className="font-semibold text-steel-400">Service Area:</span> {COMPANY.serviceArea}
          </p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-[0.8rem] text-steel-500 sm:flex-row">
          <p>
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            {COMPANY.legalLine} — {COMPANY.address.city}, {COMPANY.address.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
