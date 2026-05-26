"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Compass, 
  Ruler, 
  Layers, 
  Activity, 
  ShieldCheck, 
  Hammer, 
  Boxes, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  Cpu, 
  Sun, 
  Wind, 
  Zap, 
  FileText, 
  Workflow, 
  Grid 
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";

export default function ArchitectureServicePage() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax backdrop translations
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const contentY = useTransform(scrollY, [0, 800], [0, -60]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  // FAQ Accordion State
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

  // 1. Design Capabilities Data
  const capabilities = [
    { name: "Residential Architecture", desc: "Crafting bespoke private estates that frame raw topography and optimize daylight pathways.", icon: Compass },
    { name: "Commercial Architecture", desc: "Designing scalable corporate office parks prioritizing employee wellness and structural flow.", icon: Grid },
    { name: "Hospitality Spaces", desc: "Curating high-end resort envelopes blending wellness layouts and local contextual beauty.", icon: Layers },
    { name: "Luxury Villas", desc: "Structural cantilevers, wide-span masonry modifications, and monolithic concrete features.", icon: Hammer },
    { name: "Smart Homes", desc: "Embedding automated systems, integrated MEP grids, and ambient environmental sensors.", icon: Cpu },
    { name: "Institutional Projects", desc: "Planning multi-acre campuses, research masterplans, and public cultural spaces.", icon: Boxes },
    { name: "Urban Planning", desc: "Zoning setbacks auditing, landscape coordination, and community layout coordination.", icon: Ruler },
    { name: "Structural Coordination", desc: "Continuous load deflection diagnostic checks, seismic tolerances, and metal columns casting.", icon: Activity },
    { name: "Space Optimization", desc: "Double-height volumes curation, parametric floor planning, and volumetric adjustments.", icon: Workflow },
    { name: "Modern Facade Design", desc: "High-performance thermal envelopes, natural slate claddings, and insulated glass frames.", icon: ShieldCheck }
  ];

  // 2. Planning Systems Details
  const planningDetails = [
    { title: "Zoning & Municipal Audit", desc: "Detailed feasibility report auditing height constraints, setback rules, and municipal regulatory guidelines." },
    { title: "Parametric Floor Layouts", desc: "Creating structural grids mapped to sun projections, wind pathways, and soil bearing capacity." },
    { title: "3D Spatial Visualization", desc: "High-fidelity parametric modeling displaying material scale, oak casings joints, and plaster textures." },
    { title: "Integrated MEP Coordinate Plans", desc: "Clash-free routing for electricity grids, thermal ducts, and greywater management systems." }
  ];

  // 3. Workflow Progression Data
  const workflowSteps = [
    { step: "01", title: "Site Discovery", desc: "Topographic surveys, soil load tests, wind orientation, and municipal setback audits." },
    { step: "02", title: "Requirement Analysis", desc: "Budget stress testing, volumetric space checklist alignment, and styling brief scoping." },
    { step: "03", title: "Concept Development", desc: "Architectural elevation sketches, double-height volume layouts, and spatial flow outlines." },
    { step: "04", title: "Planning & Layouts", desc: "Clash-free MEP coordinate maps, primary column layouts, and door clearances grids." },
    { step: "05", title: "Visualization & Approval", desc: "Parametric 3D renders, material boarding options, and luxury curation walkthroughs." },
    { step: "06", title: "Technical Documentation", desc: "Compiling structural load deflection blueprints, zoning permit papers, and masons logs." },
    { step: "07", title: "Execution Coordination", desc: "Direct subcontractor coordinate auditing, quality tests checking, and structural schedules." },
    { step: "08", title: "Final Handover", desc: "Comprehensive MEP commissioning, thermal envelopes validation, keys handover under warranty." }
  ];

  // 4. Featured Concepts Data
  const featuredConcepts = [
    { title: "The Earth Estate", desc: "A linear country house constructed from rammed earth, solid teak timbers, and exposed raw concrete casts.", scale: "9,500 Sq. Ft.", location: "Gurugram Outskirts" },
    { title: "Parametric Office Tower", desc: "A luxury corporate headquarters prioritizing micro-ventilated facades and solar thermal insulation boards.", scale: "120,000 Sq. Ft.", location: "Sector 54, Gurugram" },
    { title: "Exposed Concrete Wellness Campus", desc: "A series of monolithic arches framing natural forest views, utilizing wide-span steel braces.", scale: "35,000 Sq. Ft.", location: "Jaipur Outpost" }
  ];

  // 5. Materials & Engineering Standards Data
  const engineeringMetrics = [
    { material: "Exposed Concrete", grade: "M40 Grade Casts", usage: "Monolithic support pillars and exposed roof overhangs with deep matte finishes." },
    { material: "Solid Oak Timber", grade: "Teak & Oak Logs", usage: "Interlocking mortise & tenon structural window frames and custom sliding doors." },
    { material: "Rammed Clay & Terracotta", grade: "Indigenous Blends", usage: "High-thermal mass structural walls that naturally regulate interior room temperatures." },
    { material: "Low-E Insulated Glass", grade: "Double-Pane Seals", usage: "Thermally broken architectural glass facades that prevent solar heat conduction." }
  ];

  // 6. Architecture FAQ Data
  const architectureFaqs = [
    {
      q: "What is Bouldspace's signature architectural design philosophy?",
      a: "Our studio coordinates from primary principles of 'Material Honesty' and 'Contextual Architecture'. We reject cold, synthetic materials (like vinyl and laminates), instead curating raw, tactile elements—such as monolithic concrete casts, solid oak wood framing, rammed earth, and terracotta plasters. Every villa or estate is designed to respond directly to its parcel's natural daylight paths, soil load bearings, and prevailing wind directions."
    },
    {
      q: "How does the zoning and setbacks municipal compliance process work?",
      a: "Bouldspace performs a comprehensive Zoning & Feasibility Audit during our Site Discovery phase. We review local height restrictions, setback mandates, floor-area ratios (FAR), and environmental laws. Our structural advisory coordinates all permit documentation, building code signoffs, and municipal clearances, bypassing local administrative delays."
    },
    {
      q: "What is the typical timeline for an architectural planning Retainer?",
      a: "An Architectural Retainer is structured around conceptual milestones over 12 to 24 weeks based on project scale. Milestone 1 covers site audits and initial concept floor plans. Milestone 2 delivers detailed 3D parametric renders and elevation models. Milestone 3 compiles comprehensive MEP layouts, structural load deflection coordinates, and direct contractor bidding documents."
    },
    {
      q: "How accurate are your 3D parametric visualizations compared to the final physical handover?",
      a: "We achieve extreme visual fidelity by matching our 3D render files directly to authentic physical material samples (solid oak casework, travertine stone, raw concrete). Every rendering displays exact task lighting angles, material grain orientations, and natural shading patterns. You receive what was drawn, down to a millimeter tolerance."
    },
    {
      q: "Do you coordinate with subcontractors and structural builders during construction?",
      a: "Yes. Even under our design-only Retainer, Bouldspace senior directors conduct bi-weekly on-site coordinate checks and contractor audit inspections. If you proceed with our Turnkey execution model, we provide 100% on-site supervision, scheduling masons, concrete batch testing, and coordinating greywater piping releases."
    },
    {
      q: "Can Bouldspace integrate smart home and automated systems natively?",
      a: "Absolutely. We map smart home system lines—including automated lighting zones, climate-responsive HVAC dampers, greywater filters, and security coordinate grids—directly into our primary MEP coordination blueprints before foundation setting."
    }
  ];

  return (
    <>
      <Header />
      <main ref={containerRef} className="flex-grow bg-surface overflow-hidden">
        
        {/* ========================================
            1. ARCHITECTURE HERO EXPERIENCE
            ======================================== */}
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-36 pb-24 overflow-hidden bg-surface text-on-surface border-b border-outline-variant/15">
          
          {/* Parallax Blueprint Grid Backdrop */}
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
          >
            <svg className="w-full h-full text-outline/35 stroke-current stroke-[1.2] fill-none opacity-85" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
              {/* Vertical & Horizontal grids */}
              <line x1="150" y1="0" x2="150" y2="600" className="stroke-outline/15 stroke-dasharray-[4_8]" />
              <line x1="500" y1="0" x2="500" y2="600" className="stroke-primary/25 stroke-dasharray-[2_4]" />
              <line x1="850" y1="0" x2="850" y2="600" className="stroke-outline/15 stroke-dasharray-[4_8]" />
              <line x1="0" y1="300" x2="1000" y2="300" className="stroke-primary/25 stroke-dasharray-[2_4]" />
              
              {/* Double cantilevers drafting lines */}
              <path d="M 120,480 L 120,200 L 400,200 L 400,280 L 240,280 L 240,480 Z" className="stroke-outline/45 fill-primary/[0.005]" />
              <path d="M 400,200 L 650,200 L 650,420 L 520,420 L 520,480" className="stroke-outline/25" />
              
              <circle cx="240" cy="280" r="15" className="stroke-primary/30 fill-primary/5" />
              <line x1="240" y1="280" x2="520" y2="420" className="stroke-primary/20 stroke-dasharray-[3_3]" />
              
              {/* Setback coordinates indicators */}
              <line x1="120" y1="520" x2="240" y2="520" className="stroke-primary/45" />
              <path d="M 120,520 L 130,516 M 120,520 L 130,524" className="stroke-primary/45" />
              <path d="M 240,520 L 230,516 M 240,520 L 230,524" className="stroke-primary/45" />
              
              <text x="180" y="540" textAnchor="middle" className="font-sans text-[7px] fill-primary font-bold uppercase tracking-wider">SETBACK: 12000mm</text>
              <text x="165" y="45" textAnchor="start" className="font-sans text-[8px] fill-secondary/65 font-bold uppercase tracking-[0.25em]">BOULDSPACE ARCHITECTURAL DIVISION</text>
              <text x="835" y="45" textAnchor="end" className="font-sans text-[8px] fill-primary font-bold uppercase tracking-[0.25em]">SYSTEM PLOT: AR-90</text>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </motion.div>

          {/* Grid overlay */}
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
                Visionary Spatial Curation
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="font-serif text-[48px] sm:text-[68px] md:text-[84px] leading-[1.05] tracking-tight font-normal text-on-surface max-w-3xl"
              >
                Visionary Spaces. <br />
                Strategic Precision.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-secondary max-w-2xl font-normal"
              >
                We do not replicate templates. We balance aesthetic intelligence with structural engineering rigor to plan, coordinate, and curate premium, life-enriching residential estates, commercial hubs, and institutional landmarks.
              </motion.p>

              <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button variant="primary" showArrow={true} href="/contact?ref=arch-hero">
                  Request Spatial Scoping
                </Button>
                <Button variant="secondary" showArrow={false} href="#capabilities">
                  Explore Capabilities
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating blueprint markers */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 left-8 md:left-16 z-20 font-sans text-[9px] tracking-[0.25em] uppercase text-secondary/60 hidden sm:flex flex-col gap-1.5 select-none pointer-events-none"
          >
            <span className="text-primary font-bold">Spatial Architecture</span>
            <span>BOULDSPACE PROTOCOL AR-90</span>
            <span>INDEX // SCHEMATIC SCOPING</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 right-8 md:right-16 z-20 font-sans text-[9px] tracking-[0.25em] uppercase text-secondary/60 text-right hidden sm:flex flex-col gap-1.5 select-none pointer-events-none"
          >
            <span className="text-primary font-bold">Engineering Matrix</span>
            <span>10 CAPABILITIES // 08 WORKFLOWS</span>
            <span>COORD: 28.4595° N, 77.0266° E</span>
          </motion.div>
        </section>

        {/* ========================================
            2. SPATIAL PHILOSOPHY & VISION
            ======================================== */}
        <section className="py-32 bg-surface relative z-10 border-b border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <FadeIn direction="right" duration={0.8} className="space-y-4">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                    Philosophy in Elevation
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[46px] leading-tight text-on-surface font-normal">
                    Timeless structures built around human flow.
                  </h2>
                </FadeIn>
              </div>

              <div className="lg:col-span-7 font-sans text-[16px] leading-relaxed text-secondary space-y-6">
                <FadeIn direction="left" delay={0.1} duration={0.8} className="space-y-6">
                  <p>
                    We approach spatial design as an editorial journey rather than a generic collection of rooms. True architectural luxury is silent—expressed through material honesty, volumetric balance, natural daylight orientations, and long-term structural integrity.
                  </p>
                  <p>
                    Every line we draft respects contextual parameters, using robust materials that grow more beautiful with time. We reject flashy, synthetic facades, choosing instead to compose organic concrete casts, travertine stone slabs, and solid teak timbers into functional architectural landmarks.
                  </p>
                </FadeIn>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================
            3. ARCHITECTURAL DESIGN CAPABILITIES
            ======================================== */}
        <section id="capabilities" className="py-32 bg-surface relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  SCHEMATIC CAPABILITIES
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Our Architectural Framework
                </h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap, idx) => {
                const IconComponent = cap.icon;
                return (
                  <FadeIn
                    key={idx}
                    direction="up"
                    delay={idx * 0.05}
                    duration={0.6}
                  >
                    <div className="h-full rounded border border-outline-variant/20 bg-surface-container-lowest p-8 flex flex-col justify-between shadow-elevated shadow-premium-hover relative overflow-hidden group">
                      <div className="absolute inset-0 opacity-[0.01] blueprint-grid pointer-events-none" />
                      
                      <div className="space-y-6 relative z-10">
                        <div className="h-12 w-12 rounded bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all duration-500">
                          <IconComponent className="h-6 w-6 text-primary group-hover:text-on-primary transition-colors" />
                        </div>
                        <h3 className="font-serif text-[20px] text-on-surface font-normal group-hover:text-primary transition-colors duration-300">
                          {cap.name}
                        </h3>
                        <p className="font-sans text-[13.5px] leading-relaxed text-secondary">
                          {cap.desc}
                        </p>
                      </div>

                      <div className="absolute bottom-0 right-0 w-24 h-24 translate-x-8 translate-y-8 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
                        <svg className="w-full h-full text-primary" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
                          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1" />
                          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" />
                        </svg>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================
            4. RESIDENTIAL & COMMERCIAL EXPERTISE
            ======================================== */}
        <section className="py-32 bg-surface-container border-t border-b border-outline-variant/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            
            {/* Split Bento Layout Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
              
              {/* Showcase A: Luxury Residential Estates */}
              <FadeIn direction="right" duration={0.8} className="h-full">
                <div className="h-full rounded border border-outline-variant/30 bg-surface-container-lowest p-8 sm:p-12 flex flex-col justify-between shadow-elevated relative overflow-hidden group">
                  <div className="space-y-6">
                    <span className="font-sans text-[9px] font-bold tracking-widest text-outline bg-surface-container px-2.5 py-1 uppercase rounded inline-block">
                      ESTATES & VILLAS
                    </span>
                    <h3 className="font-serif text-[28px] sm:text-[34px] text-on-surface font-normal">
                      Premium Private Residences
                    </h3>
                    <p className="font-sans text-[15px] leading-relaxed text-secondary">
                      For ultra-premium private estates, custom farmhouses, and urban penthouses. We manage height setback compliance, map interior thermal barriers, and balance daylight curves around bespoke private living habits.
                    </p>
                    
                    <div className="h-px bg-outline-variant/25 pt-4" />
                    
                    {/* Spatial Metrics */}
                    <div className="grid grid-cols-2 gap-6 pt-4 font-sans">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-outline block">Setback Tolerance</span>
                        <span className="text-[20px] font-normal text-on-surface mt-0.5 block">&lt; 0.1% Margin</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-outline block">Thermal Efficiency</span>
                        <span className="text-[20px] font-normal text-primary mt-0.5 block">High Performance</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-10">
                    <Button variant="primary" showArrow={true} className="w-full justify-center" href="/contact?ref=arch-res">
                      Scope Residential Concept
                    </Button>
                  </div>
                </div>
              </FadeIn>

              {/* Showcase B: Commercial & Hospitality Landmarks */}
              <FadeIn direction="left" delay={0.15} duration={0.8} className="h-full">
                <div className="h-full rounded border border-outline-variant/30 bg-surface-container-lowest p-8 sm:p-12 flex flex-col justify-between shadow-elevated relative overflow-hidden group">
                  <div className="space-y-6">
                    <span className="font-sans text-[9px] font-bold tracking-widest text-outline bg-surface-container px-2.5 py-1 uppercase rounded inline-block">
                      OFFICES & CORPORATE
                    </span>
                    <h3 className="font-serif text-[28px] sm:text-[34px] text-on-surface font-normal">
                      Commercial Scalability
                    </h3>
                    <p className="font-sans text-[15px] leading-relaxed text-secondary">
                      Bespoke retail flagship stores, luxury wellness clinics, boutique corporate headquarters, and institutional masterplans. We integrate heavy HVAC ducts, optimize floor space pathways, and ensure building safety certifications.
                    </p>
                    
                    <div className="h-px bg-outline-variant/25 pt-4" />
                    
                    {/* Spatial Metrics */}
                    <div className="grid grid-cols-2 gap-6 pt-4 font-sans">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-outline block">MEP Clash Checking</span>
                        <span className="text-[20px] font-normal text-primary mt-0.5 block">100% Resolved</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-outline block">Structural Lifespan</span>
                        <span className="text-[20px] font-normal text-on-surface mt-0.5 block">Century Grade</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-10">
                    <Button variant="primary" showArrow={true} className="w-full justify-center" href="/contact?ref=arch-comm">
                      Scope Commercial Project
                    </Button>
                  </div>
                </div>
              </FadeIn>

            </div>

          </div>
        </section>

        {/* ========================================
            5. PLANNING & VISUALIZATION SYSTEMS
            ======================================== */}
        <section className="py-32 bg-surface relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Side: Technical SVG wireframe (7 Columns) */}
              <div className="lg:col-span-7">
                <FadeIn direction="right" duration={1.0}>
                  <div className="relative aspect-[16/10] w-full rounded border border-outline-variant/30 bg-surface-container p-6 sm:p-8 flex flex-col justify-between font-sans shadow-elevated overflow-hidden group select-none">
                    <div className="absolute inset-0 opacity-15 blueprint-grid pointer-events-none" />
                    <div className="absolute inset-4 border border-outline/10 pointer-events-none" />
                    
                    <div className="flex justify-between items-start text-[9px] tracking-widest text-outline uppercase font-bold relative z-10">
                      <span>WIRE FRAME MODEL // AR-95</span>
                      <span className="text-primary">[PARAMETRIC GRID DETAILS]</span>
                    </div>

                    <div className="relative w-full h-full my-auto flex items-center justify-center py-4">
                      <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
                        {/* Parametric structural lines */}
                        <line x1="50" y1="30" x2="350" y2="30" className="stroke-outline/30" />
                        <line x1="50" y1="210" x2="350" y2="210" className="stroke-outline/30" />
                        
                        {/* Perspective wire lines */}
                        <line x1="50" y1="30" x2="150" y2="120" className="stroke-primary/25" />
                        <line x1="350" y1="30" x2="250" y2="120" className="stroke-primary/25" />
                        <line x1="50" y1="210" x2="150" y2="120" className="stroke-primary/25" />
                        <line x1="350" y1="210" x2="250" y2="120" className="stroke-primary/25" />
                        
                        {/* Internal spatial focus nodes */}
                        <rect x="150" y="80" width="100" height="80" className="stroke-primary/50 fill-primary/5" />
                        <circle cx="200" cy="120" r="6" className="fill-primary stroke-primary" />
                        
                        {/* Connecting rays */}
                        <line x1="200" y1="120" x2="200" y2="30" className="stroke-primary/20 stroke-dasharray-[2_4]" />
                        <line x1="200" y1="120" x2="200" y2="210" className="stroke-primary/20 stroke-dasharray-[2_4]" />
                        
                        <text x="200" y="232" textAnchor="middle" className="font-sans text-[7px] fill-secondary/50 font-bold uppercase tracking-[0.2em]">PARAMETRIC CANTILEVER PERSPECTIVE</text>
                      </svg>
                    </div>

                    <div className="flex justify-between text-[9px] tracking-wider text-secondary/60 border-t border-outline-variant/20 pt-4 font-semibold uppercase relative z-10">
                      <span>PLANNING FACTOR: HIGHEST COMPLIANCE</span>
                      <span>MESH: CLASH-FREE COORDINATES</span>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Right Side: Editorial brief & List (5 Columns) */}
              <div className="lg:col-span-5 space-y-8">
                <FadeIn direction="left" duration={0.8} className="space-y-6">
                  <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary block">SCHEMATIC SYSTEMS</span>
                  
                  <h2 className="font-serif text-[32px] sm:text-[42px] leading-tight text-on-surface font-normal">
                    Precision Planning & Curation
                  </h2>
                  
                  <p className="font-sans text-[15px] leading-relaxed text-secondary">
                    Standard architects sell hand sketches; we program parametric wireframe grids to coordinate structural loading safety, municipal restrictions, and thermal diagnostics before concrete pour.
                  </p>

                  <div className="space-y-4 pt-2 font-sans text-[13.5px]">
                    {planningDetails.map((detail, idx) => (
                      <div key={idx} className="border-b border-outline-variant/15 pb-3">
                        <h4 className="font-serif text-[17px] text-on-surface font-semibold mb-0.5">{detail.title}</h4>
                        <p className="text-secondary text-[13px]">{detail.desc}</p>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================
            6. DESIGN-TO-EXECUTION WORKFLOW
            ======================================== */}
        <section className="py-32 bg-surface relative z-10 border-t border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  DEVELOPMENT CHRONOLOGY
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Design-to-Execution Workflow
                </h2>
              </FadeIn>
            </div>

            {/* Workflow steps sequence */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connecting lines overlay on desktop */}
              <div className="hidden lg:block absolute top-[60px] left-[5%] right-[5%] h-[1px] bg-outline-variant/20 z-0" />
              
              {workflowSteps.map((step, idx) => (
                <FadeIn
                  key={idx}
                  direction="up"
                  delay={idx * 0.08}
                  duration={0.8}
                  className="z-10"
                >
                  <div className="relative bg-surface-container-lowest p-6 rounded border border-outline-variant/20 shadow-elevated flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                      <span className="font-serif text-[28px] text-primary/30 font-bold leading-none">
                        {step.step}
                      </span>
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-[18px] text-on-surface font-normal">
                        {step.title}
                      </h3>
                      <p className="font-sans text-[12.5px] leading-relaxed text-secondary">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================
            7. SUSTAINABLE & SMART ARCHITECTURE
            ======================================== */}
        <section className="py-32 bg-gradient-to-br from-surface to-primary/5 relative z-10 border-t border-b border-outline-variant/20">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none blueprint-grid" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-5 space-y-8">
                <FadeIn direction="right" duration={0.8} className="space-y-6">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                    Future-Ready Infrastructure
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[46px] leading-tight text-on-surface font-normal">
                    Sustainable & Smart Systems
                  </h2>
                  <p className="font-sans text-[15px] leading-relaxed text-secondary">
                    Every luxury structure must be engineered to adapt to our changing climate. We plan thermal insulated envelopes, solar orientation alignments, passive drafts, and automated lighting pathways natively into our blueprints.
                  </p>
                </FadeIn>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 font-sans">
                
                {/* Metric 01: Ventilation */}
                <FadeIn direction="up" delay={0.1} duration={0.8}>
                  <div className="bg-surface-container-lowest p-6 rounded border border-outline-variant/30 flex flex-col gap-4 shadow-elevated h-full justify-between">
                    <Wind className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-serif text-[17px] text-on-surface font-semibold mb-0.5">Passive Drafts</h4>
                      <p className="text-secondary text-[12.5px] leading-normal">Optimizing breeze channels to lower HVAC load by up to 35%.</p>
                    </div>
                  </div>
                </FadeIn>

                {/* Metric 02: Thermal envelope */}
                <FadeIn direction="up" delay={0.2} duration={0.8}>
                  <div className="bg-surface-container-lowest p-6 rounded border border-outline-variant/30 flex flex-col gap-4 shadow-elevated h-full justify-between">
                    <Sun className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-serif text-[17px] text-on-surface font-semibold mb-0.5">Solar Shield</h4>
                      <p className="text-secondary text-[12.5px] leading-normal">Aligning overhangs to block direct summer glare while capturing winter light.</p>
                    </div>
                  </div>
                </FadeIn>

                {/* Metric 03: Automation */}
                <FadeIn direction="up" delay={0.3} duration={0.8}>
                  <div className="bg-surface-container-lowest p-6 rounded border border-outline-variant/30 flex flex-col gap-4 shadow-elevated h-full justify-between">
                    <Zap className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-serif text-[17px] text-on-surface font-semibold mb-0.5">Smart MEP</h4>
                      <p className="text-secondary text-[12.5px] leading-normal">Integrating ambient occupancy sensors and automated curtain grids.</p>
                    </div>
                  </div>
                </FadeIn>

              </div>

            </div>
          </div>
        </section>

        {/* ========================================
            8. FEATURED ARCHITECTURAL CONCEPTS
            ======================================== */}
        <section className="py-32 bg-surface relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  VISIONARY ARCHETYPES
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Featured Concepts
                </h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredConcepts.map((concept, idx) => (
                <FadeIn
                  key={idx}
                  direction="up"
                  delay={idx * 0.08}
                  duration={0.8}
                >
                  <div className="rounded border border-outline-variant/20 bg-surface-container-lowest p-8 flex flex-col justify-between shadow-elevated hover:border-primary/45 transition-all duration-300 group h-full">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-outline">
                          CONCEPT #{idx+1}
                        </span>
                        <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-primary/75 bg-primary/5 px-2 py-0.5 rounded">
                          {concept.scale}
                        </span>
                      </div>
                      
                      <h3 className="font-serif text-[22px] text-on-surface font-normal group-hover:text-primary transition-colors duration-300">
                        {concept.title}
                      </h3>
                      <p className="font-sans text-[13.5px] leading-relaxed text-secondary">
                        {concept.desc}
                      </p>
                    </div>

                    <div className="border-t border-outline-variant/20 pt-6 mt-8 flex justify-between items-center text-[10px] font-sans font-bold uppercase tracking-widest text-outline group-hover:text-primary transition-colors duration-300">
                      <span>LOCATION</span>
                      <span>{concept.location}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================
            9. MATERIALS, ENGINEERING & PRECISION
            ======================================== */}
        <section className="py-32 bg-surface relative z-10 border-t border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Side: Technical data table (6 Columns) */}
              <div className="lg:col-span-6 space-y-8">
                <FadeIn direction="right" duration={0.8} className="space-y-6">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                    Material Integrity
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[46px] leading-tight text-on-surface font-normal">
                    Precision Materials & Engineering
                  </h2>
                  <p className="font-sans text-[15px] leading-relaxed text-secondary">
                    Luxury aesthetics must stand on rigorous concrete core stress tests and steel weight load distribution analysis. We coordinate our structural materials strictly to prevent deflection cracks.
                  </p>
                </FadeIn>
              </div>

              {/* Right Side: Data presentation table (6 Columns) */}
              <div className="lg:col-span-6 font-sans">
                <FadeIn direction="left" delay={0.15} duration={0.8}>
                  <div className="border border-outline-variant/30 rounded overflow-hidden shadow-elevated bg-surface-container-lowest">
                    
                    <div className="bg-surface-container px-6 py-4 border-b border-outline-variant/30 flex justify-between text-[10px] font-bold uppercase tracking-wider text-outline">
                      <span>STRUCTURAL ELEMENT</span>
                      <span>SPECIFICATION / METRIC</span>
                    </div>
                    
                    <div className="divide-y divide-outline-variant/15">
                      {engineeringMetrics.map((eng, idx) => (
                        <div key={idx} className="p-6 flex flex-col gap-2">
                          <div className="flex justify-between items-center">
                            <span className="font-serif text-[17px] text-on-surface font-semibold">{eng.material}</span>
                            <span className="text-[9.5px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2 py-0.5 rounded">{eng.grade}</span>
                          </div>
                          <p className="text-secondary text-[12.5px] leading-relaxed">{eng.usage}</p>
                        </div>
                      ))}
                    </div>

                  </div>
                </FadeIn>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================
            10. INDUSTRIES & PROJECT TYPES
            ======================================== */}
        <section className="py-32 bg-surface relative z-10 border-t border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  COMMISSION DIRECTORY
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Sectors & Specializations
                </h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-sans">
              {[
                "High-End Residential",
                "Commercial Hubs",
                "Hospitality Resorts",
                "Specialized Institutions",
                "Luxury Retail Outlets",
                "Private Country Estates",
                "Corporate Headquarters",
                "Aerospace Dome Shelters"
              ].map((sect, sidx) => (
                <FadeIn
                  key={sidx}
                  direction="up"
                  delay={sidx * 0.05}
                  duration={0.6}
                >
                  <div className="p-6 rounded border border-outline-variant/20 bg-surface-container-lowest shadow-elevated group hover:border-primary/40 transition-colors">
                    <span className="font-serif text-[16px] text-on-surface font-normal group-hover:text-primary transition-colors block">
                      {sect}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================
            11. FAQ ACCORDIONS
            ======================================== */}
        <section className="py-32 bg-surface relative z-10 border-t border-outline-variant/15">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-primary">
                  TECHNICAL QUESTIONS
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[38px] md:text-[44px] leading-tight text-on-surface font-normal">
                  Architecture FAQ
                </h2>
              </FadeIn>
            </div>

            <div className="space-y-4">
              {architectureFaqs.map((faq, idx) => {
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
                        <span className="font-serif text-[18px] sm:text-[20px] text-on-surface group-hover:text-primary transition-colors duration-300 font-normal">
                          {faq.q}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-primary shrink-0 transition-transform" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-secondary group-hover:text-primary shrink-0 transition-transform" />
                        )}
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="font-sans text-[14.5px] leading-relaxed text-secondary pt-2 pb-4">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================
            12. FINAL CONSULTATION CTA
            ======================================== */}
        <section className="py-28 bg-surface-container text-on-surface text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid" />
          
          <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 space-y-8 flex flex-col items-center">
            <FadeIn direction="up" duration={0.8}>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full">
                Studio Briefing
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1} duration={0.8}>
              <h2 className="font-serif text-[42px] sm:text-[56px] leading-tight text-on-surface font-normal max-w-3xl">
                Ready to coordinate your structural assessment?
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} duration={0.8}>
              <p className="font-sans text-[16px] sm:text-[18px] leading-relaxed text-secondary max-w-xl">
                Schedule a 45-minute spatial scoping private consultation with Bouldspace senior studio directors.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.8} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="primary" showArrow={true} href="/contact?ref=arch-cta">
                Schedule Scoping Briefing
              </Button>
              <Button variant="secondary" showArrow={false} href="/pricing">
                Explore Scoping Rates
              </Button>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
