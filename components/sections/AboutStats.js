"use client";

import React from "react";
import FadeIn from "../animations/FadeIn";

export default function AboutStats() {
  const stats = [
    { number: "10+", label: "Years in Business", desc: "Operational Consulting Heritage" },
    { number: "450+", label: "Projects Delivered", desc: "Timeless Custom landmarks" },
    { number: "15+", label: "Cities Served", desc: "National advisory coverage" },
    { number: "4+", label: "Industries Covered", desc: "Residential, commercial, aerospace" },
    { number: "99%", label: "Client Satisfaction", desc: "Uncompromising delivery reviews" },
  ];

  return (
    <section className="py-28 bg-surface-container-low overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="max-w-2xl mb-20 space-y-4">
          <FadeIn direction="right" duration={0.8}>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary">
              Metric Authority
            </span>
          </FadeIn>
          <FadeIn direction="right" delay={0.1} duration={0.8}>
            <h2 className="font-serif text-[38px] md:text-[48px] leading-tight text-on-surface font-normal">
              Our Accomplishments in Numbers
            </h2>
          </FadeIn>
        </div>

        {/* 5-Column Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((item, idx) => (
            <FadeIn
              key={idx}
              direction="up"
              delay={idx * 0.1}
              duration={0.8}
            >
              <div className="bg-surface-container-lowest border border-outline-variant/15 rounded p-8 flex flex-col items-center md:items-start text-center md:text-left gap-2 shadow-elevated hover:-translate-y-1 transition-transform duration-300">
                <span className="font-serif text-[48px] lg:text-[56px] font-bold text-primary leading-none">
                  {item.number}
                </span>
                <h4 className="font-sans text-[12px] font-semibold uppercase tracking-wider text-on-surface mt-2">
                  {item.label}
                </h4>
                <div className="h-px w-8 bg-outline mt-1 mb-2" />
                <p className="font-sans text-[13px] text-secondary">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
