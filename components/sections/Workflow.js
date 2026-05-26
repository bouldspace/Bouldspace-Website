"use client";

import React from "react";
import FadeIn from "../animations/FadeIn";

export default function Workflow() {
  const steps = [
    { num: "01", title: "Understand", desc: "Mapping core client spatial goals, budget limits, and site variables." },
    { num: "02", title: "Strategize", desc: "Scheduling procurement, auditing contractors, and planning paths." },
    { num: "03", title: "Design", desc: "Drafting visual models, blueprints, and materials curation." },
    { num: "04", title: "Coordinate", desc: "Aligning architectural designs directly with structural constraints." },
    { num: "05", title: "Execute", desc: "Active on-site masonry management and quality audits." },
    { num: "06", title: "Deliver", desc: "Flawless turnkey handovers on the promised timeline." },
  ];

  return (
    <section className="py-28 bg-surface-container-low overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-20 space-y-4">
          <FadeIn direction="right" duration={0.8}>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary">
              Execution Roadmap
            </span>
          </FadeIn>
          <FadeIn direction="right" delay={0.1} duration={0.8}>
            <h2 className="font-serif text-[38px] md:text-[48px] leading-tight text-on-surface font-normal">
              Our Operational Approach
            </h2>
          </FadeIn>
        </div>

        {/* 6-Column Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative">
          {/* Subtle connecting line for desktop */}
          <div className="absolute top-[35px] left-0 right-0 h-px bg-outline-variant/30 hidden lg:block z-0" />

          {steps.map((step, idx) => (
            <FadeIn
              key={idx}
              direction="up"
              delay={idx * 0.1}
              duration={0.8}
              className="relative z-10"
            >
              <div className="flex flex-col gap-4 pt-4">
                {/* Node */}
                <div className="h-10 w-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-serif text-[16px] font-bold shadow-elevated transition-transform duration-300 hover:scale-105">
                  {step.num}
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-[20px] text-on-surface font-normal">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[13px] leading-relaxed text-secondary">
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
