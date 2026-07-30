"use client";

import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import PlaceholderImage from "@/components/PlaceholderImage";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Scaffolding Services"
        subtitle="Comprehensive scaffolding solutions — from erection and dismantling to material supply and technical support. H-Frame, Tubular, Cuplock, and full-cycle project execution."
      />

      {/* Service Detail Sections */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${idx % 2 === 1 ? "bg-steel-50/50" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image side */}
              <ScrollReveal direction={idx % 2 === 0 ? "left" : "right"}>
                <PlaceholderImage
                  label={service.title}
                  src={service.src}
                  aspectRatio="video"
                  className="min-h-[300px]"
                />
              </ScrollReveal>

              {/* Content side */}
              <ScrollReveal direction={idx % 2 === 0 ? "right" : "left"} delay={0.1}>
                <div className="space-y-6">
                  {/* Service badge */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-safety/10 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-safety"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={service.icon}
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-safety uppercase tracking-wider">
                      {service.subtitle}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-steel-dark tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-steel-600 leading-relaxed">{service.description}</p>

                  {/* Use Cases */}
                  <div>
                    <h4 className="text-sm font-semibold text-steel-dark uppercase tracking-wider mb-3">
                      Typical Applications
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.useCases.map((uc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-steel-500">
                          <svg
                            className="w-4 h-4 text-safety mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {uc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h4 className="text-sm font-semibold text-steel-dark uppercase tracking-wider mb-3">
                      Key Specifications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.specifications.map((spec, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1.5 rounded-full bg-steel-50 text-steel-500 border border-steel-100"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-steel-dark uppercase tracking-wider mb-3">
                      Why This System
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-steel-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-safety mt-1.5 flex-shrink-0" />
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Process Overview */}
      <section className="py-16 sm:py-20 bg-steel-dark text-white relative overflow-hidden grid-pattern">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-safety via-safety-400 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <ScrollReveal>
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Project Workflow</h2>
              <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
                Every project follows a structured process to ensure safety, 
                efficiency, and accountability at every stage.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: "01", title: "Inquiry & Assessment", desc: "Understand project requirements and site conditions" },
              { step: "02", title: "Site Survey", desc: "Physical survey for measurements and access planning" },
              { step: "03", title: "System Recommendation", desc: "Right scaffolding system for the application" },
              { step: "04", title: "Quotation & Approval", desc: "Transparent pricing with material breakup" },
              { step: "05", title: "Mobilization & Erection", desc: "Material delivery and supervised erection" },
              { step: "06", title: "Inspection & Handover", desc: "Pre-use checklist and documented handover" },
            ].map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 text-center
                                hover:bg-white/10 transition-colors h-full">
                  <div className="text-safety text-2xl font-bold mb-2">{step.step}</div>
                  <h4 className="text-white font-semibold text-sm mb-1.5">{step.title}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
