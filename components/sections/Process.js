"use client";

import React from "react";
import FadeIn from "../animations/FadeIn";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Comprehensive client mapping, feasibility reviews, and technical site inspections to frame the operational parameters.",
    },
    {
      num: "02",
      title: "Design",
      desc: "Visual mockups, structural drafting, 3D architectural rendering, and fine material curation.",
    },
    {
      num: "03",
      title: "Develop",
      desc: "Rigorous planning, scheduling, materials procurement, and active construction consulting.",
    },
    {
      num: "04",
      title: "Deliver",
      desc: "Complete, uncompromising turnkey handovers matching the conceptual vision with flawless physical execution.",
    },
  ];

  return (
    <section className="py-28 bg-[#25221e] text-[#fbefe5] relative overflow-hidden">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-20 space-y-4">
          <FadeIn direction="right" duration={0.8}>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary">
              Operational Framework
            </span>
          </FadeIn>
          <FadeIn direction="right" delay={0.1} duration={0.8}>
            <h2 className="font-serif text-[38px] md:text-[48px] leading-tight text-surface-bright font-normal">
              A Journey Crafted With Purpose.
            </h2>
          </FadeIn>
        </div>

        {/* Horizontal Timeline Grid for Desktop, Vertical for Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
          {/* Subtle line background behind cards on desktop */}
          <div className="absolute top-[60px] left-0 right-0 h-px bg-outline-variant/10 hidden lg:block z-0" />

          {steps.map((step, idx) => (
            <FadeIn
              key={idx}
              direction="up"
              delay={idx * 0.15}
              duration={0.8}
              className="relative z-10"
            >
              <div className="flex flex-col gap-6 pt-6 lg:pt-16">
                {/* Step indicator node */}
                <div className="h-12 w-12 rounded bg-primary text-on-primary flex items-center justify-center font-serif text-[18px] font-bold shadow-elevated transition-transform duration-300 hover:scale-105">
                  {step.num}
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-[24px] text-surface-bright font-normal">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[14px] leading-relaxed text-[#cdc5c0]">
                    {step.desc}
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
