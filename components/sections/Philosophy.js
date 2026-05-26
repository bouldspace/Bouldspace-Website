"use client";

import React from "react";
import FadeIn from "../animations/FadeIn";

export default function Philosophy() {
  return (
    <section className="py-28 bg-[#1e1b18] text-[#fbefe5] overflow-hidden relative">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column - Large Editorial Quote */}
        <div className="lg:col-span-7 space-y-6">
          <FadeIn direction="right" duration={0.8}>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary">
              Design Philosophy
            </span>
          </FadeIn>
          <FadeIn direction="right" delay={0.1} duration={0.8}>
            <h2 className="font-serif text-[42px] sm:text-[52px] lg:text-[64px] leading-tight text-surface-bright font-normal">
              “Where Vision Meets Execution.”
            </h2>
          </FadeIn>
          <FadeIn direction="right" delay={0.2} duration={0.8}>
            <p className="font-sans text-[16px] sm:text-[18px] leading-relaxed text-[#cdc5c0] font-normal italic">
              We believe that true luxury lies in the flawless transition from creative concept to physical reality. Timeless architecture shouldn't just be sketched; it must be built with uncompromising engineering rigor.
            </p>
          </FadeIn>
        </div>

        {/* Right Column - Asymmetric visual detail / text block */}
        <div className="lg:col-span-5 space-y-8 bg-[#25221e] border border-outline-variant/10 rounded p-8 sm:p-10 shadow-elevated">
          <FadeIn direction="left" delay={0.3} duration={0.8}>
            <div className="space-y-4">
              <h4 className="font-sans text-[12px] font-semibold uppercase tracking-wider text-primary">
                01 / Aesthetics & Function
              </h4>
              <p className="font-sans text-[14px] leading-relaxed text-[#cdc5c0]">
                We avoid cold, generic structures. Our designs pair natural, tactile textures like clay terracotta with clean geometric grids to ensure spaces are both stunning and highly functional.
              </p>
            </div>
            
            <div className="h-px bg-outline-variant/10 my-6" />

            <div className="space-y-4">
              <h4 className="font-sans text-[12px] font-semibold uppercase tracking-wider text-primary">
                02 / Rigorous Auditing
              </h4>
              <p className="font-sans text-[14px] leading-relaxed text-[#cdc5c0]">
                A blueprint is only as good as its mason. By auditing materials, schedule pathways, and contractor coordination, we ensure that every design intent is built precisely to spec.
              </p>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
