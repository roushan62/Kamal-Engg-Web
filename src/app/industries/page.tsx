"use client";

import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import IndustryCard from "@/components/IndustryCard";
import PlaceholderImage from "@/components/PlaceholderImage";
import { industries, clientIndustries } from "@/data/content";

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        title="Industries We Serve"
        subtitle="Our scaffolding systems and services support projects across construction, industrial, infrastructure, and commercial sectors — each with specific access requirements and safety protocols."
      />

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <IndustryCard key={industry.id} industry={industry} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Industry Types */}
      <section className="py-16 sm:py-20 bg-steel-dark text-white relative overflow-hidden grid-pattern">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-safety via-safety-400 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <ScrollReveal>
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Specialized Industrial Applications
              </h2>
              <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
                Our team has experience in heavy industrial environments that require 
                specialized scaffolding solutions and safety protocols.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {clientIndustries.map((ci, i) => (
              <ScrollReveal key={ci.id} delay={i * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10
                                text-center hover:bg-white/10 transition-colors h-full">
                  <div className="w-14 h-14 rounded-full bg-safety/20 flex items-center justify-center
                                  mx-auto mb-4">
                    <svg
                      className="w-7 h-7 text-safety"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={ci.icon}
                      />
                    </svg>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{ci.title}</h4>
                  <p className="text-white/50 text-sm">{ci.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Experience by Industry */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <ScrollReveal>
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-steel-dark">
                Project Types by Industry
              </h2>
              <p className="mt-4 text-lg text-steel-500 max-w-2xl mx-auto">
                The scaffolding system and configuration varies by industry application. 
                Here&apos;s a snapshot of how we approach different sectors.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                industry: "Construction & Real Estate",
                system: "H-Frame + Cuplock (Hybrid)",
                projects: "Residential towers, commercial buildings, mixed-use developments",
                imageLabel: "Scaffolding on building construction site",
                src: "/images/project-residential.jpg",
              },
              {
                industry: "Industrial Plants (Cement / Steel / Power)",
                system: "Cuplock + Tubular",
                projects: "Shutdown scaffolding, equipment access, confined space platforms",
                imageLabel: "Industrial plant scaffolding setup",
                src: "/images/project-cement.jpg",
              },
              {
                industry: "Infrastructure / EPC",
                system: "Tubular (Tube & Coupler)",
                projects: "Bridge access, metro stations, water treatment plants",
                imageLabel: "Infrastructure scaffolding for bridge or metro",
                src: "/images/project-bridge.jpg",
              },
              {
                industry: "Warehousing & Commercial Fit-Out",
                system: "H-Frame + Mobile Towers",
                projects: "PEB warehouse construction, mall interior access, office renovation",
                imageLabel: "Scaffolding at warehouse or fit-out project",
                src: "/images/service-rent-sale.jpg",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.industry} delay={i * 0.15}>
                <div className="bg-white rounded-xl border border-steel-100 overflow-hidden
                                card-hover hover:border-safety/30">
                  <PlaceholderImage label={item.imageLabel} src={item.src} aspectRatio="wide" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-safety uppercase tracking-wider
                                       bg-safety-50 px-2 py-0.5 rounded-full">
                        {item.system}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-steel-dark">{item.industry}</h3>
                    <p className="mt-2 text-sm text-steel-500">{item.projects}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Working in a sector not listed here?"
        subtitle="We adapt our scaffolding solutions to virtually any construction or industrial access requirement. Contact us to discuss your specific project needs."
        buttonText="Tell Us About Your Project"
      />
    </>
  );
}
