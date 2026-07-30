"use client";

import ScrollReveal from "./ScrollReveal";
import type { IndustryItem } from "@/lib/types";

interface IndustryCardProps {
  industry: IndustryItem;
  index: number;
}

export default function IndustryCard({ industry, index }: IndustryCardProps) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="group bg-white border border-steel-100 rounded-xl p-6 sm:p-8
                      card-hover hover:border-safety/30">
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
              d={industry.icon}
            />
          </svg>
        </div>

        <h3 className="text-lg font-bold text-steel-dark">{industry.title}</h3>
        <p className="mt-3 text-sm text-steel-500 leading-relaxed">
          {industry.description}
        </p>

        {industry.applications.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {industry.applications.map((app, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-steel-400">
                <svg
                  className="w-4 h-4 text-safety mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {app}
              </li>
            ))}
          </ul>
        )}
      </div>
    </ScrollReveal>
  );
}
