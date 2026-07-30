import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumb,
  chips,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  breadcrumb: string;
  chips?: string[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-steel-950">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-[0.28]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-950/85 to-steel-950/40" />
        </>
      )}
      <div className="bg-grid absolute inset-0 opacity-70" aria-hidden />
      <div
        className="absolute -right-24 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-safety/[0.08] blur-3xl"
        aria-hidden
      />

      <div className="container-x relative py-16 md:py-24 lg:py-28">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2 text-[0.8rem] text-steel-400">
            <Link href="/" className="transition-colors hover:text-safety">
              Home
            </Link>
            <Icon name="chevron" size={13} className="-rotate-90 text-steel-600" />
            <span className="font-semibold text-safety">{breadcrumb}</span>
          </nav>
        </Reveal>

        <Reveal delay={0.06}>
          <span className="eyebrow-light">
            <span className="h-px w-7 bg-safety-400" />
            {eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.12}>
          <h1 className="mt-4 max-w-4xl text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.032em] text-white balance">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-steel-300 pretty md:text-lg">
            {description}
          </p>
        </Reveal>

        {chips && chips.length > 0 && (
          <Reveal delay={0.28}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {chips.map((c) => (
                <span key={c} className="chip-dark !text-[0.72rem]">
                  <Icon name="check" size={12} />
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        )}
      </div>

      <div className="hazard h-1.5" aria-hidden />
    </section>
  );
}
