"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Check, 
  Compass, 
  Ruler, 
  Layers, 
  Activity, 
  FolderCheck, 
  ShieldCheck, 
  Hammer, 
  Boxes 
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";

export default function ServicesPage() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax backdrop translations
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const contentY = useTransform(scrollY, [0, 800], [0, -60]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.5, // late load!
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 55 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2, // slow release
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      },
    },
  };

  return (
    <>
      <Header />
      <main ref={containerRef} className="flex-grow bg-surface overflow-hidden">
        
        {/* ========================================
            1. CINEMATIC HERO SECTION
            ======================================== */}
        <section className="relative min-h-[75vh] flex flex-col justify-center pt-36 pb-24 overflow-hidden bg-surface text-on-surface border-b border-outline-variant/15">
          
          {/* Parallax Blueprint Grid Backdrop */}
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
          >
            <svg className="w-full h-full text-outline/35 stroke-current stroke-[1.2] fill-none opacity-85" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
              {/* Drafting grid guidelines */}
              <line x1="150" y1="0" x2="150" y2="600" className="stroke-outline/15 stroke-dasharray-[4_8]" />
              <line x1="500" y1="0" x2="500" y2="600" className="stroke-primary/25 stroke-dasharray-[2_4]" />
              <line x1="850" y1="0" x2="850" y2="600" className="stroke-outline/15 stroke-dasharray-[4_8]" />
              <line x1="0" y1="300" x2="1000" y2="300" className="stroke-primary/25 stroke-dasharray-[2_4]" />
              
              {/* Asymmetrical Column layout details */}
              <rect x="180" y="80" width="180" height="440" className="stroke-outline/35 fill-primary/[0.01]" />
              <circle cx="270" cy="300" r="100" className="stroke-outline/20" />
              <circle cx="270" cy="300" r="40" className="stroke-primary/30" />
              
              <rect x="640" y="80" width="180" height="440" className="stroke-outline/35 fill-primary/[0.01]" />
              <circle cx="730" cy="300" r="100" className="stroke-outline/20" />
              <circle cx="730" cy="300" r="40" className="stroke-primary/30" />
              
              {/* Dimension indicators */}
              <line x1="270" y1="200" x2="730" y2="200" className="stroke-primary/45" />
              <path d="M 270,200 L 280,196 M 270,200 L 280,204" className="stroke-primary/45" />
              <path d="M 730,200 L 720,196 M 730,200 L 720,204" className="stroke-primary/45" />

              {/* Repositioned text markings to completely avoid center text collisions */}
              <text x="165" y="45" textAnchor="start" className="font-sans text-[8px] fill-secondary/65 font-bold uppercase tracking-[0.25em]">BOULDSPACE CORE SERVICES</text>
              <text x="835" y="45" textAnchor="end" className="font-sans text-[8px] fill-primary font-bold uppercase tracking-[0.25em]">SYSTEM PLAN: SV-88</text>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </motion.div>

          {/* Grid overlay and intersecting lines to match process page exactly */}
          <div className="absolute inset-0 opacity-[0.025] pointer-events-none blueprint-grid z-10" />

          {/* Blueprint Grid Lines crossing the screen */}
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-outline/10 pointer-events-none z-10" />
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-outline/10 pointer-events-none z-10" />
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-outline/10 pointer-events-none z-10" />
          <div className="absolute top-0 left-3/4 w-[1px] h-full bg-outline/10 pointer-events-none z-10" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
            <motion.div
              style={{ opacity: contentOpacity, y: contentY }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 md:gap-8"
            >
              <motion.span
                variants={itemVariants}
                className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-primary bg-primary/5 px-4 py-1.5 rounded-full"
              >
                Core Capabilities
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="font-serif text-[48px] sm:text-[68px] md:text-[84px] leading-[1.05] tracking-tight font-normal text-on-surface max-w-3xl"
              >
                Complete Spatial <br />
                Solutions.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-secondary max-w-2xl font-normal"
              >
                From initial conceptual blueprints to comprehensive turnkey coordinate coordination, 
                we manage, consult, and build spaces with absolute material integrity and execution excellence.
              </motion.p>
            </motion.div>
          </div>

          {/* Floating blueprint markers identical to process page */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 left-8 md:left-16 z-20 font-sans text-[9px] tracking-[0.25em] uppercase text-secondary/60 hidden sm:flex flex-col gap-1.5 select-none pointer-events-none"
          >
            <span className="text-primary font-bold">Operational Scope</span>
            <span>BOULDSPACE PROTOCOL SV-88</span>
            <span>INDEX // COMPLETE SERVICES</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 right-8 md:right-16 z-20 font-sans text-[9px] tracking-[0.25em] uppercase text-secondary/60 text-right hidden sm:flex flex-col gap-1.5 select-none pointer-events-none"
          >
            <span className="text-primary font-bold">Execution Path</span>
            <span>08 SERVICES // 04 MONOGRAPHS</span>
            <span>COORD: 28.4595° N, 77.0266° E</span>
          </motion.div>
        </section>

        {/* ========================================
            2. DETAILED Alternating MONOGRAPH CHAPTERS
            ======================================== */}
        <section className="py-32 bg-surface relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-40">
            
            {/* SERVICE 01: ARCHITECTURE PLANNING */}
            <div id="architecture" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Side: Editorial brief (5 Columns) */}
              <div className="lg:col-span-5 space-y-8">
                <FadeIn direction="right" duration={0.8} className="space-y-6">
                  <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center">
                    <Compass className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary block">Service 01 // Spatial Foundation</span>
                  
                  <h2 className="font-serif text-[32px] sm:text-[42px] leading-tight text-on-surface font-normal">
                    Architecture Planning
                  </h2>
                  
                  <p className="font-sans text-[15px] leading-relaxed text-secondary">
                    Every spatial landmark begins with structural planning. We balance conceptual drafting and 3D parametric renders against solar path and setbacks constraints, crafting high-performance, clash-free coordinate grids.
                  </p>

                  <ul className="space-y-2.5 font-sans text-[13px] text-secondary border-t border-outline-variant/20 pt-4 pb-2">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Parametric 3D layout coordinates</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Solar path and wind calculations</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Zoning compliance municipal reviews</li>
                  </ul>

                  <div className="pt-2">
                    <Button variant="secondary" showArrow={true} href="/services/architecture">
                      Explore Architectural Advisory
                    </Button>
                  </div>
                </FadeIn>
              </div>

              {/* Right Side: CAD Residence Elevation Plan SVG (7 Columns) */}
              <div className="lg:col-span-7">
                <FadeIn direction="left" duration={1.0}>
                  <div className="relative aspect-[16/10] w-full rounded border border-outline-variant/30 bg-surface-container p-6 sm:p-8 flex flex-col justify-between font-sans shadow-elevated overflow-hidden group select-none">
                    <div className="absolute inset-0 opacity-15 blueprint-grid pointer-events-none" />
                    <div className="absolute inset-4 border border-outline/10 pointer-events-none" />
                    
                    <div className="flex justify-between items-start text-[9px] tracking-widest text-outline uppercase font-bold relative z-10">
                      <span>PLANNING SHEET // AR-101</span>
                      <span className="text-primary">[RESIDENCE ELEVATION COORDINATES]</span>
                    </div>

                    <div className="relative w-full h-full my-auto flex items-center justify-center py-4">
                      <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
                        {/* Blueprint grids */}
                        <line x1="120" y1="0" x2="120" y2="240" className="stroke-outline/15 stroke-dasharray-[3_6]" />
                        <line x1="280" y1="0" x2="280" y2="240" className="stroke-outline/15 stroke-dasharray-[3_6]" />
                        
                        {/* Elevation roof pitch outline */}
                        <path d="M 60,180 L 120,80 L 200,80 L 280,120 L 340,180 Z" className="stroke-outline/45" />
                        
                        {/* Double height windows grid */}
                        <rect x="140" y="95" width="40" height="55" className="stroke-primary/30" />
                        <line x1="160" y1="95" x2="160" y2="150" className="stroke-primary/20" />
                        <line x1="140" y1="120" x2="180" y2="120" className="stroke-primary/20" />
                        
                        <rect x="220" y="130" width="45" height="50" className="stroke-primary/30" />
                        <line x1="242" y1="130" x2="242" y2="180" className="stroke-primary/20" />
                        
                        {/* Height dimensions lines */}
                        <line x1="40" y1="80" x2="40" y2="180" className="stroke-primary/40" />
                        <path d="M 40,80 L 36,90 M 40,80 L 44,90" className="stroke-primary/40" />
                        <path d="M 40,180 L 36,170 M 40,180 L 44,170" className="stroke-primary/40" />
                        
                        {/* Floor slab levels */}
                        <line x1="50" y1="180" x2="350" y2="180" className="stroke-outline/65" />
                        <line x1="50" y1="80" x2="210" y2="80" className="stroke-outline/25 stroke-dasharray-[2_4]" />
                        
                        <text x="200" y="232" textAnchor="middle" className="font-sans text-[7px] fill-primary font-bold uppercase tracking-[0.2em]">MAX ELEVATION HEIGHT: 4800mm</text>
                      </svg>
                    </div>

                    <div className="flex justify-between text-[9px] tracking-wider text-secondary/60 border-t border-outline-variant/20 pt-4 font-semibold uppercase relative z-10">
                      <span>SCALE: 1:75</span>
                      <span>SOLAR PASSAGE: OPTIMIZED</span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* SERVICE 02: RENOVATIONS & RETROFITS */}
            <div id="renovations" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Side: CAD Retrofit SVG (7 Columns) */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <FadeIn direction="right" duration={1.0}>
                  <div className="relative aspect-[16/10] w-full rounded border border-outline-variant/30 bg-surface-container p-6 sm:p-8 flex flex-col justify-between font-sans shadow-elevated overflow-hidden group select-none">
                    <div className="absolute inset-0 opacity-15 blueprint-grid pointer-events-none" />
                    <div className="absolute inset-4 border border-outline/10 pointer-events-none" />
                    
                    <div className="flex justify-between items-start text-[9px] tracking-widest text-outline uppercase font-bold relative z-10">
                      <span>RETROFIT SCHEME // RN-102</span>
                      <span className="text-primary">[DEFLECTION COLUMN REINFORCEMENT]</span>
                    </div>

                    <div className="relative w-full h-full my-auto flex items-center justify-center py-4">
                      <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
                        {/* Beam deflection details */}
                        <path d="M 50,80 Q 200,92 350,80" className="stroke-primary/35 stroke-dasharray-[2_4]" />
                        <path d="M 50,80 Q 200,80 350,80" className="stroke-outline/45" />
                        
                        {/* Reinforced Masonry supports */}
                        <rect x="70" y="80" width="40" height="100" className="stroke-outline/35" />
                        <rect x="290" y="80" width="40" height="100" className="stroke-outline/35" />
                        
                        {/* Center supporting steel jacket coordinates */}
                        <rect x="175" y="80" width="50" height="100" className="stroke-primary/45 fill-primary/[0.01]" />
                        <line x1="175" y1="100" x2="225" y2="100" className="stroke-primary/25" />
                        <line x1="175" y1="130" x2="225" y2="130" className="stroke-primary/25" />
                        <line x1="175" y1="160" x2="225" y2="160" className="stroke-primary/25" />
                        
                        {/* Deflection indicator arrow ticks */}
                        <path d="M 200,80 L 200,105" className="stroke-primary" />
                        <path d="M 200,105 L 196,99 M 200,105 L 204,99" className="stroke-primary" />
                        
                        <text x="200" y="232" textAnchor="middle" className="font-sans text-[7px] fill-secondary/50 font-bold uppercase tracking-[0.2em]">DEFLECTION CORRECTION FACTOR: &lt; 0.05%</text>
                      </svg>
                    </div>

                    <div className="flex justify-between text-[9px] tracking-wider text-secondary/60 border-t border-outline-variant/20 pt-4 font-semibold uppercase relative z-10">
                      <span>AUDIT SYSTEM: ULTRASONIC CHECKS</span>
                      <span>MEMBRANES: DAMP-PROOFING</span>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Right Side: Editorial brief (5 Columns) */}
              <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
                <FadeIn direction="left" duration={0.8} className="space-y-6">
                  <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center">
                    <Hammer className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary block">Service 02 // Structural Renewals</span>
                  
                  <h2 className="font-serif text-[32px] sm:text-[42px] leading-tight text-on-surface font-normal">
                    Renovations & Retrofits
                  </h2>
                  
                  <p className="font-sans text-[15px] leading-relaxed text-secondary">
                    Old structures require absolute engineering precision. We perform thorough structural audits, reinforcement of load-bearing concrete columns, wide-span wall modifications, and structural damp-proofing membrane applications.
                  </p>

                  <ul className="space-y-2.5 font-sans text-[13px] text-secondary border-t border-outline-variant/20 pt-4">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Concrete load audits & testing</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Carbon-fiber structural column wraps</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> High-performance damp retrofits</li>
                  </ul>
                  <div className="pt-2">
                    <Button variant="secondary" showArrow={true} href="/services/renovations">
                      Explore Renovations
                    </Button>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* SERVICE 03: INTERIOR CURATION */}
            <div id="interior" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Side: Editorial brief (5 Columns) */}
              <div className="lg:col-span-5 space-y-8">
                <FadeIn direction="right" duration={0.8} className="space-y-6">
                  <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center">
                    <Ruler className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary block">Service 03 // Volumetric Balance</span>
                  
                  <h2 className="font-serif text-[32px] sm:text-[42px] leading-tight text-on-surface font-normal">
                    Interior Curation
                  </h2>
                  
                  <p className="font-sans text-[15px] leading-relaxed text-secondary">
                    We compose interiors around organic shapes and natural textures. By curating tactile boucle, earthy limestone slabs, custom console grids, and warm architectural lighting, Bouldspace designs deeply calming interior envelopes.
                  </p>

                  <ul className="space-y-2.5 font-sans text-[13px] text-secondary border-t border-outline-variant/20 pt-4 pb-2">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Earthy material palette strategy</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Custom console & casework layouts</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Warm architectural lighting mapping</li>
                  </ul>

                  <div className="pt-2">
                    <Button variant="secondary" showArrow={true} href="/services/interior-design">
                      Explore Interior Curation
                    </Button>
                  </div>
                </FadeIn>
              </div>

              {/* Right Side: CAD Space Plan SVG (7 Columns) */}
              <div className="lg:col-span-7">
                <FadeIn direction="left" duration={1.0}>
                  <div className="relative aspect-[16/10] w-full rounded border border-outline-variant/30 bg-surface-container p-6 sm:p-8 flex flex-col justify-between font-sans shadow-elevated overflow-hidden group select-none">
                    <div className="absolute inset-0 opacity-15 blueprint-grid pointer-events-none" />
                    <div className="absolute inset-4 border border-outline/10 pointer-events-none" />
                    
                    <div className="flex justify-between items-start text-[9px] tracking-widest text-outline uppercase font-bold relative z-10">
                      <span>CURATION MAP // IN-103</span>
                      <span className="text-primary">[VOLUMETRIC LIVING AREA LAYOUT]</span>
                    </div>

                    <div className="relative w-full h-full my-auto flex items-center justify-center py-4">
                      <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
                        {/* Living area wall bounds */}
                        <rect x="60" y="40" width="280" height="150" className="stroke-outline/35" />
                        
                        {/* Curved boucle sofa outline */}
                        <path d="M 80,120 C 80,70 180,70 180,120 L 180,160 C 180,170 160,175 140,175 C 100,175 80,160 80,120 Z" className="stroke-primary/45 fill-primary/[0.01]" />
                        
                        {/* Solid wood table coordinate */}
                        <rect x="220" y="80" width="80" height="40" rx="4" className="stroke-outline/45" />
                        <circle cx="260" cy="100" r="10" className="stroke-primary/20" />
                        
                        {/* Spotlight projection focus overlays */}
                        <circle cx="130" cy="110" r="30" className="stroke-primary/10 stroke-dasharray-[2_4]" />
                        <circle cx="260" cy="100" r="40" className="stroke-primary/10 stroke-dasharray-[2_4]" />
                        
                        <text x="200" y="222" textAnchor="middle" className="font-sans text-[7px] fill-primary font-bold uppercase tracking-[0.2em]">DAYLIGHT PENETRATION INDEX: 78%</text>
                      </svg>
                    </div>

                    <div className="flex justify-between text-[9px] tracking-wider text-secondary/60 border-t border-outline-variant/20 pt-4 font-semibold uppercase relative z-10">
                      <span>LAYOUT: CUSTOM ASYMMETRICAL</span>
                      <span>PALETTE: TERRACOTTA & OAK</span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* SERVICE 04: MODULAR KITCHENS */}
            <div id="kitchens" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Side: CAD Cabinetry SVG (7 Columns) */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <FadeIn direction="right" duration={1.0}>
                  <div className="relative aspect-[16/10] w-full rounded border border-outline-variant/30 bg-surface-container p-6 sm:p-8 flex flex-col justify-between font-sans shadow-elevated overflow-hidden group select-none">
                    <div className="absolute inset-0 opacity-15 blueprint-grid pointer-events-none" />
                    <div className="absolute inset-4 border border-outline/10 pointer-events-none" />
                    
                    <div className="flex justify-between items-start text-[9px] tracking-widest text-outline uppercase font-bold relative z-10">
                      <span>CASEWORK DETAIL // MK-104</span>
                      <span className="text-primary">[KITCHEN CABINETRY RUNNER DETAILS]</span>
                    </div>

                    <div className="relative w-full h-full my-auto flex items-center justify-center py-4">
                      <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
                        {/* Cabinet frame bounds */}
                        <rect x="70" y="30" width="260" height="180" className="stroke-outline/40" />
                        <line x1="70" y1="120" x2="330" y2="120" className="stroke-outline/25" />
                        
                        {/* Drawer tracks and clearances */}
                        <rect x="85" y="45" width="110" height="60" className="stroke-primary/35 fill-primary/[0.01]" />
                        <line x1="85" y1="75" x2="195" y2="75" className="stroke-primary/15" />
                        
                        <rect x="205" y="45" width="110" height="60" className="stroke-primary/35 fill-primary/[0.01]" />
                        
                        {/* Under-counter storage profile */}
                        <rect x="85" y="135" width="230" height="60" className="stroke-outline/25 fill-outline/[0.01]" />
                        <circle cx="200" cy="165" r="8" className="stroke-primary/30" />
                        
                        {/* Tolerance scale line indicators */}
                        <line x1="340" y1="45" x2="340" y2="105" className="stroke-primary/50" />
                        <path d="M 340,45 L 336,52 M 340,45 L 344,52" className="stroke-primary/50" />
                        <path d="M 340,105 L 336,98 M 340,105 L 344,98" className="stroke-primary/50" />
                        
                        <text x="200" y="232" textAnchor="middle" className="font-sans text-[7px] fill-secondary/50 font-bold uppercase tracking-[0.2em]">OAK CABINET CLEARANCE DEPTH: 600mm</text>
                      </svg>
                    </div>

                    <div className="flex justify-between text-[9px] tracking-wider text-secondary/60 border-t border-outline-variant/20 pt-4 font-semibold uppercase relative z-10">
                      <span>HARDWARE: GERMAN RUNNERS</span>
                      <span>RUNNER TOLERANCE: &lt; 0.20mm</span>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Right Side: Editorial brief (5 Columns) */}
              <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
                <FadeIn direction="left" duration={0.8} className="space-y-6">
                  <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center">
                    <Boxes className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary block">Service 04 // Precision Casework</span>
                  
                  <h2 className="font-serif text-[32px] sm:text-[42px] leading-tight text-on-surface font-normal">
                    Modular Kitchens
                  </h2>
                  
                  <p className="font-sans text-[15px] leading-relaxed text-secondary">
                    A luxury kitchen requires strict mechanical tolerances. We construct custom oak wood cabinetry, cast terrazzo countertop surfaces, and integrate smooth German-engineered soft-close runner tracks for high-functioning culinary designs.
                  </p>

                  <ul className="space-y-2.5 font-sans text-[13px] text-secondary border-t border-outline-variant/20 pt-4">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Cast Terrazzo monolithic counters</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Bespoke oak casing configurations</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Soft-close heavy drawer runners</li>
                  </ul>
                  <div className="pt-2">
                    <Button variant="secondary" showArrow={true} href="/services/modular-kitchen">
                      Explore Kitchen Systems
                    </Button>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* SERVICE 05: FURNITURE & DECOR CURATION */}
            <div id="furniture" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Side: Editorial brief (5 Columns) */}
              <div className="lg:col-span-5 space-y-8">
                <FadeIn direction="right" duration={0.8} className="space-y-6">
                  <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary block">Service 05 // Tactile Curation</span>
                  
                  <h2 className="font-serif text-[32px] sm:text-[42px] leading-tight text-on-surface font-normal">
                    Furniture & Decor Curation
                  </h2>
                  
                  <p className="font-sans text-[15px] leading-relaxed text-secondary">
                    Every landmark envelope needs a warm tactile soul. We curate bespoke boucle upholstery, custom raw concrete decks, solid wood block coordinates, and organic textured terracotta dressings that coordinate with the architectural geometry.
                  </p>

                  <ul className="space-y-2.5 font-sans text-[13px] text-secondary border-t border-outline-variant/20 pt-4">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Bespoke boucle upholstery coordinates</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Cast raw concrete table slabs</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Solid teakwood framing details</li>
                  </ul>
                  <div className="pt-2">
                    <Button variant="secondary" showArrow={true} href="/services/furniture-decor">
                      Explore Furniture Curation
                    </Button>
                  </div>
                </FadeIn>
              </div>

              {/* Right Side: CAD Wood Joint SVG (7 Columns) */}
              <div className="lg:col-span-7">
                <FadeIn direction="left" duration={1.0}>
                  <div className="relative aspect-[16/10] w-full rounded border border-outline-variant/30 bg-surface-container p-6 sm:p-8 flex flex-col justify-between font-sans shadow-elevated overflow-hidden group select-none">
                    <div className="absolute inset-0 opacity-15 blueprint-grid pointer-events-none" />
                    <div className="absolute inset-4 border border-outline/10 pointer-events-none" />
                    
                    <div className="flex justify-between items-start text-[9px] tracking-widest text-outline uppercase font-bold relative z-10">
                      <span>ASSEMBLY SCHEME // FD-105</span>
                      <span className="text-primary">[MORTISE & TENON CORNER CORRECTION]</span>
                    </div>

                    <div className="relative w-full h-full my-auto flex items-center justify-center py-4">
                      <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
                        {/* Mortise and Tenon joint details */}
                        <rect x="130" y="30" width="140" height="180" className="stroke-outline/45" />
                        <rect x="160" y="60" width="80" height="120" className="stroke-primary/45 fill-primary/[0.01]" />
                        
                        <line x1="160" y1="60" x2="240" y2="180" className="stroke-outline/15 stroke-dasharray-[2_4]" />
                        <line x1="240" y1="60" x2="160" y2="180" className="stroke-outline/15 stroke-dasharray-[2_4]" />
                        
                        {/* Dowel pin locks */}
                        <circle cx="200" cy="90" r="8" className="stroke-primary/50" />
                        <circle cx="200" cy="150" r="8" className="stroke-primary/50" />
                        
                        <text x="200" y="232" textAnchor="middle" className="font-sans text-[7px] fill-primary font-bold uppercase tracking-[0.2em]">TENON ENGAGEMENT WIDTH: 80mm</text>
                      </svg>
                    </div>

                    <div className="flex justify-between text-[9px] tracking-wider text-secondary/60 border-t border-outline-variant/20 pt-4 font-semibold uppercase relative z-10">
                      <span>CASINGS: SOLID TEAK WOODS</span>
                      <span>JOINT FACTOR: HEAVY RETENTION</span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* SERVICE 06: HOME DECOR & DRESSING */}
            <div id="decor" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Side: CAD Decor SVG (7 Columns) */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <FadeIn direction="right" duration={1.0}>
                  <div className="relative aspect-[16/10] w-full rounded border border-outline-variant/30 bg-surface-container p-6 sm:p-8 flex flex-col justify-between font-sans shadow-elevated overflow-hidden group select-none">
                    <div className="absolute inset-0 opacity-15 blueprint-grid pointer-events-none" />
                    <div className="absolute inset-4 border border-outline/10 pointer-events-none" />
                    
                    <div className="flex justify-between items-start text-[9px] tracking-widest text-outline uppercase font-bold relative z-10">
                      <span>DECOR ELEVATION // HD-106</span>
                      <span className="text-primary">[BRASS SCONCE & CEILING LIGHT TRACKS]</span>
                    </div>

                    <div className="relative w-full h-full my-auto flex items-center justify-center py-4">
                      <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
                        {/* Ceiling tracking lines */}
                        <line x1="50" y1="50" x2="350" y2="50" className="stroke-outline/30" />
                        <line x1="50" y1="65" x2="350" y2="65" className="stroke-outline/15 stroke-dasharray-[2_4]" />
                        
                        {/* Hanging brass sconce outline */}
                        <line x1="120" y1="50" x2="120" y2="130" className="stroke-primary" />
                        <rect x="105" y="130" width="30" height="25" className="stroke-primary/50 fill-primary/5" />
                        <circle cx="120" cy="165" r="10" className="stroke-primary/30" />
                        
                        <line x1="280" y1="50" x2="280" y2="110" className="stroke-primary" />
                        <rect x="265" y="110" width="30" height="25" className="stroke-primary/50 fill-primary/5" />
                        <circle cx="280" cy="145" r="10" className="stroke-primary/30" />
                        
                        {/* Planter coordinate indicator node */}
                        <rect x="180" y="180" width="40" height="30" rx="3" className="stroke-outline/45" />
                        <path d="M 190,180 C 190,165 200,155 200,155 C 200,155 210,165 210,180" className="stroke-outline/25" />
                        
                        <text x="200" y="232" textAnchor="middle" className="font-sans text-[7px] fill-secondary/50 font-bold uppercase tracking-[0.2em]">CEILING SUSPENSION DROP: 800mm</text>
                      </svg>
                    </div>

                    <div className="flex justify-between text-[9px] tracking-wider text-secondary/60 border-t border-outline-variant/20 pt-4 font-semibold uppercase relative z-10">
                      <span>SCONCES: SCULPTURAL BRASS</span>
                      <span>DRESSINGS: LIQUID TIMBER PLATES</span>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Right Side: Editorial brief (5 Columns) */}
              <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
                <FadeIn direction="left" duration={0.8} className="space-y-6">
                  <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center">
                    <FolderCheck className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary block">Service 06 // Spatial Dressing</span>
                  
                  <h2 className="font-serif text-[32px] sm:text-[42px] leading-tight text-on-surface font-normal">
                    Home Decor & Dressing
                  </h2>
                  
                  <p className="font-sans text-[15px] leading-relaxed text-secondary">
                    Styling balances physical structure. We arrange sculptural brass track lights, design low-maintenance indigenous planter coordinates, source raw linen window draperies, and procure unique hand-thrown ceramics from global studios.
                  </p>

                  <ul className="space-y-2.5 font-sans text-[13px] text-secondary border-t border-outline-variant/20 pt-4">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Sculptural lighting coordinate plans</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Indigenous low-maintenance planters</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Custom linen & ceramics sourcing</li>
                  </ul>
                  <div className="pt-2">
                    <Button variant="secondary" showArrow={true} href="/services/home-decor">
                      Explore Home Dressing
                    </Button>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* SERVICE 07: PROJECT MANAGEMENT CONSULTING (PMC) */}
            <div id="pmc" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Side: Editorial brief (5 Columns) */}
              <div className="lg:col-span-5 space-y-8">
                <FadeIn direction="right" duration={0.8} className="space-y-6">
                  <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary block">Service 07 // Technical Command</span>
                  
                  <h2 className="font-serif text-[32px] sm:text-[42px] leading-tight text-on-surface font-normal">
                    Project Management Consulting (PMC)
                  </h2>
                  
                  <p className="font-sans text-[15px] leading-relaxed text-secondary">
                    Avoid contractor scheduling errors and budget inflation. We employ rigorous critical-path algorithms, track subcontractor performance, run continuous budget strain checks, and perform weekly digital drone inspections.
                  </p>

                  <ul className="space-y-2.5 font-sans text-[13px] text-secondary border-t border-outline-variant/20 pt-4">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Critical-path scheduling algorithms</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Independent contractor quality audits</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Weekly drone site surveys & reports</li>
                  </ul>
                  <div className="pt-2">
                    <Button variant="secondary" showArrow={true} href="/services/pmc">
                      Explore PMC Solutions
                    </Button>
                  </div>
                </FadeIn>
              </div>

              {/* Right Side: CAD Gantt SVG (7 Columns) */}
              <div className="lg:col-span-7">
                <FadeIn direction="left" duration={1.0}>
                  <div className="relative aspect-[16/10] w-full rounded border border-outline-variant/30 bg-surface-container p-6 sm:p-8 flex flex-col justify-between font-sans shadow-elevated overflow-hidden group select-none">
                    <div className="absolute inset-0 opacity-15 blueprint-grid pointer-events-none" />
                    <div className="absolute inset-4 border border-outline/10 pointer-events-none" />
                    
                    <div className="flex justify-between items-start text-[9px] tracking-widest text-outline uppercase font-bold relative z-10">
                      <span>COORDINATION MAP // PM-107</span>
                      <span className="text-primary">[PMC CRITICAL-PATH MILESTONES]</span>
                    </div>

                    <div className="relative w-full h-full my-auto flex items-center justify-center py-4">
                      <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
                        {/* Timeline flowchart */}
                        <line x1="50" y1="120" x2="350" y2="120" className="stroke-outline/25" />
                        
                        <circle cx="80" cy="120" r="22" className="stroke-primary/45 fill-primary/5" />
                        <text x="80" y="123" textAnchor="middle" className="font-sans text-[6px] fill-primary font-bold">PMC-01</text>
                        
                        <circle cx="160" cy="120" r="22" className="stroke-outline/45 fill-outline/5" />
                        <text x="160" y="123" textAnchor="middle" className="font-sans text-[6px] fill-secondary font-bold">AUDIT-02</text>
                        
                        <circle cx="240" cy="120" r="22" className="stroke-outline/45 fill-outline/5" />
                        <text x="240" y="123" textAnchor="middle" className="font-sans text-[6px] fill-secondary font-bold">BUDGET-03</text>
                        
                        <circle cx="320" cy="120" r="22" className="stroke-primary/45 fill-primary/5" />
                        <text x="320" y="123" textAnchor="middle" className="font-sans text-[6px] fill-primary font-bold">HANDOVER</text>
                        
                        <path d="M 102,120 L 138,120" className="stroke-primary/50" />
                        <path d="M 182,120 L 218,120" className="stroke-outline/30" />
                        <path d="M 262,120 L 298,120" className="stroke-primary/50" />

                        <text x="200" y="232" textAnchor="middle" className="font-sans text-[7px] fill-secondary/50 font-bold uppercase tracking-[0.25em]">OPERATIONAL SCHEDULING MILESTONES</text>
                      </svg>
                    </div>

                    <div className="flex justify-between text-[9px] tracking-wider text-secondary/60 border-t border-outline-variant/20 pt-4 font-semibold uppercase relative z-10">
                      <span>AUDIT CONTROLS: 100% INDEPENDENT</span>
                      <span>COMPLIANCE INDEX: ACCREDITED</span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* SERVICE 08: TURNKEY SOLUTIONS */}
            <div id="turnkey" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Side: CAD Turnkey SVG (7 Columns) */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <FadeIn direction="right" duration={1.0}>
                  <div className="relative aspect-[16/10] w-full rounded border border-outline-variant/30 bg-surface-container p-6 sm:p-8 flex flex-col justify-between font-sans shadow-elevated overflow-hidden group select-none">
                    <div className="absolute inset-0 opacity-15 blueprint-grid pointer-events-none" />
                    <div className="absolute inset-4 border border-outline/10 pointer-events-none" />
                    
                    <div className="flex justify-between items-start text-[9px] tracking-widest text-outline uppercase font-bold relative z-10">
                      <span>EXECUTION MATRIX // TK-108</span>
                      <span className="text-primary">[TURNKEY SIGN-OFFS & RELEASE VECTOR]</span>
                    </div>

                    <div className="relative w-full h-full my-auto flex items-center justify-center py-4">
                      <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
                        {/* Handover checkpoint chart */}
                        <rect x="70" y="40" width="100" height="60" className="stroke-outline/35 fill-primary/[0.01]" />
                        <text x="120" y="73" textAnchor="middle" className="font-sans text-[6px] fill-secondary font-bold">1. MEP CERTIFICATION</text>
                        
                        <rect x="230" y="40" width="100" height="60" className="stroke-outline/35 fill-primary/[0.01]" />
                        <text x="280" y="73" textAnchor="middle" className="font-sans text-[6px] fill-secondary font-bold">2. CONCRETE STRENGTH</text>
                        
                        <rect x="150" y="130" width="100" height="60" className="stroke-primary/45 fill-primary/5" />
                        <text x="200" y="163" textAnchor="middle" className="font-sans text-[6px] fill-primary font-bold">3. KEYS RELEASE VECTOR</text>
                        
                        {/* Flow arrows */}
                        <path d="M 120,100 L 120,160 L 150,160" className="stroke-outline/30" />
                        <path d="M 280,100 L 280,160 L 250,160" className="stroke-outline/30" />
                        
                        <text x="200" y="232" textAnchor="middle" className="font-sans text-[7px] fill-secondary/50 font-bold uppercase tracking-[0.25em]">BOULDSPACE UNIFIED HANDOVER PATHWAY</text>
                      </svg>
                    </div>

                    <div className="flex justify-between text-[9px] tracking-wider text-secondary/60 border-t border-outline-variant/20 pt-4 font-semibold uppercase relative z-10">
                      <span>WARRANTY: 10-YEAR STRUCTURAL</span>
                      <span>PROCUREMENT: DIRECT SUPPLY</span>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Right Side: Editorial brief (5 Columns) */}
              <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
                <FadeIn direction="left" duration={0.8} className="space-y-6">
                  <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary block">Service 08 // Absolute Execution</span>
                  
                  <h2 className="font-serif text-[32px] sm:text-[42px] leading-tight text-on-surface font-normal">
                    Turnkey Solutions
                  </h2>
                  
                  <p className="font-sans text-[15px] leading-relaxed text-secondary">
                    From primary concrete batching to bespoke cabinet dressing. Bouldspace directs all material supply lines, supervises craftsmen, coordinates MEP testing, and releases final keys under our signature 10-Year Structural Integrity Warranty.
                  </p>

                  <ul className="space-y-2.5 font-sans text-[13px] text-secondary border-t border-outline-variant/20 pt-4 pb-2">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> End-to-end supply chain integration</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Full masonry & engineering supervision</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> 10-Year Structural Integrity Warranty</li>
                  </ul>

                  <div className="pt-2">
                    <Button variant="secondary" showArrow={true} href="/services/turnkey">
                      Explore Turnkey Solutions
                    </Button>
                  </div>
                </FadeIn>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================
            3. CORE SCOPING DISCLAIMERS PANEL
            ======================================== */}
        <section className="py-20 bg-surface relative z-10 border-t border-outline-variant/15">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <FadeIn direction="up" duration={0.8}>
              <div className="p-8 border border-outline-variant/30 rounded bg-surface-container-low font-sans space-y-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-on-surface">Execution & Compliance Standards</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[13px] text-secondary leading-relaxed">
                  <ul className="space-y-3.5">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>All modular cabinetry and teak tenon casework are crafted under strict moisture controls.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>PMC structures ensure absolute audit visibility, linking client payments directly to verified schedules.</span>
                    </li>
                  </ul>
                  <ul className="space-y-3.5">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Zoning paperwork, local heights audits, and municipal compliance reviews are handled under Retainer.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Turnkey projects deploy rigorous core concrete batch testing and structural integrity certifications.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========================================
            4. FINAL CTA
            ======================================== */}
        <section className="pt-24 pb-16 bg-surface-container text-on-surface text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid" />
          
          <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 space-y-8 flex flex-col items-center">
            <FadeIn direction="up" duration={0.8}>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full">
                Studio Briefing
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1} duration={0.8}>
              <h2 className="font-serif text-[42px] sm:text-[56px] leading-tight text-on-surface font-normal max-w-3xl">
                Let's coordinate your structural scoping.
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} duration={0.8}>
              <p className="font-sans text-[16px] sm:text-[18px] leading-relaxed text-secondary max-w-xl">
                Partner with Bouldspace to outline your spatial concept, interior curation, or turnkey management.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.8} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="primary" showArrow={true} href="/contact?ref=services-cta">
                Schedule Spatial Scoping
              </Button>
              <Button variant="secondary" showArrow={false} href="/pricing">
                Explore Pricing Models
              </Button>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
