"use client";

import React from "react";
import { Compass, Paintbrush, Layers, Flower } from "lucide-react";
import Card from "../ui/Card";
import FadeIn from "../animations/FadeIn";

export default function Services() {
  const serviceItems = [
    {
      icon: <Compass className="h-8 w-8 text-primary" />,
      title: "Architectural Planning",
      desc: "Timeless structural designs merging functional blueprints with clean, breathtaking modern aesthetic profiles.",
    },
    {
      icon: <Paintbrush className="h-8 w-8 text-primary" />,
      title: "Interior Masterplanning",
      desc: "Curated materials, bespoke furniture layouts, and earthy tone strategies crafted for luxurious comfort.",
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Premium Renovation",
      desc: "Transforming existing spaces into state-of-the-art structures through highly controlled, flawless execution.",
    },
    {
      icon: <Flower className="h-8 w-8 text-primary" />,
      title: "Landscape Architecture",
      desc: "Grounded exterior landscapes crafted to blend structural form with organic natural flora and water details.",
    },
  ];

  return (
    <section className="py-28 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <FadeIn direction="right" duration={0.8}>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary mb-3 block">
                Expertise & Capabilities
              </span>
            </FadeIn>
            <FadeIn direction="right" delay={0.1} duration={0.8}>
              <h2 className="font-serif text-[38px] md:text-[48px] leading-tight text-on-surface font-normal">
                End-to-End Architectural Solutions.
              </h2>
            </FadeIn>
          </div>
          <FadeIn direction="left" delay={0.2} duration={0.8}>
            <p className="font-sans text-[15px] leading-relaxed text-secondary max-w-sm">
              We manage all phases of complex structural, interior, and consulting projects under a single unified dashboard.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceItems.map((item, idx) => (
            <FadeIn
              key={idx}
              direction="up"
              delay={idx * 0.1}
              duration={0.8}
            >
              <Card variant="elevated" className="h-full flex flex-col items-start gap-6 p-8 sm:p-10 border border-outline-variant/10 shadow-elevated">
                <div className="h-14 w-14 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-[24px] text-on-surface font-normal">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[15px] leading-relaxed text-secondary">
                    {item.desc}
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
