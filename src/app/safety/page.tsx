import Image from "next/image";
import type { Metadata } from "next";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import { safetyPractices, safetyStandards, ppeList } from "@/data/content";

export const metadata: Metadata = {
  title: "Safety & Compliance",
  description:
    "Kamal Engineering follows IS 3696 and IS 4014 scaffolding practice, permit-to-work compliance, green/red scaffold tagging, daily toolbox talks and 100% fall protection at height.",
};

const tagSystem = [
  {
    colour: "green",
    label: "Green Tag",
    meaning: "Inspected and safe to use",
    detail:
      "The scaffold is complete, has been inspected by a competent person, and is released for use by other trades. The tag carries the inspection date and signature.",
  },
  {
    colour: "red",
    label: "Red Tag",
    meaning: "Do not use",
    detail:
      "The scaffold is incomplete, under erection, under modification or has failed inspection. Access is prohibited until it is re-inspected and re-tagged green.",
  },
];

export default function SafetyPage() {
  return (
    <>
      <PageHero
        breadcrumb="Safety"
        eyebrow="Safety & Compliance"
        title="The standard is simple: everyone goes home the same way they came in"
        description="Working at height in a live plant leaves no room for shortcuts. Our safety approach is built around standards, permits, documented inspection and material discipline — not slogans."
        image="/images/safety-toolbox.jpg"
        chips={["IS 3696 Practice", "IS 4014 Reference", "Permit-to-Work", "100% Fall Protection", "Scaffold Tagging"]}
      />

      {/* Practices */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Our Practices"
            title="Six controls we apply on every job"
            description="These are operational habits, applied identically whether the client's HSE team is watching or not."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.08}>
            {safetyPractices.map((p) => (
              <StaggerItem key={p.title} className="h-full">
                <div className="card group h-full p-6 md:p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-safety-50 text-safety-700 transition-all duration-300 group-hover:bg-safety group-hover:text-steel-950">
                    <Icon name={p.icon} size={22} />
                  </span>
                  <h3 className="mt-5 text-[1.05rem] font-bold text-steel-950">{p.title}</h3>
                  <p className="mt-2.5 text-[0.885rem] leading-relaxed text-steel-500 pretty">
                    {p.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Tag system */}
      <section className="relative overflow-hidden bg-steel-950 section-y">
        <div className="bg-grid absolute inset-0 opacity-70" aria-hidden />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                dark
                eyebrow="Scafftag System"
                title="No tag, no access"
                description="Every scaffold we erect carries a tag at its access point. Other trades are trained to check it before they climb — and our supervisors enforce it."
              />
              <Stagger className="mt-9 space-y-4" gap={0.12}>
                {tagSystem.map((t) => (
                  <StaggerItem key={t.colour}>
                    <div className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5">
                      <span
                        className={`mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-lg font-bold text-white ${
                          t.colour === "green" ? "bg-emerald-600" : "bg-red-600"
                        }`}
                      >
                        <Icon name={t.colour === "green" ? "check" : "close"} size={20} />
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="text-[1.05rem] font-bold text-white">{t.label}</h3>
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider ${
                              t.colour === "green"
                                ? "bg-emerald-500/15 text-emerald-300"
                                : "bg-red-500/15 text-red-300"
                            }`}
                          >
                            {t.meaning}
                          </span>
                        </div>
                        <p className="mt-2 text-[0.875rem] leading-relaxed text-steel-400 pretty">
                          {t.detail}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <Reveal direction="left">
              <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_32px_64px_-30px_rgba(0,0,0,0.9)]">
                <Image
                  src="/images/service-erection.jpg"
                  alt="Scaffolding erection crew working with full fall protection"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-950/55 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Standards & Framework"
            title="What we work to"
            description="We reference recognised Indian standards for scaffolding practice and operate within the statutory framework. On plant sites, the client's own HSE system always takes precedence."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2" gap={0.09}>
            {safetyStandards.map((s) => (
              <StaggerItem key={s.code} className="h-full">
                <div className="card h-full border-l-[3px] !border-l-safety p-6 md:p-7">
                  <span className="font-sans text-[0.95rem] font-extrabold tracking-tight text-safety-700">
                    {s.code}
                  </span>
                  <h3 className="mt-1.5 text-[1.05rem] font-bold text-steel-950">{s.title}</h3>
                  <p className="mt-2.5 text-[0.885rem] leading-relaxed text-steel-500 pretty">
                    {s.note}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.12}>
            <div className="mx-auto mt-10 flex max-w-3xl gap-3.5 rounded-xl border border-safety-200 bg-safety-50 p-5">
              <Icon name="shield" size={20} className="mt-0.5 shrink-0 text-safety-700" />
              <p className="text-[0.85rem] leading-relaxed text-safety-900 pretty">
                <strong className="font-bold">A note on certification:</strong> we describe the
                standards and practices we follow rather than claiming accreditations we do not hold.
                Specific compliance documentation, worker records and insurance details can be shared
                directly with your contracts and HSE teams during vendor registration.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PPE */}
      <section className="bg-steel-50 section-y">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="right">
              <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-2xl bg-steel-100 shadow-[0_28px_56px_-28px_rgba(20,23,28,0.5)]">
                <Image
                  src="/images/team-site.jpg"
                  alt="Crew in full personal protective equipment at site"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="Personal Protective Equipment"
                title="Standard PPE issued to every crew member"
                description="PPE is issued, inspected and replaced when worn. Site-specific additions are adopted wherever the client's PPE matrix requires them."
              />
              <Stagger className="mt-8 grid gap-2.5 sm:grid-cols-2" gap={0.05}>
                {ppeList.map((p) => (
                  <StaggerItem key={p}>
                    <div className="flex items-center gap-2.5 rounded-lg border border-steel-200 bg-white px-3.5 py-3 text-[0.85rem] font-medium text-steel-700">
                      <Icon name="check" size={16} className="shrink-0 text-safety-600" />
                      {p}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* Golden rules */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Non-Negotiables"
            title="Four rules that stop work if broken"
          />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.09}>
            {[
              { n: "01", t: "No valid permit, no work", d: "Work does not begin without the client's permit in hand and its conditions understood." },
              { n: "02", t: "Clipped on above 1.8m", d: "Full body harness anchored to a lifeline or sound point — including while erecting." },
              { n: "03", t: "No untagged scaffold in use", d: "A structure without a green tag is treated as unsafe by default, no exceptions." },
              { n: "04", t: "Damaged material out of service", d: "Bent, cracked or corroded items are quarantined immediately, never re-issued." },
            ].map((r) => (
              <StaggerItem key={r.n} className="h-full">
                <div className="card group relative h-full overflow-hidden p-6">
                  <span
                    className="pointer-events-none absolute -right-1 -top-3 font-sans text-[4.5rem] font-extrabold leading-none text-steel-100 transition-colors duration-300 group-hover:text-safety-100"
                    aria-hidden
                  >
                    {r.n}
                  </span>
                  <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-steel-950 text-safety">
                    <Icon name="shield" size={20} />
                  </span>
                  <h3 className="relative mt-5 text-[0.98rem] font-bold leading-snug text-steel-950">
                    {r.t}
                  </h3>
                  <p className="relative mt-2.5 text-[0.82rem] leading-relaxed text-steel-500 pretty">
                    {r.d}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection
        eyebrow="HSE Documentation"
        title="Need our safety documentation for vendor registration?"
        description="Method statements, risk assessments, worker records and insurance details can be provided to your HSE and contracts teams on request."
      />
    </>
  );
}
