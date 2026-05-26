"use client";

import React, { useRef } from "react";
import { Ruler, Calendar, Award } from "lucide-react";
import FadeIn from "../animations/FadeIn";

export default function ProjectsFeatured() {
  const containerRef = useRef(null);

  return (
    <section
      id="featured-projects-section"
      ref={containerRef}
      className="py-32 bg-surface overflow-hidden relative border-t border-outline-variant/15 text-on-surface"
    >
      {/* Blueprint background coordinates */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none blueprint-grid" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-32 space-y-4">
          <FadeIn direction="up" duration={0.8}>
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-primary bg-primary/5 px-3 py-1.5 rounded-full inline-block">
              Selected Works
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.15} duration={0.8}>
            <h2 className="font-serif text-[42px] sm:text-[56px] leading-tight text-on-surface font-normal">
              Signature Visual Chapters
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.25} duration={0.8}>
            <p className="font-sans text-[16px] text-secondary max-w-xl leading-relaxed">
              Every space is an architectural argument. Explore three signature commissions 
              presented through bespoke, depth-driven editorial compositions.
            </p>
          </FadeIn>
        </div>

        {/* Asymmetrical Showcase Chapters */}
        <div className="space-y-48">

          {/* CHAPTER I: Hotel Lilac (Image Left / Text Right Overlap) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
            <div className="lg:col-span-8 relative">
              <FadeIn direction="right" duration={1.0}>
                {/* Asymmetric wide frame with slight image scaling */}
                <div className="relative aspect-[16/10] w-full rounded overflow-hidden shadow-elevated border border-outline-variant/15 group">
                  <img
                    alt="Hotel Lilac Landmark Architecture"
                    className="w-full h-full object-cover scale-100 group-hover:scale-103 transition-transform duration-1000"
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/da/13/9f/hotel-facade.jpg?w=1400&h=800&s=1"
                  />
                  {/* Subtle atmospheric vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12100e]/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </FadeIn>
            </div>

            {/* Overlapping Floating Content Block (Asymmetric Grid) */}
            <div className="lg:col-span-5 lg:absolute lg:right-0 lg:w-[42%] bg-surface-container/95 backdrop-blur-md p-8 md:p-12 rounded shadow-elevated border border-outline-variant/20 space-y-6 z-20">
              <FadeIn direction="left" delay={0.2} duration={1.0} className="space-y-6">
                <div className="space-y-2">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                    Chapter I / Premium Hospitality
                  </span>
                  <h3 className="font-serif text-[32px] sm:text-[40px] text-on-surface leading-tight font-normal">
                    Hotel Lilac
                  </h3>
                  <p className="font-sans text-[12px] text-secondary tracking-wider uppercase">
                    Jaipur / Kota, India
                  </p>
                </div>

                <blockquote className="font-serif italic text-[16px] text-primary border-l-2 border-primary/40 pl-4 my-4 leading-relaxed">
                  "Professional, efficient, and innovative. We are बेहद satisfied with their work."
                </blockquote>

                <p className="font-sans text-[14px] leading-relaxed text-secondary">
                  An outstanding structural showcase balancing textured sandstone elevations with bespoke steel casings. hotel Lilac combines classical symmetry with state-of-the-art climate-controlled interior zones.
                </p>

                {/* Technical Specs Strip */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-outline-variant/30 py-4 font-sans text-[12px] text-on-surface">
                  <div>
                    <span className="text-secondary block font-medium mb-1">Volume</span>
                    <span className="font-bold flex items-center gap-1"><Ruler className="h-3 w-3 text-primary" /> 18,500 SF</span>
                  </div>
                  <div>
                    <span className="text-secondary block font-medium mb-1">Duration</span>
                    <span className="font-bold flex items-center gap-1"><Calendar className="h-3 w-3 text-primary" /> 16 Mos</span>
                  </div>
                  <div>
                    <span className="text-secondary block font-medium mb-1">Year</span>
                    <span className="font-bold flex items-center gap-1"><Award className="h-3 w-3 text-primary" /> 2024</span>
                  </div>
                </div>

                <div className="pt-2 text-[12px]">
                  <span className="font-bold uppercase tracking-wider text-secondary block">Execution Scope</span>
                  <span className="text-primary font-semibold block mt-0.5">Full Turnkey Construction & MEP Integration</span>
                </div>
              </FadeIn>
            </div>
          </div>


          {/* CHAPTER II: Skypark Kota (Cinematic Full-Width Parallax) */}
          <div className="relative w-full rounded overflow-hidden shadow-elevated border border-outline-variant/15 aspect-[21/9] md:aspect-[2.5/1] min-h-[300px] flex items-center group">
            <img
              alt="Skypark Kota Luxury Masterwork"
              className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-102 transition-transform duration-1000 opacity-80"
              src="https://dynamic.realestateindia.com/proj_images/project15040/proj_header_image-15040-770x400.jpg"
            />
            {/* Cinematic dark mask */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#12100e]/80 via-[#12100e]/40 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-xl ml-8 md:ml-16 px-6 text-[#fff8f4] space-y-4">
              <FadeIn direction="right" duration={0.8} className="space-y-4">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  Chapter II / High-End Residences
                </span>
                <h3 className="font-serif text-[36px] sm:text-[48px] leading-tight font-normal">
                  Skypark Kota
                </h3>
                <blockquote className="font-serif italic text-[15px] sm:text-[17px] text-[#fbefe5] border-l-2 border-primary pl-4 max-w-md">
                  "Excellent execution and premium quality service. Their dedication and work ethic make them a trusted choice."
                </blockquote>
                <p className="font-sans text-[13px] text-[#cdc5c0] max-w-sm hidden md:block">
                  A premium high-rise residential estate prioritizing layered concrete facades, deep-framed observation decks, and cantilevered balconies overlooking Kota's urban layout.
                </p>
                <div className="flex gap-8 pt-2 text-[11px] uppercase tracking-wider text-[#cdc5c0]/80">
                  <span>Size: 45,000 SF</span>
                  <span>Timeline: 24 Mos</span>
                  <span>Scope: Structural Design & Advisory</span>
                </div>
              </FadeIn>
            </div>
          </div>


          {/* CHAPTER III: Hotel Clarks Premier (Text Left / Image Right Splice) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6 lg:order-1 order-2">
              <FadeIn direction="right" duration={1.0} className="space-y-6">
                <div className="space-y-2">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                    Chapter III / Commercial Landmark
                  </span>
                  <h3 className="font-serif text-[32px] sm:text-[40px] text-on-surface leading-tight font-normal">
                    Hotel Clarks Premier
                  </h3>
                  <p className="font-sans text-[12px] text-secondary tracking-wider uppercase">
                    Kota, Rajasthan
                  </p>
                </div>

                <blockquote className="font-serif italic text-[16px] text-primary border-l-2 border-primary/40 pl-4 my-4 leading-relaxed">
                  "Exceptional service and top-quality solutions. Their professionalism and timely execution truly impressed us."
                </blockquote>

                <p className="font-sans text-[14px] leading-relaxed text-secondary">
                  A premier grand hotel development representing the height of corporate spatial planning, boasting extensive structural glass frames, custom interior acoustics, and precise climate management.
                </p>

                {/* Technical Specs Strip */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-outline-variant/30 py-4 font-sans text-[12px] text-on-surface">
                  <div>
                    <span className="text-secondary block font-medium mb-1">Volume</span>
                    <span className="font-bold flex items-center gap-1"><Ruler className="h-3 w-3 text-primary" /> 68,000 SF</span>
                  </div>
                  <div>
                    <span className="text-secondary block font-medium mb-1">Duration</span>
                    <span className="font-bold flex items-center gap-1"><Calendar className="h-3 w-3 text-primary" /> 22 Mos</span>
                  </div>
                  <div>
                    <span className="text-secondary block font-medium mb-1">Year</span>
                    <span className="font-bold flex items-center gap-1"><Award className="h-3 w-3 text-primary" /> 2025</span>
                  </div>
                </div>

                <div className="pt-2 text-[12px]">
                  <span className="font-bold uppercase tracking-wider text-secondary block">Scope of Delivery</span>
                  <span className="text-primary font-semibold block mt-0.5">Architectural Shell, MEP Planning & Turnkey Completion</span>
                </div>
              </FadeIn>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-7 lg:order-2 order-1 relative">
              <FadeIn direction="left" duration={1.0}>
                <div className="relative aspect-[16/10] w-full rounded overflow-hidden shadow-elevated border border-outline-variant/15 group">
                  <img
                    alt="Hotel Clarks Premier Corporate Monograph"
                    className="w-full h-full object-cover scale-100 group-hover:scale-103 transition-transform duration-1000"
                    src="https://pix8.agoda.net/hotelImages/12548872/-1/e0478fb6280b648adc5c2533373eddaa.jpg?ca=15&ce=1&s=1024x"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12100e]/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </FadeIn>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
