"use client";

import React from "react";
import { ArrowRight, Hammer, Ruler } from "lucide-react";
import Button from "../ui/Button";
import FadeIn from "../animations/FadeIn";

export default function AboutPreview() {
  return (
    <section className="py-28 bg-surface-container-low overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column - Text Content */}
        <div className="lg:col-span-6 space-y-8">
          <FadeIn direction="right" duration={0.8}>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary">
              Crafting Legacy & Purpose
            </span>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.1} duration={0.8}>
            <h2 className="font-serif text-[38px] md:text-[48px] leading-tight text-on-surface font-normal">
              Flawless Execution of Visionary Design.
            </h2>
          </FadeIn>

          <FadeIn direction="right" delay={0.2} duration={0.8}>
            <p className="font-sans text-[16px] leading-relaxed text-secondary font-normal">
              What began as a boutique architectural firm a decade ago has evolved
              into a premier full-cycle construction consulting leader. At Bouldspace,
              we bridge the gap between creative visual architecture and physical,
              grounded execution.
            </p>
          </FadeIn>

          {/* Minimal specs block */}
          <FadeIn direction="right" delay={0.3} duration={0.8}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <Ruler className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans text-[13px] font-semibold uppercase tracking-wider text-on-surface">
                    Aesthetic Precision
                  </h4>
                  <p className="font-sans text-[13px] text-secondary mt-1">
                    Every custom dimension mapped to absolute structural perfection.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <Hammer className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans text-[13px] font-semibold uppercase tracking-wider text-on-surface">
                    Structural Rigor
                  </h4>
                  <p className="font-sans text-[13px] text-secondary mt-1">
                    End-to-end consulting ensuring absolute budget and time compliance.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.4} duration={0.8} className="pt-4">
            <Button variant="secondary" className="group" href="/about">
              Read Our Full Story
            </Button>
          </FadeIn>
        </div>

        {/* Right Column - Premium Asymmetric Imagery */}
        <div className="lg:col-span-6 relative">
          <FadeIn direction="left" delay={0.2} duration={0.8}>
            <div className="relative aspect-[4/3] w-full rounded overflow-hidden shadow-elevated border border-outline-variant/30 bg-surface-container-highest flex items-center justify-center p-8 select-none group">
              {/* Internal coordinate grid lines */}
              <div className="absolute inset-0 opacity-15 blueprint-grid pointer-events-none" />
              
              {/* Outer drafting borders & corner crosses */}
              <div className="absolute inset-4 border border-outline/15 pointer-events-none" />
              <div className="absolute top-2 left-2 text-[9px] text-outline/40">T-04</div>
              <div className="absolute top-2 right-2 text-[9px] text-outline/40">R-99</div>
              <div className="absolute bottom-2 left-2 text-[9px] text-outline/40">B-12</div>
              <div className="absolute bottom-2 right-2 text-[9px] text-outline/40">L-50</div>
              
              {/* High-End Architectural Blueprint Vector Lines */}
              <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.75] fill-none" viewBox="0 0 400 300">
                  {/* Grid Crosshairs */}
                  <line x1="200" y1="0" x2="200" y2="300" className="stroke-primary/20 stroke-[1] stroke-dasharray-[2_4]" />
                  <line x1="0" y1="150" x2="400" y2="150" className="stroke-primary/20 stroke-[1] stroke-dasharray-[2_4]" />
                  
                  {/* Outer structural frames */}
                  <rect x="50" y="40" width="300" height="220" className="stroke-outline/40" />
                  <rect x="70" y="60" width="260" height="180" className="stroke-outline/25" />
                  
                  {/* Cantilever columns */}
                  <line x1="120" y1="40" x2="120" y2="260" className="stroke-outline/40" />
                  <line x1="280" y1="40" x2="280" y2="260" className="stroke-outline/40" />
                  
                  {/* Angle projection diagonals */}
                  <line x1="50" y1="40" x2="120" y2="90" className="stroke-primary/50" />
                  <line x1="350" y1="40" x2="280" y2="90" className="stroke-primary/50" />
                  <line x1="50" y1="260" x2="120" y2="210" className="stroke-primary/50" />
                  <line x1="350" y1="260" x2="280" y2="210" className="stroke-primary/50" />
                  
                  {/* Central architectural spiral / coordinate circles */}
                  <circle cx="200" cy="150" r="60" className="stroke-primary/40 stroke-dasharray-[4_4]" />
                  <circle cx="200" cy="150" r="40" className="stroke-outline/35" />
                  <circle cx="200" cy="150" r="10" className="fill-primary/10 stroke-primary/70" />
                  
                  {/* Angle indicators */}
                  <path d="M 260,150 A 60,60 0 0,0 242.4,107.6" className="stroke-primary/60" />
                  
                  {/* Dimension leader lines */}
                  <line x1="50" y1="280" x2="350" y2="280" className="stroke-outline/40" />
                  
                  {/* Dynamic Technical annotations */}
                  <text x="200" y="295" textAnchor="middle" className="font-sans text-[8px] fill-secondary/50 font-bold uppercase tracking-[0.2em]">DIMENSION A-A' : 3000mm</text>
                  <text x="205" y="145" className="font-sans text-[7px] fill-primary font-bold uppercase tracking-[0.1em]">Origin Node</text>
                  <text x="60" y="32" className="font-sans text-[7px] fill-secondary/40 font-semibold uppercase">SEC // 09-CANOPY</text>
                </svg>
              </div>

              {/* Floating drafting coordinate indicator overlay */}
              <div className="absolute bottom-6 right-6 font-sans text-[9px] tracking-widest text-secondary/45 pointer-events-none uppercase text-right leading-relaxed hidden sm:block">
                <div>Scale: 1:50</div>
                <div>SEC-04 // LOAD COMPLIANCE</div>
                <div>BOULDSPACE DRAFTING SHEET</div>
              </div>
            </div>
            
            {/* Float badge */}
            <div className="absolute -bottom-8 -left-8 bg-surface p-6 shadow-elevated border border-outline-variant/30 rounded hidden sm:block">
              <p className="font-serif text-[32px] text-primary mb-1 leading-none font-bold">
                10+
              </p>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-wider text-secondary">
                Years of Master Craftsmanship
              </p>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
