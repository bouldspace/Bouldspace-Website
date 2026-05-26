"use client";

import React from "react";
import Button from "../ui/Button";
import FadeIn from "../animations/FadeIn";

export default function AboutCTA() {
  return (
    <section className="pt-24 pb-16 bg-surface-container border-t border-outline-variant/30 text-on-surface relative overflow-hidden text-center">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 space-y-8 flex flex-col items-center">
        <FadeIn direction="up" duration={0.8}>
          <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full">
            Private Commission
          </span>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.1} duration={0.8}>
          <h2 className="font-serif text-[42px] sm:text-[56px] leading-tight text-on-surface font-normal max-w-3xl">
            Let's Create Spaces That Endure.
          </h2>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.2} duration={0.8}>
          <p className="font-sans text-[16px] sm:text-[18px] leading-relaxed text-secondary max-w-xl">
            Partner with Bouldspace for seamless architectural and construction solutions crafted with absolute precision and purpose.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.3} duration={0.8} className="pt-4">
          <Button variant="primary" showArrow={true} href="/contact">
            Discuss Your Project
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
