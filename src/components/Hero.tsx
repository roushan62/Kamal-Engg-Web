"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Icon from "./Icon";
import { COMPANY } from "@/lib/constants";

const HIGHLIGHTS = [
  { icon: "cuplock", label: "Scaffolding", note: "Cuplock • Tubular • H-Frame" },
  { icon: "brush", label: "Painting", note: "Surface prep • Epoxy • PU" },
  { icon: "layers", label: "Insulation", note: "Hot • Cold • Cladding" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0 : 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative isolate flex min-h-[calc(100svh-4.75rem)] items-center overflow-hidden bg-steel-950">
      {/* Background */}
      <Image
        src="/images/hero-main.jpg"
        alt="Scaffolding erected around a refinery process unit at sunset"
        fill
        priority
        quality={82}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-950/88 to-steel-950/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-transparent to-steel-950/55" />
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />

      <div className="container-x relative w-full py-20 md:py-24">
        <div className="max-w-3xl">
          <motion.div {...fade(0.05)}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-safety/30 bg-safety/[0.12] px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-safety-300 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-safety opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-safety" />
              </span>
              {COMPANY.address.line1}, Gujarat — Pan-India Service
            </span>
          </motion.div>

          <motion.h1 {...fade(0.14)} className="h-display mt-6 text-white balance">
            Scaffolding, Painting &amp;{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-safety">Insulation</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: reduce ? 0 : 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-0 bottom-1 z-0 h-[0.28em] origin-left rounded-sm bg-safety/25"
                aria-hidden
              />
            </span>{" "}
            for India&apos;s Heavy Industry
          </motion.h1>

          <motion.p
            {...fade(0.26)}
            className="mt-7 max-w-2xl text-[1.05rem] leading-relaxed text-steel-300 pretty md:text-[1.175rem]"
          >
            One contractor for safe access, protective coating and thermal insulation. Trained crews
            working under your permit system at refineries, chemical plants, power stations and
            construction sites — mobilised fast, documented properly, dismantled cleanly.
          </motion.p>

          <motion.div {...fade(0.36)} className="mt-9 flex flex-wrap gap-3.5">
            <Link href="/contact" className="btn btn-amber !px-7 !py-4 !text-base">
              Request a Free Quote
              <Icon name="arrow" size={18} />
            </Link>
            <Link href="/services" className="btn btn-glass !px-7 !py-4 !text-base">
              <Icon name="eye" size={17} />
              Explore Services
            </Link>
          </motion.div>

          {/* Discipline pills */}
          <motion.div {...fade(0.48)} className="mt-11 grid max-w-2xl gap-3 sm:grid-cols-3">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.label}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-3.5 backdrop-blur-md transition-colors duration-300 hover:border-safety/40 hover:bg-white/[0.09]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-safety/15 text-safety transition-colors group-hover:bg-safety group-hover:text-steel-950">
                  <Icon name={h.icon} size={19} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.875rem] font-bold text-white">{h.label}</span>
                  <span className="block truncate text-[0.7rem] text-steel-400">{h.note}</span>
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
        aria-hidden
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/25 pt-2">
          <span className="h-1.5 w-1 animate-scroll-hint rounded-full bg-safety" />
        </div>
      </motion.div>

      <div className="hazard absolute inset-x-0 bottom-0 h-1.5" aria-hidden />
    </section>
  );
}
