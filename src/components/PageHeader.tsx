"use client";

import ScrollReveal from "./ScrollReveal";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative gradient-hero grid-pattern pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
      {/* Accent line decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-safety via-safety-400 to-transparent" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-safety/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-safety/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="accent-line mb-6" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            {title}
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-4 text-lg text-white/60 max-w-2xl text-balance">
            {subtitle}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
