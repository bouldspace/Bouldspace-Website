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
  Flame,
  Wrench,
  Sliders,
  Sparkle
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";

export default function ModularKitchenServicePage() {
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

  // 1. Kitchen Style Showcase Data - Rebuilt to represent casework joinery and cabinet profiles
  const kitchenStyles = [
    {
      title: "Modern Kitchens",
      subtitle: "The Obsidian Atelier",
      desc: "Bold lines meeting dark obsidian cabinetry, dynamic under-cabinet warm focus spotlights, and monolithic cast basalt islands that form the spatial anchor.",
      metric: "Tolerances: <0.15mm",
      details: ["Interlocking dark oak casing", "Anodized structural handles", "Integrated warm spotlight tracks"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Cabinetry cross section showing double cabinet drawers with sleek handles */}
          <rect x="60" y="30" width="280" height="170" rx="2" className="stroke-primary/40 fill-primary/[0.005]" />
          {/* Middle dividing lines */}
          <line x1="200" y1="30" x2="200" y2="200" className="stroke-outline/25" />
          <line x1="60" y1="115" x2="340" y2="115" className="stroke-outline/25" />
          
          {/* Sleek horizontal cabinet handles */}
          <rect x="80" y="100" width="100" height="6" rx="1.5" className="stroke-primary/45 fill-primary/10" />
          <rect x="220" y="100" width="100" height="6" rx="1.5" className="stroke-primary/45 fill-primary/10" />
          <rect x="80" y="185" width="100" height="6" rx="1.5" className="stroke-primary/45 fill-primary/10" />
          <rect x="220" y="185" width="100" height="6" rx="1.5" className="stroke-primary/45 fill-primary/10" />
          
          {/* Under counter drawer rails indicator */}
          <line x1="70" y1="60" x2="190" y2="60" className="stroke-outline/15 stroke-dasharray-[2_4]" />
          <line x1="210" y1="60" x2="330" y2="60" className="stroke-outline/15 stroke-dasharray-[2_4]" />
          <text x="200" y="222" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">MODULAR CASEWORK PROFILE // OBS-01</text>
        </svg>
      )
    },
    {
      title: "Minimal Kitchens",
      subtitle: "The Alabaster Pavilion",
      desc: "Pure Sunlit Cream layouts with flush push-to-open doors, concealed task lighting channels, and integrated induction decks hidden beneath solid quartz countertops.",
      metric: "Visual Cues: Invisible",
      details: ["Concealed push-to-open hinges", "Integrated quartz counter decks", "Recessed task lighting channels"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Sleek flush fronts with zero-gap cabinetry seams */}
          <rect x="70" y="40" width="260" height="150" rx="1" className="stroke-primary/35 fill-primary/[0.005]" />
          {/* Seam lines */}
          <line x1="150" y1="40" x2="150" y2="190" className="stroke-outline/25" />
          <line x1="250" y1="40" x2="250" y2="190" className="stroke-outline/25" />
          
          {/* Top hidden push mechanism dots */}
          <circle cx="110" cy="50" r="1.5" className="stroke-primary/30" />
          <circle cx="200" cy="50" r="1.5" className="stroke-primary/30" />
          <circle cx="290" cy="50" r="1.5" className="stroke-primary/30" />
          
          {/* Hidden quartz counter top profile */}
          <line x1="70" y1="80" x2="330" y2="80" className="stroke-primary/45 stroke-[1.2]" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">FLUSH ZERO-GAP CASEWORK // AL-02</text>
        </svg>
      )
    },
    {
      title: "Luxury Kitchens",
      subtitle: "The Travertine Gallery",
      desc: "Warm travertine stone backsplashes paired with custom wire-brushed solid oak casings, premium brass fixtures, and architectural lighting configurations.",
      metric: "Materials: Elite Curation",
      details: ["Travertine stone cladding slabs", "Bespoke brass hardware fixtures", "Hand-oiled solid oak trims"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Double-waterfall stone island drawing with solid wood joints */}
          {/* Outer stone profile */}
          <rect x="80" y="60" width="240" height="110" rx="3" className="stroke-primary/45 fill-primary/[0.003]" />
          
          {/* Waterfall sides thickness lines */}
          <line x1="95" y1="60" x2="95" y2="170" className="stroke-outline/25" />
          <line x1="305" y1="60" x2="305" y2="170" className="stroke-outline/25" />
          
          {/* Solid oak inset drawer block */}
          <rect x="110" y="75" width="180" height="40" rx="1" className="stroke-primary/35 fill-primary/[0.005]" />
          <rect x="110" y="120" width="180" height="40" rx="1" className="stroke-primary/35 fill-primary/[0.005]" />
          
          {/* Brass drawer handles */}
          <circle cx="200" cy="95" r="4.5" className="stroke-primary/50 fill-primary/10" />
          <circle cx="200" cy="140" r="4.5" className="stroke-primary/50 fill-primary/10" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">WATERFALL STONE CASEWORK // TRV-03</text>
        </svg>
      )
    },
    {
      title: "Contemporary Kitchens",
      subtitle: "The Linoleum Atelier",
      desc: "Tactile high-pressure laminates combined with raw steel supports, open linear shelving systems, and active herb-garden LED lighting systems.",
      metric: "Dynamic Zones: 4",
      details: ["High-pressure tactile laminates", "Raw hot-rolled steel grids", "Automated indoor herb lighting"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Linear wall mounted shelf grid holding kitchenware */}
          {/* Outer steel support rods */}
          <line x1="100" y1="40" x2="100" y2="170" className="stroke-primary/45 stroke-[1.5]" />
          <line x1="300" y1="40" x2="300" y2="170" className="stroke-primary/45 stroke-[1.5]" />
          
          {/* Wood block shelves */}
          <rect x="80" y="70" width="240" height="12" rx="1.5" className="stroke-primary/35 fill-primary/5" />
          <rect x="80" y="130" width="240" height="12" rx="1.5" className="stroke-primary/35 fill-primary/5" />
          
          {/* Plates, jars and planter silhouettes on shelf */}
          <path d="M 120,70 L 130,50 L 150,50 L 160,70 Z" className="stroke-outline/35" />
          <rect x="180" y="45" width="20" height="25" rx="1" className="stroke-outline/30" />
          <circle cx="260" cy="55" r="15" className="stroke-primary/25" />
          
          {/* Under-shelf lighting track */}
          <line x1="90" y1="82" x2="310" y2="82" className="stroke-primary/40 stroke-dasharray-[2_2]" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">LINEAR INTEGRATED COUPLINGS // CNT-04</text>
        </svg>
      )
    },
    {
      title: "Open Kitchens",
      subtitle: "The Social Monograph",
      desc: "Kitchens designed as the spatial extension of living areas. Integrated downdraft hoods, custom cabinetry that mimics premium wall paneling, and floating visual boundaries.",
      metric: "Flow: Multi-Dimensional",
      details: ["Bespoke wall panel cabinetry", "Concealed downdraft vent systems", "Extended dining deck overhangs"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Social dining counter extension with bar stool support outlines */}
          {/* Main island */}
          <rect x="60" y="50" width="180" height="110" rx="2" className="stroke-primary/35 fill-primary/[0.003]" />
          
          {/* Countertop extending with cantilever overhang support leg */}
          <path d="M 60,50 L 330,50 L 330,160 M 330,55 L 240,55" className="stroke-primary/45 stroke-[1.2]" />
          
          {/* Stools underneath overhang */}
          <ellipse cx="280" cy="115" rx="15" ry="3" className="stroke-outline/35 fill-primary/5" />
          <line x1="265" y1="115" x2="265" y2="160" className="stroke-outline/30" />
          <line x1="295" y1="115" x2="295" y2="160" className="stroke-outline/30" />
          
          {/* Down-draft stove vector */}
          <rect x="100" y="44" width="40" height="6" rx="0.5" className="stroke-primary/50" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">CANTILEVER SOCIAL HUB // OPN-05</text>
        </svg>
      )
    },
    {
      title: "Smart Storage Kitchens",
      subtitle: "The Casework Matrix",
      desc: "Dynamic tandem drawers, motorized cabinet lifters, and modular internal steel dividers optimized to utilize every cubic centimeter of casework depth.",
      metric: "Volume Gain: +45%",
      details: ["Motorized top cabinetry lifts", "Dynamic double tandem drawers", "Custom adjustable steel grids"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Detailed tandem drawer pullouts showing modular internal grids */}
          {/* Drawer structural frame */}
          <rect x="80" y="40" width="240" height="140" rx="2" className="stroke-primary/45 fill-primary/[0.005]" />
          {/* Internal pullout drawer runner rails */}
          <line x1="95" y1="40" x2="95" y2="180" className="stroke-outline/25" />
          <line x1="305" y1="40" x2="305" y2="180" className="stroke-outline/25" />
          
          {/* Cutlery/divider grids inside drawer */}
          <rect x="110" y="55" width="55" height="110" rx="1" className="stroke-primary/30" />
          <rect x="175" y="55" width="55" height="110" rx="1" className="stroke-primary/30" />
          <rect x="240" y="55" width="50" height="110" rx="1" className="stroke-primary/30" />
          
          {/* Grid subdivisions */}
          <line x1="110" y1="90" x2="165" y2="90" className="stroke-outline/15" />
          <line x1="110" y1="130" x2="165" y2="130" className="stroke-outline/15" />
          
          <line x1="175" y1="110" x2="230" y2="110" className="stroke-outline/15" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">SMART CASING INTERNAL GRID // SMT-06</text>
        </svg>
      )
    },
    {
      title: "Compact Space Kitchens",
      subtitle: "The Linear Monolith",
      desc: "Micro-pantry optimization systems, sliding worktop extensions, and custom casework depths tailored for urban penthouses with absolute spatial rigor.",
      metric: "Space Yield: Optimal",
      details: ["Urban penthouse footprint fit", "Integrated sliding counter panels", "Concealed nested pantry pullouts"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Compact kitchen pullout larder tower structure */}
          {/* Tower profile */}
          <rect x="130" y="30" width="140" height="170" rx="1" className="stroke-primary/35 fill-primary/[0.003]" />
          
          {/* Nested basket layers pullout */}
          <rect x="145" y="45" width="110" height="20" rx="0.5" className="stroke-primary/45 fill-primary/5" />
          <rect x="145" y="75" width="110" height="20" rx="0.5" className="stroke-primary/45 fill-primary/5" />
          <rect x="145" y="105" width="110" height="20" rx="0.5" className="stroke-primary/45 fill-primary/5" />
          <rect x="145" y="135" width="110" height="20" rx="0.5" className="stroke-primary/45 fill-primary/5" />
          <rect x="145" y="165" width="110" height="20" rx="0.5" className="stroke-primary/45 fill-primary/5" />
          
          {/* Center alignment line */}
          <line x1="200" y1="30" x2="200" y2="200" className="stroke-outline/15 stroke-dasharray-[3_3]" />
          <text x="200" y="222" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">NESTED HIGH-OUTPUT LARDER // CMP-07</text>
        </svg>
      )
    }
  ];

  // 2. Materials & Finishes Sensory Curation
  const sensoryMaterials = [
    {
      title: "Wood Finishes",
      desc: "Hand-brushed solid oak cladding and walnut casing blocks, oiled with plant-based matte layers to preserve the natural grain lines.",
      finish: "Texture: Raw Matte Grain"
    },
    {
      title: "Matte Textures",
      desc: "Anti-fingerprint super-matte lacquer overlays, built to absorb light reflecting off architectural spotlights and resist kitchen wear.",
      finish: "Finish: Super-Matte UV Shield"
    },
    {
      title: "Stone Surfaces",
      desc: "Monolithic travertine stone backsplashes and cast terrazzo panels with tactile pores, adding visual weight to operational spaces.",
      finish: "Build: Monolithic Stone Casts"
    },
    {
      title: "Premium Laminates",
      desc: "Core-colored high-pressure laminates without dark edge seams, ensuring absolute geometric purity at every corner intersection.",
      finish: "Standard: Seamless Core-Color"
    },
    {
      title: "Lighting Integration",
      desc: "Concealed 2700K warm LED tracks routed directly into cabinetry frames, projecting precise low-glare work illumination.",
      finish: "Illumination: Under-counter Cove"
    },
    {
      title: "Hardware Detailing",
      desc: "High-grade anodized drawer runners and soft-close mechanisms tested through 100,000 continuous stress cycles.",
      finish: "Tolerance: Millimeter Precise"
    }
  ];

  // 3. Smart Functionality Features
  const smartFeatures = [
    {
      title: "Soft-Close Precision",
      desc: "Fluid-damped drawer slide systems that close silently, keeping high-capacity drawer movements entirely calm.",
      metric: "Tolerance: <0.20mm"
    },
    {
      title: "Intelligent Storage Matrix",
      desc: "Full-extension pantry towers and blind-corner pullouts that glide outward to make deep spaces easily reachable.",
      metric: "Volume Yield: 100%"
    },
    {
      title: "Ergonomic Workflow Layouts",
      desc: " cabinetry setups meticulously built around the classic prep-cook-wash kitchen triangle to minimize excess movement.",
      metric: "Workflow: Optimized"
    },
    {
      title: "Concealed Appliance Pockets",
      desc: "Custom pocket doors that slide back into cabinetry housings, hiding major appliances when they're not in use.",
      metric: "Aesthetics: Seamless"
    }
  ];

  // 4. Modular Kitchen 7-Stage Chronology Process
  const processSteps = [
    { step: "01", title: "Requirement Discovery", desc: "Consultation analyzing culinary habits, appliance integration lists, and site dimensions brief." },
    { step: "02", title: "Space Planning", desc: "Drafting the prep-cook-wash triangle zones, layout options, and primary plumbing routes." },
    { step: "03", title: "Material Selection", desc: "Curating solid oak casing batches, matte lacquer sheets, and natural stone countertop options." },
    { step: "04", title: "Design Visualization", desc: "High-fidelity parametric 3D renders matching selected material grains, light pathways, and coordinates." },
    { step: "05", title: "Production Coordination", desc: "Manufacturing structural casework to millimeter-level tolerances in controlled factory settings." },
    { step: "06", title: "Installation", desc: "On-site alignment by certified craftsmen, checking runner clearances under a 0.20mm tolerance." },
    { step: "07", title: "Final Styling", desc: "Testing software/hardware joints, setting lighting lines, and final detail styling before handoff." }
  ];

  // 5. Featured Kitchen Projects
  const featuredProjects = [
    { name: "The Obsidian Atelier", type: "Double Island Casework", location: "Magnolias, Gurugram", style: "Warm Brutalism" },
    { name: "The Alabaster Gallery", type: "Concealed Minimal Casework", location: "Amaryllis, Delhi", style: "Silent Minimalist" },
    { name: "The Travertine Hearth", type: "Linear Travertine Monolith", location: "Koramangala, Bengaluru", style: "Contextual Luxury" }
  ];

  return (
    <>
      <Header />
      <main ref={containerRef} className="flex-grow bg-surface overflow-hidden">
        
        {/* ========================================
            1. HERO SECTION — CINEMATIC
            ======================================== */}
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-36 pb-24 overflow-hidden bg-surface text-on-surface border-b border-outline-variant/15">
          
          {/* Immersive Parallax Backdrop - Custom 3D Isometric Luxury Casework Island */}
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
          >
            <svg className="w-full h-full text-secondary/35 stroke-current stroke-[1.2] fill-none opacity-85" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
              {/* Diffused under-cabinet stovetop lighting aura definitions */}
              <defs>
                <radialGradient id="cooker-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.25" />
                  <stop offset="60%" stopColor="var(--color-primary)" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                </radialGradient>
              </defs>
              
              {/* Stovetop hotplate circles glowing aura */}
              <circle cx="620" cy="200" r="130" fill="url(#cooker-glow)" className="stroke-none" />
              
              {/* Detailed Isometric Double Island cabinetry configuration showing handles, drawers and stove */}
              {/* Main Back Wall cabinetry structure */}
              <path d="M 150,120 L 500,120 L 500,320 L 150,320 Z" className="stroke-outline/25" />
              <line x1="266" y1="120" x2="266" y2="320" className="stroke-outline/15" />
              <line x1="383" y1="120" x2="383" y2="320" className="stroke-outline/15" />
              {/* Wall shelves holding decor */}
              <line x1="160" y1="160" x2="490" y2="160" className="stroke-outline/20 stroke-[1.5]" />
              
              {/* Foreground Monolithic Kitchen Island Isometric rendering */}
              {/* Tabletop face */}
              <path d="M 380,240 L 780,240 L 710,340 L 310,340 Z" className="stroke-primary/45 fill-primary/[0.005] stroke-[1.5]" />
              
              {/* Front side panels */}
              <path d="M 310,340 L 710,340 L 710,480 L 310,480 Z" className="stroke-primary/40 fill-primary/[0.002]" />
              
              {/* Side waterfall panel */}
              <path d="M 780,240 L 710,340 L 710,480 L 780,380 Z" className="stroke-outline/35" />
              
              {/* Cabinet drawer fronts and sleek handles on Island front */}
              <line x1="510" y1="340" x2="510" y2="480" className="stroke-outline/25" />
              <rect x="340" y="375" width="140" height="8" rx="2" className="stroke-primary/45 fill-primary/10" />
              <rect x="540" y="375" width="140" height="8" rx="2" className="stroke-primary/45 fill-primary/10" />
              <rect x="340" y="425" width="140" height="8" rx="2" className="stroke-primary/45 fill-primary/10" />
              <rect x="540" y="425" width="140" height="8" rx="2" className="stroke-primary/45 fill-primary/10" />
              
              {/* Induction Cooktop rings projection on table top */}
              <ellipse cx="480" cy="275" rx="30" ry="12" className="stroke-primary/45" />
              <ellipse cx="600" cy="275" rx="22" ry="9" className="stroke-primary/35" />
              <ellipse cx="480" cy="275" rx="10" ry="4" className="stroke-primary/30" />
              
              {/* Artistic casing descriptors */}
              <text x="165" y="45" textAnchor="start" className="font-sans text-[7.5px] fill-secondary/65 font-bold uppercase tracking-[0.25em]">BOULDSPACE CULINARY CASEWORK</text>
              <text x="835" y="45" textAnchor="end" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-[0.25em]">CASEWORK SCHEME: MK-80</text>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </motion.div>

          {/* Warm Spotlighting overlay using CSS gradient */}
          <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-10" />

          {/* Intersecting grid lines */}
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
                Culinary Experience
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="font-serif text-[48px] sm:text-[68px] md:text-[84px] leading-[1.05] tracking-tight font-normal text-on-surface max-w-3xl"
              >
                Kitchens Designed <br />
                Around Living.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-secondary max-w-2xl font-normal"
              >
                Luxury modular kitchens crafted with intelligent planning, premium materials, elegant aesthetics, and seamless functionality.
              </motion.p>

              <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button variant="primary" showArrow={true} href="/contact?ref=kit-hero">
                  Book Kitchen Consultation
                </Button>
                <Button variant="secondary" showArrow={false} href="#philosophies">
                  Explore Designs
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating blueprint coordinates markers */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 left-8 md:left-16 z-20 font-sans text-[9px] tracking-[0.25em] uppercase text-secondary/60 hidden sm:flex flex-col gap-1.5 select-none pointer-events-none"
          >
            <span className="text-primary font-bold">Casework Systems</span>
            <span>BOULDSPACE PROTOCOL MK-80</span>
            <span>INDEX // KITCHENS EXPERIENCE</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 right-8 md:right-16 z-20 font-sans text-[9px] tracking-[0.25em] uppercase text-secondary/60 text-right hidden sm:flex flex-col gap-1.5 select-none pointer-events-none"
          >
            <span className="text-primary font-bold">Ergonomic Depth</span>
            <span>07 STAGES // OAK SYSTEMS</span>
            <span>COORD MAPS // KITCHENS</span>
          </motion.div>
        </section>

        {/* ========================================
            2. DESIGN EXPERIENCE SECTION (PHILOSOPHY)
            ======================================== */}
        <section id="philosophies" className="py-32 bg-surface relative z-10 border-b border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Asymmetrical Editorial Heading */}
              <div className="lg:col-span-5 space-y-6">
                <FadeIn direction="right" duration={0.8} className="space-y-4">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 px-3 py-1 rounded inline-block">
                    01 // Architectural Focus
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[46px] leading-tight text-on-surface font-normal">
                    Designed for Culinary Command.
                  </h2>
                </FadeIn>
              </div>

              {/* Right Column: Narrative Storytelling */}
              <div className="lg:col-span-7 font-sans text-[16px] leading-relaxed text-secondary space-y-6 border-l border-outline-variant/25 pl-6 lg:pl-12">
                <FadeIn direction="left" delay={0.15} duration={0.8} className="space-y-6">
                  <p>
                    A premium modular kitchen is an engineering story. It coordinates workflow optimization, ergonomics, and spatial boundaries to shape everyday living. We believe true luxury lies in absolute precision—which is why we plan kitchens from the ground up, verifying structural tolerances under 0.20mm.
                  </p>
                  <p>
                    Every casework detail is custom-tailored, pairing the warmth of solid oak casings against monolithic cast terrazzo countertops and super-matte lacquer cabinet fronts. The result is a highly functional space that acts as the physical and social heart of the residence.
                  </p>
                </FadeIn>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================
            3. KITCHEN STYLE SHOWCASE
            ======================================== */}
        <section className="py-32 bg-surface relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  STUDIO SHOWCASES
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Immersive Kitchen Styles
                </h2>
              </FadeIn>
            </div>

            {/* Alternating Asymmetrical Style Layouts */}
            <div className="space-y-36">
              {kitchenStyles.map((style, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={style.title}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
                  >
                    {/* Left Column: Text (Odd) or SVG (Even) */}
                    <div className={`lg:col-span-5 space-y-8 ${isEven ? "order-1" : "order-1 lg:order-2"}`}>
                      <FadeIn direction={isEven ? "right" : "left"} duration={0.8} className="space-y-6">
                        <div className="flex justify-between items-start">
                          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                            Style Profile 0{idx + 1}
                          </span>
                          <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-outline bg-surface-container px-2 py-0.5 rounded">
                            {style.metric}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-serif text-[30px] sm:text-[36px] leading-tight text-on-surface font-normal">
                            {style.title}
                          </h3>
                          <span className="font-sans text-[12px] font-semibold text-secondary/60 uppercase block tracking-widest">{style.subtitle}</span>
                        </div>

                        <p className="font-sans text-[15px] leading-relaxed text-secondary">
                          {style.desc}
                        </p>

                        <ul className="space-y-2.5 font-sans text-[13px] text-secondary border-t border-outline-variant/20 pt-4">
                          {style.details.map((det, didx) => (
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
                            <span>CASEWORK PLOT // MK-STYLE-0{idx + 1}</span>
                            <span className="text-primary">[CABINET DETAIL DRAWING]</span>
                          </div>

                          <div className="relative w-full h-full my-auto flex items-center justify-center py-4">
                            {style.svg}
                          </div>

                          <div className="flex justify-between text-[9px] tracking-wider text-secondary/60 border-t border-outline-variant/20 pt-4 font-semibold uppercase relative z-10">
                            <span>CABINET SYSTEM</span>
                            <span>PRECISION GEOMETRY</span>
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
            4. MATERIALS & FINISHES EXPERIENCE
            ======================================== */}
        <section className="py-32 bg-surface-container border-t border-b border-outline-variant/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none blueprint-grid" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-24">
              <div className="lg:col-span-6">
                <FadeIn direction="right" duration={0.8} className="space-y-4">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                    Sensory Selection
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[46px] leading-tight text-on-surface font-normal">
                    Materials & Finishes
                  </h2>
                </FadeIn>
              </div>
              <div className="lg:col-span-6">
                <FadeIn direction="left" delay={0.15} duration={0.8} className="space-y-4">
                  <p className="text-[15.5px] leading-relaxed text-secondary">
                    "Luxury lives in craftsmanship. Every finish shapes experience." We curate tactile, structural materials in their rawest forms—wire-brushed oak, anti-fingerprint lacquers, cast stone counters—matching design elegance with physical durability.
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Tactile Material Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sensoryMaterials.map((mat, idx) => (
                <FadeIn
                  key={mat.title}
                  direction="up"
                  delay={idx * 0.05}
                  duration={0.8}
                >
                  <div className="bg-surface-container-lowest p-8 rounded border border-outline-variant/30 flex flex-col justify-between shadow-elevated h-full relative group">
                    <div className="space-y-4">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2.5 py-0.5 rounded inline-block">Material 0{idx+1}</span>
                      <h4 className="font-serif text-[22px] text-on-surface font-normal">{mat.title}</h4>
                      <p className="text-secondary text-[13.5px] leading-relaxed">{mat.desc}</p>
                    </div>
                    <div className="border-t border-outline-variant/20 pt-4 mt-6 text-[9.5px] font-bold text-outline uppercase tracking-wider">
                      {mat.finish}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================
            5. SMART FUNCTIONALITY SECTION
            ======================================== */}
        <section className="py-32 bg-surface relative z-10 border-b border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Side: Modern Luxury Functionality Highlights */}
              <div className="lg:col-span-5 space-y-8">
                <FadeIn direction="right" duration={0.8} className="space-y-6">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                    Smart Architecture
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[46px] leading-tight text-on-surface font-normal">
                    Seamless Functionality
                  </h2>
                  <p className="font-sans text-[15.5px] leading-relaxed text-secondary">
                    Our kitchens combine beautiful form with functional capability. We incorporate premium soft-close mechanics, dynamic space configurations, and smart organizational accessories to optimize your daily culinary experience.
                  </p>
                </FadeIn>
              </div>

              {/* Right Side: Smart Features Floating Matrix */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {smartFeatures.map((feat, idx) => (
                  <FadeIn
                    key={feat.title}
                    direction="up"
                    delay={idx * 0.08}
                    duration={0.8}
                  >
                    <div className="bg-surface-container p-6 rounded border border-outline-variant/25 flex flex-col justify-between h-full hover:border-primary/40 transition-colors duration-300">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-sans text-[9px] font-bold tracking-widest text-primary/70 uppercase">INTELLIGENCE // 0{idx+1}</span>
                          <span className="font-sans text-[9px] font-bold text-outline uppercase">{feat.metric}</span>
                        </div>
                        <h4 className="font-serif text-[18px] text-on-surface font-semibold">{feat.title}</h4>
                        <p className="font-sans text-secondary text-[13px] leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ========================================
            6. MODULAR KITCHEN PROCESS JOURNEY
            ======================================== */}
        <section className="py-32 bg-surface relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  MAKING OF SYSTEMS
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Our Culinary Process
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
                      <h4 className="font-serif text-[16px] text-on-surface font-semibold leading-tight">{step.title}</h4>
                      <p className="text-secondary text-[12px] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================
            7. FEATURED KITCHEN PROJECTS
            ======================================== */}
        <section className="py-32 bg-surface relative z-10 border-t border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  FEATURED PROJECTS
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Landmark Kitchen Executions
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
                      
                      <div className="space-y-2">
                        <h3 className="font-serif text-[22px] text-on-surface font-normal group-hover:text-primary transition-colors duration-300 leading-tight">
                          {project.name}
                        </h3>
                        <span className="font-sans text-[12px] text-secondary/65 uppercase block tracking-wider">{project.type}</span>
                      </div>
                      
                      <p className="font-sans text-[14px] leading-relaxed text-secondary">
                        A bespoke culinary center built with absolute casework tolerances, customized soft-close runner arrays, and monolithic stone detailing.
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
            8. WHY BOULDSPACE KITCHENS
            ======================================== */}
        <section className="py-32 bg-surface relative z-10 border-t border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  STUDIO STANDARDS
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Why Bouldspace Kitchens
                </h2>
              </FadeIn>
            </div>

            {/* Differentiators Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
              {[
                { title: "Personalized Planning", desc: "No generic templates. We coordinate kitchen plans based on culinary triangle optimization." },
                { title: "Premium Finishes", desc: "Anti-fingerprint matte coatings, solid oak frames, and core-colored high-pressure laminates." },
                { title: "Intelligent Layouts", desc: "Space-maximizing deca-drawer systems and pullouts optimized for cubic volumetric yield." },
                { title: "Seamless Execution", desc: "Millimeter-level certified craftsmen installation and continuous warranty support." }
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
                    <span className="font-sans text-[9px] font-bold tracking-widest text-primary/30 uppercase mt-4">SCHEME // K-{idx+1}</span>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================
            9. TESTIMONIAL EXPERIENCE
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
                "Bouldspace designed our kitchen with incredible attention to detail. Every drawer pulls out smoothly on high-grade German runners, and the seamless solid travertine island looks stunning. The absolute precision of their casework team sets them apart."
              </blockquote>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.8} className="space-y-1 font-sans">
              <cite className="font-serif text-[18px] text-surface-bright not-italic block font-normal">Karan Thapar</cite>
              <span className="text-[10px] text-[#cdc5c0] uppercase tracking-wider">Estate Owner, Magnolias, Gurugram</span>
            </FadeIn>
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
                Studio Briefing
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1} duration={0.8}>
              <h2 className="font-serif text-[42px] sm:text-[56px] leading-tight text-on-surface font-normal max-w-3xl">
                Luxury Kitchens Begin With Intelligent Design.
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} duration={0.8}>
              <p className="font-sans text-[16px] sm:text-[18px] leading-relaxed text-secondary max-w-xl">
                Partner with Bouldspace to create modular kitchens that blend elegance, comfort, and precision craftsmanship.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.8} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="primary" showArrow={true} href="/contact?ref=kit-cta-book">
                Start Your Kitchen Project
              </Button>
              <Button variant="secondary" showArrow={false} href="/contact?ref=kit-cta-start">
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
