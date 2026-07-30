"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ClientMarquee from "@/components/ClientMarquee";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { projects, projectCategories } from "@/data/content";

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  const counts = useMemo(() => {
    const m: Record<string, number> = { All: projects.length };
    for (const p of projects) m[p.category] = (m[p.category] ?? 0) + 1;
    return m;
  }, []);

  return (
    <>
      <PageHero
        breadcrumb="Projects"
        eyebrow="Selected Work"
        title="Access, coating and insulation packages we have delivered"
        description="A representative portfolio across refineries, petrochemical and chemical plants, cement works, infrastructure and building construction. Client identities are described by sector where confidentiality applies."
        image="/images/project-refinery.jpg"
        chips={["Oil & Gas", "Petrochemical", "Cement", "Infrastructure", "Building Construction"]}
      />

      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Project Portfolio"
            title="Filter by sector"
            description="Each entry shows the discipline, the system used and what the scope actually involved."
          />

          {/* Filters */}
          <Reveal delay={0.12}>
            <div className="mt-10 flex flex-wrap justify-center gap-2.5">
              {projectCategories.map((cat) => {
                const isOn = active === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    aria-pressed={isOn}
                    className={`relative rounded-full border px-4 py-2 text-[0.82rem] font-semibold transition-all duration-300 ${
                      isOn
                        ? "border-steel-950 bg-steel-950 text-white shadow-lg"
                        : "border-steel-200 bg-white text-steel-600 hover:border-safety hover:bg-safety-50 hover:text-steel-950"
                    }`}
                  >
                    {cat}
                    <span
                      className={`ml-2 rounded-full px-1.5 py-0.5 text-[0.65rem] font-bold ${
                        isOn ? "bg-safety text-steel-950" : "bg-steel-100 text-steel-500"
                      }`}
                    >
                      {counts[cat] ?? 0}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Grid */}
          <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: -12 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="card img-zoom group flex flex-col overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-steel-100">
                    <Image
                      src={p.src}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-steel-950/75 via-steel-950/10 to-transparent" />
                    <span className="absolute left-3.5 top-3.5 rounded-full bg-safety px-2.5 py-1 text-[0.64rem] font-bold uppercase tracking-wider text-steel-950">
                      {p.category}
                    </span>
                    <span className="absolute right-3.5 top-3.5 rounded-full bg-white/95 px-2.5 py-1 text-[0.64rem] font-bold uppercase tracking-wider text-steel-900 backdrop-blur">
                      {p.discipline}
                    </span>
                    <p className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 text-[0.75rem] font-medium text-white/90">
                      <Icon name="map" size={13} className="text-safety" />
                      {p.location}
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <span className="text-[0.68rem] font-bold uppercase tracking-wider text-safety-700">
                      {p.scope}
                    </span>
                    <h3 className="mt-2 text-[1.05rem] font-bold leading-snug text-steel-950">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 text-[0.875rem] leading-relaxed text-steel-500 pretty">
                      {p.description}
                    </p>
                    <ul className="mt-4 space-y-2 border-t border-steel-100 pt-4">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-[0.8rem] leading-snug text-steel-600">
                          <Icon name="check" size={14} className="mt-0.5 shrink-0 text-safety-600" />
                          <span className="pretty">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-steel-400">No projects in this category yet.</p>
          )}

          <Reveal delay={0.1}>
            <p className="mx-auto mt-14 max-w-2xl rounded-xl border border-steel-200 bg-steel-50 p-5 text-center text-[0.82rem] leading-relaxed text-steel-500 pretty">
              Project photographs are representative of the type and scale of work executed. Specific
              site imagery and detailed references can be shared on request, subject to client
              confidentiality agreements.
            </p>
          </Reveal>
        </div>
      </section>

      <ClientMarquee />

      <CTASection
        eyebrow="Your Project Next"
        title="Have a similar scope coming up?"
        description="Send the drawings, the structure details and your dates. We will tell you what system fits, how many people it needs and what it costs."
      />
    </>
  );
}
