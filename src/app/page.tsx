import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import ClientMarquee from "@/components/ClientMarquee";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";

import { services, disciplines } from "@/data/services";
import { differentiators, processSteps, industries, projects, commitments } from "@/data/content";

export const metadata: Metadata = {
  title: "Kamal Engineering | Scaffolding, Painting & Insulation Services in India",
  description:
    "Scaffolding erection & dismantling, industrial protective painting and thermal insulation for refineries, chemical plants and construction projects across India. Based in Sayan, Surat, Gujarat.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ============ DISCIPLINES ============ */}
      <section className="relative section-y">
        <div className="bg-dots absolute inset-0 opacity-45" aria-hidden />
        <div className="container-x relative">
          <SectionHeading
            align="center"
            eyebrow="Three Disciplines, One Contractor"
            title={
              <>
                Access, protection and insulation —{" "}
                <span className="text-safety-600">without the interface gaps</span>
              </>
            }
            description="Most sites juggle a scaffolding vendor, a painting vendor and an insulation vendor, then spend the shutdown chasing coordination between them. We do all three under a single work order and a single point of contact."
          />

          <Stagger className="mt-14 grid gap-6 md:grid-cols-3" gap={0.12}>
            {disciplines.map((d) => (
              <StaggerItem key={d.name}>
                <Link href={d.href} className="card img-zoom group block h-full overflow-hidden">
                  <div className="relative aspect-[16/11] overflow-hidden bg-steel-100">
                    <Image
                      src={d.image}
                      alt={d.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-steel-950/85 via-steel-950/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-safety text-steel-950 shadow-xl">
                        <Icon name={d.icon} size={23} />
                      </span>
                      <h3 className="mt-3.5 text-[1.4rem] font-bold text-white">{d.name}</h3>
                      <p className="mt-0.5 text-[0.775rem] font-semibold uppercase tracking-wider text-safety-300">
                        {d.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="text-[0.9rem] leading-relaxed text-steel-500 pretty">{d.blurb}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[0.8rem] font-bold uppercase tracking-wider text-steel-950">
                      Learn more
                      <Icon
                        name="arrow"
                        size={15}
                        className="text-safety transition-transform duration-300 group-hover:translate-x-1.5"
                      />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <StatsStrip />

      {/* ============ SERVICES ============ */}
      <section className="bg-steel-50 section-y">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="What We Do"
              title="A complete service catalogue for industrial and construction sites"
              description="From a single mobile tower to a full refinery turnaround access package — with the coating and insulation scope handled by the same team."
            />
            <Reveal delay={0.2}>
              <Link href="/services" className="btn btn-dark shrink-0">
                All Services
                <Icon name="arrow" size={17} />
              </Link>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.08}>
            {services.map((s) => (
              <StaggerItem key={s.id} className="h-full">
                <ServiceCard service={s} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section className="relative overflow-hidden bg-steel-950 section-y">
        <div className="bg-grid absolute inset-0 opacity-70" aria-hidden />
        <div
          className="absolute -right-40 top-1/4 h-[30rem] w-[30rem] rounded-full bg-safety/[0.07] blur-3xl"
          aria-hidden
        />
        <div className="container-x relative">
          <SectionHeading
            dark
            align="center"
            eyebrow="Why Clients Choose Us"
            title="Built for plants that cannot afford surprises"
            description="Heavy industry does not reward improvisation. Everything below is about removing the variables that turn a two-week shutdown into a three-week one."
          />

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.08}>
            {differentiators.map((d) => (
              <StaggerItem key={d.title} className="h-full">
                <div className="card-dark group h-full p-6 md:p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-safety/12 text-safety transition-all duration-300 group-hover:bg-safety group-hover:text-steel-950">
                    <Icon name={d.icon} size={22} />
                  </span>
                  <h3 className="mt-5 text-[1.075rem] font-bold text-white">{d.title}</h3>
                  <p className="mt-2.5 text-[0.9rem] leading-relaxed text-steel-400 pretty">
                    {d.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Commitments */}
          <Stagger className="mt-14 grid gap-5 md:grid-cols-3" gap={0.1}>
            {commitments.map((c) => (
              <StaggerItem key={c.label}>
                <div className="rounded-2xl border border-safety/20 bg-safety/[0.05] p-6 text-center">
                  <div className="font-sans text-[2rem] font-extrabold leading-none text-safety">
                    {c.stat}
                  </div>
                  <div className="mt-2.5 text-[0.9rem] font-bold text-white">{c.label}</div>
                  <p className="mt-2 text-[0.8rem] leading-relaxed text-steel-400 pretty">{c.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <ClientMarquee />

      {/* ============ PROCESS ============ */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="How We Work"
            title="From first call to final material reconciliation"
            description="A predictable five-step sequence. You always know what happens next and who is responsible for it."
          />

          <div className="relative mt-16">
            <div
              className="absolute left-[1.4rem] top-3 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-safety via-steel-200 to-transparent md:block lg:left-1/2 lg:-translate-x-px"
              aria-hidden
            />
            <ol className="space-y-8 lg:space-y-0">
              {processSteps.map((step, i) => {
                const right = i % 2 === 1;
                return (
                  <li key={step.step} className="relative">
                    <Reveal direction={right ? "left" : "right"} delay={0.05}>
                      <div
                        className={`flex gap-5 md:gap-7 lg:w-[calc(50%+1.5rem)] ${
                          right ? "lg:ml-auto lg:flex-row" : "lg:flex-row-reverse lg:text-right"
                        }`}
                      >
                        <div className="relative z-10 shrink-0">
                          <span className="grid h-[2.8rem] w-[2.8rem] place-items-center rounded-full border-[3px] border-white bg-steel-950 text-safety shadow-[0_0_0_3px_rgba(245,166,35,0.25)]">
                            <Icon name={step.icon} size={19} />
                          </span>
                        </div>
                        <div className={`flex-1 pb-8 lg:pb-14 ${right ? "" : "lg:pr-2"}`}>
                          <span className="font-sans text-[0.7rem] font-extrabold tracking-[0.2em] text-safety-600">
                            STEP {step.step}
                          </span>
                          <h3 className="mt-1.5 text-[1.15rem] font-bold text-steel-950">
                            {step.title}
                          </h3>
                          <p className="mt-2.5 text-[0.9rem] leading-relaxed text-steel-500 pretty">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ SAFETY BANNER ============ */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/safety-toolbox.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-950/90 to-steel-950/45" />
        <div className="container-x relative section-y">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow-light">
                <span className="h-px w-7 bg-safety-400" />
                Safety First, Always
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="h-section mt-4 !text-white balance">
                A scaffold is only finished when it carries a green tag
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-steel-300 pretty">
                Full body harness above 1.8m, no exceptions. Work only under a valid permit. Daily
                toolbox talks with recorded attendance. Damaged material quarantined, not
                &ldquo;managed&rdquo;. This is the baseline we work to, not a marketing line.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "IS 3696 & IS 4014 practice",
                  "Permit-to-work compliance",
                  "Green / red scaffold tagging",
                  "Documented inspection register",
                ].map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.05] px-3.5 py-2.5 text-[0.85rem] font-medium text-steel-200 backdrop-blur-sm"
                  >
                    <Icon name="check" size={16} className="shrink-0 text-safety" />
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <Link href="/safety" className="btn btn-amber mt-8">
                Our Safety Approach
                <Icon name="arrow" size={17} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section className="bg-steel-50 section-y">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Selected Work"
              title="Projects across refineries, plants and construction sites"
              description="A representative sample of the access, coating and insulation packages we have delivered."
            />
            <Reveal delay={0.2}>
              <Link href="/projects" className="btn btn-dark shrink-0">
                View All Projects
                <Icon name="arrow" size={17} />
              </Link>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.09}>
            {projects.slice(0, 6).map((p) => (
              <StaggerItem key={p.id} className="h-full">
                <article className="card img-zoom group flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden bg-steel-100">
                    <Image
                      src={p.src}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-steel-950/60 to-transparent" />
                    <span className="absolute left-3.5 top-3.5 rounded-full bg-safety px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-steel-950">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <span className="text-[0.7rem] font-bold uppercase tracking-wider text-safety-700">
                      {p.scope}
                    </span>
                    <h3 className="mt-2 text-[1.05rem] font-bold leading-snug text-steel-950">
                      {p.title}
                    </h3>
                    <p className="mt-2 flex items-center gap-1.5 text-[0.8rem] text-steel-400">
                      <Icon name="map" size={13} />
                      {p.location}
                    </p>
                    <p className="mt-3 flex-1 text-[0.875rem] leading-relaxed text-steel-500 pretty">
                      {p.description}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Sectors We Serve"
            title="Industries that depend on access, protection and insulation"
          />

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.07}>
            {industries.map((ind) => (
              <StaggerItem key={ind.id} className="h-full">
                <Link
                  href={`/industries#${ind.id}`}
                  className="card group flex h-full flex-col p-6 md:p-7"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-steel-950 text-safety transition-all duration-300 group-hover:bg-safety group-hover:text-steel-950">
                    <Icon name={ind.icon} size={22} />
                  </span>
                  <h3 className="mt-5 text-[1.075rem] font-bold text-steel-950">{ind.title}</h3>
                  <p className="mt-2.5 flex-1 text-[0.875rem] leading-relaxed text-steel-500 pretty">
                    {ind.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-wider text-steel-950">
                    Details
                    <Icon
                      name="arrow"
                      size={14}
                      className="text-safety transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </>
  );
}
