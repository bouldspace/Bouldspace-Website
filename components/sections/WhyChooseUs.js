"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Cpu, HardHat } from "lucide-react";
import Card from "../ui/Card";
import FadeIn from "../animations/FadeIn";

export default function WhyChooseUs() {
  const points = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Tactile Curation",
      desc: "We balance cold technical engineering with organic warmth—using wood casework, textured terracotta plaster, and custom stone detailing.",
    },
    {
      icon: <Cpu className="h-6 w-6 text-primary" />,
      title: "Unified Command",
      desc: "Our project managers audit and coordinate structural engineers, interior designers, and sub-contractors under a unified workflow.",
    },
    {
      icon: <HardHat className="h-6 w-6 text-primary" />,
      title: "Technical Auditing",
      desc: "Every blueprint and schedule is stress-tested against rigorous local building codes and modern environmental standards.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      title: "On-Time handovers",
      desc: "Respecting client timelines is a fundamental core commitment. We deploy advanced scheduling algorithms to optimize delivery.",
    },
  ];

  return (
    <section className="py-28 bg-surface-container overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-20 space-y-4">
          <FadeIn direction="right" duration={0.8}>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary">
              Our Professional Advantage
            </span>
          </FadeIn>
          <FadeIn direction="right" delay={0.1} duration={0.8}>
            <h2 className="font-serif text-[38px] md:text-[48px] leading-tight text-on-surface font-normal">
              Why Prestigious Clients Choose Bouldspace.
            </h2>
          </FadeIn>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((point, idx) => (
            <FadeIn
              key={idx}
              direction="up"
              delay={idx * 0.1}
              duration={0.8}
            >
              <Card variant="elevated" className="h-full flex gap-6 items-start p-8 border border-outline-variant/10 shadow-elevated bg-surface-container-lowest">
                <div className="h-12 w-12 rounded bg-surface-container flex items-center justify-center shrink-0">
                  {point.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-[22px] text-on-surface font-normal">
                    {point.title}
                  </h3>
                  <p className="font-sans text-[14px] leading-relaxed text-secondary">
                    {point.desc}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
