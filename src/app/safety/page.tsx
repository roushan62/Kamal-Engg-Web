"use client";

import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import { safetyStandards } from "@/data/content";

export default function SafetyPage() {
  return (
    <>
      <PageHeader
        title="Safety &amp; Compliance"
        subtitle="Safety is not an add-on — it is how we work. Our scaffolding practices follow IS 3696 standards and international best-practice safety guidelines."
      />

      {/* Safety Commitment */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="accent-line mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-steel-dark">
                Our Commitment to Safety
              </h2>
              <div className="mt-6 space-y-4 text-steel-600 leading-relaxed">
                <p>
                  At Kamal Engineering, safety is embedded in every stage of our work — from 
                  material selection and crew training to on-site erection practices and post-handover 
                  monitoring. We believe that a safe scaffold is the foundation of a successful project, 
                  and we take this responsibility seriously.
                </p>
                <p>
                  Our safety framework is built on three pillars: <strong>competent people</strong> 
                  (trained, experienced scaffolders who understand load dynamics and safe work practices),{" "}
                  <strong>quality material</strong> (regularly inspected, properly maintained scaffolding 
                  components), and <strong>documented processes</strong> (pre-use checklists, toolbox 
                  talks, supervisor sign-offs).
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Safety Standards Detail */}
      <section className="py-16 sm:py-20 bg-steel-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <ScrollReveal>
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-steel-dark">
                Safety Standards &amp; Practices
              </h2>
              <p className="mt-4 text-lg text-steel-500 max-w-2xl mx-auto">
                We follow established standards and protocols — not invented checklists.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {safetyStandards.map((std, i) => (
              <ScrollReveal key={std.title} delay={i * 0.08}>
                <div className="bg-white rounded-xl border border-steel-100 p-6 sm:p-8
                                card-hover hover:border-safety/30 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-safety/10 flex items-center justify-center
                                    flex-shrink-0 mt-1">
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
                          d={std.icon}
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-steel-dark mb-2">{std.title}</h3>
                      <p className="text-sm text-steel-500 leading-relaxed">{std.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Notice */}
      <section className="py-12 bg-safety/5 border-y border-safety/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-safety/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-safety"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-safety-700 uppercase tracking-wider">
                  Verification Note
                </h4>
                <p className="mt-1 text-sm text-steel-500">
                  The safety practices described on this page represent our operational standards.{" "}
                  <strong className="text-safety-600">
                    [VERIFY WITH OPERATIONS TEAM BEFORE PUBLISHING]
                  </strong>{" "}
                  — specific certification statuses, training records, and documented compliance 
                  should be confirmed by the operations management before the website goes live. 
                  This ensures that all claims made publicly are accurate and verifiable.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Safety Practices Summary Cards */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <ScrollReveal>
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-steel-dark">
                Daily Safety Practices on Site
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Toolbox Talks",
                desc: "Pre-work safety briefing covering site-specific hazards, emergency procedures, and task coordination for the shift ahead.",
                note: "[VERIFY WITH OPERATIONS TEAM BEFORE PUBLISHING]",
                icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
              },
              {
                title: "Pre-Use Inspection",
                desc: "Structured checklist inspection of scaffold structure before handover — covering material condition, bracing, ties, and platform integrity.",
                note: "",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
              },
              {
                title: "PPE Verification",
                desc: "Every crew member is checked for proper PPE — helmet, harness (above 2m), safety shoes, high-vis vest, and gloves — before entering the work area.",
                note: "",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Load Rating Compliance",
                desc: "Every scaffold is designed and erected to a defined load category. Overloading is never permitted. Load rating is displayed on the structure.",
                note: "",
                icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
              },
              {
                title: "Anchoring & Tie-Off",
                desc: "Proper anchoring and tie-off systems installed at specified intervals based on height and configuration, as per IS 3696 and system guidelines.",
                note: "",
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
              },
              {
                title: "Dismantling Protocol",
                desc: "Controlled, supervised dismantling sequence — top-down, with material sorting and recovery. No rushed or unsafe dismantling under any circumstances.",
                note: "",
                icon: "M19 13l-7 7-7-7m14-8l-7 7-7-7",
              },
            ].map((practice, i) => (
              <ScrollReveal key={practice.title} delay={i * 0.08}>
                <div className="bg-white rounded-xl border border-steel-100 p-6
                                card-hover hover:border-safety/30 h-full">
                  <div className="w-10 h-10 rounded-lg bg-safety/10 flex items-center justify-center mb-4">
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
                        d={practice.icon}
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-steel-dark">{practice.title}</h4>
                  <p className="mt-2 text-sm text-steel-500 leading-relaxed">{practice.desc}</p>
                  {practice.note && (
                    <p className="mt-3 text-[10px] text-safety-600 uppercase tracking-wider font-medium">
                      {practice.note}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Have questions about our safety practices?"
        subtitle="We are happy to share detailed safety documentation and discuss site-specific requirements for your project."
        buttonText="Contact Us"
      />
    </>
  );
}
