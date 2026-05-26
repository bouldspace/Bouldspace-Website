"use client";

import React from "react";
import { Shield, Award, Sparkles, Clock, Users, HardHat } from "lucide-react";
import FadeIn from "../animations/FadeIn";

export default function AboutValues() {
  const values = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Transparency",
      desc: "Open ledger systems and daily dashboard updates detailing material schedules, contractors, and audits.",
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Quality",
      desc: "Uncompromising precision in masonry, carpentry, concrete framing, and custom luxury finishes.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "Personalization",
      desc: "Architectural layouts and spatial curves bespoke designed around each client's unique domestic rhythm.",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "On-Time Delivery",
      desc: "Rigorous planning and path timelines ensuring handover occurs precisely on the promised date.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Collaboration",
      desc: "Seamless team integration balancing design intentions directly with sub-contractor workflows.",
    },
    {
      icon: <HardHat className="h-6 w-6 text-primary" />,
      title: "Accountability",
      desc: "One central project director taking complete, single-point responsibility for every audit and phase.",
    },
  ];

  return (
    <section className="py-28 bg-[#1e1b18] text-[#fbefe5] overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-20 space-y-4">
          <FadeIn direction="right" duration={0.8}>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary">
              Core Principles
            </span>
          </FadeIn>
          <FadeIn direction="right" delay={0.1} duration={0.8}>
            <h2 className="font-serif text-[38px] md:text-[48px] leading-tight text-surface-bright font-normal">
              Our Operational Values
            </h2>
          </FadeIn>
        </div>

        {/* 6-Column Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, idx) => (
            <FadeIn
              key={idx}
              direction="up"
              delay={idx * 0.1}
              duration={0.8}
            >
              <div className="bg-[#25221e] border border-outline-variant/10 rounded p-8 flex flex-col gap-6 h-full hover:-translate-y-1 transition-transform duration-300">
                <div className="h-12 w-12 rounded bg-[#332f2a] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-[22px] text-surface-bright font-normal">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[14px] leading-relaxed text-[#cdc5c0]">
                    {item.desc}
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
