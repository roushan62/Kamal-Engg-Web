import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ClientMarquee from "@/components/ClientMarquee";
import Icon from "@/components/Icon";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import { industries } from "@/data/content";
import { disciplines } from "@/data/services";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Scaffolding, painting and insulation services for oil & gas, petrochemical, chemical, power, cement, steel, infrastructure and building construction sectors across India.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Industries"
        eyebrow="Sectors We Serve"
        title="Different sites, different rules — we work to yours"
        description="A refinery turnaround, a cement preheater shutdown and a high-rise facade need completely different planning, material and discipline. Here is how we approach each sector."
        image="/images/project-cement.jpg"
        chips={["Oil & Gas", "Chemical", "Power & Cement", "Steel", "Infrastructure", "Real Estate"]}
      />

      {/* Overview grid */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Six Core Sectors"
            title="Where our scaffolding, painting and insulation work goes"
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.08}>
            {industries.map((ind) => (
              <StaggerItem key={ind.id} className="h-full">
                <a href={`#${ind.id}`} className="card group flex h-full flex-col p-6 md:p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-steel-950 text-safety transition-all duration-300 group-hover:bg-safety group-hover:text-steel-950">
                    <Icon name={ind.icon} size={22} />
                  </span>
                  <h3 className="mt-5 text-[1.075rem] font-bold text-steel-950">{ind.title}</h3>
                  <p className="mt-2.5 flex-1 text-[0.875rem] leading-relaxed text-steel-500 pretty">
                    {ind.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.76rem] font-bold uppercase tracking-wider text-steel-950">
                    Applications
                    <Icon
                      name="chevron"
                      size={14}
                      className="text-safety transition-transform duration-300 group-hover:translate-y-0.5"
                    />
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Detail sections */}
      <section className="bg-steel-50 section-y">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Sector Detail"
            title="Typical applications by industry"
          />

          <div className="mt-14 space-y-5">
            {industries.map((ind, i) => (
              <Reveal key={ind.id} delay={0.04}>
                <div id={ind.id} className="card scroll-mt-32 overflow-hidden">
                  <div className="grid gap-0 md:grid-cols-[auto_1fr]">
                    <div className="flex items-center gap-4 bg-steel-950 p-6 md:w-64 md:flex-col md:items-start md:justify-center md:p-8">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-safety text-steel-950">
                        <Icon name={ind.icon} size={23} />
                      </span>
                      <div>
                        <span className="font-sans text-[0.68rem] font-extrabold tracking-[0.18em] text-safety-400">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-1 text-[1.05rem] font-bold leading-snug text-white">
                          {ind.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      <p className="text-[0.95rem] leading-relaxed text-steel-500 pretty">
                        {ind.description}
                      </p>
                      <h4 className="mt-6 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-steel-950">
                        Typical Applications
                      </h4>
                      <ul className="mt-3.5 grid gap-2.5 sm:grid-cols-2">
                        {ind.applications.map((a) => (
                          <li
                            key={a}
                            className="flex gap-2.5 rounded-lg bg-steel-50 px-3.5 py-2.5 text-[0.85rem] leading-snug text-steel-700"
                          >
                            <Icon name="check" size={15} className="mt-0.5 shrink-0 text-safety-600" />
                            <span className="pretty">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClientMarquee />

      {/* Disciplines */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Whatever the Sector"
            title="The same three disciplines apply"
            description="Access first, then protection, then insulation — coordinated by one contractor regardless of which industry you are in."
          />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3" gap={0.1}>
            {disciplines.map((d) => (
              <StaggerItem key={d.name}>
                <Link href={d.href} className="card img-zoom group block overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden bg-steel-100">
                    <Image src={d.image} alt={d.name} fill sizes="33vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-steel-950/85 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <h3 className="text-[1.3rem] font-bold text-white">{d.name}</h3>
                      <p className="text-[0.75rem] font-semibold uppercase tracking-wider text-safety-300">
                        {d.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-[0.875rem] leading-relaxed text-steel-500 pretty">{d.blurb}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection
        eyebrow="Sector-Specific Enquiry"
        title="Tell us your industry and your constraints"
        description="Plant shutdown, live-area work, confined space, coastal corrosion — the details change the plan. Share them and we will respond with a method that fits."
      />
    </>
  );
}
