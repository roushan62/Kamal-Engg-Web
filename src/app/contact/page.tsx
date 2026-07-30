"use client";

import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import { COMPANY, TEAM } from "@/lib/constants";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have a scaffolding requirement? Get in touch with our coordination team for technical recommendations, site assessments, and competitive quotations."
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-white rounded-xl border border-steel-100 p-6 sm:p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-steel-dark mb-2">
                    Send an Enquiry
                  </h2>
                  <p className="text-sm text-steel-500 mb-8">
                    Fill in the details below and our team will get back to you within 24 hours.
                  </p>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right" delay={0.1}>
                <div className="space-y-8">
                  {/* Team Contacts */}
                  <div>
                    <h3 className="text-sm font-semibold text-steel-400 uppercase tracking-wider mb-4">
                      Key Contacts
                    </h3>
                    <div className="space-y-4">
                      {TEAM.map((member) => (
                        <div
                          key={member.name}
                          className="bg-white rounded-xl border border-steel-100 p-5
                                     card-hover hover:border-safety/30"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 rounded-full bg-safety/10 flex items-center justify-center
                                            flex-shrink-0 border-2 border-safety/20">
                              <svg
                                className="w-6 h-6 text-safety"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-steel-dark">{member.name}</h4>
                              <p className="text-xs text-safety font-medium mt-0.5">
                                {member.role}
                              </p>
                              <p className="text-xs text-steel-400 mt-0.5">
                                {member.department}
                              </p>
                              <div className="mt-2 flex items-center gap-3">
                                <a
                                  href={`tel:+91${member.phone}`}
                                  className="inline-flex items-center gap-1 text-sm text-steel-600 hover:text-safety transition-colors"
                                >
                                  <svg
                                    className="w-3.5 h-3.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                  </svg>
                                  +91 {member.phone}
                                </a>
                                <a
                                  href={`https://wa.me/91${member.phone}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-sm text-[#25D366] hover:text-[#1da851] transition-colors"
                                >
                                  <svg
                                    className="w-3.5 h-3.5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                                  </svg>
                                  WhatsApp
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-steel-dark text-white rounded-xl p-6">
                    <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                      Email
                    </h3>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-safety hover:text-safety-400 transition-colors break-all font-medium"
                    >
                      {COMPANY.email}
                    </a>
                  </div>

                  {/* Working Hours */}
                  <div className="bg-white rounded-xl border border-steel-100 p-6">
                    <h3 className="text-sm font-semibold text-steel-400 uppercase tracking-wider mb-3">
                      Response Time
                    </h3>
                    <div className="space-y-2 text-sm text-steel-600">
                      <p className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Enquiries: Within 24 hours
                      </p>
                      <p className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Site Visits: Scheduled within 2-3 working days
                      </p>
                      <p className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Quotations: 1-2 working days after site assessment
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Active Operational Hubs & Service Area */}
      <section className="py-12 bg-steel-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-steel-dark text-white rounded-xl border border-steel-800 overflow-hidden shadow-xl relative grid-pattern p-6 sm:p-10 lg:p-12">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-safety via-safety-400 to-transparent" />
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center relative z-10">
                {/* Hub text list */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <span className="text-xs font-semibold text-safety uppercase tracking-wider bg-safety/10 px-3 py-1.5 rounded-full border border-safety/20">
                      National Reach
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold mt-4 tracking-tight">
                      Our Operational Hubs &amp; Service Coverage
                    </h3>
                    <p className="mt-3 text-sm text-white/60 leading-relaxed">
                      Kamal Engineering supports massive infrastructure, commercial and heavy-industrial scaffolding projects across major Indian states. Our regional logistics network ensures swift mobilization.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { state: "NCR / Delhi", desc: "High-Rise & Commercial Developments" },
                      { state: "Madhya Pradesh", desc: "Industrial Plants & Shutdown Services" },
                      { state: "Uttar Pradesh", desc: "Commercial & Civil Infrastructure" },
                      { state: "Rajasthan", desc: "EPC Projects, Bridge & Highway Access" },
                      { state: "Haryana", desc: "Logistics Parks & PEB Warehouses" },
                      { state: "Chhattisgarh", desc: "Power Plants, Boiler Access & Steel Mills" },
                    ].map((hub) => (
                      <div key={hub.state} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-safety animate-pulse" />
                        <div>
                          <span className="font-semibold text-sm text-white">{hub.state}</span>
                          <span className="text-xs text-white/40 block sm:inline sm:ml-2">— {hub.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-xs text-white/50 border-t border-white/10">
                    <p>🇮🇳 Serving heavy B2B enterprises and tier-1 EPC contractors nationwide.</p>
                  </div>
                </div>

                {/* Visual Technical Map Mockup */}
                <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-xl p-6 h-[320px] flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-safety/5 to-transparent pointer-events-none" />
                  
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none opacity-20">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="border-[0.5px] border-white/20" />
                    ))}
                  </div>

                  {/* Top bar */}
                  <div className="flex justify-between items-center relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
                      <span className="text-xs font-mono text-white/80 tracking-widest uppercase">System Active</span>
                    </div>
                    <span className="text-[10px] font-mono text-white/40">LAT/LONG: MULTI-REGIONAL GRID</span>
                  </div>

                  {/* Hotspots Map Simulation */}
                  <div className="relative flex-1 flex items-center justify-center">
                    {/* Glowing structural lines */}
                    <div className="absolute w-[200px] h-0.5 bg-gradient-to-r from-transparent via-safety/40 to-transparent rotate-45" />
                    <div className="absolute w-[180px] h-0.5 bg-gradient-to-r from-transparent via-safety/30 to-transparent -rotate-12" />
                    
                    {/* Hotspot 1 (Delhi/NCR) */}
                    <div className="absolute top-[20%] left-[45%] group cursor-pointer">
                      <div className="w-3 h-3 bg-safety rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-safety/50">
                        <div className="w-1.5 h-1.5 bg-steel-dark rounded-full" />
                      </div>
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-steel-900 border border-steel-700 rounded px-2 py-1 text-[10px] font-mono text-white whitespace-nowrap opacity-0 group-hover:opacity-100 lg:opacity-100 transition-opacity">
                        NCR HUB (ACTIVE)
                      </div>
                    </div>

                    {/* Hotspot 2 (Madhya Pradesh) */}
                    <div className="absolute top-[60%] left-[50%] group cursor-pointer">
                      <div className="w-3 h-3 bg-safety rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-safety/50" style={{ animationDelay: "0.2s" }}>
                        <div className="w-1.5 h-1.5 bg-steel-dark rounded-full" />
                      </div>
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-steel-900 border border-steel-700 rounded px-2 py-1 text-[10px] font-mono text-white whitespace-nowrap opacity-0 group-hover:opacity-100 lg:opacity-100 transition-opacity">
                        MP INDUSTRIAL (ACTIVE)
                      </div>
                    </div>

                    {/* Hotspot 3 (Rajasthan) */}
                    <div className="absolute top-[40%] left-[30%] group cursor-pointer">
                      <div className="w-3 h-3 bg-safety rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-safety/50" style={{ animationDelay: "0.4s" }}>
                        <div className="w-1.5 h-1.5 bg-steel-dark rounded-full" />
                      </div>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-steel-900 border border-steel-700 rounded px-2 py-1 text-[10px] font-mono text-white whitespace-nowrap opacity-0 group-hover:opacity-100 lg:opacity-100 transition-opacity">
                        RAJASTHAN EPC (ACTIVE)
                      </div>
                    </div>

                    {/* Hotspot 4 (Chhattisgarh) */}
                    <div className="absolute top-[75%] left-[65%] group cursor-pointer">
                      <div className="w-3 h-3 bg-safety rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-safety/50" style={{ animationDelay: "0.6s" }}>
                        <div className="w-1.5 h-1.5 bg-steel-dark rounded-full" />
                      </div>
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-steel-900 border border-steel-700 rounded px-2 py-1 text-[10px] font-mono text-white whitespace-nowrap opacity-0 group-hover:opacity-100 lg:opacity-100 transition-opacity">
                        CG POWER & STEEL (ACTIVE)
                      </div>
                    </div>
                  </div>

                  {/* Bottom metrics */}
                  <div className="flex justify-between items-end border-t border-white/5 pt-2 relative z-10">
                    <div className="text-[10px] font-mono text-white/40">
                      MOBILIZATION NETWORK: 100% SECURE
                    </div>
                    <div className="text-[10px] font-mono text-safety uppercase">
                      STANDARDS: IS 3696 &amp; OSHA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
