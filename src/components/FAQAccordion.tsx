"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { faqs, faqCategories } from "@/data/content";

export default function FAQAccordion() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<string | null>(faqs[0].question);
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter(
      (f) =>
        (cat === "All" || f.category === cat) &&
        (!q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q))
    );
  }, [cat, query]);

  return (
    <div>
      {/* Search */}
      <Reveal>
        <div className="relative mx-auto max-w-xl">
          <Icon
            name="search"
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-steel-400"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions…"
            aria-label="Search frequently asked questions"
            className="w-full rounded-xl border border-steel-200 bg-white py-3.5 pl-12 pr-4 text-[0.925rem] text-steel-900 shadow-sm outline-none transition-all placeholder:text-steel-400 focus:border-safety focus:ring-4 focus:ring-safety/15"
          />
        </div>
      </Reveal>

      {/* Category filter */}
      <Reveal delay={0.08}>
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          {faqCategories.map((c) => {
            const isOn = cat === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                aria-pressed={isOn}
                className={`rounded-full border px-4 py-2 text-[0.82rem] font-semibold transition-all duration-300 ${
                  isOn
                    ? "border-steel-950 bg-steel-950 text-white shadow-lg"
                    : "border-steel-200 bg-white text-steel-600 hover:border-safety hover:bg-safety-50 hover:text-steel-950"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Accordion */}
      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {list.map((f, i) => {
          const isOpen = open === f.question;
          return (
            <motion.div
              key={f.question}
              layout
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.035, 0.3) }}
              className={`overflow-hidden rounded-xl border bg-white transition-colors duration-300 ${
                isOpen ? "border-safety shadow-[0_16px_36px_-20px_rgba(20,23,28,0.35)]" : "border-steel-200"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : f.question)}
                aria-expanded={isOpen}
                className="flex w-full items-start gap-4 p-5 text-left transition-colors hover:bg-steel-50"
              >
                <span
                  className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg transition-all duration-300 ${
                    isOpen ? "rotate-45 bg-safety text-steel-950" : "bg-steel-100 text-steel-500"
                  }`}
                >
                  <Icon name="plus" size={15} />
                </span>
                <span className="flex-1">
                  <span className="block text-[0.62rem] font-bold uppercase tracking-[0.14em] text-safety-700">
                    {f.category}
                  </span>
                  <span className="mt-1 block text-[1rem] font-bold leading-snug text-steel-950 pretty">
                    {f.question}
                  </span>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-steel-100 px-5 pb-5 pt-4 pl-16 text-[0.9rem] leading-relaxed text-steel-500 pretty">
                      {f.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        {list.length === 0 && (
          <div className="rounded-xl border border-dashed border-steel-300 py-16 text-center">
            <Icon name="search" size={28} className="mx-auto text-steel-300" />
            <p className="mt-3 text-[0.925rem] font-semibold text-steel-600">No matching questions</p>
            <p className="mt-1 text-[0.85rem] text-steel-400">
              Try a different search term, or just call us — we will answer directly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
