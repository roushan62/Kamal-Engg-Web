"use client";

import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import PlaceholderImage from "@/components/PlaceholderImage";
import { TEAM } from "@/lib/constants";
import { differentiators } from "@/data/content";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Kamal Engineering"
        subtitle="A modern, process-driven scaffolding partner — built on technical expertise, safety compliance, and reliable project execution."
      />

      {/* Company Overview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <PlaceholderImage
                label="Kamal Engineering Team & Scaffolding Project"
                src="/images/about-overview.jpg"
                aspectRatio="video"
                className="min-h-[320px]"
              />
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <div className="accent-line mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-steel-dark tracking-tight">
                Who We Are
              </h2>
              <div className="mt-6 space-y-4 text-steel-600 leading-relaxed">
                <p>
                  Kamal Engineering is a specialized scaffolding services company providing end-to-end 
                  solutions for construction and industrial projects across India. Our organization brings 
                  together trained supervisors, experienced scaffolders, and a management team focused on 
                  delivering safe, efficient, and technically sound scaffolding systems.
                </p>
                <p>
                  We operate with a clear philosophy: scaffolding is not just about putting up pipes and 
                  platforms — it is a critical access and safety system that must be engineered, erected, 
                  inspected, and maintained with discipline. Every project we take on follows a structured 
                  workflow, from initial site survey and system recommendation to supervised erection and 
                  documented handover.
                </p>
                <p>
                  Unlike traditional labour contractors, we deploy trained crews who understand load 
                  distribution, bracing geometry, and safety protocols. Our multi-system expertise — 
                  H-Frame, Tubular (Tube &amp; Coupler), and Cuplock — allows us to recommend the right 
                  scaffolding system for your specific application, not just the one we happen to have 
                  available.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-steel-dark text-white relative overflow-hidden grid-pattern">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-safety via-safety-400 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <ScrollReveal>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-safety/20 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/70 leading-relaxed">
                  To be the most trusted scaffolding partner for India&apos;s construction and industrial 
                  sectors — delivering safe, efficient, and technically sound access solutions through 
                  trained crews, quality material, and process-driven execution. We are committed to 
                  raising the standard of scaffolding services in the country by combining engineering 
                  discipline with practical site expertise.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-safety/20 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/70 leading-relaxed">
                  To become the benchmark for professional scaffolding services in India — where 
                  &ldquo;Kamal Engineering standard&rdquo; is recognized as a mark of safety, quality, 
                  and reliability. We envision expanding our operational footprint across all major 
                  industrial and construction hubs, building long-term partnerships with leading 
                  contractors and EPC companies, and contributing to a safer, more professional 
                  scaffolding industry in the country.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="accent-line mx-auto mb-6" />
              <h2 className="section-title">What Sets Us Apart</h2>
              <p className="section-subtitle mx-auto">
                The scaffolding industry is crowded with traditional labour contractors. 
                Here&apos;s how we differentiate ourselves.
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

      {/* Leadership & Coordination Team */}
      <section className="py-16 sm:py-20 bg-steel-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollReveal>
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-steel-dark tracking-tight">
                Leadership &amp; Coordination
              </h2>
              <p className="mt-4 text-lg text-steel-500 max-w-2xl mx-auto">
                Our coordination and operations team ensures seamless communication 
                and reliable project execution.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {TEAM.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.15}>
                <div className="bg-white rounded-xl border border-steel-100 p-6 sm:p-8
                                card-hover hover:border-safety/30 text-center">
                  {/* Avatar placeholder */}
                  <div className="w-20 h-20 rounded-full bg-safety/10 flex items-center justify-center
                                  mx-auto mb-5 border-2 border-safety/20">
                    <svg className="w-10 h-10 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-steel-dark">{member.name}</h3>
                  <p className="text-sm text-safety font-medium mt-1">{member.role}</p>
                  <p className="text-xs text-steel-400 mt-1">{member.department}</p>
                  <div className="mt-4 flex items-center justify-center gap-3">
                    <a
                      href={`tel:+91${member.phone}`}
                      className="inline-flex items-center gap-1.5 text-sm text-steel-600 hover:text-safety transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +91 {member.phone}
                    </a>
                    <a
                      href={`https://wa.me/91${member.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-green-600 hover:text-green-700 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                      </svg>
                      WhatsApp
                    </a>
                  </div>
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
