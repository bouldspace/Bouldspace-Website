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
  Wrench,
  RotateCcw
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";

export default function RenovationsServicePage() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax backdrop translations for cinematic experience
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const contentY = useTransform(scrollY, [0, 800], [0, -60]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Before & After tab state
  const [activeTab, setActiveTab] = useState(0);

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

  // Before & After Storytelling Data
  const beforeAfterScenes = [
    {
      title: "Living Spaces",
      subtitle: "The Concrete Metamorphosis",
      beforeDesc: "Dark, cramped interior partitioned by rigid brick load-bearing walls, failing softwood roof trusses, damp plaster corners with high moisture readings, and a single low-efficiency visual opening.",
      afterDesc: "An open double-height lounge structured with vein-matched honed ivory travertine panels, anchored by heavy raw-concrete column jackets, dynamic warm spotlights, and a high-performance floor-to-ceiling glass facade.",
      details: ["Travertine slab installation", "Volumetric load restructuring", "HVAC passive draft systems"],
      beforeSvg: (
        <svg className="w-full h-full text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 200">
          {/* Outline floor plan */}
          <rect x="40" y="20" width="320" height="140" className="stroke-outline/35" />
          {/* Compartmental divider wall 1 */}
          <line x1="120" y1="20" x2="120" y2="160" className="stroke-outline/25" />
          {/* Compartmental divider wall 2 */}
          <line x1="200" y1="20" x2="200" y2="160" className="stroke-outline/25" />
          {/* Compartmental divider wall 3 */}
          <line x1="280" y1="20" x2="280" y2="160" className="stroke-outline/25" />
          {/* Door swings to show closed rooms */}
          <line x1="120" y1="60" x2="100" y2="60" className="stroke-outline/20" />
          <path d="M 120,60 A 20,20 0 0,1 100,80" className="stroke-outline/20 stroke-dasharray-[2_2]" />
          <line x1="280" y1="100" x2="300" y2="100" className="stroke-outline/20" />
          <path d="M 280,100 A 20,20 0 0,1 300,120" className="stroke-outline/20 stroke-dasharray-[2_2]" />
          {/* Sagging softwood roof trusses */}
          <path d="M 40,40 Q 200,65 360,40" className="stroke-outline/25 stroke-dasharray-[2_4]" />
          <path d="M 120,45 L 120,55 M 200,50 L 200,60 M 280,45 L 280,55" className="stroke-outline/20" />
          {/* Damp penetration lines in corner */}
          <path d="M 42,145 Q 55,140 50,158" className="stroke-outline/30" />
          <path d="M 45,147 Q 52,143 48,155" className="stroke-outline/20" />
          {/* Room labels */}
          <text x="80" y="90" textAnchor="middle" className="font-sans text-[5.5px] fill-secondary/60 font-semibold tracking-wider">CELLULAR RM-01</text>
          <text x="160" y="90" textAnchor="middle" className="font-sans text-[5.5px] fill-secondary/60 font-semibold tracking-wider">DARK CELL-02</text>
          <text x="240" y="90" textAnchor="middle" className="font-sans text-[5.5px] fill-secondary/60 font-semibold tracking-wider">CRAMPED RM-03</text>
          <text x="320" y="90" textAnchor="middle" className="font-sans text-[5.5px] fill-secondary/60 font-semibold tracking-wider">UTILITY RM-04</text>
          {/* Title label */}
          <text x="200" y="182" textAnchor="middle" className="font-sans text-[7px] fill-secondary font-bold uppercase tracking-wider">OUTDATED CLOSED VOLUMES // SEC. 01</text>
        </svg>
      ),
      afterSvg: (
        <svg className="w-full h-full text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 200">
          {/* Outline floor plan */}
          <rect x="40" y="20" width="320" height="140" className="stroke-primary/45 fill-primary/[0.005]" />
          {/* Travertine paving lines */}
          <line x1="40" y1="60" x2="360" y2="60" className="stroke-outline/10" />
          <line x1="40" y1="100" x2="360" y2="100" className="stroke-outline/10" />
          <line x1="40" y1="140" x2="360" y2="140" className="stroke-outline/10" />
          <line x1="120" y1="20" x2="120" y2="60" className="stroke-outline/10" />
          <line x1="240" y1="60" x2="240" y2="100" className="stroke-outline/10" />
          <line x1="160" y1="100" x2="160" y2="140" className="stroke-outline/10" />
          {/* High-performance glass double-line facade */}
          <line x1="40" y1="30" x2="360" y2="30" className="stroke-primary/60 stroke-[1.5]" />
          <line x1="40" y1="26" x2="360" y2="26" className="stroke-primary/30 stroke-[0.8]" />
          {/* Concrete column reinforced jackets with cross-hatch */}
          <rect x="100" y="55" width="16" height="16" rx="2" className="stroke-primary/70 fill-primary/10" />
          <line x1="100" y1="55" x2="116" y2="71" className="stroke-primary/40" />
          <line x1="116" y1="55" x2="100" y2="71" className="stroke-primary/40" />
          
          <rect x="280" y="115" width="16" height="16" rx="2" className="stroke-primary/70 fill-primary/10" />
          <line x1="280" y1="115" x2="296" y2="131" className="stroke-primary/40" />
          <line x1="296" y1="115" x2="280" y2="131" className="stroke-primary/40" />
          {/* Large curved custom lounge sofa outline */}
          <path d="M 80,105 C 80,135 140,145 200,145 C 260,145 320,135 320,105" className="stroke-primary/50" />
          <rect x="150" y="105" width="100" height="18" className="stroke-primary/40 fill-surface" />
          {/* Spotlights and ambient lighting tracks */}
          <circle cx="100" cy="40" r="3" className="stroke-primary/50 fill-primary/20" />
          <path d="M 90,70 L 100,40 L 110,70" className="stroke-primary/30 stroke-dasharray-[1_2]" />
          
          <circle cx="200" cy="40" r="3" className="stroke-primary/50 fill-primary/20" />
          <path d="M 185,80 L 200,40 L 215,80" className="stroke-primary/30 stroke-dasharray-[1_2]" />
          
          <circle cx="300" cy="40" r="3" className="stroke-primary/50 fill-primary/20" />
          <path d="M 290,70 L 300,40 L 310,70" className="stroke-primary/30 stroke-dasharray-[1_2]" />
          {/* Label inside the floor plan */}
          <text x="200" y="85" textAnchor="middle" className="font-sans text-[6px] fill-primary font-bold uppercase tracking-wider">DOUBLE-HEIGHT VOLUMETRIC LOUNGE</text>
          {/* Title label */}
          <text x="200" y="182" textAnchor="middle" className="font-sans text-[7px] fill-primary font-bold uppercase tracking-wider">OPEN TRAVERTINE LOUNGE // COORD. 01</text>
        </svg>
      )
    },
    {
      title: "Kitchens",
      subtitle: "The Obsidian Atelier",
      beforeDesc: "Segmented cellular galley style restricted by rigid drywalls, outdated high-pressure laminate counters, failing grease traps, and a dark utility closet.",
      afterDesc: "An architectural culinary gallery centered around dual monolithic ivory travertine prep islands with integrated downdraft induction cooktops, zero-gap custom obsidian oak casework, and soft ambient light tracks.",
      details: ["Travertine double island cast", "German soft-close drawer slides", "Concealed operational pantry"],
      beforeSvg: (
        <svg className="w-full h-full text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 200">
          {/* Outer floor plan */}
          <rect x="40" y="20" width="320" height="140" className="stroke-outline/35" />
          {/* Left closed counter */}
          <rect x="40" y="30" width="40" height="120" className="stroke-outline/30" />
          {/* Right closed counter */}
          <rect x="320" y="30" width="40" height="120" className="stroke-outline/30" />
          {/* Center segregation drywall partition */}
          <rect x="180" y="20" width="15" height="140" className="stroke-outline/35 fill-outline/5" />
          {/* Isolated utility closet */}
          <rect x="195" y="20" width="60" height="50" className="stroke-outline/30" />
          {/* Utility closet door swing */}
          <line x1="195" y1="50" x2="210" y2="65" className="stroke-outline/25" />
          <path d="M 210,65 A 15,15 0 0,1 195,70" className="stroke-outline/25 stroke-dasharray-[1_2]" />
          {/* Labels */}
          <text x="60" y="90" textAnchor="middle" className="font-sans text-[5px] fill-secondary/60 font-semibold tracking-wider rotate-90 origin-center">GALLEY COUNTER 01</text>
          <text x="340" y="90" textAnchor="middle" className="font-sans text-[5px] fill-secondary/60 font-semibold tracking-wider rotate-90 origin-center">GALLEY COUNTER 02</text>
          <text x="187" y="90" textAnchor="middle" className="font-sans text-[4.5px] fill-secondary/60 font-semibold tracking-wider rotate-90 origin-center">DRYWALL PARTITION</text>
          <text x="225" y="45" textAnchor="middle" className="font-sans text-[5px] fill-secondary/60 font-semibold tracking-wider">UTILITY CLOSET</text>
          {/* Title label */}
          <text x="200" y="182" textAnchor="middle" className="font-sans text-[7px] fill-secondary font-bold uppercase tracking-wider">COMPARTMENTAL galley KITCHEN // SEC. 02</text>
        </svg>
      ),
      afterSvg: (
        <svg className="w-full h-full text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 200">
          {/* Outer floor plan */}
          <rect x="40" y="20" width="320" height="140" className="stroke-primary/45 fill-primary/[0.005]" />
          {/* Dotted Demolished drywall guide line */}
          <rect x="180" y="20" width="15" height="140" className="stroke-primary/20 stroke-dasharray-[2_3]" />
          <text x="187" y="100" textAnchor="middle" className="font-sans text-[4.5px] fill-primary/30 font-semibold uppercase tracking-wider rotate-90 origin-center">DEMOLISHED WALL</text>
          {/* Back wall modular zero-gap obsidian cabinetry casework */}
          <rect x="40" y="25" width="22" height="130" className="stroke-primary/65 fill-primary/10" />
          <line x1="40" y1="50" x2="62" y2="50" className="stroke-primary/40" />
          <line x1="40" y1="75" x2="62" y2="75" className="stroke-primary/40" />
          <line x1="40" y1="100" x2="62" y2="100" className="stroke-primary/40" />
          <line x1="40" y1="125" x2="62" y2="125" className="stroke-primary/40" />
          {/* Double monolithic travertine kitchen islands */}
          <rect x="95" y="35" width="55" height="90" rx="1.5" className="stroke-primary/55 fill-primary/[0.01]" />
          <text x="122.5" y="50" textAnchor="middle" className="font-sans text-[5.5px] fill-primary font-bold">PREP ISLAND</text>
          {/* Induction cooktop detail on island 1 */}
          <circle cx="122.5" cy="75" r="7" className="stroke-primary/45" />
          <circle cx="122.5" cy="95" r="5" className="stroke-primary/45" />
          
          <rect x="205" y="35" width="55" height="90" rx="1.5" className="stroke-primary/55 fill-primary/[0.01]" />
          <text x="232.5" y="50" textAnchor="middle" className="font-sans text-[5.5px] fill-primary font-bold">SOCIAL ISLAND</text>
          {/* Cozy Stool seating outline indicators next to social island */}
          <rect x="270" y="50" width="8" height="8" rx="1.5" className="stroke-primary/40 fill-surface" />
          <rect x="270" y="70" width="8" height="8" rx="1.5" className="stroke-primary/40 fill-surface" />
          <rect x="270" y="90" width="8" height="8" rx="1.5" className="stroke-primary/40 fill-surface" />
          {/* Cabinetry and overhead spotlight track lines */}
          <line x1="122.5" y1="20" x2="232.5" y2="20" className="stroke-primary/50 stroke-[1.2]" />
          {/* Labels */}
          <text x="45" y="145" textAnchor="start" className="font-sans text-[4.5px] fill-primary font-semibold tracking-wider">OBSIDIAN CASEWORK</text>
          {/* Title label */}
          <text x="200" y="182" textAnchor="middle" className="font-sans text-[7px] fill-primary font-bold uppercase tracking-wider">DOUBLE ISLAND CULINARY GALLERY // COORD. 02</text>
        </svg>
      )
    },
    {
      title: "Bedrooms",
      subtitle: "The Linen Atelier",
      beforeDesc: "Uninsulated bedroom chamber featuring surface damp corner lines, rigid built-in composite board wardrobes, restricted ceiling clearances, and single-source glaring direct overhead lighting.",
      afterDesc: "A sensory private sanctuary structured through sound-dampening acoustic fabric wall paneling, a floor-to-ceiling floating ash timber dressing deck, modular dimmable lighting channels, and integrated linen upholstered partitions.",
      details: ["Belgian linen fabric tufting", "Honed wood floating structures", "Warm dimmer lighting channels"],
      beforeSvg: (
        <svg className="w-full h-full text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 200">
          {/* Outer boundary */}
          <rect x="40" y="20" width="320" height="140" className="stroke-outline/35" />
          {/* Compact bedroom bed in corner */}
          <rect x="40" y="30" width="100" height="85" className="stroke-outline/30" />
          <rect x="45" y="40" width="20" height="20" className="stroke-outline/25" />
          <rect x="45" y="80" width="20" height="20" className="stroke-outline/25" />
          {/* Boxy wardrobe units */}
          <rect x="180" y="30" width="140" height="32" className="stroke-outline/30" />
          <line x1="226" y1="30" x2="226" y2="62" className="stroke-outline/25" />
          <line x1="272" y1="30" x2="272" y2="62" className="stroke-outline/25" />
          {/* Direct ceiling spotlight glow indicator */}
          <circle cx="200" cy="110" r="10" className="stroke-outline/25 stroke-dasharray-[1_3]" />
          {/* Moisture / damp wall lines */}
          <path d="M 40,30 Q 55,25 60,40 T 70,30" className="stroke-outline/30" />
          <text x="50" y="55" textAnchor="start" className="font-sans text-[4px] fill-secondary/50 font-semibold rotate-90 origin-left">DAMP SURFACE</text>
          {/* Labels */}
          <text x="90" y="72" textAnchor="middle" className="font-sans text-[5px] fill-secondary/60 font-semibold tracking-wider">COMPACT BED</text>
          <text x="250" y="48" textAnchor="middle" className="font-sans text-[5px] fill-secondary/60 font-semibold tracking-wider">RIGID COMPOSITE WARDROBE</text>
          {/* Title label */}
          <text x="200" y="180" textAnchor="middle" className="font-sans text-[7px] fill-secondary font-bold uppercase tracking-wider">CRAMPED CLOSED BEDROOM // SEC. 03</text>
        </svg>
      ),
      afterSvg: (
        <svg className="w-full h-full text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 200">
          {/* Outer boundary */}
          <rect x="40" y="20" width="320" height="140" className="stroke-primary/45 fill-primary/[0.003]" />
          {/* Ribbed acoustic clay wall panels backing */}
          <line x1="72" y1="20" x2="72" y2="160" className="stroke-primary/30" />
          <line x1="68" y1="20" x2="68" y2="160" className="stroke-primary/25" />
          <line x1="64" y1="20" x2="64" y2="160" className="stroke-primary/20" />
          <line x1="60" y1="20" x2="60" y2="160" className="stroke-primary/15" />
          <text x="64" y="90" textAnchor="middle" className="font-sans text-[4.5px] fill-primary/30 font-semibold uppercase tracking-wider rotate-90 origin-center">ACOUSTIC BACKING</text>
          {/* Padded Belgian linen bedhead backing */}
          <rect x="76" y="25" width="8" height="130" rx="1.5" className="stroke-primary/55 fill-primary/10" />
          {/* Elegant king bed centered beautifully */}
          <rect x="84" y="35" width="105" height="110" rx="3" className="stroke-primary/55 fill-primary/[0.005]" />
          {/* Pillars of luxury pillows */}
          <rect x="92" y="45" width="18" height="28" rx="2" className="stroke-primary/45 fill-surface" />
          <rect x="92" y="90" width="18" height="28" rx="2" className="stroke-primary/45 fill-surface" />
          <text x="135" y="90" textAnchor="middle" className="font-sans text-[5.5px] fill-primary font-bold">KING SANCTUARY BED</text>
          {/* Floating ash timber dressing deck with wooden grains */}
          <rect x="235" y="30" width="90" height="120" rx="3.5" className="stroke-primary/50 fill-primary/[0.01]" />
          <line x1="242" y1="42" x2="318" y2="42" className="stroke-primary/20 stroke-dasharray-[3_6]" />
          <line x1="242" y1="62" x2="318" y2="62" className="stroke-primary/20 stroke-dasharray-[3_6]" />
          <line x1="242" y1="82" x2="318" y2="82" className="stroke-primary/20 stroke-dasharray-[3_6]" />
          <line x1="242" y1="102" x2="318" y2="102" className="stroke-primary/20 stroke-dasharray-[3_6]" />
          <line x1="242" y1="122" x2="318" y2="122" className="stroke-primary/20 stroke-dasharray-[3_6]" />
          <line x1="242" y1="138" x2="318" y2="138" className="stroke-primary/20 stroke-dasharray-[3_6]" />
          <text x="280" y="55" textAnchor="middle" className="font-sans text-[5px] fill-primary font-semibold tracking-wider">FLOATING ASH DECK</text>
          {/* Open closet walk-in guides */}
          <rect x="235" y="70" width="45" height="80" rx="1" className="stroke-primary/30 stroke-dasharray-[2_2] fill-none" />
          <text x="257.5" y="110" textAnchor="middle" className="font-sans text-[4.5px] fill-primary/45 font-semibold uppercase tracking-wider rotate-90 origin-center">OPEN WALK-IN</text>
          {/* Suspended lighting pendants */}
          <circle cx="100" cy="30" r="3.5" className="stroke-primary/50 fill-primary/20" />
          <circle cx="100" cy="150" r="3.5" className="stroke-primary/50 fill-primary/20" />
          {/* Title label */}
          <text x="200" y="180" textAnchor="middle" className="font-sans text-[7px] fill-primary font-bold uppercase tracking-wider">LUXURY LINEN BED SANCTUARY // COORD. 03</text>
        </svg>
      )
    }
  ];

  // 2. Renovation Expertise Showcase Data - Rebuilt to represent spatial renewals
  const expertiseShowcase = [
    {
      id: "residential",
      title: "Residential Renovations",
      desc: "Full structural upgrades for premium villas and penthouses, optimizing spatial volumes, light paths, and structural damp-proofing coordinates.",
      metric: "Structural Guarantee: 10-Yr",
      details: ["Volumetric space redesigns", "Damp-proofing membrane coatings", "Advanced spatial layout audits"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Duplex volumetric residential flow outline */}
          <rect x="60" y="40" width="280" height="140" className="stroke-primary/45 fill-primary/[0.005]" />
          <line x1="60" y1="110" x2="340" y2="110" className="stroke-outline/25" />
          <path d="M 80,180 L 120,180 L 120,150 L 160,150 L 160,120 L 200,120 L 200,110" className="stroke-outline/30" />
          <text x="200" y="210" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">RESIDENTIAL DUPLEX REBUILD</text>
        </svg>
      )
    },
    {
      id: "apartments",
      title: "Luxury Apartment Upgrades",
      desc: "Modernizing urban high-rise apartments to deliver absolute visual balance, integrated MEP systems, and custom casework cabinetry coordinates.",
      metric: "Clearances: Millimeter-level",
      details: ["Integrated MEP coordinates plan", "Concealed casing panel layouts", "Low-glare warm LED tracks"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Flush cabinetry fronts with zero-gap borders */}
          <rect x="70" y="40" width="260" height="140" rx="1.5" className="stroke-primary/35 fill-primary/[0.003]" />
          <line x1="150" y1="40" x2="150" y2="180" className="stroke-outline/20" />
          <line x1="250" y1="40" x2="250" y2="180" className="stroke-outline/20" />
          <line x1="70" y1="90" x2="330" y2="90" className="stroke-primary/45 stroke-[1.2]" />
          <text x="200" y="210" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">FLUSH CASEWORK UPGRADES</text>
        </svg>
      )
    },
    {
      id: "structural",
      title: "Structural Enhancements",
      desc: "Applying structural column jackets and wide-span modifications, verifying load correction factors under a 0.05% margin.",
      metric: "Correction: <0.05%",
      details: ["Concrete column reinforcement jackets", "Load deflection ultrasonic testing", "Wide-span carbon-fiber wraps"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Structural concrete deflection columns reinforcement drawing */}
          <path d="M 60,70 Q 200,82 340,70" className="stroke-primary/35 stroke-dasharray-[2_4]" />
          <path d="M 60,70 L 340,70" className="stroke-outline/45" />
          <rect x="80" y="70" width="40" height="110" className="stroke-outline/35" />
          <rect x="280" y="70" width="40" height="110" className="stroke-outline/35" />
          <rect x="175" y="70" width="50" height="110" className="stroke-primary/45 fill-primary/[0.01]" />
          <text x="200" y="210" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">COLUMN REINFORCEMENT JACKET</text>
        </svg>
      )
    }
  ];

  // 3. Materials & Modernization Specs
  const sensoryMaterials = [
    {
      title: "Finishes Redesign",
      desc: "Super-matte anti-fingerprint coatings, solid wire-brushed ash planks, and custom-honed travertine marble overlays.",
      finish: "Texture: Raw Matte Softness"
    },
    {
      title: "Lighting Redesign",
      desc: "Low-glare concealed coves, suspensions, and accent spotlights engineered to cast soft shadow boundaries.",
      finish: "Illumination: Warm Accent Paths"
    },
    {
      title: "Deflection Jackets",
      desc: "Load-bearing column jackets built with high-pressure concrete formulations, restoring absolute structural safety.",
      finish: "Standard: Deflection-Free Columns"
    },
    {
      title: "Damp retrofits",
      desc: "Multi-layered water-stop sheets and advanced damp proofing coatings, protecting spaces from ambient moisture.",
      finish: "Membranes: Damp-Proof Coatings"
    },
    {
      title: "Craftsmanship details",
      desc: "Certified on-site alignment supervision and continuous warranty audits ensuring ultimate detailing durability.",
      finish: "Tolerance: Millimeter Precise"
    },
    {
      title: "Spatial Optimization",
      desc: "Wall partition demolition and floor threshold smoothing, creating an unrestricted Open Curation layout.",
      finish: "Flow: Open Curation Axis"
    }
  ];

  // 4. Renovation 7-Stage Chronology Process
  const processSteps = [
    { step: "01", title: "Existing Space Evaluation", desc: "Thorough structural load testing, damp checks, and layout constraints audit before design." },
    { step: "02", title: "Concept & Planning", desc: "Drafting wide-open spatial flow profiles, lighting coves, and initial volumetric outlines." },
    { step: "03", title: "Structural Optimization", desc: "Demolishing wall partitions and setting reinforced column jackets under safe margins." },
    { step: "04", title: "Material & Design Selection", desc: "Curating solid wire-brushed timbers, honed travertine slabs, and anti-glare lacquer fronts." },
    { step: "05", title: "Renovation Execution", desc: "Direct coordinate supervision of craftsmen, on-site deflection testing, and MEP alignment." },
    { step: "06", title: "Finishing & Styling", desc: "Testing door tracks, setting ambient spotlight glow channels, and final detailing styling." },
    { step: "07", title: "Final Reveal", desc: "Handing over keys to the newly reborn space, backed by a comprehensive 10-year warranty." }
  ];

  // 5. Featured Renovation Projects
  const featuredProjects = [
    { name: "The Concrete Metamorphosis", type: "Structural Volume Overhaul", location: "Magnolias, Gurugram", style: "Earthy Brutalism" },
    { name: "The Industrial Loft Renewal", type: "Heritage Structural Retrofit", location: "Civil Lines, Delhi", style: "Tactile Minimalism" },
    { name: "The Travertine Lounge", type: "Full Spatial Modernization", location: "Koramangala, Bengaluru", style: "Contextual Luxury" }
  ];

  return (
    <>
      <Header />
      <main ref={containerRef} className="flex-grow bg-surface overflow-hidden">
        
        {/* ========================================
            1. HERO SECTION — CINEMATIC
            ======================================== */}
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-36 pb-24 overflow-hidden bg-surface text-on-surface border-b border-outline-variant/15">
          
          {/* Immersive Parallax Backdrop - Before-to-After Split Room Layout */}
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
          >
            <svg className="w-full h-full text-secondary/35 stroke-current stroke-[1.2] fill-none opacity-85" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
              {/* Slanted sunlight beams overlay definitions */}
              <defs>
                <linearGradient id="sunlight-beams-reno" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.08" />
                  <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.02" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Sunlight beams */}
              <polygon points="0,0 220,0 580,600 180,600" fill="url(#sunlight-beams-reno)" className="stroke-none" />
              
              {/* Left Side: BEFORE (jagged plaster lines, exposed bricks, dangling bulbs) */}
              <rect x="150" y="80" width="350" height="440" className="stroke-outline/25 fill-outline/[0.002]" />
              <path d="M 170,120 C 190,140 220,125 240,150 T 320,150" className="stroke-outline/15 stroke-dasharray-[2_4]" />
              <circle cx="320" cy="180" r="10" className="stroke-outline/30" />
              <line x1="320" y1="80" x2="320" y2="170" className="stroke-outline/20" />
              
              {/* Right Side: AFTER (clean modern contours, sleek floating decks, warm fireplace) */}
              <rect x="500" y="80" width="350" height="440" className="stroke-primary/45 fill-primary/[0.005] stroke-[1.2]" />
              <rect x="540" y="160" width="280" height="15" rx="1.5" className="stroke-primary/40 fill-primary/5" />
              <circle cx="680" cy="240" r="25" className="stroke-primary/30 fill-primary/[0.02]" />
              <line x1="680" y1="80" x2="680" y2="215" className="stroke-primary/30" />
              
              {/* Separation Split Line */}
              <line x1="500" y1="0" x2="500" y2="600" className="stroke-primary/45 stroke-[1.5] stroke-dasharray-[6_6]" />
              
              {/* Artistic sitemap label */}
              <text x="215" y="45" textAnchor="start" className="font-sans text-[7.5px] fill-secondary/55 font-bold uppercase tracking-[0.25em]">BEFORE // OLD closed VOLUMES</text>
              <text x="785" y="45" textAnchor="end" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-[0.25em]">AFTER // TIMELINESS CURATION</text>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </motion.div>

          {/* Warm spotlight aura */}
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
                Structural Transformation
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="font-serif text-[48px] sm:text-[68px] md:text-[84px] leading-[1.05] tracking-tight font-normal text-on-surface max-w-3xl"
              >
                Reimagining Spaces <br />
                With Purpose.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-secondary max-w-2xl font-normal"
              >
                Luxury renovation solutions crafted to modernize, elevate, and transform spaces through intelligent planning, refined design, and seamless execution.
              </motion.p>

              <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button variant="primary" showArrow={true} href="/contact?ref=ren-hero">
                  Schedule Renovation Consultation
                </Button>
                <Button variant="secondary" showArrow={false} href="#transformations">
                  Explore Transformations
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating coordinates markers */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 left-8 md:left-16 z-20 font-sans text-[9px] tracking-[0.25em] uppercase text-secondary/60 hidden sm:flex flex-col gap-1.5 select-none pointer-events-none"
          >
            <span className="text-primary font-bold">Structural Renewals</span>
            <span>BOULDSPACE PROTOCOL RN-102</span>
            <span>INDEX // SPATIAL TRANSFORMATION</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 right-8 md:right-16 z-20 font-sans text-[9px] tracking-[0.25em] uppercase text-secondary/60 text-right hidden sm:flex flex-col gap-1.5 select-none pointer-events-none"
          >
            <span className="text-primary font-bold">Deflection Tolerances</span>
            <span>07 STAGES // MODERN TIMBERS</span>
            <span>COORD MAPS // RENEWALS</span>
          </motion.div>
        </section>

        {/* ========================================
            2. TRANSFORMATION PHILOSOPHY SECTION
            ======================================== */}
        <section id="philosophies" className="py-32 bg-surface relative z-10 border-b border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Asymmetrical Editorial Heading */}
              <div className="lg:col-span-5 space-y-6">
                <FadeIn direction="right" duration={0.8} className="space-y-4">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 px-3 py-1 rounded inline-block">
                    01 // Philosophy in Rebirth
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[46px] leading-tight text-on-surface font-normal">
                    Modernizing spaces with structural purpose.
                  </h2>
                </FadeIn>
              </div>

              {/* Right Column: Narrative Storytelling */}
              <div className="lg:col-span-7 font-sans text-[16px] leading-relaxed text-secondary space-y-6 border-l border-outline-variant/25 pl-6 lg:pl-12">
                <FadeIn direction="left" delay={0.15} duration={0.8} className="space-y-6">
                  <p>
                    Every old structure carries structural memory and architectural character. We treat renovations as a delicate dialogue between preservation and modernization. True reinvention is not about superficial masking; it is about core structural deflection audits, load correction, and seamless spatial reconfigurations.
                  </p>
                  <p>
                    We balance the old and the new with spatial intelligence—setting steel jacket jackets onto existing concrete structures, applying advanced damp proofing membranes, and overhauling layouts to achieve absolute volumetric flow, light path optimization, and modern refinement.
                  </p>
                </FadeIn>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================
            3. BEFORE & AFTER CINEMATIC BLOCK
            ======================================== */}
        <section id="transformations" className="py-32 bg-surface-container relative z-10 border-b border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  TRANSFORMATION JOURNAL
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Before & After Curation
                </h2>
              </FadeIn>
            </div>

            {/* Interactive Tab Selectors */}
            <div className="flex justify-center gap-4 mb-16 border-b border-outline-variant/20 pb-4 font-sans text-[12px] font-bold uppercase tracking-widest text-outline select-none">
              {beforeAfterScenes.map((scene, idx) => (
                <button
                  key={scene.title}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 hover:text-primary transition-colors cursor-pointer relative ${
                    activeTab === idx ? "text-primary" : ""
                  }`}
                >
                  {scene.title}
                  {activeTab === idx && (
                    <motion.div
                      layoutId="active-reno-tab"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Split Screen before-after layout */}
            <AnimatePresence mode="wait">
              {beforeAfterScenes.map((scene, idx) => {
                if (activeTab !== idx) return null;
                return (
                  <motion.div
                    key={scene.title}
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -35 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                  >
                    {/* Left Column: BEFORE SVG */}
                    <div className="lg:col-span-5 w-full">
                      <div className="relative w-full rounded border border-outline-variant/30 bg-surface-container-lowest p-6 sm:p-8 flex flex-col justify-between gap-6 min-h-[480px] sm:min-h-[520px] lg:min-h-[550px] overflow-hidden shadow-elevated transition-all duration-300">
                        <div className="flex justify-between text-[9px] uppercase tracking-widest text-secondary/60">
                          <span>BEFORE STATE // ANCHOR</span>
                          <span className="text-primary">[RN-BEFORE]</span>
                        </div>
                        <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] my-auto flex items-center justify-center overflow-hidden bg-surface/10 rounded border border-outline-variant/10 p-2">
                          {scene.beforeSvg}
                        </div>
                        <div className="border-t border-outline-variant/15 pt-4">
                          <p className="font-sans text-[13px] sm:text-[14px] leading-relaxed text-secondary italic">"{scene.beforeDesc}"</p>
                        </div>
                      </div>
                    </div>

                    {/* Middle Column: Detail specs */}
                    <div className="lg:col-span-2 text-center flex flex-col items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <RotateCcw className="h-5 w-5" />
                      </div>
                      <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-primary block">METAMORPHOSIS</span>
                      <div className="h-12 w-px bg-outline-variant/30 hidden lg:block" />
                    </div>

                    {/* Right Column: AFTER SVG */}
                    <div className="lg:col-span-5 w-full">
                      <div className="relative w-full rounded border border-primary/30 bg-surface-container-lowest p-6 sm:p-8 flex flex-col justify-between gap-6 min-h-[480px] sm:min-h-[520px] lg:min-h-[550px] overflow-hidden shadow-elevated transition-all duration-300">
                        <div className="flex justify-between text-[9px] uppercase tracking-widest text-primary font-bold">
                          <span>AFTER STATE // ELEVATION</span>
                          <span>[RN-AFTER]</span>
                        </div>
                        <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] my-auto flex items-center justify-center overflow-hidden bg-surface/10 rounded border border-primary/10 p-2">
                          {scene.afterSvg}
                        </div>
                        <div className="border-t border-outline-variant/15 pt-4">
                          <p className="font-sans text-[13px] sm:text-[14px] leading-relaxed text-secondary italic font-semibold">"{scene.afterDesc}"</p>
                        </div>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>

          </div>
        </section>

        {/* ========================================
            4. RENOVATION EXPERTISE SHOWCASE
            ======================================== */}
          <section className="py-32 bg-surface relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  STUDIO STANDARDS
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Expertise in Reinvention
                </h2>
              </FadeIn>
            </div>

            {/* Alternating Asymmetrical Style Layouts */}
            <div className="space-y-36">
              {expertiseShowcase.map((style, idx) => {
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
                            Rebuild Category 0{idx + 1}
                          </span>
                          <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-outline bg-surface-container px-2 py-0.5 rounded">
                            {style.metric}
                          </span>
                        </div>

                        <h3 className="font-serif text-[30px] sm:text-[36px] leading-tight text-on-surface font-normal">
                          {style.title}
                        </h3>

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
                            <span>STRUCTURAL PLOT // RN-STYLE-0{idx + 1}</span>
                            <span className="text-primary">[CASEWORK JOINERY]</span>
                          </div>

                          <div className="relative w-full h-full my-auto flex items-center justify-center py-4">
                            {style.svg}
                          </div>

                          <div className="flex justify-between text-[9px] tracking-wider text-secondary/60 border-t border-outline-variant/20 pt-4 font-semibold uppercase relative z-10">
                            <span>STRUCTURAL STABILITY</span>
                            <span>PRECISION OUTLINES</span>
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
            5. MATERIALS & MODERNIZATION EXPERIENCE
            ======================================== */}
        <section className="py-32 bg-surface-container border-t border-b border-outline-variant/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none blueprint-grid" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-24">
              <div className="lg:col-span-6">
                <FadeIn direction="right" duration={0.8} className="space-y-4">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                    Sensory Upgrades
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[46px] leading-tight text-on-surface font-normal">
                    Modernization & Detailing
                  </h2>
                </FadeIn>
              </div>
              <div className="lg:col-span-6">
                <FadeIn direction="left" delay={0.15} duration={0.8} className="space-y-4">
                  <p className="text-[15.5px] leading-relaxed text-secondary">
                    "Every space deserves a second life. Transformation lives in the details." We coordinate the finest upgraded finishes, structural materials, and low-glare coves—matching visual elegance with physical durability.
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
            6. RENOVATION PROCESS EXPERIENCE
            ======================================== */}
        <section className="py-32 bg-surface relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  MAKING OF SYSTEM
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Our Rebuild Process
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
            7. FEATURED RENOVATION PROJECTS
            ======================================== */}
        <section className="py-32 bg-surface relative z-10 border-t border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  FEATURED SPACES
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Landmark Metamorphosis Projects
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
                        A bespoke spatial rebuild Curation displaying absolute structural columns correction, seamless partition demolition, and modern travertine finishes.
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
            8. WHY BOULDSPACE RENOVATIONS
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
                  Why Bouldspace Renovations
                </h2>
              </FadeIn>
            </div>

            {/* Differentiators Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
              {[
                { title: "Intelligent Modernization", desc: "No generic templates. We reconfigure plans from first load-bearing concrete principles." },
                { title: "Deflection Precision", desc: "Carbon-fiber wraps and structural concrete jacket columns checked under a <0.05% factor." },
                { title: "Seamless Execution", desc: "clash-free MEP alignment and damp proofing systems audited continuous under warranty." },
                { title: "Disruption Shield", desc: "A clean, highly organized, site-containment staging and timeline-focused execution strategy." }
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
                    <span className="font-sans text-[9px] font-bold tracking-widest text-primary/30 uppercase mt-4">COORD // RN-{idx+1}</span>
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
                "Bouldspace approached our penthouse restoration with absolute structural integrity. They demolished structural closed walls, wrapped core deflection columns with high-strength concrete jackets, and clad our lounge in silk travertine. The result is structurally bulletproof and visually stunning."
              </blockquote>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.8} className="space-y-1 font-sans">
              <cite className="font-serif text-[18px] text-surface-bright not-italic block font-normal">Aditya Sen</cite>
              <span className="text-[10px] text-[#cdc5c0] uppercase tracking-wider">Penthouse Owner, Magnolias, Gurugram</span>
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
                Every Space Holds Untapped Potential.
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} duration={0.8}>
              <p className="font-sans text-[16px] sm:text-[18px] leading-relaxed text-secondary max-w-xl">
                Partner with Bouldspace to transform existing spaces into timeless environments crafted with elegance, intelligence, and precision execution.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.8} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="primary" showArrow={true} href="/contact?ref=ren-cta-book">
                Start Your Renovation
              </Button>
              <Button variant="secondary" showArrow={false} href="/contact?ref=ren-cta-start">
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
