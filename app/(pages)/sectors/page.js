"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Home, 
  Building, 
  Landmark, 
  Globe, 
  Check, 
  ArrowRight,
  ChevronDown
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

export default function SectorsPage() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const [activeSector, setActiveSector] = useState(0);
  
  // Parallax backdrop
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

  // 7 Unique Sector Monograph Datasets
  const sectorsData = [
    {
      id: "01",
      name: "Hospitality",
      tagline: "Atmospheric luxury, elegant lobbies, & immersive lounge spaces.",
      desc: "Composing luxury hotels, grand resorts, atmospheric restaurants, and bespoke reception lounges. We blend warm low-glare lighting beams, monolithic curved countertops, and draped organic plaster textures to define globally elite hospitality environments.",
      commission: "The Obsidian Lounge & Recevoir Shell",
      location: "Hospitality Hub, Bengaluru",
      services: ["Atmospheric low-glare lighting layout", "Cast monolithic limestone counters", "Sensory acoustics & plaster ribs"],
      svg: (
        <svg className="w-11/12 h-11/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          <rect x="50" y="40" width="300" height="150" className="stroke-outline/35" />
          <path d="M 120,160 Q 200,140 280,160" className="stroke-primary/45 stroke-[1.2] fill-primary/5" />
          <line x1="120" y1="160" x2="120" y2="180" className="stroke-primary/30" />
          <line x1="280" y1="160" x2="280" y2="180" className="stroke-primary/30" />
          <circle cx="200" cy="90" r="35" className="stroke-outline/25 stroke-dasharray-[2_4]" />
          <circle cx="200" cy="90" r="15" className="stroke-primary/20" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">GRAND LOBBY RECEVOIR GRID // HP-01</text>
        </svg>
      )
    },
    {
      id: "02",
      name: "Residential",
      tagline: "Timeless villas, premium apartments, & lifestyle estates.",
      desc: "Constructing luxury villas, high-rise penthouses, premium apartments, and customized living layouts. We prioritize warm spatial envelopes, daylight penetration coordinates, wind-path alignments, and 10-Year structural integrity standards.",
      commission: "Skypark Villa Duplex Heights",
      location: "Golf Course Road, Gurugram",
      services: ["Cozy daylight-optimized mapping", "Cantilevered wide-span spatial elevations", "Integrated MEP and damp-proofing shells"],
      svg: (
        <svg className="w-11/12 h-11/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          <line x1="50" y1="180" x2="350" y2="180" className="stroke-outline/65" />
          <line x1="50" y1="110" x2="350" y2="110" className="stroke-outline/35" />
          <line x1="50" y1="50" x2="350" y2="50" className="stroke-outline/25 stroke-dasharray-[2_4]" />
          <path d="M 60,180 L 150,110 L 250,110 L 340,180" className="stroke-primary/45" />
          <path d="M 120,110 L 200,50 L 280,110" className="stroke-primary/35" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">RESIDENCE DUPLEX STRUCTURAL ELEVATION // RS-02</text>
        </svg>
      )
    },
    {
      id: "03",
      name: "Commercial",
      tagline: "Modern, intelligent corporate hubs & mixed-use masterplans.",
      desc: "Designing sophisticated corporate offices, high-performance retail layouts, and mixed-use spatial masterworks. We build structural layouts around wide-span glass divisions, smart MEP track matrices, low-maintenance indigenous planter plots, and clash-free layouts.",
      commission: "Hotel Clarks Premier Corporate Shell",
      location: "Corporate Hub, Bengaluru",
      services: ["Acoustic wide glass divisions plans", "High-volume public circulation grids", "Smart ceiling track light systems"],
      svg: (
        <svg className="w-11/12 h-11/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          <rect x="60" y="40" width="280" height="150" className="stroke-outline/45" />
          <line x1="160" y1="40" x2="160" y2="190" className="stroke-primary/45 stroke-[1.2]" />
          <line x1="260" y1="40" x2="260" y2="190" className="stroke-primary/45 stroke-[1.2]" />
          <rect x="80" y="70" width="60" height="40" rx="1.5" className="stroke-outline/25" />
          <rect x="180" y="70" width="60" height="40" rx="1.5" className="stroke-outline/25" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">EXECUTIVE OFFICE GLASS SCHEME // CS-03</text>
        </svg>
      )
    },
    {
      id: "04",
      name: "Industrial",
      tagline: "Powerful structural precision & large-scale facilities.",
      desc: "Directing large-scale industrial facilities, warehouses, high-capacity staging logistics plots, and manufacturing spaces. We employ carbon-fiber column reinforcing wraps, wide-span masonry support beams, and strict heavy concrete core audits.",
      commission: "Precast Columns Jacketing Staging",
      location: "Industrial Center, Chennai",
      services: ["Heavy concrete load-bearing tests", "Carbon-fiber column reinforcing jacket wraps", "Wide-span masonry clearance planning"],
      svg: (
        <svg className="w-11/12 h-11/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          <path d="M 50,100 Q 200,108 350,100" className="stroke-primary/45 stroke-dasharray-[2_4]" />
          <path d="M 50,100 Q 200,100 350,100" className="stroke-outline/45" />
          <rect x="70" y="100" width="30" height="90" className="stroke-outline/35" />
          <rect x="300" y="100" width="30" height="90" className="stroke-outline/35" />
          <rect x="165" y="100" width="70" height="90" className="stroke-primary/35 fill-primary/[0.003]" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">COLUMN DEFLECTION STRUCTURE // ID-04</text>
        </svg>
      )
    },
    {
      id: "05",
      name: "Institutional",
      tagline: "Educational environments & community masterplanning.",
      desc: "Structuring academic campuses, public educational environments, community infrastructures, and healthcare facilities. We balance high-volume public zoning laws, solar path wind optimizations, and double-height concrete lobby clearance bounds.",
      commission: "Hotel Ortus Entrance Masterplan",
      location: "Education District, Gurugram",
      services: ["High-volume municipal heights zoning reviews", "Educational masterplan clearance blueprints", "Clean sustainable wind & solar orientations"],
      svg: (
        <svg className="w-11/12 h-11/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          <circle cx="200" cy="110" r="65" className="stroke-outline/45" />
          <circle cx="200" cy="110" r="35" className="stroke-primary/35 stroke-dasharray-[2_4]" />
          <line x1="135" y1="110" x2="265" y2="110" className="stroke-outline/25" />
          <line x1="200" y1="45" x2="200" y2="175" className="stroke-outline/25" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">CAMPUS RADIAL MASTERPLAN LAYOUT // IS-05</text>
        </svg>
      )
    },
    {
      id: "06",
      name: "Official Spaces",
      tagline: "Executive administrative chambers & corporate administrative grids.",
      desc: "Directing prestigious government offices, corporate administration chambers, and leadership environments requiring executive dark-light contrasts, heavy oak timber acoustic splits, and absolute security clearances coordinates.",
      commission: "Executive Briefing Chamber",
      location: "Corporate Hub, Bengaluru",
      services: ["Heavy solid wood acoustic panellings", "High-security layout clearance reviews", "Prestigious executive texture staging"],
      svg: (
        <svg className="w-11/12 h-11/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          <ellipse cx="200" cy="110" rx="80" ry="40" className="stroke-primary/45 fill-primary/[0.003]" />
          <ellipse cx="200" cy="110" rx="40" ry="20" className="stroke-outline/25 stroke-dasharray-[2_4]" />
          <circle cx="120" cy="110" r="5" className="stroke-outline/35" />
          <circle cx="280" cy="110" r="5" className="stroke-outline/35" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">BRIEFING CHAMBER SEATING NODES // OS-06</text>
        </svg>
      )
    },
    {
      id: "07",
      name: "High-End Residences",
      tagline: "Ultra-luxury custom villas, penthouses, & spatial dressings.",
      desc: "Our signature spatial monograph feature. Sourcing raw travertine slabs directly from global quarries, designing double-height volumetric curved boucle layouts, staging custom solid oak table structures, and dressing spaces to museum catalogs level.",
      commission: "The Travertine Observation Pavilion",
      location: "Golf Course Road, Gurugram",
      services: ["Monolithic hand-brushed travertine claddings", "Custom wood tenon joint configurations", "Atmospheric spatial dressings Curation"],
      svg: (
        <svg className="w-11/12 h-11/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          <rect x="80" y="50" width="240" height="130" className="stroke-outline/45" />
          <line x1="160" y1="50" x2="160" y2="180" className="stroke-primary/45 stroke-[1.2]" />
          <line x1="240" y1="50" x2="240" y2="180" className="stroke-primary/45 stroke-[1.2]" />
          <circle cx="160" cy="115" r="8" className="stroke-primary/30" />
          <circle cx="240" cy="115" r="8" className="stroke-primary/30" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">TRAVERTINE STONE SLAB JOINTS ASSEMBLY // HR-07</text>
        </svg>
      )
    }
  ];

  return (
    <>
      <Header />
      <main ref={containerRef} className="flex-grow bg-surface overflow-hidden">
        
        {/* ========================================
            1. CINEMATIC HERO SECTION
            ======================================== */}
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-36 pb-24 overflow-hidden bg-surface text-on-surface border-b border-outline-variant/15">
          
          {/* Parallax Background - Multi-Industry Axis Grid SVG */}
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
          >
            <svg className="w-full h-full text-secondary/35 stroke-current stroke-[1.2] fill-none opacity-85" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="sunlight-beams-sectors" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.08" />
                  <stop offset="60%" stopColor="var(--color-primary)" stopOpacity="0.02" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Sunlight beams */}
              <polygon points="0,0 250,0 650,600 250,600" fill="url(#sunlight-beams-sectors)" className="stroke-none" />
              
              {/* Circular sector plots */}
              <rect x="180" y="80" width="640" height="440" className="stroke-outline/45 fill-primary/[0.002]" />
              <circle cx="500" cy="300" r="180" className="stroke-primary/15 stroke-dasharray-[4_6]" />
              <circle cx="500" cy="300" r="110" className="stroke-outline/25" />
              
              {/* Intersecting sector quadrant dividers */}
              <line x1="500" y1="0" x2="500" y2="600" className="stroke-primary/20 stroke-dasharray-[2_4]" />
              <line x1="0" y1="300" x2="1000" y2="300" className="stroke-primary/20 stroke-dasharray-[2_4]" />
              
              <line x1="320" y1="120" x2="680" y2="480" className="stroke-outline/25" />
              <line x1="680" y1="120" x2="320" y2="480" className="stroke-outline/25" />
              
              {/* Coordinate anchors */}
              <text x="195" y="45" textAnchor="start" className="font-sans text-[7.5px] fill-secondary/65 font-bold uppercase tracking-[0.25em]">BOULDSPACE MULTI-SECTOR AXIS</text>
              <text x="805" y="45" textAnchor="end" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-[0.25em]">SECTOR REGISTER: SC-07</text>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </motion.div>

          {/* Warm spotlight */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[135px] pointer-events-none z-10" />

          {/* Blueprint grid overlays */}
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
                Global Capabilities
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="font-serif text-[48px] sm:text-[68px] md:text-[84px] leading-[1.05] tracking-tight font-normal text-on-surface max-w-4xl"
              >
                Designing Across Industries. <br />
                Delivering Beyond Expectations.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-secondary max-w-2xl font-normal"
              >
                From luxury residences to large-scale commercial and institutional environments, Bouldspace delivers integrated architectural and execution solutions tailored to every sector.
              </motion.p>

              <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button variant="primary" showArrow={true} href="/services">
                  Explore Services
                </Button>
                <Button variant="secondary" showArrow={false} href="#philosophies">
                  Discuss Your Project
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
            <span className="text-primary font-bold">Multi-Industry Focus</span>
            <span>BOULDSPACE PROTOCOL SC-07</span>
            <span>INDEX // MULTI-SECTORS</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 right-8 md:right-16 z-20 font-sans text-[9px] tracking-[0.25em] uppercase text-secondary/60 text-right hidden sm:flex flex-col gap-1.5 select-none pointer-events-none"
          >
            <span className="text-primary font-bold">Execution Context</span>
            <span>07 SECTORS // SPECIALIZED</span>
            <span>COORD GRIDS // CAPABILITIES</span>
          </motion.div>
        </section>

        {/* ========================================
            2. SECTORS PHILOSOPHY & VISION
            ======================================== */}
        <section id="philosophies" className="py-32 bg-surface relative z-10 border-b border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Asymmetrical Editorial Heading */}
              <div className="lg:col-span-6 space-y-6">
                <FadeIn direction="right" duration={0.8} className="space-y-4">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 px-3 py-1 rounded inline-block">
                    01 // The Architecture of Adaptability
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[46px] leading-tight text-on-surface font-normal">
                    “Every sector demands its own language. Execution evolves with context.”
                  </h2>
                </FadeIn>
              </div>

              {/* Right Column: Narrative Storytelling */}
              <div className="lg:col-span-6 font-sans text-[16px] leading-relaxed text-secondary space-y-6 border-l border-outline-variant/25 pl-6 lg:pl-12">
                <FadeIn direction="left" delay={0.15} duration={0.8} className="space-y-6">
                  <p>
                    A luxury resort demands high atmospheric lighting and rich sensory textures. An industrial warehouse demands heavy structural rebar loading wraps and clearance predictability. An executive official building demands a balance of dark-light contrasts and authoritative textures.
                  </p>
                  <p>
                    We do not build generic templates. Bouldspace studies the mechanical, functional, and emotional coordinates of every environment in-depth, tailoring custom CAD blueprints and direct procurement supply chain staging matrices contextually. 
                  </p>
                </FadeIn>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================
            3. CORE SPATIAL MONOGRAPH EXHIBITION (Redesigned)
            ======================================== */}
        <section className="py-32 bg-surface relative z-10 border-b border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  THE SECTOR MONOGRAPHS
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Interactive Spatial Exhibition
                </h2>
              </FadeIn>
            </div>

            {/* Desktop Layout: Sticky Splits-Screen Exhibition Panel */}
            <div className="hidden lg:grid grid-cols-12 gap-16 items-start relative min-h-[75vh]">
              
              {/* Left Side: Sticky Visual & Data Detail Panel (6 Columns) */}
              <div className="col-span-6 sticky top-32 h-[75vh] flex flex-col justify-between p-8 rounded border border-outline-variant/30 bg-surface-container shadow-elevated select-none overflow-hidden">
                <div className="absolute inset-0 opacity-10 blueprint-grid pointer-events-none" />
                <div className="absolute inset-4 border border-outline/5 pointer-events-none" />
                
                {/* Header coordinates */}
                <div className="flex justify-between items-start text-[9px] tracking-widest text-outline uppercase font-bold relative z-10">
                  <span>EXHIBITION MODULE // SC-{sectorsData[activeSector].id}</span>
                  <span className="text-primary">[STANDALONE SECTOR SPEC]</span>
                </div>

                {/* Animated CAD Visual Panel */}
                <div className="relative w-full h-[32vh] flex items-center justify-center py-4 z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSector}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      {sectorsData[activeSector].svg}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Animated Editorial Details */}
                <div className="relative z-10 border-t border-outline-variant/20 pt-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSector}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-4"
                    >
                      <div className="space-y-1">
                        <span className="font-sans text-[11px] font-bold text-primary uppercase tracking-[0.25em]">
                          Active Chapter Details
                        </span>
                        <h4 className="font-serif text-[24px] text-on-surface leading-tight font-normal">
                          {sectorsData[activeSector].tagline}
                        </h4>
                      </div>
                      <p className="font-sans text-[13.5px] leading-relaxed text-secondary">
                        {sectorsData[activeSector].desc}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 text-[12px] font-sans pt-2 border-t border-outline-variant/10">
                        <div>
                          <span className="font-bold uppercase tracking-wider text-outline block text-[9px]">Signature Commission</span>
                          <span className="text-primary font-semibold block mt-0.5">{sectorsData[activeSector].commission}</span>
                          <span className="text-secondary/70 text-[10px] block">{sectorsData[activeSector].location}</span>
                        </div>
                        <div>
                          <span className="font-bold uppercase tracking-wider text-outline block text-[9px]">Services Delivered</span>
                          <ul className="space-y-1 mt-1 text-[11.5px] text-secondary">
                            {sectorsData[activeSector].services.map((ser, sidx) => (
                              <li key={sidx} className="flex items-center gap-1.5">
                                <Check className="h-3 w-3 text-primary shrink-0" />
                                <span>{ser}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Side: Oversized Typographic Selector Index List (6 Columns) */}
              <div className="col-span-6 flex flex-col gap-6 py-4">
                {sectorsData.map((sector, idx) => {
                  const isSelected = activeSector === idx;
                  return (
                    <div
                      key={sector.id}
                      onMouseEnter={() => setActiveSector(idx)}
                      onClick={() => setActiveSector(idx)}
                      className="group cursor-pointer border-b border-outline-variant/15 pb-6 transition-all duration-300 relative"
                    >
                      <div className="flex gap-8 items-baseline">
                        <span className={`font-sans text-[15px] font-bold tracking-widest transition-colors duration-300 ${
                          isSelected ? "text-primary" : "text-outline/40"
                        }`}>
                          {sector.id}
                        </span>
                        <h3 className={`font-serif text-[32px] sm:text-[44px] leading-tight font-normal transition-all duration-300 ${
                          isSelected ? "text-primary pl-4" : "text-on-surface hover:text-primary hover:pl-2"
                        }`}>
                          {sector.name}
                        </h3>
                      </div>
                      
                      {/* Spring Underline Indicator */}
                      <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-transparent overflow-hidden">
                        {isSelected && (
                          <motion.div
                            layoutId="sectors-selector-indicator"
                            className="w-full h-full bg-primary"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Mobile Layout: Responsive Collapsible Accordion Cards List */}
            <div className="lg:hidden flex flex-col gap-6">
              {sectorsData.map((sector, idx) => {
                const isSelected = activeSector === idx;
                return (
                  <div
                    key={sector.id}
                    className="border border-outline-variant/25 rounded bg-surface-container-lowest overflow-hidden shadow-elevated"
                  >
                    {/* Collapsible Accordion Trigger */}
                    <button
                      onClick={() => setActiveSector(isSelected ? -1 : idx)}
                      className="flex justify-between items-center w-full p-6 text-left focus:outline-none cursor-pointer"
                    >
                      <div className="flex gap-4 items-baseline">
                        <span className="font-sans text-[12px] font-bold text-primary">{sector.id}</span>
                        <h3 className="font-serif text-[24px] text-on-surface font-normal leading-none">{sector.name}</h3>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-secondary transition-transform duration-300 ${
                          isSelected ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>

                    {/* Collapsible Card Details */}
                    <AnimatePresence initial={false}>
                      {isSelected && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 border-t border-outline-variant/20 space-y-6">
                            {/* CAD vector overlay */}
                            <div className="relative aspect-[16/10] w-full rounded border border-outline-variant/30 bg-surface p-4 flex items-center justify-center overflow-hidden">
                              <div className="absolute inset-0 opacity-10 blueprint-grid pointer-events-none" />
                              {sector.svg}
                            </div>
                            
                            <div className="space-y-4">
                              <h4 className="font-serif text-[18px] text-on-surface font-normal leading-tight">
                                {sector.tagline}
                              </h4>
                              <p className="font-sans text-[13px] leading-relaxed text-secondary">
                                {sector.desc}
                              </p>
                              
                              <div className="space-y-4 text-[12px] font-sans pt-4 border-t border-outline-variant/10">
                                <div>
                                  <span className="font-bold uppercase tracking-wider text-outline block text-[9px]">Signature Commission</span>
                                  <span className="text-primary font-semibold block mt-0.5">{sector.commission}</span>
                                  <span className="text-secondary/70 text-[10px] block">{sector.location}</span>
                                </div>
                                <div>
                                  <span className="font-bold uppercase tracking-wider text-outline block text-[9px]">Services Delivered</span>
                                  <ul className="space-y-1.5 mt-1.5 text-[11.5px] text-secondary">
                                    {sector.services.map((ser, sidx) => (
                                      <li key={sidx} className="flex items-center gap-1.5">
                                        <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                                        <span>{ser}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================
            10. CROSS-SECTOR EXPERTISE SECTION
            ======================================== */}
        <section className="py-32 bg-[#1e1b18] text-[#fbefe5] border-t border-b border-outline-variant/20 relative overflow-hidden font-sans">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none blueprint-grid" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-24">
              <div className="lg:col-span-6">
                <FadeIn direction="right" duration={0.8} className="space-y-4">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                    Integrated Intelligence
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[46px] leading-tight text-surface-bright font-normal">
                    Cross-Sector Expertise
                  </h2>
                </FadeIn>
              </div>
              <div className="lg:col-span-6">
                <FadeIn direction="left" delay={0.15} duration={0.8} className="space-y-4 text-[#cdc5c0]">
                  <p className="text-[15.5px] leading-relaxed">
                    "Every sector demands its own language. Execution evolves with context." We coordinate design intelligence, core masonry castings, direct quarries sourcing, and clearances control registers across multiple environments dynamically.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center pt-8 border-t border-outline-variant/10">
              <FadeIn direction="up" delay={0.05} duration={0.8} className="space-y-2">
                <span className="font-serif text-[42px] sm:text-[56px] leading-none text-surface-bright font-bold block">100%</span>
                <span className="text-[10px] text-[#cdc5c0] uppercase tracking-widest font-semibold block">Adaptability Score</span>
              </FadeIn>

              <FadeIn direction="up" delay={0.15} duration={0.8} className="space-y-2">
                <span className="font-serif text-[42px] sm:text-[56px] leading-none text-surface-bright font-bold block">2.4M+</span>
                <span className="text-[10px] text-[#cdc5c0] uppercase tracking-widest font-semibold block">Sq. Ft. Managed</span>
              </FadeIn>

              <FadeIn direction="up" delay={0.25} duration={0.8} className="space-y-2">
                <span className="font-serif text-[42px] sm:text-[56px] leading-none text-surface-bright font-bold block">0%</span>
                <span className="text-[10px] text-[#cdc5c0] uppercase tracking-widest font-semibold block">Zoning Deficiencies</span>
              </FadeIn>

              <FadeIn direction="up" delay={0.35} duration={0.8} className="space-y-2">
                <span className="font-serif text-[42px] sm:text-[56px] leading-none text-surface-bright font-bold block">10-Year</span>
                <span className="text-[10px] text-[#cdc5c0] uppercase tracking-widest font-semibold block">Unified Integrity Guarantee</span>
              </FadeIn>
            </div>

          </div>
        </section>

        {/* ========================================
            11. FEATURED PROJECT SNAPSHOTS
            ======================================== */}
        <section className="py-32 bg-surface relative z-10 border-t border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  STUDIO MONOGRAPHS
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Featured Sector Projects
                </h2>
              </FadeIn>
            </div>

            {/* Asymmetrical Portfolio Grids */}
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
            12. FINAL CINEMATIC CTA
            ======================================== */}
        <section className="py-28 bg-surface-container text-on-surface text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none blueprint-grid" />
          
          <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 space-y-8 flex flex-col items-center">
            <FadeIn direction="up" duration={0.8}>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full">
                Sectors Epilogue
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1} duration={0.8}>
              <h2 className="font-serif text-[42px] sm:text-[56px] leading-tight text-on-surface font-normal max-w-3xl">
                Every Sector. One Standard Of Excellence.
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} duration={0.8}>
              <p className="font-sans text-[16px] sm:text-[18px] leading-relaxed text-secondary max-w-xl">
                Partner with Bouldspace to create spaces defined by precision, purpose, and timeless execution across every industry.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.8} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="primary" showArrow={true} href="/contact?ref=sectors-cta-start">
                Start Your Project
              </Button>
              <Button variant="secondary" showArrow={false} href="/contact?ref=sectors-cta-talk">
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

// Featured Projects Snapshots Data
const turnkeyProjects = [
  { name: "The Travertine Pavilion", sector: "High-End Residences", scope: "Travertine slab tiling, curved plaster casework", location: "Golf Course Road, Gurugram", type: "Full Turnkey Delivery" },
  { name: "The Clarks Premier Shell", sector: "Commercial & Hospitality", scope: "Wide glass splits, smart MEP track matrices", location: "Corporate Hub, Bengaluru", type: "Integrated Construction" },
  { name: "The Precision Assembly Facility", sector: "Industrial & Logistics", scope: "Precast columns, structural rebar loading, MEP", location: "Industrial Center, Chennai", type: "Integrated Turnkey Build" }
];
