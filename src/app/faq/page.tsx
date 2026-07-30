"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import { faqs } from "@/data/content";
import { TEAM } from "@/lib/constants";

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our scaffolding services, safety standards, rental terms, and project execution process."
      />

      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.id} delay={i * 0.05}>
                <div
                  className={`bg-white rounded-xl border transition-all duration-300 ${
                    openId === faq.id
                      ? "border-safety/40 shadow-md shadow-safety/5"
                      : "border-steel-100 hover:border-safety/20"
                  }`}
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                    aria-expanded={openId === faq.id}
                  >
                    <span className="text-sm sm:text-base font-semibold text-steel-dark pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                        openId === faq.id
                          ? "rotate-180 text-safety"
                          : "text-steel-300"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openId === faq.id && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1">
                      <div className="pt-3 border-t border-steel-100">
                        <p className="text-sm text-steel-500 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Billing Note */}
      <section className="py-12 bg-safety/5 border-y border-safety/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-safety/20">
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
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-steel-dark text-sm">
                  A Note on Billing
                </h4>
                <p className="mt-1 text-sm text-steel-500 leading-relaxed">
                  Currently billed without GST — GST invoicing to be introduced soon. This is a standard business 
                  transition and does not affect the quality, safety standards, or execution of 
                  our scaffolding services. For any billing-related questions, please contact 
                  our documentation team.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-steel-dark">
              Still have questions?
            </h2>
            <p className="mt-4 text-steel-500">
              Our team is available to answer any specific questions about your project 
              requirements, pricing, or technical specifications.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:+91${TEAM[0].phone}`}
                className="btn-primary"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Suraj Kumar
              </a>
              <a href="/contact" className="btn-outline">
                Send an Enquiry
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
