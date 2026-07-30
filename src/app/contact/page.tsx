import type { Metadata } from "next";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import { COMPANY, TEAM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free quotation for scaffolding, industrial painting or thermal insulation. Call +91 8797304532, WhatsApp us, or send an enquiry. Based in Sayan, Surat, Gujarat — serving all of India.",
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(COMPANY.mapQuery)}&output=embed`;

  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get In Touch"
        title="Tell us what you need — we will come back within a working day"
        description="Whether it is a full turnaround access package or a few tonnes of material on hire, send the details and get an itemised quotation. No obligation, no sales pressure."
        image="/images/yard-materials.jpg"
        chips={["Free Site Survey", "Itemised Quotation", "Pan-India Mobilisation"]}
      />

      {/* Quick contact cards */}
      <section className="relative -mt-px bg-steel-50 py-14 md:py-16">
        <div className="container-x">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
            {[
              {
                icon: "phone",
                title: "Call Us",
                lines: [COMPANY.phone.primary, COMPANY.phone.secondary],
                href: `tel:${COMPANY.phone.primary.replace(/\s/g, "")}`,
                cta: "Tap to call",
              },
              {
                icon: "whatsapp",
                title: "WhatsApp",
                lines: [COMPANY.phone.primary, "Fastest response"],
                href: `https://wa.me/${COMPANY.whatsapp}`,
                cta: "Start a chat",
              },
              {
                icon: "mail",
                title: "Email",
                lines: [COMPANY.email],
                href: `mailto:${COMPANY.email}`,
                cta: "Send an email",
              },
              {
                icon: "map",
                title: "Visit / Post",
                lines: [COMPANY.address.line1, COMPANY.address.line2],
                href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.mapQuery)}`,
                cta: "Open in Maps",
              },
            ].map((c) => (
              <StaggerItem key={c.title} className="h-full">
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="card group flex h-full flex-col p-6"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-steel-950 text-safety transition-all duration-300 group-hover:bg-safety group-hover:text-steel-950">
                    <Icon name={c.icon} size={22} />
                  </span>
                  <h3 className="mt-5 text-[1rem] font-bold text-steel-950">{c.title}</h3>
                  <div className="mt-2 flex-1 space-y-0.5">
                    {c.lines.map((l) => (
                      <p key={l} className="break-words text-[0.85rem] leading-snug text-steel-500">
                        {l}
                      </p>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.75rem] font-bold uppercase tracking-wider text-safety-700">
                    {c.cta}
                    <Icon
                      name="arrow"
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="section-y">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
            <Reveal>
              <ContactForm />
            </Reveal>

            <div className="space-y-6">
              {/* Team */}
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-steel-200 bg-white p-6 md:p-7">
                  <h3 className="text-[1.1rem] font-bold text-steel-950">Talk to the right person</h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-steel-500 pretty">
                    Commercial and site matters have separate owners — reach them directly.
                  </p>
                  <div className="mt-5 space-y-4">
                    {TEAM.map((t) => (
                      <div key={t.phone} className="rounded-xl border border-steel-200 bg-steel-50 p-4">
                        <div className="flex items-start gap-3.5">
                          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-steel-950 font-sans text-[0.85rem] font-extrabold text-safety">
                            {t.name
                              .split(" ")
                              .map((w) => w[0])
                              .join("")}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="text-[0.95rem] font-bold text-steel-950">{t.name}</p>
                            <p className="text-[0.78rem] font-semibold text-safety-700">{t.role}</p>
                            <p className="mt-1.5 text-[0.78rem] leading-snug text-steel-500 pretty">
                              {t.focus}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <a
                                href={`tel:+91${t.phone}`}
                                className="inline-flex items-center gap-1.5 rounded-lg bg-steel-950 px-3 py-2 text-[0.75rem] font-bold text-white transition-colors hover:bg-steel-800"
                              >
                                <Icon name="phone" size={13} />
                                +91 {t.phone}
                              </a>
                              <a
                                href={`https://wa.me/91${t.phone}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-2 text-[0.75rem] font-bold text-white transition-opacity hover:opacity-90"
                              >
                                <Icon name="whatsapp" size={13} />
                                Chat
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Details */}
              <Reveal delay={0.18}>
                <div className="rounded-2xl border border-steel-200 bg-steel-950 p-6 text-steel-300 md:p-7">
                  <h3 className="text-[1.1rem] font-bold text-white">Company details</h3>
                  <ul className="mt-5 space-y-4 text-[0.875rem]">
                    <li className="flex gap-3">
                      <Icon name="map" size={17} className="mt-0.5 shrink-0 text-safety" />
                      <span>
                        <span className="block font-semibold text-white">Registered Location</span>
                        {COMPANY.address.line1}
                        <br />
                        {COMPANY.address.line2}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="clock" size={17} className="mt-0.5 shrink-0 text-safety" />
                      <span>
                        <span className="block font-semibold text-white">Working Hours</span>
                        {COMPANY.hours}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="truck" size={17} className="mt-0.5 shrink-0 text-safety" />
                      <span>
                        <span className="block font-semibold text-white">Service Area</span>
                        {COMPANY.serviceArea}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="layers" size={17} className="mt-0.5 shrink-0 text-safety" />
                      <span>
                        <span className="block font-semibold text-white">Disciplines</span>
                        {COMPANY.legalLine}
                      </span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              {/* Response promise */}
              <Reveal delay={0.26}>
                <div className="rounded-2xl border border-safety-200 bg-safety-50 p-6">
                  <div className="flex gap-3.5">
                    <Icon name="bolt" size={20} className="mt-0.5 shrink-0 text-safety-700" />
                    <div>
                      <h3 className="text-[0.95rem] font-bold text-safety-900">
                        What happens after you submit
                      </h3>
                      <ol className="mt-3 space-y-2 text-[0.82rem] leading-relaxed text-safety-900/85">
                        {[
                          "Your enquiry arrives directly in our inbox.",
                          "We call or email back to clarify the scope.",
                          "Site survey arranged if the job needs one.",
                          "Itemised quotation, usually within one working day.",
                        ].map((s, i) => (
                          <li key={s} className="flex gap-2.5">
                            <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-safety-700 text-[0.6rem] font-bold text-white">
                              {i + 1}
                            </span>
                            <span className="pretty">{s}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-steel-50 section-y">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Find Us"
            title="Based in Sayan, Surat — Gujarat's industrial belt"
            description="Close to the refinery, petrochemical and chemical corridor, with crews mobilising to project sites across India."
          />
          <Reveal delay={0.15}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-steel-200 shadow-[0_24px_52px_-28px_rgba(20,23,28,0.4)]">
              <iframe
                src={mapSrc}
                title={`Map showing ${COMPANY.name} location in ${COMPANY.address.line1}`}
                width="100%"
                height="440"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block w-full grayscale-[0.25] transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
