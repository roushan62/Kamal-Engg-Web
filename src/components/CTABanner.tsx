"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "dark" | "light";
}

export default function CTABanner({
  title = "Ready to discuss your scaffolding requirements?",
  subtitle = "Our team is available to provide technical recommendations, site assessments, and competitive quotations for your project.",
  buttonText = "Get a Quote",
  buttonHref = "/contact",
  variant = "dark",
}: CTABannerProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`relative overflow-hidden ${
        isDark ? "gradient-dark grid-pattern text-white" : "bg-safety text-steel-dark"
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-safety via-safety-400 to-transparent" />
      {isDark && (
        <>
          <div className="absolute top-0 right-0 w-80 h-80 bg-safety/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-safety/3 rounded-full blur-3xl" />
        </>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <ScrollReveal className="flex-1">
            <div className="accent-line mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">
              {title}
            </h2>
            <p className={`mt-4 text-lg max-w-xl text-balance ${isDark ? "text-white/60" : "text-steel-dark/70"}`}>
              {subtitle}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="flex-shrink-0">
            <Link
              href={buttonHref}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${
                isDark
                  ? "bg-safety text-steel-dark hover:bg-safety-600 hover:shadow-safety/25"
                  : "bg-steel-dark text-white hover:bg-steel hover:shadow-steel-dark/25"
              }`}
            >
              {buttonText}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
