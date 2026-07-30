import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import StatsStrip from "@/components/StatsStrip";
import ClientMarquee from "@/components/ClientMarquee";
import Icon from "@/components/Icon";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import { COMPANY, TEAM } from "@/lib/constants";
import { differentiators, processSteps } from "@/data/content";
import { disciplines } from "@/data/services";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Kamal Engineering is a multi-discipline industrial services contractor from Sayan, Surat, Gujarat — delivering scaffolding, protective painting and thermal insulation at plants and project sites across India.",
};

const values = [
  {
    icon: "shield",
    title: "Safety Before Schedule",
    body: "If the safe way takes longer, we take longer. No scaffold is released without a tag, and no one works at height without being clipped on.",
  },
  {
    icon: "document",
    title: "Everything on Record",
    body: "Tags, inspection registers, DFT logs, material challans, toolbox attendance. If a client's audit team asks, the paper exists.",
  },
  {
    icon: "target",
    title: "Say What Is Real",
    body: "We quote what we can deliver and flag what we cannot. An honest 'no' at enquiry stage saves everyone a bad shutdown.",
  },
  {
    icon: "users",
    title: "Look After the Crew",
    body: "Good PPE, proper induction, fair treatment. Skilled erectors are hard to find and harder to replace — we keep ours.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="Who We Are"
        title="A specialist industrial contractor built on plant-floor experience"
        description="Kamal Engineering grew out of years of hands-on work inside India's refineries, chemical plants and construction sites — first as sub-contract crews for principal contractors, now as an independent multi-discipline service provider."
        image="/images/team-site.jpg"
        chips={["Sayan, Surat — Gujarat", "Pan-India Mobilisation", "Scaffolding • Painting • Insulation"]}
      />

      {/* Story */}
      <section className="section-y">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="right">
              <div className="relative">
                <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-2xl bg-steel-100 shadow-[0_32px_64px_-32px_rgba(20,23,28,0.55)]">
                  <Image
                    src="/images/about-overview.jpg"
                    alt="Kamal Engineering scaffolding work at an industrial site"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 hidden w-52 rounded-2xl border border-steel-200 bg-white p-5 shadow-[0_22px_44px_-20px_rgba(20,23,28,0.4)] sm:block lg:-right-8">
                  <div className="font-sans text-[2.25rem] font-extrabold leading-none text-safety-600">
                    3
                  </div>
                  <div className="mt-1.5 text-[0.85rem] font-bold text-steel-950">
                    Disciplines in-house
                  </div>
                  <p className="mt-1 text-[0.72rem] leading-snug text-steel-500">
                    Scaffolding, painting and insulation under one contractor
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="From sub-contract crews to an independent multi-discipline contractor"
              />
              <Reveal delay={0.15}>
                <div className="mt-6 space-y-4 text-[1rem] leading-relaxed text-steel-500 pretty">
                  <p>
                    Kamal Engineering was built the slow way — by working inside other people&apos;s
                    contracts first. Our teams executed scaffolding, painting and insulation scope as
                    specialist sub-contractors at plants operated by some of India&apos;s largest
                    industrial groups, engaged through their principal contractors.
                  </p>
                  <p>
                    That route taught us the things a brochure cannot: how a permit-to-work system
                    actually functions at 6 AM on shutdown day, why a scaffold that is one lift short
                    stops three other trades, how quickly a coating job unravels if the surface
                    preparation was rushed, and what a plant HSE officer looks for when they walk up
                    to a structure.
                  </p>
                  <p>
                    Today we operate from{" "}
                    <span className="font-semibold text-steel-800">
                      {COMPANY.address.line1}, {COMPANY.address.state}
                    </span>{" "}
                    — in the middle of Gujarat&apos;s refinery and chemical belt — and mobilise to
                    project sites across India. We take work both as a direct contractor and as a
                    specialist partner to larger EPC and maintenance contractors.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    { icon: "map", label: "Based in", value: `${COMPANY.address.line1}, Gujarat` },
                    { icon: "truck", label: "Coverage", value: "Pan-India project sites" },
                    { icon: "layers", label: "Disciplines", value: "Scaffolding, painting, insulation" },
                    { icon: "shield", label: "Practice", value: "IS 3696 & client HSE systems" },
                  ].map((r) => (
                    <div
                      key={r.label}
                      className="flex items-start gap-3 rounded-xl border border-steel-200 bg-steel-50 p-4"
                    >
                      <Icon name={r.icon} size={18} className="mt-0.5 shrink-0 text-safety-600" />
                      <div>
                        <div className="text-[0.65rem] font-bold uppercase tracking-wider text-steel-400">
                          {r.label}
                        </div>
                        <div className="mt-0.5 text-[0.85rem] font-semibold text-steel-900">
                          {r.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      {/* Mission / Vision */}
      <section className="bg-steel-50 section-y">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                icon: "target",
                tag: "Our Mission",
                title: "Make industrial access, protection and insulation predictable",
                body: "To give plant and project teams one accountable contractor for scaffolding, painting and insulation — mobilised on time, executed under permit, documented properly, and demobilised without loose ends. Predictability is the product.",
              },
              {
                icon: "eye",
                tag: "Our Vision",
                title: "Be the specialist contractor plants call back",
                body: "To be the name that gets recommended inside India's refinery and chemical belt for the unglamorous reason that matters most — we did the job safely, on schedule, and left the site the way we found it.",
              },
            ].map((c, i) => (
              <Reveal key={c.tag} delay={i * 0.1}>
                <div className="card h-full p-7 md:p-9">
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-steel-950 text-safety">
                    <Icon name={c.icon} size={23} />
                  </span>
                  <span className="eyebrow mt-5 block">{c.tag}</span>
                  <h3 className="mt-2.5 text-[1.35rem] font-bold leading-snug text-steel-950 balance">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-steel-500 pretty">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="How We Operate"
            title="Four things we do not negotiate on"
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.09}>
            {values.map((v) => (
              <StaggerItem key={v.title} className="h-full">
                <div className="card group h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-safety-50 text-safety-700 transition-all duration-300 group-hover:bg-safety group-hover:text-steel-950">
                    <Icon name={v.icon} size={20} />
                  </span>
                  <h3 className="mt-5 text-[1rem] font-bold text-steel-950">{v.title}</h3>
                  <p className="mt-2.5 text-[0.85rem] leading-relaxed text-steel-500 pretty">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative overflow-hidden bg-steel-950 section-y">
        <div className="bg-grid absolute inset-0 opacity-70" aria-hidden />
        <div className="container-x relative">
          <SectionHeading
            dark
            align="center"
            eyebrow="Capability at a Glance"
            title="What you get when you engage us"
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.08}>
            {differentiators.map((d) => (
              <StaggerItem key={d.title} className="h-full">
                <div className="card-dark group h-full p-6 md:p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-safety/12 text-safety transition-all duration-300 group-hover:bg-safety group-hover:text-steel-950">
                    <Icon name={d.icon} size={22} />
                  </span>
                  <h3 className="mt-5 text-[1.05rem] font-bold text-white">{d.title}</h3>
                  <p className="mt-2.5 text-[0.885rem] leading-relaxed text-steel-400 pretty">
                    {d.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <ClientMarquee />

      {/* Team */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Your Points of Contact"
            title="Two people, two clear responsibilities"
            description="No call-centre routing. Commercial matters and site matters each have a named owner you can reach directly."
          />

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            {TEAM.map((t, i) => (
              <Reveal key={t.phone} delay={i * 0.1}>
                <div className="card h-full p-7 text-center md:p-8">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-steel-950 font-sans text-[1.4rem] font-extrabold text-safety">
                    {t.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <h3 className="mt-5 text-[1.2rem] font-bold text-steel-950">{t.name}</h3>
                  <p className="mt-1 text-[0.85rem] font-semibold text-safety-700">{t.role}</p>
                  <span className="chip mx-auto mt-3.5">{t.department}</span>
                  <p className="mt-4 text-[0.875rem] leading-relaxed text-steel-500 pretty">{t.focus}</p>
                  <div className="mt-6 flex flex-wrap justify-center gap-2.5">
                    <a href={`tel:+91${t.phone}`} className="btn btn-dark !px-4 !py-2.5 !text-[0.82rem]">
                      <Icon name="phone" size={15} />
                      +91 {t.phone}
                    </a>
                    <a
                      href={`https://wa.me/91${t.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost !px-4 !py-2.5 !text-[0.82rem]"
                    >
                      <Icon name="whatsapp" size={15} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-steel-50 section-y">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Working With Us"
            title="Five steps from enquiry to closeout"
          />
          <Stagger className="mt-14 grid gap-5 md:grid-cols-3 lg:grid-cols-5" gap={0.09}>
            {processSteps.map((s) => (
              <StaggerItem key={s.step} className="h-full">
                <div className="card group relative h-full overflow-hidden p-6">
                  <span
                    className="pointer-events-none absolute -right-1 -top-3 font-sans text-[4.5rem] font-extrabold leading-none text-steel-100 transition-colors duration-300 group-hover:text-safety-100"
                    aria-hidden
                  >
                    {s.step}
                  </span>
                  <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-safety text-steel-950">
                    <Icon name={s.icon} size={20} />
                  </span>
                  <h3 className="relative mt-5 text-[0.98rem] font-bold text-steel-950">{s.title}</h3>
                  <p className="relative mt-2.5 text-[0.82rem] leading-relaxed text-steel-500 pretty">
                    {s.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Disciplines quick links */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Explore" title="Our three service disciplines" />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3" gap={0.1}>
            {disciplines.map((d) => (
              <StaggerItem key={d.name}>
                <Link href={d.href} className="card img-zoom group block overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden bg-steel-100">
                    <Image src={d.image} alt={d.name} fill sizes="33vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-steel-950/80 to-transparent" />
                    <h3 className="absolute bottom-4 left-5 text-[1.3rem] font-bold text-white">
                      {d.name}
                    </h3>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection
        eyebrow="Let's Talk"
        title="Want to know if we are the right fit for your site?"
        description="Tell us the scope and the constraints. If we are not the right contractor for it, we will say so."
      />
    </>
  );
}
