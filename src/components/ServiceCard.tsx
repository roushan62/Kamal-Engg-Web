import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import type { ServiceItem } from "@/lib/types";

export default function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <Link
      href={`/services#${service.id}`}
      className="card img-zoom group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-steel-100">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-950/70 via-steel-950/10 to-transparent" />
        <span className="absolute left-3.5 top-3.5 rounded-full bg-white/95 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-steel-900 backdrop-blur">
          {service.discipline}
        </span>
        <div className="absolute bottom-3.5 left-3.5 grid h-11 w-11 place-items-center rounded-xl bg-safety text-steel-950 shadow-lg">
          <Icon name={service.icon} size={21} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="text-[1.075rem] font-bold leading-snug text-steel-950 transition-colors group-hover:text-safety-700">
          {service.title}
        </h3>
        <p className="mt-2.5 flex-1 text-[0.875rem] leading-relaxed text-steel-500 pretty">
          {service.short}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-[0.8rem] font-bold uppercase tracking-wider text-steel-950">
          Explore
          <Icon
            name="arrow"
            size={15}
            className="text-safety transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </span>
      </div>
    </Link>
  );
}
