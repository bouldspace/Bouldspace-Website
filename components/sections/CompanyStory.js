"use client";

import React from "react";
import FadeIn from "../animations/FadeIn";

export default function CompanyStory() {
  const milestones = [
    {
      year: "2016",
      title: "The Vision Founded",
      desc: "Bouldspace was established as a boutique architectural studio in Delhi NCR, focusing on pure craftsmanship and raw material honesty.",
    },
    {
      year: "2019",
      title: "Bridging the Chasm",
      desc: "Frustrated by fragmented construction workflows where structural execution ruined design details, we integrated a full-cycle project management division.",
    },
    {
      year: "2022",
      title: "National Advisory Operations",
      desc: "Expanded consulting footprint to cover Hyderabad, Pune, and Bengaluru, taking charge of large-scale residential and boutique commercial landmarks.",
    },
    {
      year: "2025",
      title: "Exploratory Concepts Division",
      desc: "Launched a dedicated research and concepts division focusing on extreme environmental designs, space habitat mockups, and extraterrestrial planning.",
    },
  ];

  return (
    <section className="py-28 bg-surface-container-low overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column - Historical Milestones */}
        <div className="lg:col-span-6 space-y-12">
          <div className="space-y-4">
            <FadeIn direction="right" duration={0.8}>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary">
                Founding Story
              </span>
            </FadeIn>
            <FadeIn direction="right" delay={0.1} duration={0.8}>
              <h2 className="font-serif text-[38px] md:text-[48px] leading-tight text-on-surface font-normal">
                Bridging Creative Vision and Rigorous Execution.
              </h2>
            </FadeIn>
          </div>

          {/* Timeline Milestones */}
          <div className="space-y-8 relative">
            <div className="absolute left-[20px] top-4 bottom-4 w-px bg-outline/25" />
            
            {milestones.map((item, idx) => (
              <FadeIn
                key={idx}
                direction="right"
                delay={idx * 0.15}
                duration={0.8}
                className="flex gap-6 relative z-10"
              >
                {/* Timeline node */}
                <div className="h-10 w-10 shrink-0 rounded-full bg-surface border border-outline flex items-center justify-center font-sans text-[12px] font-semibold text-primary shadow-elevated">
                  {idx + 1}
                </div>
                <div className="space-y-1 pt-1">
                  <span className="font-serif text-[18px] font-bold text-primary">
                    {item.year} — {item.title}
                  </span>
                  <p className="font-sans text-[14px] leading-relaxed text-secondary">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Right Column - Image Collage */}
        <div className="lg:col-span-6 relative">
          <FadeIn direction="left" delay={0.2} duration={0.8}>
            <div className="relative aspect-[4/3] w-full rounded overflow-hidden shadow-elevated">
              <img
                alt="Architectural Masterpiece Under Construction"
                className="w-full h-full object-cover"
                src="/images/hero-construction.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b18]/40 to-transparent" />
            </div>
            {/* Float details */}
            <div className="absolute -bottom-8 -right-8 bg-surface-container p-6 shadow-elevated border border-outline-variant/30 rounded hidden sm:block max-w-xs">
              <h4 className="font-serif text-[18px] text-on-surface mb-2 font-normal">
                Integrated Delivery
              </h4>
              <p className="font-sans text-[13px] text-secondary leading-relaxed">
                By bridging design models directly with physical masonry and structural logistics, we eliminate standard contractor fragmentation.
              </p>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
