"use client";

import React from "react";
import Button from "../ui/Button";
import FadeIn from "../animations/FadeIn";

export default function FinalCTA() {
  return (
    <section className="pt-24 pb-16 bg-surface-container border-t border-outline-variant/30 text-on-surface relative overflow-hidden text-center">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 space-y-8 flex flex-col items-center">
        <FadeIn direction="up" duration={0.8} className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3.5">
            <img
              src="/logos/logo-maskable-nobg.svg"
              alt="Bouldspace Emblem"
              className="h-10 sm:h-12 w-auto object-contain shrink-0"
            />
            <img
              src="/logos/logo-wordmark-nobg.svg"
              alt="Bouldspace"
              className="h-6 sm:h-7 w-auto object-contain"
            />
          </div>
          <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/20">
            Private Commission
          </span>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.1} duration={0.8}>
          <h2 className="font-serif text-[42px] sm:text-[56px] leading-tight text-on-surface font-normal max-w-3xl">
            Ready to construct your masterpiece?
          </h2>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.2} duration={0.8}>
          <p className="font-sans text-[16px] sm:text-[18px] leading-relaxed text-secondary max-w-xl">
            Schedule a technical alignment review at our Gurugram studio, or
            request a secure digital blueprint consultation online.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.3} duration={0.8} className="pt-4">
          <Button variant="primary" showArrow={true} href="/contact">
            Schedule Private Consultation
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
