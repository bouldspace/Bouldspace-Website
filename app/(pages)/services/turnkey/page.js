"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Compass, 
  Ruler, 
  Layers, 
  Activity, 
  ShieldCheck, 
  Boxes, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  Sparkles, 
  Eye, 
  PenTool, 
  HardHat, 
  Heart, 
  Grid, 
  ArrowRight,
  MessageSquare,
  Sparkle,
  Sliders,
  Award,
  FolderCheck
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";

export default function TurnkeyServicePage() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax backdrop translations for cinematic experience
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const contentY = useTransform(scrollY, [0, 800], [0, -60]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      },
    },
  };

  // 1. End-to-End Showcase Chapters
  const turnkeyChapters = [
    {
      title: "Architecture Planning",
      subtitle: "Chapter 01 // Structural Foundation",
      desc: "Parametric drafting, site orientation audits, municipal setbacks compliance, and coordination of complex concrete structures baselines.",
      metric: "Phase: 100% Unified",
      details: ["Parametric spatial layouts", "Solar path & height audits", "Municipal compliance approvals"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          <rect x="50" y="30" width="100" height="40" rx="1" className="stroke-primary/45 fill-primary/[0.003]" />
          <text x="100" y="53" textAnchor="middle" className="font-sans text-[6.5px] fill-primary font-bold">AR-01 CONSTRUCT</text>
          <rect x="250" y="30" width="100" height="40" rx="1" className="stroke-outline/35 fill-outline/[0.002]" />
          <text x="300" y="53" textAnchor="middle" className="font-sans text-[6.5px] fill-outline font-bold">AR-02 ELEVATION</text>
          <line x1="150" y1="50" x2="250" y2="50" className="stroke-outline/25" />
          <line x1="200" y1="50" x2="200" y2="120" className="stroke-primary/35" />
          <circle cx="200" cy="140" r="15" className="stroke-primary/30" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">STRUCTURAL BLUEPRINT GRIDS // AR-01</text>
        </svg>
      )
    },
    {
      title: "Interior Design",
      subtitle: "Chapter 02 // Tactile Curation",
      desc: "Composing spaces using organic textures, curved travertine receiving desks, custom concrete slabs, and low-glare coves architectural lighting.",
      metric: "Mood: Globally Curated",
      details: ["Travertine slab selection", "Acoustic wood panel casings", "Organic boucle upholstery mapping"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          <rect x="60" y="40" width="280" height="135" className="stroke-outline/35" />
          <path d="M 80,120 C 80,70 180,70 180,120 L 180,150 C 180,160 160,165 140,165 C 100,165 80,150 80,120 Z" className="stroke-primary/45 fill-primary/[0.003]" />
          <rect x="220" y="70" width="80" height="40" rx="3" className="stroke-outline/45" />
          <circle cx="260" cy="90" r="8" className="stroke-primary/20" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">INTERIOR VOLUMETRIC MAP // IN-02</text>
        </svg>
      )
    },
    {
      title: "Procurement Coordination",
      subtitle: "Chapter 03 // Travertine & Teak",
      desc: "Sourcing and staging luxury raw materials from certified global quarries and workshops—eliminating middleman markups and shipping delays.",
      metric: "Quarry: Direct Sourcing",
      details: ["Travertine blocks validation", "Solid teak logs inventory checks", "Anti-fingerprint runner hardware"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          <rect x="50" y="90" width="80" height="40" rx="1" className="stroke-outline/35" />
          <rect x="160" y="90" width="80" height="40" rx="1" className="stroke-primary/45 fill-primary/5" />
          <rect x="270" y="90" width="80" height="40" rx="1" className="stroke-outline/35" />
          <line x1="130" y1="110" x2="160" y2="110" className="stroke-primary/35" />
          <line x1="240" y1="110" x2="270" y2="110" className="stroke-primary/35" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">PROCUREMENT FLOW MATRIX // PR-03</text>
        </svg>
      )
    },
    {
      title: "Construction Execution",
      subtitle: "Chapter 04 // Masonry & Castings",
      desc: "Supervising core foundation casting, double-height volumetric framing, and column jacketing with strict ultrasonic testing protocols.",
      metric: "Tolerances: < 0.20mm",
      details: ["High-strength concrete casting", "Carbon column jacket wraps", "Wide-span structural wall adjustments"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          <rect x="80" y="40" width="240" height="135" className="stroke-outline/35" />
          <line x1="80" y1="100" x2="320" y2="100" className="stroke-primary/45" />
          <rect x="140" y="40" width="40" height="135" className="stroke-primary/35 fill-primary/[0.003]" />
          <rect x="220" y="40" width="40" height="135" className="stroke-primary/35 fill-primary/[0.003]" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">REINFORCEMENT FRAME // EX-04</text>
        </svg>
      )
    },
    {
      title: "Site Supervision",
      subtitle: "Chapter 05 // Technical Audits",
      desc: "Directing continuous on-site quality sweeps, mapping MEP clearances limits, and running drone scanning registers weekly.",
      metric: "Inspections: Weekly",
      details: ["Weekly digital drone scans", "Mechanical clearance reviews", "Safety scaffolding compliance check"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          <circle cx="200" cy="100" r="50" className="stroke-primary/45" />
          <circle cx="200" cy="100" r="10" className="stroke-primary/20" />
          <line x1="200" y1="30" x2="200" y2="170" className="stroke-outline/25" />
          <line x1="130" y1="100" x2="270" y2="100" className="stroke-outline/25" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">DRONE FIELD SWEEP RADAR // SS-05</text>
        </svg>
      )
    },
    {
      title: "Material Coordination",
      subtitle: "Chapter 06 // Staging & Logistics",
      desc: "Auditing moisture indices, storing precious cladding materials, and setting up damage containment covers on-site.",
      metric: "Staging: Dust-Free",
      details: ["Moisture indices verification", "Travertine slab buffer staging", "Precious brass casing protection"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          <rect x="70" y="50" width="260" height="115" rx="1.5" className="stroke-outline/35" />
          <line x1="70" y1="107" x2="330" y2="107" className="stroke-outline/20 stroke-dasharray-[2_4]" />
          <rect x="100" y="70" width="50" height="75" className="stroke-primary/35" />
          <rect x="175" y="70" width="50" height="75" className="stroke-primary/35" />
          <rect x="250" y="70" width="50" height="75" className="stroke-primary/35" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">LOGISTICS STAGING GRID // MC-06</text>
        </svg>
      )
    },
    {
      title: "Vendor Management",
      subtitle: "Chapter 07 // Single-Point Gateway",
      desc: "Taking 100% responsibility for tenders, contract payouts, and quality certifications—preventing communication errors.",
      metric: "Interface: 100% Unified",
      details: ["Subcontractor tender reviews", "Payments release gates tracking", "Quality sign-off registers"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          <circle cx="200" cy="110" r="30" className="stroke-primary/45 fill-primary/5" />
          <text x="200" y="113" textAnchor="middle" className="font-sans text-[6.5px] fill-primary font-bold">GATEWAY</text>
          <circle cx="100" cy="60" r="20" className="stroke-outline/35" />
          <circle cx="300" cy="60" r="20" className="stroke-outline/35" />
          <circle cx="200" cy="180" r="20" className="stroke-outline/35" />
          <line x1="120" y1="75" x2="175" y2="95" className="stroke-primary/35" />
          <line x1="280" y1="75" x2="225" y2="95" className="stroke-primary/35" />
          <line x1="200" y1="160" x2="200" y2="140" className="stroke-primary/35" />
          <text x="200" y="222" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">VENDOR ROUTING CHANNELS // VM-07</text>
        </svg>
      )
    },
    {
      title: "Final Styling & Handover",
      subtitle: "Chapter 08 // The Master Signature",
      desc: "Polishing every travertine block, arranging the bespoke decor styling, and issuing our 10-Year Structural Integrity Warranty.",
      metric: "Handover: Absolute Key",
      details: ["Monolithic travertine cleanups", "Custom styled dressing arrangements", "10-Year Structural warranty issue"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          <rect x="70" y="40" width="100" height="60" className="stroke-outline/35 fill-primary/[0.01]" />
          <text x="120" y="73" textAnchor="middle" className="font-sans text-[6px] fill-secondary font-bold">1. SYSTEM AUDIT</text>
          <rect x="230" y="40" width="100" height="60" className="stroke-outline/35 fill-primary/[0.01]" />
          <text x="280" y="73" textAnchor="middle" className="font-sans text-[6px] fill-secondary font-bold">2. DECOR DRESSING</text>
          <rect x="150" y="130" width="100" height="60" className="stroke-primary/45 fill-primary/5" />
          <text x="200" y="163" textAnchor="middle" className="font-sans text-[6px] fill-primary font-bold">3. KEYS HANDOVER</text>
          <path d="M 120,100 L 120,160 L 150,160" className="stroke-outline/30" />
          <path d="M 280,100 L 280,160 L 250,160" className="stroke-outline/30" />
          <text x="200" y="232" textAnchor="middle" className="font-sans text-[7px] fill-secondary/50 font-bold uppercase tracking-[0.25em]">HANDOVER GATE FLOW DIAGRAM // HO-08</text>
        </svg>
      )
    }
  ];

  // 2. Differentiators
  const turnkeyWhy = [
    { title: "Single-Point Responsibility", desc: "No finger-pointing between designer and builder. We own every detail, block, and timeline." },
    { title: "Integrated Project Delivery", desc: "Architecture, engineering, interiors, and construction are designed as one overlapping code." },
    { title: "Zero Communication Friction", desc: "You interface with one experienced client partner while weekly digital command logs track updates." },
    { title: "Flawless Execution Precision", desc: "Ultra-tight clearance grids supervision ensures spatial mockups and physical casings align." }
  ];

  // 3. Process Steps
  const processSteps = [
    { step: "01", title: "Discovery & Consultation", desc: "Deep architectural consultation defining your spatial parameters, programmatic briefs, and scope benchmarks." },
    { step: "02", title: "Planning & Design", desc: "Drafting 3D parametric models, wind-path offsets, solar path calculations, and layout elevations grids." },
    { step: "03", title: "Budgeting & Strategy", desc: "Structuring complete bill of quantities, direct staging schedules, and cost strain benchmarks." },
    { step: "04", title: "Procurement & Coordination", desc: "Sourcing raw travertine blocks directly from quarries, selecting teak logs, and staging accessories." },
    { step: "05", title: "Execution & Supervision", desc: "Casting foundation concrete, jacketing columns, setting MEP systems, and performing drone inspects." },
    { step: "06", title: "Finishing & Styling", desc: "Applying textured plaster layers, polishing marble claddings, hanging light fixtures, and styling spaces." },
    { step: "07", title: "Final Delivery & Handover", desc: "Performing deep cleaning sweeps, running final quality reviews, and handing over keys with our 10-Year warranty." }
  ];

  // 4. Featured Turnkey Projects
  const turnkeyProjects = [
    { name: "The Travertine Pavilion", sector: "Luxury Residential", scope: "Full Design, Civil Casting, Interiors", location: "Golf Course Road, Gurugram", type: "Complete Turnkey Delivery" },
    { name: "The Ash Casing Penthouse", sector: "High-End Apartment", scope: "Structural Metamorphosis, Casework Curation", location: "Whitefield, Bengaluru", type: "Full Interiors Turnkey" },
    { name: "The Obsidian Executive Lounge", sector: "Boutique Corporate Office", scope: "Acoustic splits, Travertine desk, MEP, Styling", location: "Indiranagar, Bengaluru", type: "Design & Construction Turnkey" }
  ];

  return (
    <>
      <Header />
      <main ref={containerRef} className="flex-grow bg-surface overflow-hidden">
        
        {/* ========================================
            1. HERO SECTION — CINEMATIC
            ======================================== */}
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-36 pb-24 overflow-hidden bg-surface text-on-surface border-b border-outline-variant/15">
          
          {/* Parallax Background - Technical Architectural Perspective SVG */}
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
          >
            <svg className="w-full h-full text-secondary/35 stroke-current stroke-[1.2] fill-none opacity-85" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="sunlight-beams-turnkey" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.09" />
                  <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.03" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Sunlight beams */}
              <polygon points="0,0 300,0 700,600 300,600" fill="url(#sunlight-beams-turnkey)" className="stroke-none" />
              
              {/* Turnkey Spatial Lifecycle Mapping Outline */}
              <rect x="150" y="80" width="700" height="440" className="stroke-outline/45 fill-primary/[0.002]" />
              <circle cx="500" cy="300" r="180" className="stroke-primary/10 stroke-dasharray-[4_6]" />
              
              {/* Concept-to-completion isometric pavilion perspective wireframe */}
              {/* Roof plane */}
              <polygon points="380,180 620,180 720,230 480,230" className="stroke-primary/45 fill-primary/[0.02]" />
              
              {/* Supporting Travertine monolithic block outline */}
              <rect x="420" y="230" width="40" height="190" className="stroke-outline/40 fill-surface/40" />
              <rect x="660" y="230" width="40" height="190" className="stroke-outline/40 fill-surface/40" />
              
              {/* Floor plane */}
              <polygon points="350,420 590,420 690,470 450,470" className="stroke-outline/35" />
              
              {/* Technical annotations and axis */}
              <line x1="500" y1="0" x2="500" y2="600" className="stroke-primary/20 stroke-dasharray-[2_4]" />
              <text x="165" y="45" textAnchor="start" className="font-sans text-[7.5px] fill-secondary/65 font-bold uppercase tracking-[0.25em]">BOULDSPACE UNIFIED LIFECYCLE</text>
              <text x="835" y="45" textAnchor="end" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-[0.25em]">COMMAND FLOW: TK-08</text>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </motion.div>

          {/* Warm spotlights */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[130px] pointer-events-none z-10" />

          {/* Blueprint grid accent */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid z-10" />
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-outline/5 pointer-events-none z-10" />
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-outline/5 pointer-events-none z-10" />
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-outline/5 pointer-events-none z-10" />
          <div className="absolute top-0 left-3/4 w-[1px] h-full bg-outline/5 pointer-events-none z-10" />

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
                End-To-End Luxury
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="font-serif text-[48px] sm:text-[68px] md:text-[84px] leading-[1.05] tracking-tight font-normal text-on-surface max-w-3xl"
              >
                From Vision To Reality <br />
                — Seamlessly Delivered.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-secondary max-w-2xl font-normal"
              >
                Integrated turnkey solutions crafted to manage architecture, planning, interiors, execution, coordination, and delivery through one unified experience.
              </motion.p>

              <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button variant="primary" showArrow={true} href="/contact?ref=turnkey-hero">
                  Start Your Project
                </Button>
                <Button variant="secondary" showArrow={false} href="#philosophies">
                  Schedule Consultation
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating coordinate anchors */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 left-8 md:left-16 z-20 font-sans text-[9px] tracking-[0.25em] uppercase text-secondary/60 hidden sm:flex flex-col gap-1.5 select-none pointer-events-none"
          >
            <span className="text-primary font-bold">Absolute Ownership</span>
            <span>BOULDSPACE PROTOCOL TK-08</span>
            <span>INDEX // TURNKEY SYSTEMS</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 right-8 md:right-16 z-20 font-sans text-[9px] tracking-[0.25em] uppercase text-secondary/60 text-right hidden sm:flex flex-col gap-1.5 select-none pointer-events-none"
          >
            <span className="text-primary font-bold">Direct Handover</span>
            <span>08 CHAPTERS // 07 STAGES</span>
            <span>TOLERANCES: &lt; 0.20MM SCALE</span>
          </motion.div>
        </section>

        {/* ========================================
            2. TURNKEY PHILOSOPHY SECTION
            ======================================== */}
        <section id="philosophies" className="py-32 bg-surface relative z-10 border-b border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Asymmetrical Editorial Heading */}
              <div className="lg:col-span-5 space-y-6">
                <FadeIn direction="right" duration={0.8} className="space-y-4">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 px-3 py-1 rounded inline-block">
                    01 // The Architecture of Coordination
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[46px] leading-tight text-on-surface font-normal">
                    Single-Point accountability. Absolute peace.
                  </h2>
                </FadeIn>
              </div>

              {/* Right Column: Narrative Storytelling */}
              <div className="lg:col-span-7 font-sans text-[16px] leading-relaxed text-secondary space-y-6 border-l border-outline-variant/25 pl-6 lg:pl-12">
                <FadeIn direction="left" delay={0.15} duration={0.8} className="space-y-6">
                  <p>
                    Turnkey construction is traditionally fragmented—fractured between disjointed designers, conflicting contractors, and delayed material shipping lines. Bouldspace consolidates this process into a single-point gateway. We take 100% ownership of your spatial journey, aligning architectural foundations and bespoke interior dressing under one unified control register.
                  </p>
                  <p>
                    By staging precious travertine slabs, auditing tenon carpentry tolerances, supervising masonry casting, and managing municipal paperwork in-house, Bouldspace guarantees zero-friction spatial delivery. Luxury is not just in the material; it is in a flawlessly coordinated execution.
                  </p>
                </FadeIn>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================
            3. END-TO-END EXPERIENCE SHOWCASE
            ======================================== */}
        <section className="py-32 bg-surface relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  THE SPATIAL CHRONICLE
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  End-to-End Visual Chapters
                </h2>
              </FadeIn>
            </div>

            {/* Alternating Asymmetrical Chapters Showcase */}
            <div className="space-y-36">
              {turnkeyChapters.map((chapter, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={chapter.title}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
                  >
                    {/* Left Column: Text (Even) or SVG (Odd) */}
                    <div className={`lg:col-span-5 space-y-8 ${isEven ? "order-1" : "order-1 lg:order-2"}`}>
                      <FadeIn direction={isEven ? "right" : "left"} duration={0.8} className="space-y-6">
                        <div className="flex justify-between items-start">
                          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                            {chapter.subtitle}
                          </span>
                          <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-outline bg-surface-container px-2 py-0.5 rounded">
                            {chapter.metric}
                          </span>
                        </div>

                        <div className="space-y-1">
                          <h3 className="font-serif text-[30px] sm:text-[36px] leading-tight text-on-surface font-normal">
                            {chapter.title}
                          </h3>
                        </div>

                        <p className="font-sans text-[15px] leading-relaxed text-secondary">
                          {chapter.desc}
                        </p>

                        <ul className="space-y-2.5 font-sans text-[13px] text-secondary border-t border-outline-variant/20 pt-4">
                          {chapter.details.map((det, didx) => (
                            <li key={didx} className="flex items-center gap-2.5">
                              <Check className="h-4 w-4 text-primary shrink-0" />
                              <span>{det}</span>
                            </li>
                          ))}
                        </ul>
                      </FadeIn>
                    </div>

                    {/* Right Column: SVG (Even) or Text (Odd) */}
                    <div className={`lg:col-span-7 ${isEven ? "order-2" : "order-2 lg:order-1"}`}>
                      <FadeIn direction={isEven ? "left" : "right"} duration={1.0}>
                        <div className="relative aspect-[16/10] w-full rounded border border-outline-variant/30 bg-surface-container p-6 sm:p-8 flex flex-col justify-between font-sans shadow-elevated overflow-hidden group select-none">
                          <div className="absolute inset-0 opacity-[0.08] blueprint-grid pointer-events-none" />
                          <div className="absolute inset-4 border border-outline/5 pointer-events-none" />
                          
                          <div className="flex justify-between items-start text-[9px] tracking-widest text-outline uppercase font-bold relative z-10">
                            <span>TURNKEY EXECUTION // CHAPTER-0{idx + 1}</span>
                            <span className="text-primary">[DIRECT CHANNELS]</span>
                          </div>

                          <div className="relative w-full h-full my-auto flex items-center justify-center py-4">
                            {chapter.svg}
                          </div>

                          <div className="flex justify-between text-[9px] tracking-wider text-secondary/60 border-t border-outline-variant/20 pt-4 font-semibold uppercase relative z-10">
                            <span>STAGE: SECURE RELEASE</span>
                            <span>BOULDSPACE PROTOCOL</span>
                          </div>
                        </div>
                      </FadeIn>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================
            4. SEAMLESS EXECUTION EXPERIENCE
            ======================================== */}
        <section className="py-32 bg-surface-container border-t border-b border-outline-variant/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none blueprint-grid" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-24">
              <div className="lg:col-span-6">
                <FadeIn direction="right" duration={0.8} className="space-y-4">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                    Unified Command
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[46px] leading-tight text-on-surface font-normal">
                    Complex execution, simplified beautifully.
                  </h2>
                </FadeIn>
              </div>
              <div className="lg:col-span-6">
                <FadeIn direction="left" delay={0.15} duration={0.8} className="space-y-4">
                  <p className="text-[15.5px] leading-relaxed text-secondary">
                    "Luxury is seamless coordination." We schedule all engineering tasks, subcontractor releases, and stone finishes procurement stage matrices under a singular integrated calendar schedule.
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Overlapping Timeline flow illustration SVG */}
            <FadeIn direction="up" duration={1.0}>
              <div className="relative w-full rounded border border-outline-variant/30 bg-surface-container-lowest p-6 sm:p-10 shadow-elevated select-none overflow-hidden mb-12">
                <div className="absolute inset-0 opacity-[0.05] blueprint-grid pointer-events-none" />
                
                <div className="flex justify-between items-start text-[9px] tracking-widest text-outline uppercase font-bold relative z-10 border-b border-outline-variant/20 pb-4 mb-6">
                  <span>UNIFIED SCHEDULING INTERACTION // TK-FLOW-90</span>
                  <span className="text-primary">[OVERLAPPING CRITICAL-PATH STAGE TRACKER]</span>
                </div>

                <div className="w-full overflow-x-auto">
                  <svg className="w-full min-w-[700px] h-[220px] text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 600 220">
                    {/* Time ticks header */}
                    <line x1="50" y1="30" x2="550" y2="30" className="stroke-outline/35" />
                    <text x="50" y="20" className="font-sans text-[7px] fill-secondary font-bold">MONTH 01</text>
                    <text x="175" y="20" className="font-sans text-[7px] fill-secondary font-bold">MONTH 03</text>
                    <text x="300" y="20" className="font-sans text-[7px] fill-secondary font-bold">MONTH 06</text>
                    <text x="425" y="20" className="font-sans text-[7px] fill-secondary font-bold">MONTH 09</text>
                    <text x="550" y="20" className="font-sans text-[7px] fill-secondary font-bold">MONTH 12</text>
                    
                    {/* Phase 01 bar */}
                    <rect x="50" y="45" width="150" height="25" rx="1.5" className="stroke-primary/45 fill-primary/5" />
                    <text x="60" y="60" className="font-sans text-[7px] fill-primary font-bold">PHASE 01: ARCHITECTURE PLANNING</text>
                    
                    {/* Phase 02 bar */}
                    <rect x="150" y="80" width="180" height="25" rx="1.5" className="stroke-outline/45 fill-outline/5" />
                    <text x="160" y="95" className="font-sans text-[7px] fill-outline font-bold">PHASE 02: PROCUREMENT & QUARRY SELECTIONS</text>
                    
                    {/* Phase 03 bar */}
                    <rect x="270" y="115" width="200" height="25" rx="1.5" className="stroke-outline/45 fill-outline/5" />
                    <text x="280" y="130" className="font-sans text-[7px] fill-outline font-bold">PHASE 03: CIVIL MASONRY & MEP JACKETS</text>
                    
                    {/* Phase 04 bar */}
                    <rect x="420" y="150" width="130" height="25" rx="1.5" className="stroke-primary/45 fill-primary/5" />
                    <text x="430" y="165" className="font-sans text-[7px] fill-primary font-bold">PHASE 04: STYLING & HANDOVER</text>
                    
                    {/* Connector amber arrows showing dependancies */}
                    <path d="M 125,70 L 125,92.5 L 150,92.5" className="stroke-primary" />
                    <path d="M 240,105 L 240,127.5 L 270,127.5" className="stroke-primary" />
                    <path d="M 370,140 L 370,162.5 L 420,162.5" className="stroke-primary" />
                  </svg>
                </div>
              </div>
            </FadeIn>

          </div>
        </section>

        {/* ========================================
            5. TURNKEY PROCESS EXPERIENCE
            ======================================== */}
        <section className="py-32 bg-surface relative z-10 border-b border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  THE SPATIAL LIFECYCLE
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Our Turnkey Process Journey
                </h2>
              </FadeIn>
            </div>

            {/* Process Chronology Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 relative">
              {/* Connector line for desktop layout */}
              <div className="hidden lg:block absolute top-[50px] left-[5%] right-[5%] h-[1px] bg-outline-variant/20 z-0" />
              
              {processSteps.map((step, idx) => (
                <FadeIn
                  key={idx}
                  direction="up"
                  delay={idx * 0.05}
                  duration={0.8}
                  className="z-10 h-full"
                >
                  <div className="bg-surface-container-lowest p-6 rounded border border-outline-variant/25 shadow-elevated h-full flex flex-col justify-between gap-6">
                    <div className="flex justify-between items-center">
                      <span className="font-serif text-[24px] text-primary/30 font-bold leading-none">{step.step}</span>
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-serif text-[15px] text-on-surface font-semibold leading-tight">{step.title}</h4>
                      <p className="text-secondary text-[12px] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================
            6. FEATURED TURNKEY PROJECTS
            ======================================== */}
        <section className="py-32 bg-surface relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  COMPLETED MONOGRAPHS
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Featured Turnkey Projects
                </h2>
              </FadeIn>
            </div>

            {/* Asymmetric Portfolio Grids */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {turnkeyProjects.map((space, idx) => (
                <FadeIn
                  key={idx}
                  direction="up"
                  delay={idx * 0.08}
                  duration={0.8}
                >
                  <div className="rounded border border-outline-variant/20 bg-surface-container-lowest p-8 flex flex-col justify-between shadow-elevated hover:border-primary/45 transition-all duration-300 group h-full">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-outline">PROJECT 0{idx+1}</span>
                        <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2.5 py-0.5 rounded">{space.type}</span>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-serif text-[24px] text-on-surface font-normal group-hover:text-primary transition-colors duration-300 leading-tight">
                          {space.name}
                        </h3>
                        <span className="font-sans text-[10.5px] font-semibold text-secondary/65 uppercase tracking-widest block">{space.sector}</span>
                      </div>
                      
                      <p className="font-sans text-[14px] leading-relaxed text-secondary border-t border-outline-variant/20 pt-4">
                        <span className="font-bold text-on-surface text-[11px] block uppercase tracking-wider mb-1">Scope details</span>
                        {space.scope}
                      </p>
                    </div>

                    <div className="border-t border-outline-variant/20 pt-6 mt-8 flex justify-between items-center text-[10px] font-sans font-bold uppercase tracking-widest text-outline group-hover:text-primary transition-colors duration-300">
                      <span>LOCATION</span>
                      <span>{space.location}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================
            7. WHY BOULDSPACE TURNKEY
            ======================================== */}
        <section className="py-32 bg-surface relative z-10 border-t border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  STUDIO ADVANTAGES
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Why Bouldspace Turnkey
                </h2>
              </FadeIn>
            </div>

            {/* Differentiators Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
              {turnkeyWhy.map((diff, idx) => (
                <FadeIn
                  key={idx}
                  direction="up"
                  delay={idx * 0.05}
                  duration={0.6}
                >
                  <div className="bg-surface-container-lowest p-6 rounded border border-outline-variant/20 shadow-elevated h-full flex flex-col justify-between">
                    <div className="space-y-4">
                      <h4 className="font-serif text-[18px] text-on-surface font-semibold">{diff.title}</h4>
                      <p className="text-secondary text-[12.5px] leading-relaxed">{diff.desc}</p>
                    </div>
                    <span className="font-sans text-[9px] font-bold tracking-widest text-primary/30 uppercase mt-4">ADVANTAGE // TK-{idx+1}</span>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================
            8. CLIENT EXPERIENCE SECTION
            ======================================== */}
        <section className="py-32 bg-surface relative z-10 border-t border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Asymmetrical Editorial Heading */}
              <div className="lg:col-span-5 space-y-6">
                <FadeIn direction="right" duration={0.8} className="space-y-4">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 px-3 py-1 rounded inline-block">
                    02 // Reassuring Excellence
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[46px] leading-tight text-on-surface font-normal">
                    Frictionless spatial delivery.
                  </h2>
                </FadeIn>
              </div>

              {/* Right Column: Trust and Comfort Narrative */}
              <div className="lg:col-span-7 font-sans text-[16px] leading-relaxed text-secondary space-y-6 border-l border-outline-variant/25 pl-6 lg:pl-12">
                <FadeIn direction="left" delay={0.15} duration={0.8} className="space-y-6">
                  <p>
                    Building high-end residential pethouses or boutique corporate lounges shouldn't be stressful. We handle everything—coordinating vendor quotes, selecting and packing structural columns, checking moisture balances, and managing site safety scaffolding setups.
                  </p>
                  <p>
                    With Bouldspace as your single-point turnkey executor, your spatial transformation remains transparent, predictable, and stress-free. Every key milestone is certified, and weekly command logs protect your budget and timeline peace completely.
                  </p>
                </FadeIn>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================
            9. TURNKEY METRICS & PERFORMANCE
            ======================================== */}
        <section className="py-32 bg-[#1e1b18] text-[#fbefe5] border-t border-b border-outline-variant/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none blueprint-grid" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 font-sans text-center">
              
              <FadeIn direction="up" delay={0.05} duration={0.8} className="space-y-2">
                <span className="font-serif text-[42px] sm:text-[56px] leading-none text-surface-bright font-bold block">100%</span>
                <span className="text-[10px] text-[#cdc5c0] uppercase tracking-widest font-semibold block">Turnkey Accountability</span>
              </FadeIn>

              <FadeIn direction="up" delay={0.15} duration={0.8} className="space-y-2">
                <span className="font-serif text-[42px] sm:text-[56px] leading-none text-surface-bright font-bold block">10-Year</span>
                <span className="text-[10px] text-[#cdc5c0] uppercase tracking-widest font-semibold block">Structural Warranty</span>
              </FadeIn>

              <FadeIn direction="up" delay={0.25} duration={0.8} className="space-y-2">
                <span className="font-serif text-[42px] sm:text-[56px] leading-none text-surface-bright font-bold block">0%</span>
                <span className="text-[10px] text-[#cdc5c0] uppercase tracking-widest font-semibold block">Coordination Friction</span>
              </FadeIn>

              <FadeIn direction="up" delay={0.35} duration={0.8} className="space-y-2">
                <span className="font-serif text-[42px] sm:text-[56px] leading-none text-surface-bright font-bold block">100%</span>
                <span className="text-[10px] text-[#cdc5c0] uppercase tracking-widest font-semibold block">Clash-Free MEP System</span>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* ========================================
            10. FINAL CINEMATIC CTA
            ======================================== */}
        <section className="py-28 bg-surface-container text-on-surface text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none blueprint-grid" />
          
          <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 space-y-8 flex flex-col items-center">
            <FadeIn direction="up" duration={0.8}>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full">
                Studio Scoping
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1} duration={0.8}>
              <h2 className="font-serif text-[42px] sm:text-[56px] leading-tight text-on-surface font-normal max-w-3xl">
                One Vision. One Team. One Seamless Experience.
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} duration={0.8}>
              <p className="font-sans text-[16px] sm:text-[18px] leading-relaxed text-secondary max-w-xl">
                Partner with Bouldspace for turnkey solutions that transform complex projects into beautifully executed realities.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.8} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="primary" showArrow={true} href="/contact?ref=turnkey-cta-start">
                Begin Your Project
              </Button>
              <Button variant="secondary" showArrow={false} href="/contact?ref=turnkey-cta-talk">
                Schedule Consultation
              </Button>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
