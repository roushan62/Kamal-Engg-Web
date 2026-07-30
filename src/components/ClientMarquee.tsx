import { clients, CLIENT_NOTE } from "@/data/content";
import Reveal from "./Reveal";

function Tile({ name, sector }: { name: string; sector: string }) {
  return (
    <div className="group mx-2 flex h-[5.25rem] w-[13.5rem] shrink-0 flex-col items-center justify-center rounded-xl border border-steel-200 bg-white px-4 transition-all duration-300 hover:-translate-y-1 hover:border-safety-300 hover:shadow-[0_16px_32px_-18px_rgba(20,23,28,0.3)]">
      <span className="text-center font-sans text-[1.0625rem] font-bold leading-tight tracking-tight text-steel-800 transition-colors group-hover:text-steel-950">
        {name}
      </span>
      <span className="mt-1.5 text-center text-[0.65rem] font-semibold uppercase leading-tight tracking-wider text-steel-400">
        {sector}
      </span>
    </div>
  );
}

export default function ClientMarquee() {
  const row1 = clients.slice(0, Math.ceil(clients.length / 2));
  const row2 = clients.slice(Math.ceil(clients.length / 2));

  return (
    <section className="border-y border-steel-200 bg-steel-50 py-14 md:py-16">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              <span className="h-px w-7 bg-safety-600" />
              Where Our Work Has Gone
              <span className="h-px w-7 bg-safety-600" />
            </span>
            <h2 className="mt-4 text-[1.5rem] font-bold tracking-tight text-steel-950 md:text-[1.875rem] balance">
              Delivering at India&apos;s largest industrial sites
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[0.9rem] leading-relaxed text-steel-500 pretty">
              {CLIENT_NOTE}
            </p>
          </div>
        </Reveal>
      </div>

      <div className="marquee-wrap mask-fade-x mt-10 space-y-3.5 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...row1, ...row1].map((c, i) => (
            <Tile key={`a${i}`} {...c} />
          ))}
        </div>
        <div className="flex w-max animate-marquee [animation-direction:reverse] [animation-duration:38s]">
          {[...row2, ...row2].map((c, i) => (
            <Tile key={`b${i}`} {...c} />
          ))}
        </div>
      </div>

      <div className="container-x mt-9">
        <p className="text-center text-[0.7rem] leading-relaxed text-steel-400">
          Names shown identify the end-user sites where work was executed. All trademarks and brand
          names are the property of their respective owners and are used here for identification
          purposes only. Kamal Engineering is an independent specialist contractor and does not claim
          endorsement or direct affiliation.
        </p>
      </div>
    </section>
  );
}
