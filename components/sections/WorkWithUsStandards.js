"use client";

import React from "react";
import { CheckCircle2, Shield, FileSpreadsheet, Layers, Sparkles } from "lucide-react";
import FadeIn from "../animations/FadeIn";

export default function WorkWithUsStandards() {
  const standards = [
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      title: "Audited Milestone Disbursements",
      desc: "We respect creator and vendor cashflows. Contracts feature clear milestones, verified QA sign-offs, and rapid, dispute-free payment releases without bureaucratic hold-ups.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Absolute Material Honesty",
      desc: "We do not compromise design intent with substandard substitutions. When architects or artisans specify Grade-A teak, 20mm marble, or German hardware, that exact spec is delivered.",
    },
    {
      icon: <FileSpreadsheet className="h-6 w-6 text-primary" />,
      title: "BR-90 Digital Coordination",
      desc: "All construction sites follow strict digital documentation: structural elevations, MEP clash-detection models, and daily progress monographs that eliminate on-site ambiguity.",
    },
    {
      icon: <Layers className="h-6 w-6 text-primary" />,
      title: "Single-Point Project Direction",
      desc: "Our project directors serve as the singular authority on site, harmonizing client aspirations, contractor schedules, and artisan detailing to ensure chaos-free execution.",
    },
  ];

  return (
    <section className="py-24 bg-surface relative overflow-hidden border-b border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn direction="right" duration={0.8}>
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
                Operational Ethics
              </span>
            </FadeIn>
            <FadeIn direction="right" delay={0.1} duration={0.8}>
              <h2 className="font-serif text-[36px] sm:text-[46px] leading-tight text-on-surface font-normal">
                Why Elite Builders & Creators <br />
                <span className="italic text-secondary">Choose Our Direction.</span>
              </h2>
            </FadeIn>
            <FadeIn direction="right" delay={0.2} duration={0.8}>
              <p className="font-sans text-[15px] leading-relaxed text-secondary font-normal">
                The construction consulting industry has long been plagued by opaque billing,
                arbitrary value-engineering, and fragmented site coordination. Bouldspace was
                founded to replace chaos with institutional rigor.
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.3} duration={0.8}>
              <div className="p-6 rounded bg-surface-container border border-outline-variant/20 space-y-2">
                <div className="flex items-center gap-2 font-serif text-[18px] text-on-surface">
                  <Sparkles className="h-5 w-5 text-primary shrink-0" />
                  <span>The Bouldspace Covenant</span>
                </div>
                <p className="font-sans text-[13px] leading-relaxed text-secondary">
                  "Every partner who steps onto a Bouldspace site is treated as a master of their
                  craft. We demand technical excellence and return unconditional professional respect."
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: 4 Core Operational Standards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {standards.map((std, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.1} duration={0.8}>
                <div className="p-6 sm:p-8 rounded bg-surface-container-low border border-outline-variant/15 space-y-3 hover:border-primary/30 transition-all duration-300">
                  <div className="h-10 w-10 rounded bg-surface flex items-center justify-center mb-2">
                    {std.icon}
                  </div>
                  <h3 className="font-serif text-[20px] text-on-surface font-normal">
                    {std.title}
                  </h3>
                  <p className="font-sans text-[14px] leading-relaxed text-secondary">
                    {std.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
