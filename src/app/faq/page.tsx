import type { Metadata } from "next";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { faqs } from "@/data/content";
import { COMPANY, TEAM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about Kamal Engineering's scaffolding, painting and insulation services — quotations, systems, safety standards, pricing basis, mobilisation timelines and contacts.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        breadcrumb="FAQ"
        eyebrow="Questions & Answers"
        title="Everything clients usually ask before the first work order"
        description="Straight answers on scope, systems, safety, pricing basis and mobilisation. If your question is not here, call us and we will answer it directly."
        image="/images/yard-materials.jpg"
        chips={["Getting Started", "Scope & Capability", "Safety & Compliance", "Commercial"]}
      />

      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Knowledge Base"
            title="Find your answer"
            description="Search, or filter by category."
            className="mb-12"
          />
          <FAQAccordion />
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-steel-50 section-y">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Still Unsure?"
            title="Talk to the right person directly"
            description="Commercial and site matters have separate owners so you are never bounced around."
          />

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {TEAM.map((t, i) => (
              <Reveal key={t.phone} delay={i * 0.1}>
                <div className="card h-full p-7">
                  <span className="chip">{t.department}</span>
                  <h3 className="mt-4 text-[1.15rem] font-bold text-steel-950">{t.name}</h3>
                  <p className="mt-1 text-[0.85rem] font-semibold text-safety-700">{t.role}</p>
                  <p className="mt-3.5 text-[0.875rem] leading-relaxed text-steel-500 pretty">
                    {t.focus}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2.5">
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

          <Reveal delay={0.2}>
            <p className="mt-10 text-center text-[0.875rem] text-steel-500">
              Prefer email?{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="link-underline font-semibold text-steel-950"
              >
                {COMPANY.email}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Ready When You Are"
        title="Question answered? Let's get you a quotation"
        description="Send the scope and dates. Itemised proposal back to you, usually within one working day."
      />
    </>
  );
}
