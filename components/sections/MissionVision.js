"use client";

import React from "react";
import { Compass, Eye } from "lucide-react";
import Card from "../ui/Card";
import FadeIn from "../animations/FadeIn";

export default function MissionVision() {
  return (
    <section className="py-28 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
          <FadeIn direction="up" duration={0.8}>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary">
              Core Purpose
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1} duration={0.8}>
            <h2 className="font-serif text-[38px] md:text-[48px] leading-tight text-on-surface font-normal">
              Our North Star
            </h2>
          </FadeIn>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <FadeIn direction="right" delay={0.1} duration={0.8} className="h-full">
            <Card variant="elevated" className="h-full flex flex-col items-start gap-6 border border-outline-variant/15 bg-surface-container-lowest shadow-elevated">
              <div className="h-14 w-14 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                <Compass className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-[28px] text-on-surface font-normal">
                  Our Mission
                </h3>
                <p className="font-sans text-[16px] leading-relaxed text-secondary font-normal">
                  To deliver world-class architectural and construction solutions with absolute precision, complete transparency, and timeless design excellence. We aim to elevate built environments for prestigious clients nationwide.
                </p>
              </div>
            </Card>
          </FadeIn>

          {/* Vision Card */}
          <FadeIn direction="left" delay={0.2} duration={0.8} className="h-full">
            <Card variant="elevated" className="h-full flex flex-col items-start gap-6 border border-outline-variant/15 bg-surface-container-lowest shadow-elevated">
              <div className="h-14 w-14 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-[28px] text-on-surface font-normal">
                  Our Vision
                </h3>
                <p className="font-sans text-[16px] leading-relaxed text-secondary font-normal">
                  To redefine modern project delivery models through integrated planning, elegant execution, and uncompromising quality standards. Bouldspace aims to set the benchmarks for technical operational rigor in construction consulting.
                </p>
              </div>
            </Card>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
