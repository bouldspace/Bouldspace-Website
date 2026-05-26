"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Check, 
  MapPin, 
  Plane, 
  Ruler, 
  FileText, 
  ShieldCheck, 
  Compass, 
  ChevronDown,
  ChevronUp,
  Activity,
  Layers
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";

export default function PricingPage() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax backdrop translations
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const contentY = useTransform(scrollY, [0, 800], [0, -60]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Pricing Model FAQs State
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

  // 1. Service Tiers details
  const retainerFeatures = [
    "Clash-free architectural drafting grids",
    "Earthy material palettes (Terracotta, Stone, Oak Mills)",
    "3D structural visualization & parametric layouts",
    "Zoning compliance & local municipal building audits",
    "Comprehensive MEP coordination blueprint layout"
  ];

  const turnkeyFeatures = [
    "Full-time on-site coordination and engineering audit",
    "Rigorous contractor scheduling and milestone reports",
    "Direct procurement sourcing and logistics management",
    "Continuous budget stress-testing and material control",
    "Complete structural compliance and final handovers"
  ];

  // 2. Pricing FAQs
  const pricingFaqs = [
    {
      q: "How are consultation fees adjusted against project onboarding?",
      a: "If you proceed with either our Architectural Retainer or Turnkey Project Model after a site visit, the full amount of your Same City Site Visit fee (or 100% of the Base Fee for Outstation visits) is credited directly to your first milestone invoice."
    },
    {
      q: "What does the 'Travel and Accommodation Billed at Actuals' mean?",
      a: "For outstation site visits, we believe in complete financial transparency. We do not inflate travel costs. Flight tickets, transit rentals, and hotel accommodation coordinates are shared directly and billed exactly as charged by the providers, with zero markups."
    },
    {
      q: "Why do you not offer standardized fixed packages?",
      a: "Every parcel of land is unique—governed by diverse wind loads, municipal setbacks, soil load bearing capacities, and daylight orientations. Standardized pricing packages force compromises in engineering safety and custom design. Bouldspace coordinates every commission from primary principles."
    },
    {
      q: "What deliverables are provided in the Site Visit Assessment?",
      a: "You receive a structured 4-page Site Feasibility Profile detailing: (1) Local municipal zoning setbacks and height limits, (2) Topographic structural observations, (3) MEP accessibility evaluation, and (4) A high-level budget coordinate overview mapping execution milestones."
    }
  ];

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
              
              {/* Left financial matrix column scoping */}
              <rect x="70" y="80" width="160" height="440" className="stroke-outline/35 fill-primary/[0.02]" />
              <line x1="70" y1="200" x2="230" y2="200" className="stroke-outline/30" />
              <line x1="70" y1="350" x2="230" y2="350" className="stroke-outline/30" />
              <text x="150" y="110" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-wider">TIER 01: RETAINER</text>
              <text x="150" y="230" textAnchor="middle" className="font-sans text-[7.5px] fill-secondary font-semibold uppercase tracking-wider">CAD DRAFTING</text>
              <text x="150" y="380" textAnchor="middle" className="font-sans text-[7.5px] fill-secondary font-semibold uppercase tracking-wider">ZONING AUDIT</text>
              
              {/* Right financial turnkey column scoping */}
              <rect x="770" y="80" width="160" height="440" className="stroke-primary/35 fill-primary/[0.02]" />
              <line x1="770" y1="200" x2="930" y2="200" className="stroke-primary/30" />
              <line x1="770" y1="350" x2="930" y2="350" className="stroke-primary/30" />
              <text x="850" y="110" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-wider">TIER 02: TURNKEY</text>
              <text x="850" y="230" textAnchor="middle" className="font-sans text-[7.5px] fill-secondary font-semibold uppercase tracking-wider">MEP COMMAND</text>
              <text x="850" y="380" textAnchor="middle" className="font-sans text-[7.5px] fill-secondary font-semibold uppercase tracking-wider">PROCURE LOGS</text>
              
              {/* Repositioned text markings to completely avoid center text collisions */}
              <text x="165" y="45" textAnchor="start" className="font-sans text-[8px] fill-secondary/65 font-bold uppercase tracking-[0.25em]">BOULDSPACE FINANCIAL MATRIX</text>
              <text x="835" y="45" textAnchor="end" className="font-sans text-[8px] fill-primary font-bold uppercase tracking-[0.25em]">ALIGNMENT SCOPE: FA-90</text>
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
                Engagement Structure
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="font-serif text-[48px] sm:text-[68px] md:text-[84px] leading-[1.05] tracking-tight font-normal text-on-surface max-w-3xl"
              >
                Transparent, <br />
                Scoping Models.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-secondary max-w-2xl font-normal"
              >
                We do not sell commoditized templates. We provide strategic, consultative project management 
                and uncompromising architectural precision structured to protect enterprise investments.
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
            <span className="text-primary font-bold">Engagement Model</span>
            <span>BOULDSPACE PROTOCOL PR-90</span>
            <span>INDEX // STRATEGIC TIERS</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 right-8 md:right-16 z-20 font-sans text-[9px] tracking-[0.25em] uppercase text-secondary/60 text-right hidden sm:flex flex-col gap-1.5 select-none pointer-events-none"
          >
            <span className="text-primary font-bold">Evaluation Path</span>
            <span>02 TIERS // 02 SITE VISITS</span>
            <span>COORD: 28.4595° N, 77.0266° E</span>
          </motion.div>
        </section>

        {/* ========================================
            2. STRATEGIC SERVICE TIERS SECTION (REDESIGNED!)
            ======================================== */}
        <section className="py-32 bg-surface relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-28 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  COMMISSION STRUCTURES
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[38px] md:text-[48px] leading-tight text-on-surface font-normal">
                  Our Project Alignment Models
                </h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.2} duration={0.8}>
                <p className="font-sans text-[15px] text-secondary">
                  Every landmark structure requires an appropriate operational framework. We present our core 
                  pricing systems structured as detailed, professional consultative monograph tiers.
                </p>
              </FadeIn>
            </div>

            {/* Alternating Asymmetrical Chapters Monograph Layout */}
            <div className="space-y-36">

              {/* MODEL 01: ARCHITECTURAL RETAINER */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                
                {/* Left Side: Editorial Scoping Details (5 Columns) */}
                <div className="lg:col-span-5 space-y-6">
                  <FadeIn direction="right" duration={0.8} className="space-y-6">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded inline-block">
                      Design Retainer // Model Det-10
                    </span>
                    <h3 className="font-serif text-[32px] sm:text-[40px] leading-tight text-on-surface font-normal">
                      Architectural Retainer
                    </h3>
                    <p className="font-sans text-[12px] uppercase tracking-wider text-primary font-bold">
                      Comprehensive Planning & Curation
                    </p>
                    <p className="font-sans text-[15px] leading-relaxed text-secondary">
                      For clients seeking concept drafting, 3D parametric renders, material boards, and architectural permissions mapping prior to contractor onboarding. This retainer builds the conceptual foundation.
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-3 pt-2">
                      <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-outline">Conceptual Retainer Deliverables:</p>
                      <ul className="space-y-2 font-sans text-[13px] text-secondary">
                        {retainerFeatures.map((feat, fidx) => (
                          <li key={fidx} className="flex items-start gap-2.5">
                            <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing metadata & actions */}
                    <div className="pt-6 border-t border-outline-variant/30 space-y-4">
                      <div className="space-y-1">
                        <p className="font-serif text-[26px] sm:text-[30px] text-on-surface font-normal leading-none">Retainer-Based Scoping</p>
                        <p className="font-sans text-[11.5px] text-secondary/70">Billed per square foot or fixed conceptual phases</p>
                      </div>
                      <Button variant="primary" showArrow={true} className="w-full justify-center" href="/contact?type=retainer">
                        Request Retainer Scope
                      </Button>
                    </div>
                  </FadeIn>
                </div>

                {/* Right Side: Specialized CAD Layout SVG Drafting Sheet (7 Columns) */}
                <div className="lg:col-span-7">
                  <FadeIn direction="left" duration={1.0}>
                    <div className="relative aspect-[16/10] w-full rounded border border-outline-variant/30 bg-surface-container p-6 sm:p-8 flex flex-col justify-between font-sans shadow-elevated relative overflow-hidden group select-none">
                      <div className="absolute inset-0 opacity-15 blueprint-grid pointer-events-none" />
                      <div className="absolute inset-4 border border-outline/10 pointer-events-none" />
                      
                      <div className="flex justify-between items-start text-[9px] tracking-widest text-outline uppercase font-bold relative z-10">
                        <span>PLANNING SHEET // AR-204</span>
                        <span className="text-primary">[RETAINER CAD GRID]</span>
                      </div>

                      {/* CAD Floor Plan Layout Vectors */}
                      <div className="relative w-full h-full my-auto flex items-center justify-center py-4">
                        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.75] fill-none" viewBox="0 0 400 240">
                          {/* Structural axes lines */}
                          <line x1="200" y1="0" x2="200" y2="240" className="stroke-outline/15 stroke-dasharray-[3_3]" />
                          <line x1="0" y1="120" x2="400" y2="120" className="stroke-outline/15 stroke-dasharray-[3_3]" />
                          
                          {/* Conceptual floor boundaries */}
                          <rect x="60" y="30" width="280" height="180" className="stroke-outline/40" />
                          <rect x="80" y="50" width="240" height="140" className="stroke-outline/25" />
                          
                          {/* Spatial partitions */}
                          <line x1="180" y1="50" x2="180" y2="190" className="stroke-primary/30" />
                          <line x1="80" y1="110" x2="180" y2="110" className="stroke-outline/20" />
                          <line x1="180" y1="130" x2="320" y2="130" className="stroke-primary/30" />
                          
                          {/* Support Column locations */}
                          <circle cx="95" cy="65" r="8" className="stroke-outline/45 fill-outline/5" />
                          <circle cx="305" cy="65" r="8" className="stroke-outline/45 fill-outline/5" />
                          <circle cx="95" cy="175" r="8" className="stroke-outline/45 fill-outline/5" />
                          <circle cx="305" cy="175" r="8" className="stroke-outline/45 fill-outline/5" />

                          {/* Dimension ticks */}
                          <line x1="60" y1="222" x2="340" y2="222" className="stroke-primary/45" />
                          <path d="M 60,222 L 70,218 M 60,222 L 70,226" className="stroke-primary/45" />
                          <path d="M 340,222 L 330,218 M 340,222 L 330,226" className="stroke-primary/45" />

                          {/* Layout Annotations */}
                          <text x="200" y="235" textAnchor="middle" className="font-sans text-[7px] fill-primary font-bold uppercase tracking-[0.2em]">TOTAL COVERED LENGTH: 6000mm</text>
                          <text x="130" y="80" textAnchor="middle" className="font-sans text-[6px] fill-secondary font-semibold uppercase">ZONE A-01</text>
                          <text x="250" y="160" textAnchor="middle" className="font-sans text-[6px] fill-secondary font-semibold uppercase">ZONE B-02</text>
                        </svg>
                      </div>

                      <div className="flex justify-between text-[9px] tracking-wider text-secondary/60 border-t border-outline-variant/20 pt-4 font-semibold uppercase relative z-10">
                        <span>SCALE 1:100</span>
                        <span>COORDINATE ACCURACY: &lt; 1mm</span>
                      </div>
                    </div>
                  </FadeIn>
                </div>

              </div>

              {/* MODEL 02: TURNKEY PROJECT SCALE */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                
                {/* Left Side: Specialized CAD Timeline Gantt SVG Blueprint (7 Columns) - STAGGERED RHYTHM! */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <FadeIn direction="right" duration={1.0}>
                    <div className="relative aspect-[16/10] w-full rounded border border-outline-variant/30 bg-surface-container p-6 sm:p-8 flex flex-col justify-between font-sans shadow-elevated relative overflow-hidden group select-none">
                      <div className="absolute inset-0 opacity-15 blueprint-grid pointer-events-none" />
                      <div className="absolute inset-4 border border-outline/10 pointer-events-none" />
                      
                      <div className="flex justify-between items-start text-[9px] tracking-widest text-outline uppercase font-bold relative z-10">
                        <span>EXECUTION PLOTS // TK-809</span>
                        <span className="text-primary">[TURNKEY TIMELINE COORD]</span>
                      </div>

                      {/* CAD Turnkey Timeline Schedule Node Vectors */}
                      <div className="relative w-full h-full my-auto flex items-center justify-center py-4">
                        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.75] fill-none" viewBox="0 0 400 240">
                          {/* Structural axes lines */}
                          <line x1="80" y1="20" x2="80" y2="200" className="stroke-outline/25" />
                          <line x1="80" y1="200" x2="360" y2="200" className="stroke-outline/25" />
                          
                          {/* Schedule track coordinates */}
                          <line x1="80" y1="60" x2="340" y2="60" className="stroke-outline/15 stroke-dasharray-[2_4]" />
                          <line x1="80" y1="100" x2="340" y2="100" className="stroke-outline/15 stroke-dasharray-[2_4]" />
                          <line x1="80" y1="140" x2="340" y2="140" className="stroke-outline/15 stroke-dasharray-[2_4]" />
                          
                          {/* Stage Node Blocks & Duration vectors */}
                          {/* Stage 01: Excavate */}
                          <rect x="90" y="48" width="80" height="24" rx="3" className="stroke-primary/50 fill-primary/5" />
                          <text x="130" y="63" textAnchor="middle" className="font-sans text-[6px] fill-primary font-bold uppercase tracking-wider">01 // STRUCTURAL</text>
                          
                          {/* Stage 02: MEP Casing */}
                          <rect x="180" y="88" width="90" height="24" rx="3" className="stroke-outline/45 fill-outline/5" />
                          <text x="225" y="103" textAnchor="middle" className="font-sans text-[6px] fill-secondary font-bold uppercase tracking-wider">02 // MEP CORE</text>
                          
                          {/* Stage 03: Finishing */}
                          <rect x="260" y="128" width="70" height="24" rx="3" className="stroke-primary/50 fill-primary/5" />
                          <text x="295" y="143" textAnchor="middle" className="font-sans text-[6px] fill-primary font-bold uppercase tracking-wider">03 // FINISHING</text>

                          {/* Connecting milestone pathways */}
                          <path d="M 170,60 L 180,100" className="stroke-outline/20" />
                          <path d="M 270,100 L 280,140" className="stroke-primary/30" />

                          {/* Technical Annotations */}
                          <text x="220" y="218" textAnchor="middle" className="font-sans text-[7px] fill-secondary/50 font-bold uppercase tracking-[0.2em]">PROJECT EXECUTION MILESTONES: 06 PHASES</text>
                          <text x="40" y="65" className="font-sans text-[6px] fill-secondary/60 font-semibold uppercase text-right">PHASE A</text>
                          <text x="40" y="105" className="font-sans text-[6px] fill-secondary/60 font-semibold uppercase text-right">PHASE B</text>
                          <text x="40" y="145" className="font-sans text-[6px] fill-secondary/60 font-semibold uppercase text-right">PHASE C</text>
                        </svg>
                      </div>

                      <div className="flex justify-between text-[9px] tracking-wider text-secondary/60 border-t border-outline-variant/20 pt-4 font-semibold uppercase relative z-10">
                        <span>INTERVAL AUDITING: ON-SITE</span>
                        <span>SYSTEM CODE: BOULDSPACE PROCURE</span>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* Right Side: Editorial Scoping Details (5 Columns) */}
                <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
                  <FadeIn direction="left" duration={0.8} className="space-y-6">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded inline-block">
                      Unified Command // Model Det-11
                    </span>
                    <h3 className="font-serif text-[32px] sm:text-[40px] leading-tight text-on-surface font-normal">
                      Turnkey Project Scale
                    </h3>
                    <p className="font-sans text-[12px] uppercase tracking-wider text-primary font-bold">
                      End-to-End Coordination & Execution
                    </p>
                    <p className="font-sans text-[15px] leading-relaxed text-secondary">
                      For clients requiring unified studio command over structural engineers, raw procurement logistics, material supply, masons, and final keys handover. We handle absolute operational coordination.
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-3 pt-2">
                      <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-outline">Turnkey Management Scope:</p>
                      <ul className="space-y-2 font-sans text-[13px] text-secondary">
                        {turnkeyFeatures.map((feat, fidx) => (
                          <li key={fidx} className="flex items-start gap-2.5">
                            <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing metadata & actions */}
                    <div className="pt-6 border-t border-outline-variant/30 space-y-4">
                      <div className="space-y-1">
                        <p className="font-serif text-[26px] sm:text-[30px] text-on-surface font-normal leading-none">6.5% – 12% Project Value</p>
                        <p className="font-sans text-[11.5px] text-secondary/70">Adjusted for scale, structure complexity, and schedules</p>
                      </div>
                      <Button variant="primary" showArrow={true} className="w-full justify-center" href="/contact?type=turnkey">
                        Initiate Project Review
                      </Button>
                    </div>
                  </FadeIn>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ========================================
            3. NEW SECTION: CONSULTATION & SITE VISIT ENGAGEMENT
            ======================================== */}
        <section id="site-visits" className="py-28 bg-surface-container border-t border-b border-outline-variant/20 relative overflow-hidden">
          {/* Subtle blueprint grid line overlay */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
              <div className="lg:col-span-7">
                <FadeIn direction="right" duration={0.8} className="space-y-4">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
                    Technical Feasibility
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[48px] leading-tight text-on-surface font-normal">
                    Project Evaluation & Site Visits
                  </h2>
                </FadeIn>
              </div>
              <div className="lg:col-span-5">
                <FadeIn direction="left" delay={0.1} duration={0.8}>
                  <p className="font-sans text-[15px] leading-relaxed text-secondary">
                    Before defining timelines and final budgets, we deploy senior execution directors to conduct on-site physical audits, zoning analyses, and structural alignment diagnostics.
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Asymmetrical Bento layout grid for Same-City and Outstation Visits */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* SAME CITY SITE VISIT CARD (5 Columns) */}
              <div className="lg:col-span-6">
                <FadeIn direction="up" delay={0.1} duration={0.8} className="h-full">
                  <div className="h-full rounded border border-outline-variant/30 bg-surface-container-lowest p-8 sm:p-10 flex flex-col justify-between shadow-elevated relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.01] blueprint-grid pointer-events-none" />
                    
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="h-12 w-12 rounded bg-primary/5 flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <span className="font-sans text-[9px] font-bold tracking-widest text-outline bg-surface-container px-2 py-1 uppercase rounded">
                          SAME CITY
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-serif text-[24px] sm:text-[28px] text-on-surface font-normal">
                          On-Site Assessment
                        </h3>
                        <p className="font-sans text-[12px] uppercase tracking-wider text-primary font-semibold">
                          Local Studio Footprint Area
                        </p>
                      </div>

                      <p className="font-sans text-[14px] leading-relaxed text-secondary">
                        A precise, structured local site assessment mapping zoning guidelines, structural limitations, daylight dynamics, and core feasibility coordinates directly with your stakeholders.
                      </p>

                      <div className="h-px bg-outline-variant/20" />

                      {/* Technical specifications */}
                      <div className="space-y-3 font-sans text-[13px] text-secondary">
                        <div className="flex gap-3">
                          <Compass className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-on-surface block uppercase text-[10px] tracking-wider">Session Duration</span>
                            <span className="text-secondary/85">Up to 3 Hours of continuous on-site diagnostics.</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <FileText className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-on-surface block uppercase text-[10px] tracking-wider">Deliverables</span>
                            <span className="text-secondary/85">Site Feasibility Briefing & Structural Load recommendations.</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pricing, refund credit note, and CTA */}
                    <div className="pt-8 mt-8 border-t border-outline-variant/20 space-y-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3">
                        <div>
                          <p className="font-sans text-[9px] font-bold uppercase tracking-widest text-outline">INVESTMENT RANGE</p>
                          <p className="font-serif text-[22px] sm:text-[26px] text-on-surface font-normal leading-none mt-0.5">₹2,500 – ₹7,500</p>
                          <p className="font-sans text-[10px] text-secondary/70 mt-1">Based on project scope & parcel complexity</p>
                        </div>
                      </div>
                      
                      {/* Trust credit offset alert */}
                      <div className="p-3.5 rounded bg-primary/[0.03] border border-primary/10 flex gap-2.5 items-start">
                        <ShieldCheck className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                        <p className="font-sans text-[11px] leading-relaxed text-secondary">
                          <strong className="text-on-surface font-semibold">Onboarding Offset:</strong> 100% of this assessment fee is credited directly against your conceptual Retainer invoice if you proceed.
                        </p>
                      </div>

                      <Button variant="primary" showArrow={true} className="w-full justify-center" href="/contact?visit=same-city">
                        Schedule Local Assessment
                      </Button>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* OUTSTATION / ANOTHER CITY SITE VISIT CARD (6 Columns) */}
              <div className="lg:col-span-6">
                <FadeIn direction="up" delay={0.25} duration={0.8} className="h-full">
                  <div className="h-full rounded border border-outline-variant/30 bg-surface-container-lowest p-8 sm:p-10 flex flex-col justify-between shadow-elevated relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-[0.01] blueprint-grid pointer-events-none" />
                    
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="h-12 w-12 rounded bg-primary/5 flex items-center justify-center">
                          <Plane className="h-6 w-6 text-primary" />
                        </div>
                        <span className="font-sans text-[9px] font-bold tracking-widest text-outline bg-surface-container px-2 py-1 uppercase rounded">
                          OUTSTATION
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-serif text-[24px] sm:text-[28px] text-on-surface font-normal">
                          Regional Consultation
                        </h3>
                        <p className="font-sans text-[12px] uppercase tracking-wider text-primary font-semibold">
                          National & Global Coordinates
                        </p>
                      </div>

                      <p className="font-sans text-[14px] leading-relaxed text-secondary">
                        Travel-inclusive feasibility assessment for commissions outside our primary studio hubs. Senior consultants audit topography, local materials availability, zoning parameters, and regional MEP constraints.
                      </p>

                      <div className="h-px bg-outline-variant/20" />

                      {/* Technical specifications */}
                      <div className="space-y-3 font-sans text-[13px] text-secondary">
                        <div className="flex gap-3">
                          <Compass className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-on-surface block uppercase text-[10px] tracking-wider">Evaluation Scope</span>
                            <span className="text-secondary/85">On-site structural audits, soil dynamics review, and zoning maps alignment.</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <FileText className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-on-surface block uppercase text-[10px] tracking-wider">Deliverables</span>
                            <span className="text-secondary/85">Comprehensive 4-Page Site Feasibility Profile and regional logistics plan.</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pricing, refund credit note, and CTA */}
                    <div className="pt-8 mt-8 border-t border-outline-variant/20 space-y-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3">
                        <div>
                          <p className="font-sans text-[9px] font-bold uppercase tracking-widest text-outline">INVESTMENT SCOPE</p>
                          <p className="font-serif text-[22px] sm:text-[26px] text-on-surface font-normal leading-none mt-0.5">₹15,000 + Travel</p>
                          <p className="font-sans text-[10px] text-secondary/70 mt-1">Transit, flights, and lodging billed directly at actual cost</p>
                        </div>
                      </div>
                      
                      {/* Trust credit offset alert */}
                      <div className="p-3.5 rounded bg-primary/[0.03] border border-primary/10 flex gap-2.5 items-start">
                        <ShieldCheck className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                        <p className="font-sans text-[11px] leading-relaxed text-secondary">
                          <strong className="text-on-surface font-semibold">Custom Quoted:</strong> Base consultation rates adapt to city size, travel range, and physical topography risks. Fully transparent coordinate billing.
                        </p>
                      </div>

                      <Button variant="primary" showArrow={true} className="w-full justify-center" href="/contact?visit=outstation">
                        Schedule Outstation Assessment
                      </Button>
                    </div>
                  </div>
                </FadeIn>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================
            4. PREMIUM ENTERPRISE DISCLAIMERS
            ======================================== */}
        <section className="py-16 bg-surface relative z-10 border-b border-outline-variant/15">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <FadeIn direction="up" duration={0.8}>
              <div className="p-8 border border-outline-variant/30 rounded bg-surface-container-low font-sans space-y-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-on-surface">Scoping & Alignment Protocol</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[13px] text-secondary leading-relaxed">
                  <ul className="space-y-3.5">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Site assessment fees may be credited in full against conceptual retainer agreements.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Turnkey project percentage structures adapt strictly to contractor density and material specifications.</span>
                    </li>
                  </ul>
                  <ul className="space-y-3.5">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Detailed commercial proposals and zoning logs are compiled and shared only after structural discovery phases.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Exploratory dome habitats, specialized campus complexes, and extreme terrains require custom masterplan scopes.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ========================================
            5. STRATEGIC BILLING & EXPERIENCE FAQ
            ======================================== */}
        <section className="py-24 bg-surface relative z-10">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary">
                  Billing Principles
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[38px] md:text-[44px] leading-tight text-on-surface font-normal">
                  Engagement FAQ
                </h2>
              </FadeIn>
            </div>

            {/* Accordions */}
            <div className="space-y-4">
              {pricingFaqs.map((faq, idx) => {
                const isOpen = activeIndex === idx;
                return (
                  <FadeIn
                    key={idx}
                    direction="up"
                    delay={idx * 0.05}
                    duration={0.6}
                  >
                    <div className="border-b border-outline-variant/30 pb-4">
                      <button
                        onClick={() => toggleFAQ(idx)}
                        className="w-full flex justify-between items-center text-left py-4 focus:outline-none group"
                        aria-expanded={isOpen}
                      >
                        <span className="font-serif text-[18px] sm:text-[20px] text-on-surface group-hover:text-primary transition-colors duration-300">
                          {faq.q}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-primary shrink-0 transition-transform" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-secondary group-hover:text-primary shrink-0 transition-transform" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="pt-2 pb-4">
                          <p className="font-sans text-[15px] leading-relaxed text-secondary">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  </FadeIn>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================
            6. FINAL CTA
            ======================================== */}
        <section className="pt-20 pb-16 bg-surface-container border-t border-outline-variant/30 text-on-surface text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid" />
          
          <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 space-y-8 flex flex-col items-center">
            <FadeIn direction="up" duration={0.8}>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full">
                Discovery Launch
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1} duration={0.8}>
              <h2 className="font-serif text-[42px] sm:text-[56px] leading-tight text-on-surface font-normal max-w-3xl">
                Ready to coordinate your site assessment?
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} duration={0.8}>
              <p className="font-sans text-[16px] sm:text-[18px] leading-relaxed text-secondary max-w-xl">
                Request a comprehensive local spatial audit or coordinate travel scoping with our senior advisory team.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.8} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="primary" showArrow={true} href="/contact?type=assessment">
                Schedule Site Assessment
              </Button>
              <Button variant="secondary" showArrow={false} href="/contact?type=proposal">
                Request Digital Scoping
              </Button>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
