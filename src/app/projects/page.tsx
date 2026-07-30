"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import PlaceholderImage from "@/components/PlaceholderImage";
import { projects } from "@/data/content";

const categories = ["All", "Industrial", "Commercial", "Infrastructure", "Residential"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHeader
        title="Our Projects"
        subtitle="Explore our project portfolio across industrial, commercial, infrastructure, and residential sectors. Real project photos will be added as they become available."
      />

      {/* Filter + Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-safety text-steel-dark shadow-md"
                      : "bg-steel-50 text-steel-500 hover:bg-steel-100 hover:text-steel-dark"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.08}>
                <div className="group bg-white rounded-xl border border-steel-100 overflow-hidden
                                card-hover hover:border-safety/30">
                  {/* Image Placeholder */}
                  <div className="relative">
                    <PlaceholderImage label={project.title} src={project.src} />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-steel-dark/80 opacity-0 group-hover:opacity-100
                                    transition-opacity duration-300 flex items-center justify-center p-6">
                      <p className="text-white/80 text-sm text-center leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-safety uppercase tracking-wider
                                       bg-safety-50 px-2 py-0.5 rounded-full">
                        {project.scaffoldingType}
                      </span>
                      <span className="text-xs text-steel-400">{project.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-steel-dark">{project.title}</h3>
                    <p className="mt-1.5 text-sm text-steel-500 flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-steel-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-steel-400">No projects found in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Note about project photos */}
      <section className="py-12 bg-safety/5 border-y border-safety/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-safety/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-safety-700 uppercase tracking-wider">
                  Photo Update Schedule
                </h4>
                <p className="mt-1 text-sm text-steel-500">
                  Project photos are being compiled and will be uploaded to this gallery on an ongoing basis. 
                  All card placeholders are pre-configured — simply replace the placeholder component with an{" "}
                  <code className="bg-steel-100 px-1.5 py-0.5 rounded text-xs">&lt;Image&gt;</code> tag once 
                  real project photographs are available. Each card already contains accurate project 
                  metadata (scaffolding type, location, and description).
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner
        title="Want to see your project type here?"
        subtitle="Share your project requirements and we'll provide relevant case studies and references from similar projects we've executed."
        buttonText="Discuss Your Project"
      />
    </>
  );
}
