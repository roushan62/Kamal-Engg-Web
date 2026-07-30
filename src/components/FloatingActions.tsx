"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import { COMPANY } from "@/lib/constants";

export default function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waMsg = encodeURIComponent(
    "Hello Kamal Engineering, I would like an enquiry for scaffolding / painting / insulation work."
  );

  return (
    <>
      {/* Desktop rail */}
      <div className="fixed bottom-6 right-6 z-50 hidden flex-col items-end gap-3 md:flex">
        <AnimatePresence>
          {show && (
            <motion.button
              key="top"
              type="button"
              initial={{ opacity: 0, scale: 0.7, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 12 }}
              transition={{ duration: 0.25 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="grid h-11 w-11 place-items-center rounded-full border border-steel-200 bg-white text-steel-950 shadow-lg transition-all hover:-translate-y-1 hover:border-safety hover:text-safety-700"
            >
              <Icon name="chevron" size={19} className="rotate-180" />
            </motion.button>
          )}
        </AnimatePresence>

        <a
          href={`https://wa.me/${COMPANY.whatsapp}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-110"
        >
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]/50" aria-hidden />
          <Icon name="whatsapp" size={26} className="relative" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-steel-950 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile action bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-steel-200 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_28px_-14px_rgba(20,23,28,0.35)] backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-3">
          <a
            href={`tel:${COMPANY.phone.primary.replace(/\s/g, "")}`}
            className="flex flex-col items-center gap-1 py-2.5 text-[0.7rem] font-semibold text-steel-700 active:bg-steel-50"
          >
            <Icon name="phone" size={19} className="text-steel-950" />
            Call
          </a>
          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 border-x border-steel-200 py-2.5 text-[0.7rem] font-semibold text-steel-700 active:bg-steel-50"
          >
            <Icon name="whatsapp" size={19} className="text-[#25D366]" />
            WhatsApp
          </a>
          <Link
            href="/contact"
            className="flex flex-col items-center gap-1 bg-safety py-2.5 text-[0.7rem] font-bold text-steel-950 active:bg-safety-400"
          >
            <Icon name="mail" size={19} />
            Enquire
          </Link>
        </div>
      </div>
      <div className="h-[3.75rem] md:hidden" aria-hidden />
    </>
  );
}
