"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden bg-steel-950 text-steel-300 lg:block">
        <div className="container-x flex h-10 items-center justify-between text-[13px]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Icon name="map" size={14} className="text-safety" />
              {COMPANY.address.line1}, {COMPANY.address.state} — Pan-India Service
            </span>
            <span className="flex items-center gap-2">
              <Icon name="clock" size={14} className="text-safety" />
              {COMPANY.hours}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-2 transition-colors hover:text-safety"
            >
              <Icon name="mail" size={14} className="text-safety" />
              {COMPANY.email}
            </a>
            <a
              href={`tel:${COMPANY.phone.primary.replace(/\s/g, "")}`}
              className="flex items-center gap-2 font-semibold text-white transition-colors hover:text-safety"
            >
              <Icon name="phone" size={14} className="text-safety" />
              {COMPANY.phone.primary}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-[60] transition-all duration-300 ${
          scrolled
            ? "border-b border-steel-200 bg-white/85 shadow-[0_6px_28px_-18px_rgba(20,23,28,0.5)] backdrop-blur-xl"
            : "border-b border-transparent bg-white"
        }`}
      >
        <div className="container-x">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "h-16" : "h-[4.75rem]"
            }`}
          >
            <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label={`${COMPANY.name} home`}>
              <Image
                src="/Kamal Engg Logo.png"
                alt=""
                width={190}
                height={64}
                priority
                className={`w-auto transition-all duration-300 ${scrolled ? "h-9" : "h-11"}`}
              />
              <span className="sr-only">{COMPANY.name}</span>
            </Link>

            <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-lg px-3.5 py-2 text-[0.9rem] font-semibold transition-colors ${
                      active ? "text-steel-950" : "text-steel-500 hover:text-steel-950"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-x-2.5 -bottom-px h-[3px] rounded-full bg-safety"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2.5">
              <a
                href={`tel:${COMPANY.phone.primary.replace(/\s/g, "")}`}
                className="btn btn-ghost hidden !px-4 !py-2.5 !text-sm xl:inline-flex"
              >
                <Icon name="phone" size={16} />
                Call Now
              </a>
              <Link href="/contact" className="btn btn-amber hidden !px-5 !py-2.5 !text-sm sm:inline-flex">
                Get a Quote
                <Icon name="arrow" size={16} />
              </Link>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="grid h-11 w-11 place-items-center rounded-lg border border-steel-200 text-steel-950 transition-colors hover:bg-steel-50 lg:hidden"
              >
                <Icon name={open ? "close" : "menu"} size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[55] bg-steel-950/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 36 }}
              className="fixed right-0 top-0 z-[58] flex h-[100dvh] w-[min(88vw,22rem)] flex-col bg-white shadow-2xl lg:hidden"
            >
              <div className="flex h-[4.75rem] shrink-0 items-center justify-between border-b border-steel-200 px-5">
                <Image src="/Kamal Engg Logo.png" alt="" width={150} height={48} className="h-9 w-auto" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-steel-200 text-steel-950"
                >
                  <Icon name="close" size={18} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-5" aria-label="Mobile">
                <ul className="space-y-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 22 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.045, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[1.0625rem] font-semibold transition-colors ${
                          isActive(link.href)
                            ? "bg-safety-50 text-steel-950"
                            : "text-steel-600 hover:bg-steel-50 hover:text-steel-950"
                        }`}
                      >
                        {link.label}
                        {isActive(link.href) && <span className="h-2 w-2 rounded-full bg-safety" />}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="shrink-0 space-y-2.5 border-t border-steel-200 bg-steel-50 p-5">
                <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-amber w-full">
                  Get a Free Quote
                  <Icon name="arrow" size={16} />
                </Link>
                <div className="grid grid-cols-2 gap-2.5">
                  <a href={`tel:${COMPANY.phone.primary.replace(/\s/g, "")}`} className="btn btn-ghost !px-3 !text-sm">
                    <Icon name="phone" size={15} /> Call
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn !bg-[#25D366] !px-3 !text-sm !text-white"
                  >
                    <Icon name="whatsapp" size={15} /> WhatsApp
                  </a>
                </div>
                <p className="pt-1 text-center text-xs text-steel-500">
                  {COMPANY.address.line1}, {COMPANY.address.state}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
