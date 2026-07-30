"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { STATS } from "@/lib/constants";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      const id = setTimeout(() => setN(value), 0);
      return () => clearTimeout(id);
    }
    const duration = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="relative overflow-hidden bg-steel-950 py-14 md:py-16">
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute left-1/2 top-0 h-56 w-[42rem] -translate-x-1/2 rounded-full bg-safety/[0.09] blur-3xl"
        aria-hidden
      />
      <div className="container-x relative">
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-2 text-center lg:px-6 ${
                i % 2 === 1 ? "border-l border-white/10" : ""
              } ${i > 0 ? "lg:border-l lg:border-white/10" : "lg:border-l-0"}`}
            >
              <div className="font-sans text-[2.5rem] font-extrabold leading-none tracking-tight text-safety md:text-[3.25rem]">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-[0.9rem] font-bold text-white">{s.label}</div>
              <div className="mt-1 text-[0.775rem] leading-snug text-steel-500">{s.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
