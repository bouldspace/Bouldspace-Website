"use client";

import React from "react";
import FadeIn from "../animations/FadeIn";

export default function ProjectsInterlude() {
  return (
    <section className="py-28 bg-[#12100e] text-[#fff8f4] relative overflow-hidden">
      {/* Blueprint grid subtle backdrop */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none blueprint-grid" />

      {/* Atmospheric overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Texture and Blueprint Overlay (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn direction="right" duration={1.0}>
              <div className="relative aspect-[3/4] w-full rounded overflow-hidden shadow-elevated border border-outline-variant/10 group bg-[#1a1715]">
                <img
                  alt="Architectural Sketch and Blueprint Grid"
                  className="w-full h-full object-cover opacity-30 scale-100 group-hover:scale-105 transition-transform duration-1000"
                  src="/images/hero-studio.png"
                />
                
                {/* Simulated drafting/coordinate grids overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 font-sans text-[9px] tracking-widest text-[#fff8f4]/30 pointer-events-none uppercase">
                  <div className="flex justify-between">
                    <span>GRID SCALE: 1:50</span>
                    <span>DWG NO: BS-9902-A</span>
                  </div>
                  <div className="flex justify-between">
                    <span>COORD REF: SEC-D</span>
                    <span>BOULDSPACE STUDIO</span>
                  </div>
                </div>

                {/* Fine drafting vector circles inside */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#fff8f4]/5 rounded-full pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#fff8f4]/5 rounded-full pointer-events-none" />
              </div>
            </FadeIn>
          </div>

          {/* Center Column: Poetic Intention (4 Columns) */}
          <div className="lg:col-span-3 text-center space-y-8 py-12 lg:py-0">
            <FadeIn direction="up" duration={0.8} className="space-y-6">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                Technical Philosophy
              </span>
              
              <div className="h-0.5 w-12 bg-primary mx-auto" />

              <h3 className="font-serif italic text-[24px] sm:text-[28px] leading-relaxed font-normal text-[#fbefe5]">
                “Every line begins with intention.”
              </h3>

              <div className="h-0.5 w-12 bg-primary mx-auto" />

              <p className="font-sans text-[12px] tracking-widest uppercase text-[#cdc5c0]/65 leading-relaxed">
                Execution is where architecture earns trust.
              </p>
            </FadeIn>
          </div>

          {/* Right Column: Execution Closeup (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <FadeIn direction="left" duration={1.0}>
              <div className="relative aspect-[3/4] w-full rounded overflow-hidden shadow-elevated border border-outline-variant/10 group bg-[#1a1715]">
                <img
                  alt="Execution Moment Raw Construction Detail"
                  className="w-full h-full object-cover opacity-45 scale-100 group-hover:scale-105 transition-transform duration-1000"
                  src="/images/hero-construction.png"
                />

                {/* Technical lines overlay */}
                <div className="absolute top-1/3 left-0 w-full h-[1px] bg-[#fff8f4]/10 pointer-events-none" />
                <div className="absolute top-2/3 left-0 w-full h-[1px] bg-[#fff8f4]/10 pointer-events-none" />
                
                {/* Simulated drafting overlays */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 font-sans text-[9px] tracking-widest text-[#fff8f4]/30 pointer-events-none uppercase">
                  <div className="flex justify-between">
                    <span>SECTION: B-B'</span>
                    <span>TOLERANCE: &lt; 2mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CAST: MONOLITHIC</span>
                    <span>MATERIAL INDEX</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
