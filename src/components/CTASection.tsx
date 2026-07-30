import Link from "next/link";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { COMPANY } from "@/lib/constants";

export default function CTASection({
  title = "Ready to plan your next access, coating or insulation package?",
  description = "Share your scope, drawings and target dates. We survey the site, propose the right system, and give you an itemised quotation — usually within one working day.",
  eyebrow = "Start Your Enquiry",
}: {
  title?: string;
  description?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-steel-950">
      <div className="bg-grid absolute inset-0 opacity-70" aria-hidden />
      <div
        className="absolute -left-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-safety/[0.11] blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -right-24 h-[26rem] w-[26rem] rounded-full bg-navy-500/25 blur-3xl"
        aria-hidden
      />

      <div className="container-x relative section-y">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow-light justify-center">
              <span className="h-px w-7 bg-safety-400" />
              {eyebrow}
              <span className="h-px w-7 bg-safety-400" />
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="h-section mt-5 !text-white balance">{title}</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-steel-400 pretty">
              {description}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn btn-amber !px-7 !py-4">
                Get a Free Quote
                <Icon name="arrow" size={18} />
              </Link>
              <a
                href={`tel:${COMPANY.phone.primary.replace(/\s/g, "")}`}
                className="btn btn-glass !px-7 !py-4"
              >
                <Icon name="phone" size={17} />
                {COMPANY.phone.primary}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[0.8rem] text-steel-500">
              {["No obligation site survey", "Itemised quotation", "Pan-India mobilisation"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <Icon name="check" size={14} className="text-safety" />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <div className="hazard h-1.5" aria-hidden />
    </section>
  );
}
