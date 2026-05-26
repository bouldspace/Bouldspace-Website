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
  MessageSquare
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";

export default function InteriorDesignServicePage() {
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

  // 1. Interior Expertise Showcase Data - Re-tailored to focus on beautiful physical outlines and swatches
  const expertiseShowcase = [
    {
      id: "living",
      title: "Living Spaces",
      desc: "Double-height curation volumes featuring custom curved boucle sofas, low-slung travertine console slabs, and strategic warm lighting paths that emphasize space scale.",
      metric: "Daylight Factor: 78%",
      details: ["Curated organic furniture profiles", "Integrated warm ceiling spotlight track", "Limestone clad hearth details"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Natural slanted lighting ray */}
          <polygon points="0,0 120,0 200,240 80,240" className="fill-primary/[0.015] stroke-none" />
          {/* Curved Boucle Sofa Silhouette */}
          <path d="M 80,140 C 80,100 130,90 170,105 C 210,120 250,90 290,105 C 310,112 320,130 320,145 L 320,165 C 320,172 312,178 300,178 L 100,178 C 88,178 80,172 80,165 Z" className="stroke-primary/45 fill-primary/[0.005]" />
          <path d="M 100,140 C 120,140 130,145 150,145 C 190,145 220,135 260,140 C 280,142 290,140 300,140" className="stroke-primary/30" />
          {/* Low travertine block console */}
          <rect x="110" y="188" width="180" height="15" rx="1" className="stroke-outline/45 fill-outline/[0.005]" />
          {/* Architectural floor lamp arch */}
          <path d="M 310,188 L 310,110 C 310,70 230,60 210,85" className="stroke-outline/35" />
          <circle cx="210" cy="85" r="5" className="stroke-primary/30 fill-primary/10" />
          <text x="200" y="222" textAnchor="middle" className="font-sans text-[7px] fill-primary font-bold uppercase tracking-wider">VOLUMETRIC FURNISHING CONTOURS</text>
        </svg>
      )
    },
    {
      id: "bedrooms",
      title: "Luxury Bedrooms",
      desc: "Tactile sanctuaries wrapped in natural linen draperies, exposed clay plasters, floating solid oak bed decks, and integrated dimming cove task lights.",
      metric: "Acoustic Shield: High",
      details: ["Solid wood floating beds framing", "Automated blackout linen drapery", "Textured clay plaster backdrops"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Bed outline with drapery background */}
          <path d="M 70,60 L 70,180 M 330,60 L 330,180" className="stroke-outline/20 stroke-dasharray-[2_4]" />
          {/* Draped linen waves */}
          <path d="M 70,60 Q 90,65 110,60 T 150,60 T 190,60 T 230,60 T 270,60 T 310,60 T 330,60" className="stroke-outline/25" />
          {/* Floating bed deck */}
          <rect x="90" y="120" width="220" height="50" rx="2" className="stroke-primary/45 fill-primary/[0.005]" />
          {/* Cushions */}
          <rect x="110" y="100" width="80" height="20" rx="1" className="stroke-outline/40" />
          <rect x="210" y="100" width="80" height="20" rx="1" className="stroke-outline/40" />
          {/* Pendant lighting glowing */}
          <circle cx="150" cy="50" r="10" className="stroke-primary/20 fill-primary/[0.02]" />
          <line x1="150" y1="30" x2="150" y2="40" className="stroke-primary/30" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7px] fill-primary font-bold uppercase tracking-wider">BEDROOM SANCTUARY GEOMETRY</text>
        </svg>
      )
    },
    {
      id: "kitchens",
      title: "Kitchens",
      desc: "Cast terrazzo islands paired with solid oak casework frames, hidden pantries doors, and precise cabinet tracks clearances mapping under 0.20mm.",
      metric: "Tolerance: <0.20mm",
      details: ["Monolithic cast terrazzo counters", "German soft-close drawer slides", "Concealed operational pantries"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Terrazzo kitchen island outline with bar stools */}
          <rect x="80" y="80" width="240" height="85" rx="3" className="stroke-primary/45 fill-primary/[0.005]" />
          <line x1="80" y1="110" x2="320" y2="110" className="stroke-outline/20" />
          
          {/* Bar stools contours */}
          <path d="M 120,165 L 120,205 M 150,165 L 150,205 M 120,165 L 150,165" className="stroke-outline/35" />
          <ellipse cx="135" cy="165" rx="18" ry="4" className="stroke-outline/40 fill-primary/5" />
          
          <path d="M 250,165 L 250,205 M 280,165 L 280,205 M 250,165 L 280,165" className="stroke-outline/35" />
          <ellipse cx="265" cy="165" rx="18" ry="4" className="stroke-outline/40 fill-primary/5" />
          
          {/* Counter details - faucet silhouette */}
          <path d="M 195,80 L 195,65 Q 195,55 205,55 L 208,55" className="stroke-primary/40" />
          <text x="200" y="222" textAnchor="middle" className="font-sans text-[7px] fill-primary font-bold uppercase tracking-wider">MONOLITHIC TERRAZZO PROFILE</text>
        </svg>
      )
    },
    {
      id: "dining",
      title: "Dining Areas",
      desc: "Custom monolithic concrete dining decks, sculptural low-hanging brass tube lighting frames, and hand-plastered wall overlays that frame dining habits.",
      metric: "Seating Capacity: Custom",
      details: ["Cast concrete dining deck tables", "Sculptural brass lighting coordinates", "Acoustic clay plaster walls"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Monolithic dining table and sculptural chandelier */}
          {/* Table */}
          <rect x="90" y="110" width="220" height="25" rx="1" className="stroke-primary/45 fill-primary/[0.005]" />
          <path d="M 120,135 L 105,190 M 280,135 L 295,190" className="stroke-outline/35" />
          
          {/* Rounded dining chairs outlines */}
          <path d="M 70,140 Q 60,140 60,160 L 60,190 M 60,170 L 90,170" className="stroke-outline/25" />
          <path d="M 330,140 Q 340,140 340,160 L 340,190 M 340,170 L 310,170" className="stroke-outline/25" />
          
          {/* Sculptural ceiling lighting hanging */}
          <line x1="200" y1="30" x2="200" y2="70" className="stroke-primary/30" />
          <path d="M 140,70 L 260,70 C 275,70 275,75 260,75 L 140,75 C 125,75 125,70 140,70" className="stroke-primary/50 fill-primary/10" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7px] fill-primary font-bold uppercase tracking-wider">DINING DECK & LIGHT HARMONY</text>
        </svg>
      )
    },
    {
      id: "hospitality",
      title: "Hospitality Interiors",
      desc: "Elevating wellness cabins, premium reception environments, and boutique lobby zones that prioritize emotional brand stories and layout flow.",
      metric: "Flow Rate: Optimized",
      details: ["Luxury wellness cabins layouts", "Monolithic travertine desks", "Tactile warm architectural plaster"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Curved travertine reception desk and lounge seating */}
          <path d="M 80,130 C 80,100 150,90 200,90 C 250,90 320,100 320,130 L 320,170 L 80,170 Z" className="stroke-primary/45 fill-primary/[0.005]" />
          
          {/* Vertical plaster texture ribs background */}
          <line x1="120" y1="92" x2="120" y2="170" className="stroke-outline/15" />
          <line x1="160" y1="90" x2="160" y2="170" className="stroke-outline/15" />
          <line x1="200" y1="90" x2="200" y2="170" className="stroke-outline/15" />
          <line x1="240" y1="90" x2="240" y2="170" className="stroke-outline/15" />
          <line x1="280" y1="92" x2="280" y2="170" className="stroke-outline/15" />
          
          {/* Minimalist desk accessories block */}
          <rect x="220" y="75" width="40" height="15" className="stroke-outline/40" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7px] fill-primary font-bold uppercase tracking-wider">BOUTIQUE LOBBY RECEPTION CONTOUR</text>
        </svg>
      )
    },
    {
      id: "office",
      title: "Office Interiors",
      desc: "Creating executive penthouses and boutique office environments centered around calm focus—incorporating oak timber cladding and acoustic glass partitions.",
      metric: "Acoustic Target: <35dB",
      details: ["Oak timber acoustic cladding", "Strategic private focus zones", "Low-glare automated track lights"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Executive private desk contour and wood panels */}
          {/* Acoustic glass split */}
          <line x1="180" y1="40" x2="180" y2="180" className="stroke-primary/30 stroke-dasharray-[3_3]" />
          
          {/* Desk */}
          <rect x="200" y="110" width="110" height="50" rx="1.5" className="stroke-primary/45 fill-primary/[0.005]" />
          
          {/* Cozy ergonomic chair outline */}
          <path d="M 235,120 Q 235,90 255,90 Q 275,90 275,120 L 275,150 L 235,150 Z" className="stroke-outline/35" />
          
          {/* Oak cladding background pattern */}
          <line x1="70" y1="50" x2="70" y2="170" className="stroke-outline/15" />
          <line x1="90" y1="50" x2="90" y2="170" className="stroke-outline/15" />
          <line x1="110" y1="50" x2="110" y2="170" className="stroke-outline/15" />
          <line x1="130" y1="50" x2="130" y2="170" className="stroke-outline/15" />
          <line x1="150" y1="50" x2="150" y2="170" className="stroke-outline/15" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7px] fill-primary font-bold uppercase tracking-wider">EXECUTIVE ATELIER ACOUSTICS</text>
        </svg>
      )
    },
    {
      id: "residences",
      title: "Premium Residences",
      desc: "End-to-end spatial mapping for luxury apartments and duplex penthouses, establishing clean visual symmetry and material unity across levels.",
      metric: "Visual Symmetry: 100%",
      details: ["Unified earth-tone palette", "Seamless flooring thresholds", "Exposed concrete accents"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Duplex volumetric living room double height outline */}
          <rect x="60" y="40" width="280" height="140" className="stroke-outline/35" />
          {/* Mezzanine level floor slab outline */}
          <line x1="60" y1="100" x2="220" y2="100" className="stroke-primary/45 stroke-[1.2]" />
          
          {/* Floating staircase outline */}
          <path d="M 60,180 L 100,180 L 100,165 L 140,165 L 140,150 L 180,150 L 180,135 L 220,135 L 220,100" className="stroke-outline/30" />
          
          {/* Double height glass panels */}
          <line x1="280" y1="40" x2="280" y2="180" className="stroke-outline/20" />
          <line x1="310" y1="40" x2="310" y2="180" className="stroke-outline/20" />
          <text x="200" y="210" textAnchor="middle" className="font-sans text-[7px] fill-primary font-bold uppercase tracking-wider">DUPLEX VOLUMETRIC AXIS</text>
        </svg>
      )
    },
    {
      id: "styling",
      title: "Custom Styling",
      desc: "Sourcing sculptural lighting fixtures, bespoke hand-plastered ceramic vases, raw travertine console blocks, and linen dressing for spatial warmth.",
      metric: "Curation: Worldwide",
      details: ["Sculptural light sourcing", "Textured ceramic coordinates", "Linen drapery final dressings"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Curation vignette: Sculptural ceramic vase on pedestal, dry branches */}
          {/* Plaster pedestal */}
          <rect x="160" y="120" width="80" height="65" rx="1.5" className="stroke-primary/40 fill-primary/[0.003]" />
          
          {/* Sculptural organic vase contour */}
          <path d="M 185,120 Q 170,95 185,75 Q 195,65 200,65 Q 205,65 215,75 Q 230,95 215,120 Z" className="stroke-primary/45 fill-primary/5" />
          
          {/* Dry plant branches */}
          <path d="M 200,65 Q 205,30 220,15 M 200,65 Q 190,40 170,25 M 200,50 Q 215,35 225,30" className="stroke-outline/35" />
          
          {/* Light halo */}
          <circle cx="200" cy="70" r="35" className="stroke-primary/10 stroke-dasharray-[2_4]" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7px] fill-primary font-bold uppercase tracking-wider">CURATED ARTIFACT STYLING</text>
        </svg>
      )
    }
  ];

  // 2. Interior Process Data
  const processSteps = [
    { step: "01", title: "Discovery", desc: "Topographic site diagnostics, prevailing wind cycles check, daylight paths, and space requirements brief audit." },
    { step: "02", title: "Mood & Concept", desc: "Establishing tactile mood boards, solid wood options, raw terracotta plasters, and architectural coordinate directions." },
    { step: "03", title: "Space Planning", desc: "Creating spatial flow grids, double-height volumetric balances, and functional ergonomic routing." },
    { step: "04", title: "Material Selection", desc: "Procuring raw travertine slabs, M40 exposed concrete formulations, and custom oak millwork batches." },
    { step: "05", title: "Visualization", desc: "Parametric 3D layout renders matching exact textile textures, grain pathways, and task lights dynamics." },
    { step: "06", title: "Execution", desc: "Direct subcontractor auditing, M40 core stress testing, and MEP clash-free coordinate checking on site." },
    { step: "07", title: "Styling & Handover", desc: "Linen draperies hanging, custom ceramics styling, bi-annual structural audits schedule, and keys handover." }
  ];

  // 3. Featured Projects Data
  const featuredProjects = [
    { name: "The Travertine Pavilion", space: "Penthouse Lounge", location: "Golf Course Road, Gurugram", style: "Luxury Modernism" },
    { name: "The Linen Atelier", space: "Private Estate Bed", location: "Koramangala, Bengaluru", style: "Tactile Minimalism" },
    { name: "The Terracotta Hearth", space: "Bespoke Dining Area", location: "Jaipur Outpost", style: "Contextual Luxury" }
  ];

  return (
    <>
      <Header />
      <main ref={containerRef} className="flex-grow bg-surface overflow-hidden">
        
        {/* ========================================
            1. HERO SECTION — CINEMATIC
            ======================================== */}
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-36 pb-24 overflow-hidden bg-surface text-on-surface border-b border-outline-variant/15">
          
          {/* Immersive Parallax Backdrop - Editorial Mood Board with Slanted Light Fields */}
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
          >
            <svg className="w-full h-full text-secondary/35 stroke-current stroke-[1] fill-none opacity-90" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
              {/* Diffused natural sunlight rays coming from top-left */}
              <defs>
                <linearGradient id="sunlight-ray-hero" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.08" />
                  <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.02" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Slanted sunbeams */}
              <polygon points="0,0 250,0 600,600 200,600" fill="url(#sunlight-ray-hero)" />
              <polygon points="350,0 500,0 900,600 700,600" fill="url(#sunlight-ray-hero)" />
              
              {/* Overlapping mood board swatches outlines */}
              {/* Plaster panel outline */}
              <rect x="250" y="100" width="220" height="340" rx="2" className="stroke-outline/30 fill-outline/[0.005]" />
              
              {/* Fabric/Boucle wave silhouette */}
              <path d="M 420,180 C 460,180 480,240 520,240 C 560,240 580,180 620,180 C 660,180 680,260 720,260" className="stroke-primary/45 stroke-[1.2]" />
              
              {/* Travertine stone swatch card */}
              <rect x="520" y="280" width="280" height="200" rx="3" className="stroke-outline/40 fill-primary/[0.003]" />
              <line x1="520" y1="360" x2="800" y2="360" className="stroke-outline/15" />
              
              {/* Curved clay plaster divider */}
              <path d="M 150,500 Q 300,420 450,500 T 750,500" className="stroke-primary/25 stroke-dasharray-[3_6]" />
              
              {/* Organic styling silhouettes - Vase and branch */}
              <path d="M 330,380 Q 320,330 330,300 Q 340,280 350,280 Q 360,280 370,300 Q 380,330 370,380 Z" className="stroke-outline/40" />
              <path d="M 350,280 Q 360,200 340,160 M 350,250 Q 380,210 390,190" className="stroke-primary/30" />
              
              {/* Technical text labels turned into artistic descriptors */}
              <text x="265" y="130" textAnchor="start" className="font-sans text-[7.5px] fill-secondary/55 font-bold uppercase tracking-[0.25em]">SENSORY MATERIAL OVERLAY: IN-90</text>
              <text x="770" y="315" textAnchor="end" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-[0.25em]">TRAVERTINE BLOCK TEXTURE</text>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </motion.div>

          {/* Intersecting grid lines - Softened for luxury living feel */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none blueprint-grid z-10" />
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
                Tactile Curation
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="font-serif text-[48px] sm:text-[68px] md:text-[84px] leading-[1.05] tracking-tight font-normal text-on-surface max-w-3xl"
              >
                Designing Spaces <br />
                That Feel Timeless.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-secondary max-w-2xl font-normal"
              >
                Luxury interior design crafted through thoughtful planning, refined aesthetics, premium materials, and seamless execution. We balance visual balance with structural command.
              </motion.p>

              <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button variant="primary" showArrow={true} href="/contact?ref=int-hero">
                  Schedule Consultation
                </Button>
                <Button variant="secondary" showArrow={false} href="#philosophies">
                  Explore Projects
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating blueprint markers - Replaced coordinate jargon with sensory branding */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 left-8 md:left-16 z-20 font-sans text-[9px] tracking-[0.25em] uppercase text-secondary/60 hidden sm:flex flex-col gap-1.5 select-none pointer-events-none"
          >
            <span className="text-primary font-bold">Volumetric Balance</span>
            <span>BOULDSPACE PROTOCOL IN-90</span>
            <span>INDEX // TIMELINESS CURATION</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 right-8 md:right-16 z-20 font-sans text-[9px] tracking-[0.25em] uppercase text-secondary/60 text-right hidden sm:flex flex-col gap-1.5 select-none pointer-events-none"
          >
            <span className="text-primary font-bold">Material Honesty</span>
            <span>08 FIELDS // 07 PHASES</span>
            <span>CURATION HUB // GURUGRAM</span>
          </motion.div>
        </section>

        {/* ========================================
            2. DESIGN PHILOSOPHY SECTION
            ======================================== */}
        <section id="philosophies" className="py-32 bg-surface relative z-10 border-b border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Asymmetrical Left Editorial Column */}
              <div className="lg:col-span-5 space-y-6">
                <FadeIn direction="right" duration={0.8} className="space-y-4">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 px-3 py-1 rounded inline-block">
                    01 // Philosophy in Curation
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[46px] leading-tight text-on-surface font-normal">
                    Where Luxury and Emotion Coexist.
                  </h2>
                </FadeIn>
              </div>

              {/* Asymmetrical Right Storytelling Column */}
              <div className="lg:col-span-7 font-sans text-[16px] leading-relaxed text-secondary space-y-6 border-l border-outline-variant/25 pl-6 lg:pl-12">
                <FadeIn direction="left" delay={0.15} duration={0.8} className="space-y-6">
                  <p>
                    Every spatial envelope has an emotional threshold. True interior curation is not about applying superficial decorations or chasing transient trends. We balance space planning, acoustic dampening, and material selections to construct atmospheres that feel grounded and quiet.
                  </p>
                  <p>
                    We practice 'Material Honesty'—pairing the raw concrete surfaces against solid oak casings, cast terrazzo counters, and open boucle textiles. Every selection is positioned contextually to ensure timeless durability, structural harmony, and ergonomic flow.
                  </p>
                </FadeIn>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================
            3. INTERIOR EXPERTISE SHOWCASE
            ======================================== */}
        <section className="py-32 bg-surface relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-28 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  STUDIO MONOGRAPHS
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Expertise in Curation
                </h2>
              </FadeIn>
            </div>

            {/* Alternating Asymmetrical Monograph Grid */}
            <div className="space-y-36">
              {expertiseShowcase.map((exp, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={exp.id}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
                  >
                    {/* Left Column: Text (Odd) or SVG (Even) */}
                    <div className={`lg:col-span-5 space-y-8 ${isEven ? "order-1" : "order-1 lg:order-2"}`}>
                      <FadeIn direction={isEven ? "right" : "left"} duration={0.8} className="space-y-6">
                        <div className="flex justify-between items-start">
                          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                            Curation Category 0{idx+1}
                          </span>
                          <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-outline bg-surface-container px-2 py-0.5 rounded">
                            {exp.metric}
                          </span>
                        </div>

                        <h3 className="font-serif text-[30px] sm:text-[36px] leading-tight text-on-surface font-normal">
                          {exp.title}
                        </h3>

                        <p className="font-sans text-[15px] leading-relaxed text-secondary">
                          {exp.desc}
                        </p>

                        <ul className="space-y-2.5 font-sans text-[13px] text-secondary border-t border-outline-variant/20 pt-4">
                          {exp.details.map((det, didx) => (
                            <li key={didx} className="flex items-center gap-2.5">
                              <Check className="h-4 w-4 text-primary shrink-0" />
                              <span>{det}</span>
                            </li>
                          ))}
                        </ul>
                      </FadeIn>
                    </div>

                    {/* Right Column: SVG (Odd) or Text (Even) */}
                    <div className={`lg:col-span-7 ${isEven ? "order-2" : "order-2 lg:order-1"}`}>
                      <FadeIn direction={isEven ? "left" : "right"} duration={1.0}>
                        <div className="relative aspect-[16/10] w-full rounded border border-outline-variant/30 bg-surface-container p-6 sm:p-8 flex flex-col justify-between font-sans shadow-elevated overflow-hidden group select-none">
                          <div className="absolute inset-0 opacity-[0.08] blueprint-grid pointer-events-none" />
                          <div className="absolute inset-4 border border-outline/5 pointer-events-none" />
                          
                          <div className="flex justify-between items-start text-[9px] tracking-widest text-outline uppercase font-bold relative z-10">
                            <span>SENSORY DRAWING // IN-10{idx+1}</span>
                            <span className="text-primary">[VOLUMETRIC FORMS & LIGHT]</span>
                          </div>

                          <div className="relative w-full h-full my-auto flex items-center justify-center py-4">
                            {exp.svg}
                          </div>

                          <div className="flex justify-between text-[9px] tracking-wider text-secondary/60 border-t border-outline-variant/20 pt-4 font-semibold uppercase relative z-10">
                            <span>CURATION SCHEME</span>
                            <span>ORGANIC OUTLINES</span>
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
            4. MATERIAL & DETAIL EXPERIENCE
            ======================================== */}
        <section className="py-32 bg-surface-container border-t border-b border-outline-variant/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none blueprint-grid" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-24">
              <div className="lg:col-span-6">
                <FadeIn direction="right" duration={0.8} className="space-y-4">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                    Sensory Curation
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[46px] leading-tight text-on-surface font-normal">
                    Material & Detail Curation
                  </h2>
                </FadeIn>
              </div>
              <div className="lg:col-span-6">
                <FadeIn direction="left" delay={0.15} duration={0.8}>
                  <p className="font-sans text-[15.5px] leading-relaxed text-secondary">
                    "Luxury lives in the details. Every texture shapes emotion." We select and inspect structural materials in their rawest forms—travertine slabs, solid oak casework timber, exposed concrete plaster—matching tactile weight with spatial curation.
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Tactile Material Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
              
              {/* Material 1: Travertine */}
              <FadeIn direction="up" delay={0.05} duration={0.8}>
                <div className="bg-surface-container-lowest p-8 rounded border border-outline-variant/30 flex flex-col justify-between shadow-elevated h-full relative group">
                  <div className="space-y-4">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2.5 py-0.5 rounded inline-block">Travertine Slabs</span>
                    <h4 className="font-serif text-[20px] text-on-surface font-normal">travertine stone</h4>
                    <p className="text-secondary text-[13px] leading-relaxed">Cast solid stone console structures with porous surfaces that capture shadows beautifully.</p>
                  </div>
                  <div className="border-t border-outline-variant/20 pt-4 mt-6 text-[9.5px] font-bold text-outline uppercase tracking-wider">TEXTURE: TEXTURED MATTE</div>
                </div>
              </FadeIn>

              {/* Material 2: Oak timber */}
              <FadeIn direction="up" delay={0.15} duration={0.8}>
                <div className="bg-surface-container-lowest p-8 rounded border border-outline-variant/30 flex flex-col justify-between shadow-elevated h-full relative group">
                  <div className="space-y-4">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2.5 py-0.5 rounded inline-block">Teak & Oak</span>
                    <h4 className="font-serif text-[20px] text-on-surface font-normal">solid oak casework</h4>
                    <p className="text-secondary text-[13px] leading-relaxed">Interlocking mortise & tenon window frames and cabinetry casing that display raw wood grain lines.</p>
                  </div>
                  <div className="border-t border-outline-variant/20 pt-4 mt-6 text-[9.5px] font-bold text-outline uppercase tracking-wider">FINISH: MATTE OIL</div>
                </div>
              </FadeIn>

              {/* Material 3: Terrazzo */}
              <FadeIn direction="up" delay={0.25} duration={0.8}>
                <div className="bg-surface-container-lowest p-8 rounded border border-outline-variant/30 flex flex-col justify-between shadow-elevated h-full relative group">
                  <div className="space-y-4">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2.5 py-0.5 rounded inline-block">Terrazzo overlays</span>
                    <h4 className="font-serif text-[20px] text-on-surface font-normal">monolithic casts</h4>
                    <p className="text-secondary text-[13px] leading-relaxed">Monolithic kitchen counters and sinks custom cast on-site for high-functioning culinary designs.</p>
                  </div>
                  <div className="border-t border-outline-variant/20 pt-4 mt-6 text-[9.5px] font-bold text-outline uppercase tracking-wider">TOLERANCE: SEAMLESS THRESHOLDS</div>
                </div>
              </FadeIn>

              {/* Material 4: Boucle & Linen */}
              <FadeIn direction="up" delay={0.35} duration={0.8}>
                <div className="bg-surface-container-lowest p-8 rounded border border-outline-variant/30 flex flex-col justify-between shadow-elevated h-full relative group">
                  <div className="space-y-4">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2.5 py-0.5 rounded inline-block">Boucle & Linen</span>
                    <h4 className="font-serif text-[20px] text-on-surface font-normal">raw dressings</h4>
                    <p className="text-secondary text-[13px] leading-relaxed">Curated boucle sofa upholstery and loose-weave natural linen window drapery for acoustic damping.</p>
                  </div>
                  <div className="border-t border-outline-variant/20 pt-4 mt-6 text-[9.5px] font-bold text-outline uppercase tracking-wider">TACTILE SENSATION: WARM</div>
                </div>
              </FadeIn>

            </div>

          </div>
        </section>

        {/* ========================================
            5. INTERIOR PROCESS EXPERIENCE
            ======================================== */}
        <section className="py-32 bg-surface relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  MAKING OF LUXURY
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Our Interior Process
                </h2>
              </FadeIn>
            </div>

            {/* Process Chronology Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 relative">
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-[50px] left-[5%] right-[5%] h-[1px] bg-outline-variant/20 z-0" />
              
              {processSteps.map((step, idx) => (
                <FadeIn
                  key={idx}
                  direction="up"
                  delay={idx * 0.06}
                  duration={0.8}
                  className="z-10 h-full"
                >
                  <div className="bg-surface-container-lowest p-6 rounded border border-outline-variant/25 shadow-elevated h-full flex flex-col justify-between gap-6">
                    <div className="flex justify-between items-center">
                      <span className="font-serif text-[24px] text-primary/30 font-bold leading-none">{step.step}</span>
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-serif text-[17px] text-on-surface font-semibold">{step.title}</h4>
                      <p className="text-secondary text-[12.5px] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================
            6. FEATURED INTERIOR PROJECTS
            ======================================== */}
        <section className="py-32 bg-surface relative z-10 border-t border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  FEATURED CURATIONS
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Featured Interior Concepts
                </h2>
              </FadeIn>
            </div>

            {/* Masonry portfolio showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, idx) => (
                <FadeIn
                  key={idx}
                  direction="up"
                  delay={idx * 0.08}
                  duration={0.8}
                >
                  <div className="rounded border border-outline-variant/20 bg-surface-container-lowest p-8 flex flex-col justify-between shadow-elevated hover:border-primary/45 transition-all duration-300 group h-full">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-outline">PROJECT {idx+1}</span>
                        <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2.5 py-0.5 rounded">{project.style}</span>
                      </div>
                      
                      <h3 className="font-serif text-[22px] text-on-surface font-normal group-hover:text-primary transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="font-sans text-[14px] leading-relaxed text-secondary">
                        A curated {project.space.toLowerCase()} concept displaying absolute spatial hierarchy, natural light vectors, and customized casework fittings.
                      </p>
                    </div>

                    <div className="border-t border-outline-variant/20 pt-6 mt-8 flex justify-between items-center text-[10px] font-sans font-bold uppercase tracking-widest text-outline group-hover:text-primary transition-colors duration-300">
                      <span>LOCATION</span>
                      <span>{project.location}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================
            7. WHY BOULDSPACE INTERIORS
            ======================================== */}
        <section className="py-32 bg-surface relative z-10 border-t border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  STUDIO DIFFERENTIATION
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Why Bouldspace Interiors
                </h2>
              </FadeIn>
            </div>

            {/* Differentiators cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
              {[
                { title: "Personalized Concepts", desc: "No pre-packaged layouts. We coordinate spatial briefs from primary principles." },
                { title: "Premium Materials", desc: "Authentic travertine, oak casework, raw concrete, terracotta, and soft boucle textures." },
                { title: "Execution Precision", desc: "clash-free MEP alignment and cabinetry clearances checked under a 0.20mm tolerance." },
                { title: "Turnkey Coordination", desc: "Single unified dashboard supervising structural masons, logisticians, and keys release." }
              ].map((diff, idx) => (
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
                    <span className="font-sans text-[9px] font-bold tracking-widest text-primary/30 uppercase mt-4">COORD // A-{idx+1}</span>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================
            8. TESTIMONIAL EXPERIENCE
            ======================================== */}
        <section className="py-32 bg-[#1e1b18] text-[#fbefe5] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none blueprint-grid" />
          
          <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8 flex flex-col items-center">
            <FadeIn direction="up" duration={0.8}>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MessageSquare className="h-6 w-6" />
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1} duration={0.8}>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary">
                CLIENT DIALOGUE
              </span>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} duration={0.8}>
              <blockquote className="font-serif text-[24px] sm:text-[32px] md:text-[38px] leading-snug font-normal text-surface-bright italic max-w-3xl">
                "Bouldspace approached our home design with structural strategy and material honesty. We walked through detailed parametric renders and selected authentic travertine stone and oak casings that age beautifully. The final keys release under a 10-year warranty represents absolute trust."
              </blockquote>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.8} className="space-y-1 font-sans">
              <cite className="font-serif text-[18px] text-surface-bright not-italic block font-normal">Aditya Vardhan</cite>
              <span className="text-[10px] text-[#cdc5c0] uppercase tracking-wider">Estate Owner, Golf Course Road, Gurugram</span>
            </FadeIn>
          </div>
        </section>

        {/* ========================================
            9. FINAL CINEMATIC CTA
            ======================================== */}
        <section className="py-28 bg-surface-container text-on-surface text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none blueprint-grid" />
          
          <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 space-y-8 flex flex-col items-center">
            <FadeIn direction="up" duration={0.8}>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full">
                Studio Briefing
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1} duration={0.8}>
              <h2 className="font-serif text-[42px] sm:text-[56px] leading-tight text-on-surface font-normal max-w-3xl">
                Luxury Begins With Thoughtful Design.
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} duration={0.8}>
              <p className="font-sans text-[16px] sm:text-[18px] leading-relaxed text-secondary max-w-xl">
                Partner with Bouldspace to craft interiors that are timeless, refined, and deeply personal.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.8} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="primary" showArrow={true} href="/contact?ref=int-cta-book">
                Book Design Consultation
              </Button>
              <Button variant="secondary" showArrow={false} href="/contact?ref=int-cta-start">
                Start Your Interior Project
              </Button>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
