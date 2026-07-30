"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import type { ServiceItem } from "@/lib/types";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const serviceIcons: Record<string, string> = {
  "erection-dismantling":
    "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  "h-frame":
    "M4 5a1 1 0 011-1h4a1 1 0 011 1v7h4V5a1 1 0 011-1h4a1 1 0 011 1v14M4 19h16",
  tubular:
    "M13 10V3L4 14h7v7l9-11h-7z",
  cuplock:
    "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  "supply-service":
    "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const icon = serviceIcons[service.id] || serviceIcons["erection-dismantling"];

  return (
    <ScrollReveal delay={index * 0.1}>
      <Link
        href={`/services#${service.id}`}
        className="group block bg-white border border-steel-100 rounded-xl p-6 sm:p-8 
                   card-hover hover:border-safety/30 hover:shadow-lg hover:shadow-safety/5"
      >
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-safety/10 flex items-center justify-center mb-5
                        group-hover:bg-safety/20 transition-colors duration-300">
          <svg
            className="w-6 h-6 text-safety"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d={icon}
            />
          </svg>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-steel-dark group-hover:text-steel transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-xs text-safety font-medium uppercase tracking-wider mt-1">
          {service.subtitle}
        </p>
        <p className="mt-3 text-sm text-steel-500 leading-relaxed line-clamp-3">
          {service.description}
        </p>

        {/* Features */}
        <div className="mt-4 flex flex-wrap gap-2">
          {service.features.slice(0, 3).map((feature, i) => (
            <span
              key={i}
              className="text-[11px] px-2 py-1 rounded-full bg-steel-50 text-steel-500
                         group-hover:bg-safety-50 group-hover:text-safety-700 transition-colors"
            >
              {feature.split(":")[0].length > 30
                ? feature.substring(0, 30) + "..."
                : feature.split(":")[0]}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-safety group-hover:text-safety-600 transition-colors">
          Learn more
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Link>
    </ScrollReveal>
  );
}
