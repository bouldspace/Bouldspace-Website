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
  Bookmark
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";

export default function FurnitureDecorServicePage() {
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

  // 1. Curation Style Showcase Data
  const curationStyles = [
    {
      title: "Luxury Living Rooms",
      subtitle: "The Obsidian Salon",
      desc: "Plush organic curved armchairs paired with monolithic stone block tables and hand-woven textured wool rugs that define conversational zones.",
      metric: "Upholstery: Elite Boucle",
      details: ["Curved conversational armchairs", "Solid raw stone side slabs", "Seamless textured wool weaves"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Curved Lounge Sofa / Armchair layout */}
          <path d="M 80,140 C 80,100 130,80 180,95 C 230,110 270,80 320,100 L 320,165 C 320,175 310,180 290,180 L 110,180 C 90,180 80,175 80,165 Z" className="stroke-primary/45 fill-primary/[0.005]" />
          
          {/* Overlapping stone block table silhouette */}
          <rect x="130" y="145" width="80" height="20" rx="1.5" className="stroke-primary/35 fill-primary/5" />
          <rect x="180" y="135" width="60" height="20" rx="1.5" className="stroke-outline/45 fill-outline/[0.005]" />
          
          {/* Linear light ray */}
          <polygon points="40,0 120,0 220,240 140,240" className="fill-primary/[0.01] stroke-none" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">SALON GEOMETRIC SILHOUETTE</text>
        </svg>
      )
    },
    {
      title: "Designer Bedrooms",
      subtitle: "The Linen Atelier",
      desc: "Custom padded linen bedheads in warm neutral tones, floating solid teakwood side tables, and suspended brass pendant lamps casting soft downlighting.",
      metric: "Dressing: Pure Belgian Linen",
      details: ["Bespoke padded fabric headboards", "Teak floating bedside blocks", "Low-glare brass downlighting drops"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Woven headboard silhouette, organic side tables */}
          <rect x="70" y="55" width="260" height="110" rx="2" className="stroke-primary/35 fill-primary/[0.003]" />
          {/* Headboard tufting squares */}
          <line x1="70" y1="110" x2="330" y2="110" className="stroke-outline/15" />
          <line x1="135" y1="55" x2="135" y2="165" className="stroke-outline/15" />
          <line x1="200" y1="55" x2="200" y2="165" className="stroke-outline/15" />
          <line x1="265" y1="55" x2="265" y2="165" className="stroke-outline/15" />
          
          {/* Cushions layers */}
          <rect x="90" y="115" width="90" height="35" rx="1.5" className="stroke-primary/45 fill-primary/5" />
          <rect x="220" y="115" width="90" height="35" rx="1.5" className="stroke-primary/45 fill-primary/5" />
          
          {/* Brass pendant lamp drop */}
          <line x1="200" y1="30" x2="200" y2="70" className="stroke-outline/25" />
          <circle cx="200" cy="75" r="5" className="stroke-primary/40 fill-primary/10" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">BED CHAMBER VOLUME AXIS</text>
        </svg>
      )
    },
    {
      title: "Dining Styling",
      subtitle: "The Travertine Pavilion",
      desc: "Massive natural edge travertine stone dining tables paired with organic leather dining chairs, detailed with minimalist matte black metal bases.",
      metric: "Seating: Integrated Curations",
      details: ["Travertine stone dining surfaces", "Saddle leather dining chairs", "Matte black coordinate frames"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Massive dining table profile, cascading chandelier outlines */}
          <rect x="80" y="110" width="240" height="20" rx="1.5" className="stroke-primary/45 fill-primary/[0.005]" />
          <path d="M 120,130 L 105,185 M 280,130 L 295,185" className="stroke-outline/35" />
          
          {/* Cascading glass chandelier */}
          <line x1="200" y1="30" x2="200" y2="75" className="stroke-primary/30" />
          <circle cx="200" cy="80" r="10" className="stroke-primary/40 fill-primary/10" />
          <circle cx="180" cy="80" r="6" className="stroke-outline/25" />
          <circle cx="220" cy="80" r="6" className="stroke-outline/25" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">DINING VOLUME CONTOURS</text>
        </svg>
      )
    },
    {
      title: "Accent Furniture",
      subtitle: "The Sculptural Block",
      desc: "Stylized organic accent pieces—hand-turned solid oak stool blocks, raw travertine columns, and concrete plinths that elevate decorative artifacts.",
      metric: "Craft: Artisanal Hand-cut",
      details: ["Travertine plinth columns", "Exposed concrete block decks", "Solid hand-turned oak blocks"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Pedestals and sculptural bowl outlines */}
          {/* Pedestal */}
          <rect x="160" y="110" width="80" height="75" rx="2" className="stroke-primary/45 fill-primary/[0.003]" />
          
          {/* Ceramic sculptural bowl contour */}
          <path d="M 170,110 C 160,85 180,75 200,75 C 220,75 240,85 230,110 Z" className="stroke-primary/40 fill-primary/5" />
          
          {/* Dry branch shadow */}
          <path d="M 200,75 C 205,35 220,20 230,15 M 200,75 Q 190,45 175,35" className="stroke-outline/35" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">SCULPTURAL PEDESTAL AXIS</text>
        </svg>
      )
    },
    {
      title: "Lighting & Decor",
      subtitle: "The Luminary Curation",
      desc: "Suspended brass tubes, hand-blown glass globes, textured clay plaster table bases, and linen drapery coordinates that soften high-contrast visual fields.",
      metric: "Light Hue: Warm 2700K",
      details: ["Hand-blown custom glass globes", "Textured clay lamp casings", "Seamless warm lighting paths"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Arched task floor lamp, clay vase, book pile */}
          {/* Arched lamp */}
          <path d="M 280,180 L 280,110 C 280,60 160,40 130,80" className="stroke-primary/45 stroke-[1.2]" />
          <path d="M 120,80 L 140,80 L 130,95 Z" className="stroke-primary/40 fill-primary/10" />
          
          {/* Clay vase outline */}
          <path d="M 160,180 C 150,150 160,135 175,135 C 190,135 200,150 190,180 Z" className="stroke-outline/45" />
          
          {/* Stack of books */}
          <rect x="210" y="165" width="50" height="8" rx="0.5" className="stroke-outline/35" />
          <rect x="205" y="173" width="58" height="7" rx="0.5" className="stroke-outline/35" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">LUMINARY DECOR DETAILS</text>
        </svg>
      )
    },
    {
      title: "Wall Styling",
      subtitle: "The Canvas Vignette",
      desc: "Large-format canvas art frames with raw maple wood borders, suspended woven wool tapestries, and vertical oak wood plank panelling overlays.",
      metric: "Proportion: Volumetric Focus",
      details: ["Raw maple wood frame borders", "Woven wool spatial tapestries", "Oak wood plank overlays"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Layered canvas frames and wooden slats background */}
          {/* Wood panels background */}
          <line x1="80" y1="40" x2="80" y2="180" className="stroke-outline/15" />
          <line x1="100" y1="40" x2="100" y2="180" className="stroke-outline/15" />
          <line x1="120" y1="40" x2="120" y2="180" className="stroke-outline/15" />
          <line x1="140" y1="40" x2="140" y2="180" className="stroke-outline/15" />
          
          {/* Art frame 1 */}
          <rect x="160" y="50" width="100" height="120" rx="1" className="stroke-primary/45 fill-primary/[0.003] stroke-[1.2]" />
          {/* Abstract curve in frame */}
          <path d="M 180,150 Q 210,80 240,110" className="stroke-primary/30" />
          
          {/* Overlapping smaller frame */}
          <rect x="230" y="90" width="80" height="80" rx="1" className="stroke-outline/45 fill-surface shadow-elevated" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">CANVAS MOUNTING ALIGNMENT</text>
        </svg>
      )
    },
    {
      title: "Contemporary Furniture",
      subtitle: "The Modular Sectional",
      desc: "Low-profile sectional leather sofas with customizable corner block extensions, finished in raw saddle leathers that gain a beautiful patina over time.",
      metric: "Upholstery: Saddle Leather",
      details: ["Low-slung modular cushions", "Saddle leather patina bases", "Asymmetric side tables integration"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Modular sectional sofa sketch, low profile */}
          <rect x="60" y="110" width="280" height="60" rx="2" className="stroke-primary/45 fill-primary/[0.005]" />
          {/* Seams dividing cushions */}
          <line x1="150" y1="110" x2="150" y2="170" className="stroke-outline/25" />
          <line x1="250" y1="110" x2="250" y2="170" className="stroke-outline/25" />
          
          {/* Low solid wood base platform */}
          <rect x="50" y="170" width="300" height="10" rx="1" className="stroke-outline/40 fill-primary/5" />
          
          {/* Attached side table block */}
          <rect x="310" y="140" width="30" height="30" rx="0.5" className="stroke-primary/30" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">LOW SECTIONAL CASEWORK // MOD-01</text>
        </svg>
      )
    },
    {
      title: "Minimal Luxury Spaces",
      subtitle: "The Spatial Atelier",
      desc: "Highly curated spatial volumes focusing on absolute whitespace. A single custom lounge chair placed strategically under natural light streams to emphasize shape.",
      metric: "Whitespace Ratio: 85%",
      details: ["Curated singular armchairs", "Strategic natural light rays", "Uncluttered volumetric framing"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Minimalist armchair silhouette with heavy whitespace focus */}
          <polygon points="120,0 200,0 300,240 220,240" className="fill-primary/[0.015] stroke-none" />
          
          {/* ARMCHAIR Outline */}
          <path d="M 160,130 C 160,105 185,95 210,105 C 235,115 250,105 250,130 L 250,165 C 250,170 240,175 220,175 L 190,175 C 170,175 160,170 160,165 Z" className="stroke-primary/45 fill-primary/[0.003] stroke-[1.2]" />
          {/* Accent lighting focus halo */}
          <circle cx="205" cy="135" r="45" className="stroke-primary/10 stroke-dasharray-[2_4]" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">MINIMAL ATELIER CONTOURS</text>
        </svg>
      )
    }
  ];

  // 2. Materials & Finishes Sensory Curation
  const sensoryMaterials = [
    {
      title: "Wood Textures",
      desc: "Wire-brushed solid oak, sand-oiled ash, and raw walnut blocks showing natural grain paths and interlocking joints.",
      finish: "Texture: Raw Matte Timber"
    },
    {
      title: "Marble Detailing",
      desc: "Monolithic travertine stone blocks and honed marble decks, sourced for their structural density and beautiful vein lines.",
      finish: "Finish: Honed Silk Stone"
    },
    {
      title: "Fabric Finishes",
      desc: "Curated boucle weaves, raw Belgian linens, and structured saddle leathers selected to balance physical comfort and visual warmth.",
      finish: "Upholstery: Boucle & Linen"
    },
    {
      title: "Metallic Accents",
      desc: "Hand-brushed brass rods, structural hot-rolled steel grids, and anodized aluminum trims that define spatial grids.",
      finish: "Details: Hand-Brushed Metal"
    },
    {
      title: "Decor Craftsmanship",
      desc: "Clay vases cast in local ceramic studios, organic wood vessels, and hand-woven wool carpets carrying distinct character.",
      finish: "Curation: Artisanal Pieces"
    },
    {
      title: "Luxury Materials",
      desc: "Handpicked components from international design houses, balancing structural integrity with absolute styling prestige.",
      finish: "Standards: Globally Sourced"
    }
  ];

  // 3. Curated Styling 7-Stage Process
  const processSteps = [
    { step: "01", title: "Space Understanding", desc: "Analyzing spatial wind, window light paths, and natural volume flow before introducing physical furniture coordinates." },
    { step: "02", title: "Styling Direction", desc: "Establishing custom layout briefs, digital mood board swatches, color maps, and initial scale alignments." },
    { step: "03", title: "Furniture Selection", desc: "Sourcing sculptural curved sofas, travertine consoles, accent block plinths, and custom bedside decks." },
    { step: "04", title: "Material Coordination", desc: "Matching raw wood blocks against linen curtain draperies, boucle textures, and matte metallic accents." },
    { step: "05", title: "Decor Layering", desc: "Positioning hand-cast ceramic vases, coffee table books, abstract canvas frames, and suspensions." },
    { step: "06", title: "Installation & Styling", desc: "Certified craftsmen arranging elements on-site, aligning spotlights, and testing spatial acoustics." },
    { step: "07", title: "Final Spatial Experience", desc: "Performing deep cleaning, reviewing material balance, and handoff of the refined space." }
  ];

  // 4. Featured Spaces Curation
  const featuredSpaces = [
    { name: "The Linen Library", space: "Bespoke Study Lounge", location: "Golf Course Road, Gurugram", theme: "Tactile Editorial" },
    { name: "The Marble Atelier", space: "Monolithic Living Area", location: "Whitefield, Bengaluru", theme: "Earthy Brutalism" },
    { name: "The Oak Pavilion", space: "Penthouse Dining Deck", location: "Koramangala, Bengaluru", theme: "Refined Minimalist" }
  ];

  return (
    <>
      <Header />
      <main ref={containerRef} className="flex-grow bg-surface overflow-hidden">
        
        {/* ========================================
            1. HERO SECTION — CINEMATIC
            ======================================== */}
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-36 pb-24 overflow-hidden bg-surface text-on-surface border-b border-outline-variant/15">
          
          {/* Immersive Parallax Backdrop - Custom Curation Artistic SVG (Lounge Chair, Overlapping Swatches, Sunbeams) */}
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
          >
            <svg className="w-full h-full text-secondary/35 stroke-current stroke-[1] fill-none opacity-90" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
              {/* Natural warm sunlight overlay definitions */}
              <defs>
                <linearGradient id="sunlight-beams-decor" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.08" />
                  <stop offset="40%" stopColor="var(--color-primary)" stopOpacity="0.02" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Sunlight slanted beams */}
              <polygon points="0,0 200,0 550,600 150,600" fill="url(#sunlight-beams-decor)" />
              <polygon points="400,0 550,0 950,600 750,600" fill="url(#sunlight-beams-decor)" />
              
              {/* Overlaying custom styling elements */}
              {/* Tall decorative grid room divider screen overlay */}
              <rect x="250" y="80" width="160" height="360" rx="1.5" className="stroke-outline/25 fill-outline/[0.002]" />
              <line x1="290" y1="80" x2="290" y2="440" className="stroke-outline/15" />
              <line x1="330" y1="80" x2="330" y2="440" className="stroke-outline/15" />
              <line x1="370" y1="80" x2="370" y2="440" className="stroke-outline/15" />
              
              {/* Sculptural Living Lounge Armchair outline in high contrast */}
              <path d="M 440,240 C 440,160 520,150 560,170 C 600,190 660,150 710,180 L 710,280 C 710,295 690,305 660,305 L 490,305 C 460,305 440,295 440,280 Z" className="stroke-primary/45 fill-primary/[0.005] stroke-[1.2]" />
              
              {/* Overlapping side coffee tables */}
              <ellipse cx="440" cy="330" rx="35" ry="8" className="stroke-outline/35 fill-surface" />
              <ellipse cx="490" cy="315" rx="25" ry="6" className="stroke-primary/35 fill-surface shadow-elevated" />
              
              {/* Arched decor silhouette */}
              <path d="M 680,305 Q 720,240 700,210" className="stroke-outline/30" />
              
              {/* Draped cozy fabric throw */}
              <path d="M 520,240 C 535,260 540,285 555,285 C 570,285 575,260 590,260" className="stroke-primary/25" />
              
              {/* Artistic sitemap label */}
              <text x="215" y="45" textAnchor="start" className="font-sans text-[7.5px] fill-secondary/55 font-bold uppercase tracking-[0.25em]">BOULDSPACE SCULPTURAL EDITORIAL</text>
              <text x="785" y="45" textAnchor="end" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-[0.25em]">STYLING MODEL: FD-95</text>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </motion.div>

          {/* Diffused spotlight blur */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-10" />

          {/* Intersecting grid lines */}
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
                Bespoke Curation
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="font-serif text-[48px] sm:text-[68px] md:text-[84px] leading-[1.05] tracking-tight font-normal text-on-surface max-w-3xl"
              >
                Curated Details. <br />
                Timeless Atmospheres.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-secondary max-w-2xl font-normal"
              >
                Luxury furniture and decor solutions crafted to elevate interiors through elegance, personality, comfort, and refined spatial styling.
              </motion.p>

              <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button variant="primary" showArrow={true} href="/contact?ref=fd-hero">
                  Schedule Consultation
                </Button>
                <Button variant="secondary" showArrow={false} href="#philosophies">
                  Explore Styling Concepts
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating styling markers */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 left-8 md:left-16 z-20 font-sans text-[9px] tracking-[0.25em] uppercase text-secondary/60 hidden sm:flex flex-col gap-1.5 select-none pointer-events-none"
          >
            <span className="text-primary font-bold">Tactile Dressing</span>
            <span>BOULDSPACE PROTOCOL FD-95</span>
            <span>INDEX // FURNITURE CURATION</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 right-8 md:right-16 z-20 font-sans text-[9px] tracking-[0.25em] uppercase text-secondary/60 text-right hidden sm:flex flex-col gap-1.5 select-none pointer-events-none"
          >
            <span className="text-primary font-bold">Material Harmony</span>
            <span>06 CHAPTERS // STYLING STAGES</span>
            <span>CURATION LAB // GURUGRAM</span>
          </motion.div>
        </section>

        {/* ========================================
            2. DESIGN STYLING PHILOSOPHY
            ======================================== */}
        <section id="philosophies" className="py-32 bg-surface relative z-10 border-b border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Asymmetrical Editorial Heading */}
              <div className="lg:col-span-5 space-y-6">
                <FadeIn direction="right" duration={0.8} className="space-y-4">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 px-3 py-1 rounded inline-block">
                    01 // Styling Vision
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[46px] leading-tight text-on-surface font-normal">
                    Transforming spaces through curated details.
                  </h2>
                </FadeIn>
              </div>

              {/* Right Column: Narrative Storytelling */}
              <div className="lg:col-span-7 font-sans text-[16px] leading-relaxed text-secondary space-y-6 border-l border-outline-variant/25 pl-6 lg:pl-12">
                <FadeIn direction="left" delay={0.15} duration={0.8} className="space-y-6">
                  <p>
                    A beautiful structure represents a physical envelope, but its soul is defined by tactile curation. At Bouldspace, we treat furniture and decor curation as an artistic endeavor. We avoid mass-produced templates and catalog arrangements, planning spatial styling to map your individual living habits.
                  </p>
                  <p>
                    Every spatial overlay balances aesthetics with absolute comfort. Sourcing wire-brushed ash timbers, honed marble blocks, textured boucle fabrics, and custom suspensions, we establish harmony across coordinates. The result is a space that feels deeply personal, warm, and visually memorable.
                  </p>
                </FadeIn>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================
            3. FURNITURE & DECOR EXPERIENCE SHOWCASE
            ======================================== */}
        <section className="py-32 bg-surface relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  STYLING EXAMPLES
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Expertise in Styling
                </h2>
              </FadeIn>
            </div>

            {/* Alternating Asymmetrical Style Layouts */}
            <div className="space-y-36">
              {curationStyles.map((style, idx) => {
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
                            Curation Group 0{idx + 1}
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
                            <span>CURATION DESIGN // FD-STYLE-0{idx + 1}</span>
                            <span className="text-primary">[VOLUMETRIC FURNISHING]</span>
                          </div>

                          <div className="relative w-full h-full my-auto flex items-center justify-center py-4">
                            {style.svg}
                          </div>

                          <div className="flex justify-between text-[9px] tracking-wider text-secondary/60 border-t border-outline-variant/20 pt-4 font-semibold uppercase relative z-10">
                            <span>STYLE STANDARD</span>
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
            4. MATERIALS & TEXTURE EXPERIENCE
            ======================================== */}
        <section className="py-32 bg-surface-container border-t border-b border-outline-variant/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none blueprint-grid" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-24">
              <div className="lg:col-span-6">
                <FadeIn direction="right" duration={0.8} className="space-y-4">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                    Sensory Details
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[46px] leading-tight text-on-surface font-normal">
                    Material & Textures
                  </h2>
                </FadeIn>
              </div>
              <div className="lg:col-span-6">
                <FadeIn direction="left" delay={0.15} duration={0.8} className="space-y-4">
                  <p className="text-[15.5px] leading-relaxed text-secondary">
                    "Luxury is felt before it is seen. Details create atmosphere." We handpick visual assets from the finest global materials—matte timber panels, porous travertine stone, soft-loop boucle fabrics—matching styling coordinates with spatial warmth.
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
            5. CURATED STYLING PROCESS
            ======================================== */}
        <section className="py-32 bg-surface relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  STYLING STEPS
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Our Curation Process
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
            6. FEATURED SPACES SHOWCASE
            ======================================== */}
        <section className="py-32 bg-surface relative z-10 border-t border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  STUDIO MONOGRAPHS
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Bespoke Styling Concepts
                </h2>
              </FadeIn>
            </div>

            {/* Masonry portfolio showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredSpaces.map((space, idx) => (
                <FadeIn
                  key={idx}
                  direction="up"
                  delay={idx * 0.08}
                  duration={0.8}
                >
                  <div className="rounded border border-outline-variant/20 bg-surface-container-lowest p-8 flex flex-col justify-between shadow-elevated hover:border-primary/45 transition-all duration-300 group h-full">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-outline">CONCEPT {idx+1}</span>
                        <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2.5 py-0.5 rounded">{space.theme}</span>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-serif text-[22px] text-on-surface font-normal group-hover:text-primary transition-colors duration-300 leading-tight">
                          {space.name}
                        </h3>
                        <span className="font-sans text-[12px] text-secondary/65 uppercase block tracking-wider">{space.space}</span>
                      </div>
                      
                      <p className="font-sans text-[14px] leading-relaxed text-secondary">
                        A curated interior Curation displaying absolute volumetric hierarchy, organic texture balances, and bespoke furniture block integrations.
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
            7. WHY BOULDSPACE STYLING
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
                  Why Bouldspace Curation
                </h2>
              </FadeIn>
            </div>

            {/* Differentiators Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
              {[
                { title: "Bespoke Selection", desc: "No pre-packaged catalogs. We coordinate furniture pieces matching the spatial brief." },
                { title: "Timeless Curation", desc: "Anti-glare matte timbers, solid stone consoles, and core-colored hardware accents." },
                { title: "Material Harmony", desc: "We coordinate textures contextually—boucle weaves, leathers, and metal details." },
                { title: "Seamless Handover", desc: "Direct coordinate supervision of on-site craftsmen, lighting channels setup, and keys release." }
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
                    <span className="font-sans text-[9px] font-bold tracking-widest text-primary/30 uppercase mt-4">COORD // FD-{idx+1}</span>
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
                "Bouldspace styled our penthouse study library with incredible warmth and material harmony. We selected solid raw stone block consoles and custom Belgian linens that filter the morning sunbeams beautifully. Their curations are pure spatial artwork."
              </blockquote>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.8} className="space-y-1 font-sans">
              <cite className="font-serif text-[18px] text-surface-bright not-italic block font-normal">Nisha Kothari</cite>
              <span className="text-[10px] text-[#cdc5c0] uppercase tracking-wider">Penthouse Owner, Golf Course Road, Gurugram</span>
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
                Spaces Become Memorable Through Details.
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} duration={0.8}>
              <p className="font-sans text-[16px] sm:text-[18px] leading-relaxed text-secondary max-w-xl">
                Partner with Bouldspace to create refined interiors through curated furniture, decor, and timeless styling experiences.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.8} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="primary" showArrow={true} href="/contact?ref=fd-cta-book">
                Start Styling Consultation
              </Button>
              <Button variant="secondary" showArrow={false} href="/services/interior-design">
                Explore Interior Services
              </Button>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
