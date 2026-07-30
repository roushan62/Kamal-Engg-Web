import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import { services } from "@/data/services";
import { materials, materialGroups } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Scaffolding erection & dismantling, cuplock, tube & coupler and H-Frame systems, industrial protective painting, thermal insulation, and scaffolding material supply on hire or sale across India.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="What We Deliver"
        title="Scaffolding, painting and insulation — engineered end to end"
        description="Seven service lines across three disciplines, delivered by one contractor under one work order. Everything from a single mobile tower to a complete refinery turnaround access package."
        image="/images/service-erection.jpg"
        chips={["Cuplock", "Tube & Coupler", "H-Frame", "Protective Coating", "Hot & Cold Insulation", "Material Hire"]}
      />

      {/* Quick jump */}
      <section className="sticky top-16 z-40 border-b border-steel-200 bg-white/90 backdrop-blur-xl lg:top-[4.75rem]">
        <div className="container-x">
          <div className="mask-fade-x flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 rounded-full border border-steel-200 px-3.5 py-1.5 text-[0.78rem] font-semibold text-steel-600 transition-all hover:border-safety hover:bg-safety-50 hover:text-steel-950"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service detail sections */}
      {services.map((s, i) => {
        const flip = i % 2 === 1;
        return (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-32 section-y ${flip ? "bg-steel-50" : "bg-white"}`}
          >
            <div className="container-x">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Image */}
                <Reveal direction={flip ? "left" : "right"} className={flip ? "lg:order-2" : ""}>
                  <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-2xl bg-steel-100 shadow-[0_28px_60px_-30px_rgba(20,23,28,0.5)]">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-steel-950/45 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-wider text-steel-900 backdrop-blur">
                      {s.discipline}
                    </span>
                  </div>

                  {s.specs && (
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {s.specs.map((sp) => (
                        <div
                          key={sp.label}
                          className="rounded-xl border border-steel-200 bg-white p-3.5 text-center"
                        >
                          <div className="text-[0.62rem] font-bold uppercase tracking-wider text-safety-700">
                            {sp.label}
                          </div>
                          <div className="mt-1.5 text-[0.78rem] font-semibold leading-snug text-steel-800">
                            {sp.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Reveal>

                {/* Content */}
                <div className={flip ? "lg:order-1" : ""}>
                  <Reveal>
                    <span className="eyebrow">
                      <span className="h-px w-7 bg-safety-600" />
                      Service {String(i + 1).padStart(2, "0")}
                    </span>
                  </Reveal>
                  <Reveal delay={0.07}>
                    <h2 className="mt-4 flex items-start gap-3.5 text-[1.65rem] font-bold leading-tight tracking-tight text-steel-950 md:text-[2.1rem]">
                      <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-safety text-steel-950">
                        <Icon name={s.icon} size={21} />
                      </span>
                      <span className="balance">{s.title}</span>
                    </h2>
                  </Reveal>
                  <Reveal delay={0.13}>
                    <p className="mt-5 text-[1rem] leading-relaxed text-steel-500 pretty">
                      {s.description}
                    </p>
                  </Reveal>

                  <Reveal delay={0.19}>
                    <h3 className="mt-8 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-steel-950">
                      What&apos;s Included
                    </h3>
                    <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex gap-2.5 text-[0.875rem] leading-snug text-steel-600">
                          <Icon name="check" size={16} className="mt-0.5 shrink-0 text-safety-600" />
                          <span className="pretty">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>

                  <Reveal delay={0.25}>
                    <h3 className="mt-7 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-steel-950">
                      Typically Used For
                    </h3>
                    <div className="mt-3.5 flex flex-wrap gap-2">
                      {s.bestFor.map((b) => (
                        <span key={b} className="chip !normal-case !tracking-normal !text-[0.75rem]">
                          {b}
                        </span>
                      ))}
                    </div>
                  </Reveal>

                  <Reveal delay={0.31}>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link href="/contact" className="btn btn-amber">
                        Enquire About This
                        <Icon name="arrow" size={17} />
                      </Link>
                      <Link href="/projects" className="btn btn-ghost">
                        See Related Work
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Material inventory */}
      <section className="relative overflow-hidden bg-steel-950 section-y">
        <div className="bg-grid absolute inset-0 opacity-70" aria-hidden />
        <div className="container-x relative">
          <SectionHeading
            dark
            align="center"
            eyebrow="Material Inventory"
            title="Stock we supply, erect and hire out"
            description="Standard Indian scaffolding and formwork material, inspected before despatch and issued against an item-wise challan."
          />

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.07}>
            {materialGroups.map((group) => (
              <StaggerItem key={group} className="h-full">
                <div className="card-dark h-full p-6">
                  <h3 className="flex items-center gap-2.5 text-[1rem] font-bold text-safety">
                    <span className="h-1.5 w-1.5 rounded-full bg-safety" />
                    {group}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {materials
                      .filter((m) => m.group === group)
                      .map((m) => (
                        <li key={m.name} className="border-b border-white/[0.07] pb-3 last:border-0 last:pb-0">
                          <div className="text-[0.875rem] font-semibold text-white">{m.name}</div>
                          <div className="mt-0.5 text-[0.775rem] text-steel-500">{m.spec}</div>
                        </li>
                      ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-[0.85rem] leading-relaxed text-steel-500 pretty">
              Sizes and quantities vary by project. Send us your requirement and we will confirm
              availability, delivery timeline and rates for hire or outright purchase.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Tell Us Your Scope"
        title="Not sure which system suits your structure?"
        description="Describe the job — height, geometry, duration and site conditions — and we will recommend the right system and give you an honest cost picture."
      />
    </>
  );
}
