"use client";

import React from "react";
import { Search, Compass, Eye, ShieldCheck, HardHat, Sparkles } from "lucide-react";
import FadeIn from "../animations/FadeIn";

export default function ProcessJourney() {
  return (
    <section id="process-journey-section" className="bg-surface text-on-surface overflow-hidden relative py-32 border-t border-outline-variant/15">
      {/* Blueprint background coordinates */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none blueprint-grid" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-48">
        
        {/* ========================================================================= */}
        {/* STAGE 01 — DISCOVERY & VISION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Editorial Typography (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn direction="right" duration={0.8} className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-serif text-[64px] font-normal text-primary/30 leading-none">01</span>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Inception & Alignment</span>
              </div>
              
              <h3 className="font-serif text-[36px] sm:text-[44px] leading-tight text-on-surface font-normal">
                Every Landmark Begins <br />
                With Understanding.
              </h3>
              
              <p className="font-sans text-[15px] leading-relaxed text-secondary">
                We begin at our Gurugram studio with client brief discovery, analyzing structural constraints, 
                zoning, site dimensions, and aligning conceptual visions before a single line is drawn.
              </p>

              {/* Blueprint details */}
              <div className="pt-4 border-t border-outline-variant/20 flex gap-6 font-sans text-[12px] text-secondary">
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-primary" /> SITE SURVEYING
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-primary" /> VISION ALIGNMENT
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Side: Framed Visual (7 columns) */}
          <div className="lg:col-span-7 relative">
            <FadeIn direction="left" duration={1.0}>
              <div className="relative aspect-[16/10] w-full rounded overflow-hidden shadow-elevated border border-outline-variant/15 group">
                <img
                  alt="Discovery and Vision Alignment Meeting"
                  className="w-full h-full object-cover scale-100 group-hover:scale-[1.02] transition-transform duration-1000"
                  src="/images/hero-studio.png"
                />
                
                {/* Coordinates overlay */}
                <div className="absolute bottom-4 left-4 bg-[#12100e]/85 backdrop-blur-sm border border-outline-variant/25 text-[#fff8f4]/60 px-3 py-1.5 rounded-sm text-[9px] font-sans font-bold tracking-[0.2em] uppercase">
                  SESSION-01 // VISION DRAWINGS
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* DIVIDER 01 */}
        <div className="py-12 border-t border-b border-outline-variant/20 text-center relative overflow-hidden bg-surface-container/30 rounded-sm">
          <div className="absolute inset-0 opacity-[0.01] blueprint-grid" />
          <FadeIn direction="up" duration={0.8}>
            <blockquote className="font-serif italic text-[20px] sm:text-[24px] text-primary leading-relaxed max-w-2xl mx-auto px-6">
              "Precision is invisible until execution begins."
            </blockquote>
          </FadeIn>
        </div>

        {/* ========================================================================= */}
        {/* STAGE 02 — STRATEGIC PLANNING */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Technical Coordinates grid (6 columns) */}
          <div className="lg:col-span-6 lg:order-1 order-2">
            <FadeIn direction="right" duration={1.0}>
              <div className="relative md:aspect-[4/3] aspect-auto min-h-[380px] md:min-h-0 w-full rounded border border-outline-variant/30 bg-surface-container p-6 sm:p-8 flex flex-col justify-between font-sans shadow-elevated overflow-hidden group hover:border-primary transition-colors duration-500">
                <div className="absolute inset-0 opacity-[0.03] blueprint-grid pointer-events-none" />
                
                <div className="flex justify-between items-start text-[10px] tracking-widest text-outline uppercase font-semibold">
                  <span>STRATEGY MATRIX // BR-90</span>
                  <span className="text-primary">[X: 104 / Y: 882]</span>
                </div>

                <div className="space-y-6 my-auto pt-6">
                  <div className="border-l-2 border-primary/45 pl-4 sm:pl-6 space-y-2">
                    <span className="text-primary font-bold tracking-widest uppercase text-[10px]">FRAMEWORK // 01</span>
                    <h4 className="font-serif text-[20px] font-normal text-on-surface">Feasibility Studies</h4>
                    <p className="text-[13px] text-secondary">Analyzing layout codes, structural grids, and geographical constraints.</p>
                  </div>
                  <div className="border-l-2 border-primary/45 pl-4 sm:pl-6 space-y-2">
                    <span className="text-primary font-bold tracking-widest uppercase text-[10px]">FRAMEWORK // 02</span>
                    <h4 className="font-serif text-[20px] font-normal text-on-surface">Risk Mitigation</h4>
                    <p className="text-[13px] text-secondary">Pre-emptive material audits and supply paths analysis to secure delivery deadlines.</p>
                  </div>
                </div>

                <div className="flex justify-between items-center text-[9px] tracking-wider text-secondary border-t border-outline-variant/20 pt-4">
                  <span>STAKEHOLDER MAPS</span>
                  <span>ESTIMATIONS: &lt; 3% VARIANCE</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Side: Strategic Text content (6 columns) */}
          <div className="lg:col-span-6 lg:order-2 order-1 space-y-6">
            <FadeIn direction="left" duration={0.8} className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-serif text-[64px] font-normal text-primary/30 leading-none">02</span>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Strategic Framework</span>
              </div>
              
              <h3 className="font-serif text-[36px] sm:text-[44px] leading-tight text-on-surface font-normal">
                Planning Is Precision <br />
                In Motion.
              </h3>
              
              <p className="font-sans text-[15px] leading-relaxed text-secondary">
                We establish tight project parameters—framing feasibility studies, structural budgets, 
                material pathways, risk management, and scheduling systems to ensure timeline adherence.
              </p>

              <div className="pt-2 text-[12px] font-sans">
                <span className="font-bold uppercase tracking-wider text-secondary block">PLANNING METRIC</span>
                <span className="text-primary font-semibold block mt-0.5">Adherence to Path Specifications</span>
              </div>
            </FadeIn>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* STAGE 03 — DESIGN DEVELOPMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Design Text (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn direction="right" duration={0.8} className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-serif text-[64px] font-normal text-primary/30 leading-none">03</span>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Concept to detailing</span>
              </div>
              
              <h3 className="font-serif text-[36px] sm:text-[44px] leading-tight text-on-surface font-normal">
                Design With Purpose. <br />
                Detail With Intent.
              </h3>
              
              <p className="font-sans text-[15px] leading-relaxed text-secondary">
                From drafting coordinates to advanced 3D renders. Terracotta finishes, textured plaster, 
                and steel casework details are carefully mapped to translate concept into solid physical material.
              </p>

              <div className="pt-4 border-t border-outline-variant/20 flex gap-6 font-sans text-[12px] text-secondary">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-primary" /> DETAIL VISUALS
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" /> MATERIAL CURATION
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Side: Double Image Grid (7 columns) */}
          <div className="lg:col-span-7 relative">
            <FadeIn direction="left" duration={1.0}>
              <div className="relative aspect-[16/10] w-full rounded overflow-hidden shadow-elevated border border-outline-variant/15 group">
                <img
                  alt="Material Detailing and Concept Planning"
                  className="w-full h-full object-cover scale-100 group-hover:scale-[1.02] transition-transform duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeXvKXrIUdg-eeCiBEi7ysER_Qg8UmjdNbnN45-sl1vHrweA0_RFlq-ZFAJ1-aW-mtEBum4LPB_eIahYPOSMatfEhFu9DH4ilB1HuZbowUGipWdLOXvT4wsLQ5SEzXqsoYqBFgqZ1XUjBOOR6hsIc1bXYa-htipWkfnM9KlwEKQuTEICwnBDAcwYrr1th1PNFUL3QnFYCF8ndTd1axdyXIf45xdVYQOHDpjVsfqyi1GJGQqqcNlgr97A6Y6tymPyjkZgcLOTvN3-EG"
                />
                
                {/* Coordinates overlay */}
                <div className="absolute bottom-4 right-4 bg-[#12100e]/85 backdrop-blur-sm border border-outline-variant/25 text-[#fff8f4]/60 px-3 py-1.5 rounded-sm text-[9px] font-sans font-bold tracking-[0.2em] uppercase">
                  RENDER // EARTH HOUSE FACADE
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* DIVIDER 02 */}
        <div className="py-12 border-t border-b border-outline-variant/20 text-center relative overflow-hidden bg-surface-container/30 rounded-sm">
          <div className="absolute inset-0 opacity-[0.01] blueprint-grid" />
          <FadeIn direction="up" duration={0.8}>
            <blockquote className="font-serif italic text-[20px] sm:text-[24px] text-primary leading-relaxed max-w-2xl mx-auto px-6">
              "Architecture lives through detail."
            </blockquote>
          </FadeIn>
        </div>

        {/* ========================================================================= */}
        {/* STAGE 04 — COORDINATION & MANAGEMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Technical Coordinates Panel (6 columns) */}
          <div className="lg:col-span-6 lg:order-1 order-2 relative">
            <FadeIn direction="right" duration={1.0}>
              <div className="relative md:aspect-[4/3] aspect-auto min-h-[380px] md:min-h-0 w-full rounded border border-outline-variant/30 bg-surface-container p-6 sm:p-8 flex flex-col justify-between font-sans shadow-elevated overflow-hidden group hover:border-primary transition-colors duration-500">
                <div className="absolute inset-0 opacity-[0.03] blueprint-grid pointer-events-none" />
                
                <div className="flex justify-between items-start text-[10px] tracking-widest text-outline uppercase font-semibold">
                  <span>COORDINATION MODEL // CO-99</span>
                  <span className="text-primary">[X: 418 / Y: 290]</span>
                </div>

                <div className="space-y-6 my-auto pt-6">
                  <div className="border-l-2 border-primary/45 pl-4 sm:pl-6 space-y-2">
                    <span className="text-primary font-bold tracking-widest uppercase text-[10px]">INTEGRATION // 01</span>
                    <h4 className="font-serif text-[20px] font-normal text-on-surface">Consultant Sync</h4>
                    <p className="text-[13px] text-secondary">Unifying structural engineering, MEP planning, and landscape vectors under a single dashboard.</p>
                  </div>
                  <div className="border-l-2 border-primary/45 pl-4 sm:pl-6 space-y-2">
                    <span className="text-primary font-bold tracking-widest uppercase text-[10px]">INTEGRATION // 02</span>
                    <h4 className="font-serif text-[20px] font-normal text-on-surface">Vendor Integration</h4>
                    <p className="text-[13px] text-secondary">Aligning boutique masonry, casing mills, and steel fabricators with blueprint parameters.</p>
                  </div>
                </div>

                <div className="flex justify-between items-center text-[9px] tracking-wider text-secondary border-t border-outline-variant/20 pt-4">
                  <span>COLLABORATION FRAMEWORK</span>
                  <span>MEP CHECKLIST: ZERO CLASHES</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Side: Coordination Text content (6 columns) */}
          <div className="lg:col-span-6 lg:order-2 order-1 space-y-6">
            <FadeIn direction="left" duration={0.8} className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-serif text-[64px] font-normal text-primary/30 leading-none">04</span>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Technical Coordination</span>
              </div>
              
              <h3 className="font-serif text-[36px] sm:text-[44px] leading-tight text-on-surface font-normal">
                Seamless Coordination <br />
                Creates Execution.
              </h3>
              
              <p className="font-sans text-[15px] leading-relaxed text-secondary">
                Operational excellence is coordination without friction. We unify structural, MEP, interior, 
                and boutique vendor schedules to prevent clashes, errors, and construction delays.
              </p>

              <div className="pt-2 text-[12px] font-sans">
                <span className="font-bold uppercase tracking-wider text-secondary block">COORDINATION BAR</span>
                <span className="text-primary font-semibold block mt-0.5">250+ Consultants & Fabricators Synchronized</span>
              </div>
            </FadeIn>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* STAGE 05 — EXECUTION & CONSTRUCTION */}
        <div className="relative w-full rounded overflow-hidden shadow-elevated border border-outline-variant/15 aspect-[21/9] md:aspect-[2.5/1] min-h-[350px] flex items-center group">
          <img
            alt="Execution and Construction Site Oversight"
            className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-102 transition-transform duration-1000 opacity-80"
            src="/images/hero-construction.png"
          />
          {/* Deep dark gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#12100e]/85 via-[#12100e]/40 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-xl ml-8 md:ml-16 px-6 text-[#fff8f4] space-y-4">
            <FadeIn direction="right" duration={0.8} className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-serif text-[64px] font-normal text-primary/30 leading-none text-primary">05</span>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Precision Construction</span>
              </div>
              <h3 className="font-serif text-[36px] sm:text-[44px] leading-tight font-normal">
                Execution Is Where <br />
                Trust Is Earned.
              </h3>
              <blockquote className="font-serif italic text-[15px] sm:text-[17px] text-[#fbefe5] border-l-2 border-primary pl-4 max-w-md">
                "On-site quality supervision, warm industrial lighting, and microscopic adherence to architectural paths."
              </blockquote>
              <p className="font-sans text-[13px] text-[#cdc5c0] max-w-sm hidden md:block">
                Our senior directors supervise structural cast limits, concrete tolerances, and carpentry detailing directly at the site to lock in craftsmanship.
              </p>
              <div className="flex gap-8 pt-2 text-[11px] uppercase tracking-wider text-[#cdc5c0]/80">
                <span className="flex items-center gap-1.5"><HardHat className="h-4.5 w-4.5 text-primary" /> SITE MANAGEMENT</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4.5 w-4.5 text-primary" /> QUALITY AUDITS</span>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DIVIDER 03 */}
        <div className="py-12 border-t border-b border-outline-variant/20 text-center relative overflow-hidden bg-surface-container/30 rounded-sm">
          <div className="absolute inset-0 opacity-[0.01] blueprint-grid" />
          <FadeIn direction="up" duration={0.8}>
            <blockquote className="font-serif italic text-[20px] sm:text-[24px] text-primary leading-relaxed max-w-2xl mx-auto px-6">
              "Luxury is coordination without friction."
            </blockquote>
          </FadeIn>
        </div>

        {/* ========================================================================= */}
        {/* STAGE 06 — DELIVERY & HANDOVER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Elegant completed space image (7 columns) */}
          <div className="lg:col-span-7 relative">
            <FadeIn direction="right" duration={1.0}>
              <div className="relative aspect-[16/10] w-full rounded overflow-hidden shadow-elevated border border-outline-variant/15 group">
                <img
                  alt="Finished Completed Landmark Project Handover"
                  className="w-full h-full object-cover scale-100 group-hover:scale-[1.02] transition-transform duration-1000"
                  src="https://dynamic.realestateindia.com/proj_images/project15040/proj_header_image-15040-770x400.jpg"
                />
                
                {/* Coordinates overlay */}
                <div className="absolute bottom-4 left-4 bg-[#12100e]/85 backdrop-blur-sm border border-outline-variant/25 text-[#fff8f4]/60 px-3 py-1.5 rounded-sm text-[9px] font-sans font-bold tracking-[0.2em] uppercase">
                  COMPLETED WORK // SKYPARK KOTA
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Side: Editorial Text (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn direction="left" duration={0.8} className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-serif text-[64px] font-normal text-primary/30 leading-none">06</span>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Final Handover</span>
              </div>
              
              <h3 className="font-serif text-[36px] sm:text-[44px] leading-tight text-on-surface font-normal">
                Delivered Beyond <br />
                Expectations.
              </h3>
              
              <p className="font-sans text-[15px] leading-relaxed text-secondary">
                We perform comprehensive quality verification audits, physical walk-throughs, 
                and lock in operational systems before handing over your flawless landmark.
              </p>

              {/* Blueprint details */}
              <div className="pt-4 border-t border-outline-variant/20 flex gap-6 font-sans text-[12px] text-secondary">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" /> VERIFIED STANDARDS
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" /> FLAWLESS DELIVERY
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
