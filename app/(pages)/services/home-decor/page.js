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
  Home
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";

export default function HomeDecorServicePage() {
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
  const decorStyles = [
    {
      title: "Living Room Styling",
      subtitle: "The Terracotta Hearth",
      desc: "Cozy fireplace mantel shelves custom-styled with organic clay vases, tapered beeswax candles, and layered textured brick panels.",
      metric: "Warmth Factor: High",
      details: ["Textured clay vessels layering", "Solid travertine mantel decks", "Cascading indoor ivy planter drops"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Fireplace mantel shelf layout */}
          <rect x="70" y="140" width="260" height="15" rx="1.5" className="stroke-primary/45 fill-primary/[0.003] stroke-[1.2]" />
          <path d="M 90,155 L 90,210 M 310,155 L 310,210" className="stroke-outline/25" />
          
          {/* Styled clay vases on mantel shelf */}
          <path d="M 120,140 Q 110,110 120,95 Q 125,90 130,90 Q 135,90 140,95 Q 150,110 140,140 Z" className="stroke-primary/40 fill-primary/5" />
          
          {/* Layered photo frames */}
          <rect x="170" y="80" width="55" height="60" rx="1" className="stroke-outline/35 fill-surface" />
          <rect x="210" y="95" width="45" height="45" rx="1" className="stroke-outline/35 fill-surface shadow-elevated" />
          
          {/* Hanging ivy leaves outline */}
          <path d="M 280,140 Q 285,170 275,190 M 285,150 Q 295,175 290,185" className="stroke-primary/30" />
          <text x="200" y="222" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">HEARTH MANTEL SILHOUETTE</text>
        </svg>
      )
    },
    {
      title: "Bedroom Decor",
      subtitle: "The Velvet Atelier",
      desc: "Plush organic layered linen quilts, textured velvet scatter cushions, and bedside styling trays holding customized hand-thrown clay mugs and candles.",
      metric: "Layering Index: 04",
      details: ["Belgian linen quilted covers", "Tasseled silk-velvet scatter cushions", "Artisanal bedside styling trays"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Layered cozy bed quilts and bedside styled tray outlines */}
          {/* Bed frame structure */}
          <rect x="70" y="60" width="260" height="110" rx="1.5" className="stroke-primary/35 fill-primary/[0.003]" />
          
          {/* Cozy layers of bed quilts */}
          <path d="M 70,110 C 110,115 150,105 200,110 C 250,115 290,105 330,110 L 330,170 L 70,170 Z" className="stroke-primary/45 fill-primary/5" />
          <path d="M 70,135 C 110,140 150,130 200,135 C 250,140 290,130 330,135" className="stroke-outline/25" />
          
          {/* Scatter cushions layers */}
          <rect x="90" y="75" width="55" height="35" rx="2" className="stroke-outline/40" />
          <rect x="255" y="75" width="55" height="35" rx="2" className="stroke-outline/40" />
          <rect x="155" y="85" width="90" height="25" rx="2" className="stroke-outline/25" />
          
          {/* Cozy tray on bed */}
          <rect x="160" y="145" width="80" height="10" rx="0.5" className="stroke-outline/35 fill-surface" />
          <circle cx="180" cy="140" r="3.5" className="stroke-primary/45" />
          <circle cx="210" cy="140" r="4.5" className="stroke-primary/45" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">BED CHAMBER LAYERING PROTOCOL</text>
        </svg>
      )
    },
    {
      title: "Dining Ambience",
      subtitle: "The Linen Conservatory",
      desc: "Sculptural organic ceramic dinner plates, hand-woven linen table runners, and raw timber napkin rings that set a tactile, memorable dining mood.",
      metric: "Setting: Contextual Craft",
      details: ["Hand-cast ceramic dinnerwares", "Open-weave linen table runners", "Hand-oiled wood napkin rings"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Ceramic plates, napkin layout, low floral centerpiece */}
          <rect x="80" y="110" width="240" height="18" rx="1.5" className="stroke-primary/45 fill-primary/[0.005]" />
          
          {/* Plates setting silhouettes */}
          <ellipse cx="140" cy="110" rx="25" ry="4" className="stroke-outline/35" />
          <ellipse cx="140" cy="110" rx="18" ry="3" className="stroke-primary/35" />
          
          <ellipse cx="260" cy="110" rx="25" ry="4" className="stroke-outline/35" />
          <ellipse cx="260" cy="110" rx="18" ry="3" className="stroke-primary/35" />
          
          {/* Low centerpiece organic floral vessel */}
          <path d="M 185,110 C 185,90 215,90 215,110 Z" className="stroke-primary/45 fill-primary/10" />
          <path d="M 200,90 Q 200,60 190,45 M 200,80 Q 215,65 225,60" className="stroke-outline/30" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">DINING ATMOSPHERE OUTLINE</text>
        </svg>
      )
    },
    {
      title: "Lighting Concepts",
      subtitle: "The Amber Glow",
      desc: "Custom cozy ambient table lamps with textured linen shades, glowing task drop lights, and low-profile warm wall sconces that establish distinct shadow fields.",
      metric: "Atmosphere Hue: Warm 2700K",
      details: ["Cozy table lamps with linen shades", "Suspended drop glass pendants", "Intelligent accent shadow paths"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Table lamps glowing, glass drop pendants, sconce shadows */}
          {/* Lamp base */}
          <rect x="180" y="125" width="40" height="50" rx="2" className="stroke-primary/45 fill-primary/[0.003]" />
          {/* Glowing linen shade */}
          <path d="M 170,125 L 230,125 L 215,85 L 185,85 Z" className="stroke-primary/45 fill-primary/10 stroke-[1.2]" />
          
          {/* Ambient glow circle */}
          <circle cx="200" cy="110" r="45" className="stroke-primary/15 stroke-dasharray-[2_4]" />
          
          {/* Suspended glass pendant lights drop */}
          <line x1="110" y1="30" x2="110" y2="70" className="stroke-outline/25" />
          <circle cx="110" cy="75" r="5" className="stroke-outline/35" />
          
          <line x1="290" y1="30" x2="290" y2="70" className="stroke-outline/25" />
          <circle cx="290" cy="75" r="5" className="stroke-outline/35" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">LUMINARY SHADOW GRIDS</text>
        </svg>
      )
    },
    {
      title: "Wall Decor & Art",
      subtitle: "The Curated Canvas",
      desc: "Abstract hand-painted artwork canvases with solid wood frame coordinates, structured linen hanging tapestries, and floating book ledges.",
      metric: "Framing: Hand-milled Maple",
      details: ["Hand-milled solid wood art frames", "Linen hanging tapestry coordinates", "Bespoke floating book deck ledges"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Art frame panels, wooden ledges holding decor */}
          {/* Tall canvas frame */}
          <rect x="100" y="45" width="90" height="120" rx="1.5" className="stroke-primary/45 fill-primary/[0.003] stroke-[1.2]" />
          {/* Abstract artwork curves */}
          <path d="M 120,135 Q 145,75 170,105" className="stroke-primary/30" />
          
          {/* Overlapping smaller frame */}
          <rect x="160" y="85" width="70" height="80" rx="1" className="stroke-outline/45 fill-surface shadow-elevated" />
          
          {/* Floating book ledge shelf */}
          <rect x="230" y="150" width="80" height="8" rx="0.5" className="stroke-outline/30 fill-primary/5" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">CANVAS ARRANGEMENT MATRIX</text>
        </svg>
      )
    },
    {
      title: "Luxury Accessories",
      subtitle: "The Curated Pedestal",
      desc: "Artisanal textured stone trays, solid marble display pillars, hand-blown glass cloches, and natural branching dry stems.",
      metric: "Procurement: Globally Sourced",
      details: ["Textured raw stone display trays", "Monolithic solid marble pillars", "Hand-blown styling glass cloches"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Pedestal, dry flower branches silhouette on display tray */}
          {/* Solid display pedestal block */}
          <rect x="150" y="130" width="100" height="50" rx="1" className="stroke-primary/40 fill-primary/[0.003]" />
          
          {/* Glass cloche contour */}
          <path d="M 170,130 C 160,80 240,80 230,130 Z" className="stroke-primary/45 fill-primary/5" />
          <circle cx="200" cy="76" r="3" className="stroke-primary/45 fill-surface" />
          
          {/* Branch plant outline inside cloche */}
          <path d="M 200,130 C 205,100 200,90 205,85" className="stroke-outline/35" />
          <path d="M 200,110 Q 185,100 180,95" className="stroke-outline/30" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">CURATED ACCESSORY STANDARDS</text>
        </svg>
      )
    },
    {
      title: "Soft Furnishings",
      subtitle: "The Tactile Drapes",
      desc: "Loose-weave natural linen window drapery waves, cozy boucle throws, and textured velvet pillows coordinate to provide absolute spatial comfort.",
      metric: "Materials: 100% Organic",
      details: ["Natural linen window draperies", "Cozy soft-loop boucle throws", "Textured silk-velvet fabrics"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Linen drapes, boucle throws, velvet pillow outlines */}
          {/* Window casing background */}
          <rect x="90" y="40" width="220" height="140" rx="1" className="stroke-outline/15 stroke-dasharray-[3_3]" />
          
          {/* Loose weave linen window drapery outlines */}
          <path d="M 90,40 Q 100,60 95,90 T 100,140 T 95,180" className="stroke-primary/45 stroke-[1.2]" />
          <path d="M 310,40 Q 300,60 305,90 T 300,140 T 305,180" className="stroke-primary/45 stroke-[1.2]" />
          
          {/* Velvet pillow outline cozy */}
          <rect x="140" y="125" width="60" height="45" rx="3" className="stroke-outline/40 fill-primary/5" />
          {/* Boucle throw over pillow */}
          <path d="M 180,125 C 190,140 185,160 195,160 C 205,160 210,140 220,140" className="stroke-primary/30" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">TACTILE SOFT GEOMETRY</text>
        </svg>
      )
    },
    {
      title: "Contemporary Styling",
      subtitle: "The Brutalist Fireplace",
      desc: "Minimal fireplace styling layouts pairing custom geometric concrete structures with organic black metal frames and warm ambient candlelight accents.",
      metric: "Staging: High-End Monolithic",
      details: ["Bespoke geometric concrete fireplaces", "Black steel coordinate frames", "Soft ambient candlelight layouts"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Fireplace concrete layout, styled candelabras */}
          <rect x="90" y="60" width="220" height="110" rx="2" className="stroke-primary/35 fill-primary/[0.003]" />
          
          {/* Stool logs inside fireplace */}
          <circle cx="200" cy="140" r="10" className="stroke-primary/30" />
          <circle cx="185" cy="148" r="8" className="stroke-primary/30" />
          <circle cx="215" cy="148" r="8" className="stroke-primary/30" />
          
          {/* Sleek black metal frames */}
          <rect x="130" y="90" width="140" height="80" rx="1" className="stroke-primary/45" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">BRUTALIST ATELIER CONTOURS</text>
        </svg>
      )
    }
  ];

  // 2. Textures & Detail Experience Curation
  const sensoryMaterials = [
    {
      title: "Fabrics Curation",
      desc: "Open-weave natural Belgian linens, soft-loop organic boucle threads, and velvet fabrics selected to provide absolute visual warmth.",
      finish: "Texture: Raw Matte Softness"
    },
    {
      title: "Lighting Moods",
      desc: "Low-glare 2700K warm LED tracks combined with cozy linen table lamps that cast soft shadow lines across your space.",
      finish: "Illumination: Warm Accent Glow"
    },
    {
      title: "Textures Harmony",
      desc: "Textured plaster blocks, exposed brick contours, and honed travertine stone decks structured to add volumetric depth.",
      finish: "Finishes: Layered Plaster & Stone"
    },
    {
      title: "Decor Layering",
      desc: "Procuring artisanal accessories—hand-thrown ceramic clay vessels, solid marble display blocks, and candleholders.",
      finish: "Curation: Handcrafted Elements"
    },
    {
      title: "Natural Materials",
      desc: "Wire-brushed ash timbers, woven seagrass vessels, and natural dried plant stems that introduce organic scale.",
      finish: "Standards: Eco Curation"
    },
    {
      title: "Premium Accessories",
      desc: "Sculptural lighting brackets, leather display trays, and hand-bound coffee table books sourced from elite global studios.",
      finish: "Procurement: International Curation"
    }
  ];

  // 3. Curation styling 6-stage process
  const processSteps = [
    { step: "01", title: "Understanding Lifestyle", desc: "Consultation mapping spatial routines, daily habits, natural daylight paths, and structural volume constraints." },
    { step: "02", title: "Mood & Styling Direction", desc: "Establishing custom decor direction briefs, color coordinate maps, and digital mood board swatches." },
    { step: "03", title: "Material & Decor Curation", desc: "Procuring raw wood blocks, textured linens, local studio ceramics, and premium lighting fixtures." },
    { step: "04", title: "Space Layering", desc: "Planning coordinates for accessories, soft boucle fabrics overlays, and accent table lamp hotspots." },
    { step: "05", title: "Styling & Placement", desc: "Certified styling crews placing decor, adjusting spotlight pathways, and matching volumetric alignments." },
    { step: "06", title: "Atmosphere Creation", desc: "Auditing detail scale, testing room acoustics, and keys handover of the newly styled home." }
  ];

  // 4. Featured Home Styling Spaces
  const featuredSpaces = [
    { name: "The Terracotta Library", space: "Styled Penthouse Lounge", location: "Amaryllis, Delhi", theme: "Earthy Elegance" },
    { name: "The Linen Conservatory", space: "Cozy Family Hearth", location: "Magnolias, Gurugram", theme: "Refined Warmth" },
    { name: "The Alabaster Study", space: "Bespoke Workspace Area", location: "Golf Course Road, Gurugram", theme: "Silent Minimalist" }
  ];

  return (
    <>
      <Header />
      <main ref={containerRef} className="flex-grow bg-surface overflow-hidden">
        
        {/* ========================================
            1. HERO SECTION — CINEMATIC
            ======================================== */}
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-36 pb-24 overflow-hidden bg-surface text-on-surface border-b border-outline-variant/15">
          
          {/* Immersive Parallax Backdrop - Styled Fireplace Mantel, Vases, Planter, Sunlight Rays */}
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
          >
            <svg className="w-full h-full text-secondary/35 stroke-current stroke-[1] fill-none opacity-90" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
              {/* Natural warm lighting glow definitions */}
              <defs>
                <linearGradient id="sunlight-beams-home" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.08" />
                  <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.02" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="fire-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.18" />
                  <stop offset="60%" stopColor="var(--color-primary)" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                </radialGradient>
              </defs>
              
              {/* Sunlight beams */}
              <polygon points="0,0 220,0 580,600 180,600" fill="url(#sunlight-beams-home)" />
              <polygon points="380,0 520,0 920,600 720,600" fill="url(#sunlight-beams-home)" />
              
              {/* Fireplace mantel shelf layout outline in high contrast */}
              {/* Mantel shelf */}
              <rect x="250" y="160" width="500" height="18" rx="2" className="stroke-primary/45 fill-primary/[0.005] stroke-[1.2]" />
              <path d="M 290,178 L 290,480 M 710,178 L 710,480" className="stroke-outline/25" />
              
              {/* Glowing fire hearth circles */}
              <circle cx="500" cy="360" r="100" fill="url(#fire-glow)" className="stroke-none" />
              
              {/* Styled clay vases on mantel shelf */}
              <path d="M 330,160 Q 315,120 330,100 Q 338,92 345,92 Q 352,92 360,100 Q 375,120 360,160 Z" className="stroke-primary/40 fill-primary/5" />
              
              {/* Layered photo frames */}
              <rect x="420" y="80" width="90" height="80" rx="1" className="stroke-outline/35 fill-surface" />
              <rect x="480" y="100" width="70" height="60" rx="1" className="stroke-outline/35 fill-surface shadow-elevated" />
              
              {/* Hanging ivy leaves planter outline */}
              <path d="M 640,160 Q 648,220 635,250 M 648,175 Q 662,215 655,235" className="stroke-primary/30" />
              
              {/* Cozy logs */}
              <circle cx="500" cy="380" r="15" className="stroke-primary/25" />
              <circle cx="475" cy="392" r="12" className="stroke-primary/25" />
              <circle cx="525" cy="392" r="12" className="stroke-primary/25" />
              
              {/* Dynamic sitemap label */}
              <text x="215" y="45" textAnchor="start" className="font-sans text-[7.5px] fill-secondary/55 font-bold uppercase tracking-[0.25em]">BOULDSPACE DECOR EXPERIENCES</text>
              <text x="785" y="45" textAnchor="end" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-[0.25em]">STYLING PROTOCOL: HD-96</text>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </motion.div>

          {/* Diffused warm aura spotlight */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-10" />

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
                Spatial Dressing
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="font-serif text-[48px] sm:text-[68px] md:text-[84px] leading-[1.05] tracking-tight font-normal text-on-surface max-w-3xl"
              >
                Beautiful Spaces <br />
                Begin With Details.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-secondary max-w-2xl font-normal"
              >
                Luxury home decor experiences crafted through refined styling, timeless aesthetics, elegant textures, and personalized spatial harmony.
              </motion.p>

              <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button variant="primary" showArrow={true} href="/contact?ref=hd-hero">
                  Explore Decor Concepts
                </Button>
                <Button variant="secondary" showArrow={false} href="#philosophies">
                  Schedule Styling Consultation
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
            <span className="text-primary font-bold">Atmosphere Styling</span>
            <span>BOULDSPACE PROTOCOL HD-96</span>
            <span>INDEX // DRESSINGS EXPERIENCE</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 right-8 md:right-16 z-20 font-sans text-[9px] tracking-[0.25em] uppercase text-secondary/60 text-right hidden sm:flex flex-col gap-1.5 select-none pointer-events-none"
          >
            <span className="text-primary font-bold">Material Layering</span>
            <span>06 PHASES // DRESSING TIERS</span>
            <span>CURATION HUB // GURUGRAM</span>
          </motion.div>
        </section>

        {/* ========================================
            2. HOME ATMOSPHERE PHILOSOPHY
            ======================================== */}
        <section id="philosophies" className="py-32 bg-surface relative z-10 border-b border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Asymmetrical Editorial Heading */}
              <div className="lg:col-span-5 space-y-6">
                <FadeIn direction="right" duration={0.8} className="space-y-4">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 px-3 py-1 rounded inline-block">
                    01 // Atmosphere Vision
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[46px] leading-tight text-on-surface font-normal">
                    Designed for Cozy Home Curation.
                  </h2>
                </FadeIn>
              </div>

              {/* Right Column: Narrative Storytelling */}
              <div className="lg:col-span-7 font-sans text-[16px] leading-relaxed text-secondary space-y-6 border-l border-outline-variant/25 pl-6 lg:pl-12">
                <FadeIn direction="left" delay={0.15} duration={0.8} className="space-y-6">
                  <p>
                    A premium residence is more than an architectural silhouette—it is an emotional sanctuary. We treat home styling as a sensory monograph, mapping room volumes, textures, and shadows to transform coordinates into deeply warm spaces.
                  </p>
                  <p>
                    Every decor detail is custom-tailored, pairing the warmth of solid ash timber frames against hand-thrown pottery vases, soft-loop boucle throws, and glowing ambient coves. The result is a highly functional space that acts as the physical and social heart of the residence.
                  </p>
                </FadeIn>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================
            3. DECOR EXPERIENCE SHOWCASE
            ======================================== */}
        <section className="py-32 bg-surface relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  STUDIO DRESSINGS
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Expertise in Home Dressing
                </h2>
              </FadeIn>
            </div>

            {/* Alternating Asymmetrical Style Layouts */}
            <div className="space-y-36">
              {decorStyles.map((style, idx) => {
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
                            Curation Tier 0{idx + 1}
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
                            <span>DRESSING PLOT // HD-STYLE-0{idx + 1}</span>
                            <span className="text-primary">[VOLUMETRIC CURATION]</span>
                          </div>

                          <div className="relative w-full h-full my-auto flex items-center justify-center py-4">
                            {style.svg}
                          </div>

                          <div className="flex justify-between text-[9px] tracking-wider text-secondary/60 border-t border-outline-variant/20 pt-4 font-semibold uppercase relative z-10">
                            <span>STYLING STANDARD</span>
                            <span>COZY OUTLINES</span>
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
            4. TEXTURES & DETAIL EXPERIENCE
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
                    Textures & Details
                  </h2>
                </FadeIn>
              </div>
              <div className="lg:col-span-6">
                <FadeIn direction="left" delay={0.15} duration={0.8} className="space-y-4">
                  <p className="text-[15.5px] leading-relaxed text-secondary">
                    "Atmosphere is created through detail. Luxury lives in subtle moments." We curate cozy fabrics, custom lighting configurations, and premium accessories—matching spatial balance with absolute visual comfort.
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
            5. STYLING JOURNEY EXPERIENCE
            ======================================== */}
        <section className="py-32 bg-surface relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  STYLING FLOW
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Our Styling Journey
                </h2>
              </FadeIn>
            </div>

            {/* Process Chronology Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
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
            6. FEATURED HOME STYLING SHOWCASE
            ======================================== */}
        <section className="py-32 bg-surface relative z-10 border-t border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  STUDIO SHOWCASES
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Bespoke Home Dressings
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
                        A curated residential styling monograph displaying complete spatial balance, custom accessories layering, and atmospheric lighting routes.
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
            7. WHY BOULDSPACE HOME DECOR
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
                { title: "Personal Styling", desc: "No generic solutions. We draft custom layouts optimized around your specific living habits." },
                { title: "Timeless Concepts", desc: "Open-weave linen curtains, anti-glare matte timbers, and core-colored hardware accents." },
                { title: "Atmosphere Focus", desc: "We coordinate warm lighting hotspots and accessory layers to elevate emotional safety." },
                { title: "Turnkey Placement", desc: "Direct coordinate supervision of on-site craftsmen, lighting tracks testing, and sitemap handover." }
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
                    <span className="font-sans text-[9px] font-bold tracking-widest text-primary/30 uppercase mt-4">COORD // HD-{idx+1}</span>
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
                "Bouldspace approached our home design with incredible attention to detail. Every table lamp casts a warm glow, and the linen curtain waves filter morning daylight perfectly. They have transformed our penthouse into a deeply grounding sanctuary."
              </blockquote>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.8} className="space-y-1 font-sans">
              <cite className="font-serif text-[18px] text-surface-bright not-italic block font-normal">Reema Sen</cite>
              <span className="text-[10px] text-[#cdc5c0] uppercase tracking-wider">Penthouse Owner, Amaryllis, Delhi</span>
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
                Luxury Is How A Space Makes You Feel.
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} duration={0.8}>
              <p className="font-sans text-[16px] sm:text-[18px] leading-relaxed text-secondary max-w-xl">
                Partner with Bouldspace to create beautifully styled homes filled with warmth, elegance, and timeless personality.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.8} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="primary" showArrow={true} href="/contact?ref=hd-cta-book">
                Begin Styling Consultation
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
