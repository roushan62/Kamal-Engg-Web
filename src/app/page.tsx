"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import StatsCounter from "@/components/StatsCounter";
import CTABanner from "@/components/CTABanner";
import ServiceCard from "@/components/ServiceCard";
import IndustryCard from "@/components/IndustryCard";
import PlaceholderImage from "@/components/PlaceholderImage";
import { services } from "@/data/services";
import { differentiators, safetyStandards, clientIndustries } from "@/data/content";
import { industries as allIndustries } from "@/data/content";

const quickServices = [
  {
    title: "Erection & Dismantling",
    description: "Full-cycle scaffolding lifecycle — site survey, structural planning, safe erection, and material recovery.",
    href: "/services#erection-dismantling",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "H-Frame Scaffolding",
    description: "Modular frame system for building facades — fast assembly, cost-effective for mid-rise structures.",
    href: "/services#h-frame",
    icon: "M4 5a1 1 0 011-1h4a1 1 0 011 1v7h4V5a1 1 0 011-1h4a1 1 0 011 1v14M4 19h16",
  },
  {
    title: "Tubular Scaffolding",
    description: "Highly flexible system for irregular structures, industrial plants, and complex geometries.",
    href: "/services#tubular",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Cuplock Scaffolding",
    description: "Heavy-duty system for high-rise buildings and industrial applications — 40% faster erection.",
    href: "/services#cuplock",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
  {
    title: "Supply & Service",
    description: "Scaffolding material on rent or sale with delivery, technical support, and maintenance.",
    href: "/services#supply-service",
    icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
  },
];

export default function Home() {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative gradient-hero grid-pattern min-h-screen flex items-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-safety via-safety-400 to-transparent" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-safety/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-safety/3 rounded-full blur-3xl" />
        
        {/* Structural line decoration */}
        <div className="absolute top-0 right-0 w-64 h-full hidden lg:block">
          <div className="absolute top-1/4 right-0 w-px h-32 bg-safety/10" />
          <div className="absolute top-1/3 right-4 w-px h-24 bg-safety/5" />
          <div className="absolute bottom-1/3 right-8 w-px h-20 bg-safety/10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 relative z-10 w-full">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="accent-line" />
                <span className="text-safety text-sm font-semibold uppercase tracking-wider">
                  Professional Scaffolding Services
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance">
                Engineered Scaffolding Solutions for India&apos;s{" "}
                <span className="text-safety">Construction &amp; Industrial</span>{" "}
                Projects
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed text-balance">
                Full-cycle scaffolding services — erection, dismantling, supply &amp; 
                maintenance — with trained crews, safety-compliant practices, and 
                faster mobilization than traditional scaffolding contractors.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
                  Get a Quote
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/services" className="btn-outline text-base px-8 py-3.5 border-white/30 text-white hover:bg-white hover:text-steel-dark">
                  Our Services
                </Link>
              </div>
            </ScrollReveal>

            {/* Trust indicators */}
            <ScrollReveal delay={0.45}>
              <div className="mt-10 flex flex-wrap gap-4">
                <span className="safety-badge">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  IS 3696 Compliant
                </span>
                <span className="safety-badge">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                  Trained Crew
                </span>
                <span className="safety-badge">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Fast Mobilization
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== QUICK SERVICE ICONS ROW ==================== */}
      <section className="relative -mt-16 pb-8 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {quickServices.map((svc, i) => (
              <ScrollReveal key={svc.href} delay={i * 0.08} direction="up">
                <Link
                  href={svc.href}
                  className="group block bg-white rounded-xl shadow-lg shadow-steel-dark/5 p-4 sm:p-5
                             border border-steel-100 card-hover hover:border-safety/40 hover:shadow-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-safety/10 flex items-center justify-center mb-3
                                  group-hover:bg-safety/20 transition-colors">
                    <svg className="w-5 h-5 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={svc.icon} />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-steel-dark group-hover:text-steel transition-colors leading-tight">
                    {svc.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-steel-400 leading-relaxed line-clamp-2">
                    {svc.description}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="section-padding bg-steel-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="accent-line mx-auto mb-6" />
              <h2 className="section-title text-balance">Why Choose Kamal Engineering</h2>
              <p className="section-subtitle mx-auto text-balance">
                We are not just another scaffolding contractor. Our process-driven approach, trained workforce, 
                and multi-system expertise deliver better safety, speed, and reliability for your project.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, i) => (
              <ScrollReveal key={diff.title} delay={i * 0.1}>
                <div className="group bg-white rounded-xl border border-steel-100 p-6 sm:p-7
                                card-hover hover:border-safety/30 h-full">
                  <div className="w-12 h-12 rounded-xl bg-safety/10 flex items-center justify-center mb-5
                                  group-hover:bg-safety/20 transition-colors">
                    <svg className="w-6 h-6 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={diff.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-steel-dark mb-2">{diff.title}</h3>
                  <p className="text-sm text-steel-500 leading-relaxed">{diff.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS COUNTER STRIP ==================== */}
      <StatsCounter />

      {/* ==================== FEATURED SERVICES (DETAILED CARDS) ==================== */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="accent-line mx-auto mb-6" />
              <h2 className="section-title">Our Scaffolding Systems</h2>
              <p className="section-subtitle mx-auto">
                Comprehensive scaffolding solutions designed for different applications — 
                from simple building facades to complex industrial plant access.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INDUSTRIES SERVED ==================== */}
      <section className="section-padding bg-steel-dark text-white relative overflow-hidden grid-pattern">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-safety via-safety-400 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-safety/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Industries We Serve
              </h2>
              <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
                From construction and real estate to heavy industrial plants and infrastructure — 
                our scaffolding systems support projects across sectors.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allIndustries.map((industry, i) => (
              <div key={industry.id}>
                <IndustryCard industry={industry} index={i} />
              </div>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-14 text-center">
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 text-safety hover:text-safety-400 font-semibold transition-colors"
              >
                View all industries and applications
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== CLIENT INDUSTRY TYPES (TRUST STRIP) ==================== */}
      <section className="py-14 bg-white border-y border-steel-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-sm font-semibold text-steel-400 uppercase tracking-wider mb-8">
              Supporting Projects Across Industries
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {clientIndustries.map((ci, i) => (
              <ScrollReveal key={ci.id} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl
                                hover:bg-steel-50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-safety/10 flex items-center justify-center
                                  group-hover:bg-safety/20 transition-colors">
                    <svg className="w-6 h-6 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ci.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-steel-dark text-sm">{ci.title}</p>
                    <p className="text-xs text-steel-400 mt-0.5">{ci.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SAFETY TRUST STRIP ==================== */}
      <section className="py-16 bg-safety/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl font-bold text-steel-dark">
                Safety Standards We Follow
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {safetyStandards.slice(0, 6).map((std, i) => (
              <ScrollReveal key={std.title} delay={i * 0.08}>
                <div className="flex items-start gap-3 bg-white rounded-lg p-4 border border-steel-100
                                hover:border-safety/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-safety/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={std.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-steel-dark text-sm">{std.title}</h4>
                    <p className="text-xs text-steel-400 mt-1 line-clamp-2">{std.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="mt-8 text-center">
              <Link
                href="/safety"
                className="inline-flex items-center gap-2 text-safety hover:text-safety-600 font-semibold text-sm transition-colors"
              >
                View our complete safety & compliance framework
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== PROJECT SHOWCASE PREVIEW ==================== */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="accent-line mx-auto mb-6" />
              <h2 className="section-title">Project Experience</h2>
              <p className="section-subtitle mx-auto">
                From industrial plant shutdowns to high-rise residential towers — 
                see the types of projects we support.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Industrial Plant Shutdown",
                type: "Cuplock",
                location: "Cement Plant, Madhya Pradesh",
                label: "Industrial Plant Shutdown Scaffolding",
                src: "/images/project-cement.jpg",
              },
              {
                title: "Commercial Building Facade",
                type: "H-Frame",
                location: "Commercial Complex, Uttar Pradesh",
                label: "Commercial Building Facade Work",
                src: "/images/project-facade.jpg",
              },
              {
                title: "Bridge Inspection Access",
                type: "Tubular",
                location: "Highway Bridge, Rajasthan",
                label: "Bridge Inspection & Repair Access",
                src: "/images/project-bridge.jpg",
              },
            ].map((proj, i) => (
              <ScrollReveal key={proj.title} delay={i * 0.15}>
                <div className="group bg-white rounded-xl border border-steel-100 overflow-hidden
                                card-hover hover:border-safety/30">
                  <PlaceholderImage label={proj.label} src={proj.src} />
                  <div className="p-5">
                    <span className="text-xs font-semibold text-safety uppercase tracking-wider">
                      {proj.type}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-steel-dark">{proj.title}</h3>
                    <p className="mt-1 text-sm text-steel-400">{proj.location}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 text-center">
              <Link href="/projects" className="btn-outline">
                View All Projects
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <CTABanner />
    </>
  );
}
