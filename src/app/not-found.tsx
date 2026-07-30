import Link from "next/link";
import Icon from "@/components/Icon";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-steel-950">
      <div className="bg-grid absolute inset-0 opacity-70" aria-hidden />
      <div
        className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-safety/[0.09] blur-3xl"
        aria-hidden
      />

      <div className="container-x relative py-20 text-center">
        <span className="font-sans text-[clamp(4.5rem,16vw,9rem)] font-extrabold leading-none tracking-tighter text-safety/25">
          404
        </span>
        <h1 className="mt-2 text-[1.75rem] font-bold text-white md:text-[2.35rem] balance">
          This page is not on our scaffold
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-[1rem] leading-relaxed text-steel-400 pretty">
          The page you are looking for has been moved or never existed. Let&apos;s get you back to
          solid ground.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-amber">
            <Icon name="arrow" size={17} className="rotate-180" />
            Back to Home
          </Link>
          <Link href="/contact" className="btn btn-glass">
            Contact Us
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-steel-500">
            Or jump to
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {NAV_LINKS.filter((l) => l.href !== "/").map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[0.82rem] font-semibold text-steel-300 transition-all hover:border-safety/50 hover:bg-white/[0.09] hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-10 text-[0.82rem] text-steel-500">
          Need help now?{" "}
          <a
            href={`tel:${COMPANY.phone.primary.replace(/\s/g, "")}`}
            className="font-semibold text-safety hover:underline"
          >
            {COMPANY.phone.primary}
          </a>
        </p>
      </div>
    </section>
  );
}
