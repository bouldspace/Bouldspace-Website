"use client";

import React from "react";
import { Home, Landmark, Building, Sliders } from "lucide-react";
import FadeIn from "../animations/FadeIn";

export default function Industries() {
  const sectors = [
    {
      icon: <Home className="h-6 w-6 text-primary" />,
      title: "Luxury Residential",
      desc: "Tailored high-end custom villas, penthouse suites, and custom country houses requiring maximum execution and design depth.",
    },
    {
      icon: <Building className="h-6 w-6 text-primary" />,
      title: "Commercial & Boutique",
      desc: "Stunning minimalist workplaces, boutique retail assets, and high-end restaurant environments prioritizing corporate identity.",
    },
    {
      icon: <Landmark className="h-6 w-6 text-primary" />,
      title: "Institutional Masterplans",
      desc: "Architectural layouts and consulting blueprints for large educational, social, and art studio campuses.",
    },
    {
      icon: <Sliders className="h-6 w-6 text-primary" />,
      title: "Industrial & Precision",
      desc: "Visionary structural engineering, manufacturing spaces, and large-scale industrial facilities built under extreme structural load parameters.",
    },
  ];

  return (
    <section className="py-28 bg-[#1e1b18] text-[#fbefe5] overflow-hidden relative">
      {/* Subtle blueprint grid line overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-xl mb-20 space-y-4">
          <FadeIn direction="right" duration={0.8}>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary">
              Sectors of Operation
            </span>
          </FadeIn>
          <FadeIn direction="right" delay={0.1} duration={0.8}>
            <h2 className="font-serif text-[38px] md:text-[48px] leading-tight text-surface-bright font-normal">
              Redefining Environments Across Industries.
            </h2>
          </FadeIn>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, idx) => (
            <FadeIn
              key={idx}
              direction="up"
              delay={idx * 0.1}
              duration={0.8}
            >
              <div className="flex flex-col gap-6 p-8 border border-outline-variant/10 rounded h-full bg-[#25221e] hover:-translate-y-1 transition-transform duration-300">
                <div className="h-12 w-12 rounded bg-[#332f2a] flex items-center justify-center shrink-0">
                  {sector.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-[20px] text-surface-bright font-normal">
                    {sector.title}
                  </h3>
                  <p className="font-sans text-[14px] leading-relaxed text-[#cdc5c0]">
                    {sector.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
