import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = COMPANY.siteUrl;
  const now = new Date();

  const routes: Array<{ path: string; priority: number; freq: "weekly" | "monthly" }> = [
    { path: "", priority: 1.0, freq: "weekly" },
    { path: "/services", priority: 0.95, freq: "weekly" },
    { path: "/contact", priority: 0.9, freq: "monthly" },
    { path: "/projects", priority: 0.85, freq: "weekly" },
    { path: "/about", priority: 0.8, freq: "monthly" },
    { path: "/industries", priority: 0.8, freq: "monthly" },
    { path: "/safety", priority: 0.75, freq: "monthly" },
    { path: "/faq", priority: 0.7, freq: "monthly" },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
