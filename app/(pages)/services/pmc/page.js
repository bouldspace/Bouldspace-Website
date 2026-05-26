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
  Award
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";

export default function PMCServicePage() {
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

  // 1. Core PMC Expertise Showcase Data
  const pmcExpertise = [
    {
      title: "Project Planning",
      subtitle: "The Master Brief",
      desc: "Drafting complete project parameters before execution—defining resource schedules, load calculations, and baseline critical-path maps.",
      metric: "Baseline: Flawless",
      details: ["Resource scheduling matrices", "Structural loading baselines", "MEP layout initial setups"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Work Breakdown Structure block blueprint */}
          <rect x="50" y="30" width="100" height="40" rx="1.5" className="stroke-primary/45 fill-primary/[0.003]" />
          <text x="100" y="53" textAnchor="middle" className="font-sans text-[6.5px] fill-primary font-bold">WBS-01 PLANNING</text>
          
          <rect x="250" y="30" width="100" height="40" rx="1.5" className="stroke-outline/35 fill-outline/[0.002]" />
          <text x="300" y="53" textAnchor="middle" className="font-sans text-[6.5px] fill-outline font-bold">WBS-02 SCHEDULING</text>
          
          <line x1="150" y1="50" x2="250" y2="50" className="stroke-outline/25" />
          
          <rect x="150" y="110" width="100" height="40" rx="1.5" className="stroke-outline/35 fill-outline/[0.002]" />
          <text x="200" y="133" textAnchor="middle" className="font-sans text-[6.5px] fill-outline font-bold">WBS-03 COST CTR</text>
          
          <line x1="200" y1="50" x2="200" y2="110" className="stroke-primary/35" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">WBS SCHEDULING MODEL // PL-01</text>
        </svg>
      )
    },
    {
      title: "Cost Management",
      subtitle: "Strategic Budget Control",
      desc: "Establishing strict cost parameters to protect cash flows—supervising contractor billings, running variance checks, and auditing material procurement offsets.",
      metric: "Variance Target: 0.0%",
      details: ["Continuous budget strain audits", "Subcontractor bill auditing", "Material staging offset reviews"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Cost curves and variance coordinate grid */}
          <line x1="60" y1="180" x2="340" y2="180" className="stroke-outline/25" />
          <line x1="60" y1="40" x2="60" y2="180" className="stroke-outline/25" />
          
          {/* Target vs Actual Budget Curve */}
          <path d="M 60,150 Q 150,130 240,80 T 340,50" className="stroke-primary/45 stroke-[1.2]" />
          <path d="M 60,150 Q 150,140 240,110 T 340,65" className="stroke-outline/30 stroke-dasharray-[2_4]" />
          
          <circle cx="240" cy="110" r="4.5" className="stroke-primary/50 fill-surface shadow-elevated" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">BUDGET ESTIMATION TRAJECTORY // CS-02</text>
        </svg>
      )
    },
    {
      title: "Timeline Coordination",
      subtitle: "Critical Path Orchestration",
      desc: "Structuring the master construction path using CPM scheduling algorithms—managing key dependencies, monitoring float buffers, and preventing bottlenecks.",
      metric: "Float Buffer: Optimized",
      details: ["CPM dependency mapping plans", "Subcontractor timeline triggers", "Weekly schedule variance reviews"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Timeline flowchart / CPM network */}
          <line x1="50" y1="120" x2="350" y2="120" className="stroke-outline/25" />
          
          <circle cx="80" cy="120" r="20" className="stroke-primary/45 fill-primary/5" />
          <text x="80" y="123" textAnchor="middle" className="font-sans text-[6px] fill-primary font-bold">PMC-01</text>
          
          <circle cx="160" cy="120" r="20" className="stroke-outline/45 fill-outline/5" />
          <text x="160" y="123" textAnchor="middle" className="font-sans text-[6px] fill-secondary font-bold">AUDIT-02</text>
          
          <circle cx="240" cy="120" r="20" className="stroke-outline/45 fill-outline/5" />
          <text x="240" y="123" textAnchor="middle" className="font-sans text-[6px] fill-secondary font-bold">BUDGET-03</text>
          
          <circle cx="320" cy="120" r="20" className="stroke-primary/45 fill-primary/5" />
          <text x="320" y="123" textAnchor="middle" className="font-sans text-[6px] fill-primary font-bold">HANDOVER</text>
          
          <path d="M 100,120 L 140,120" className="stroke-primary/50" />
          <path d="M 180,120 L 220,120" className="stroke-outline/30" />
          <path d="M 260,120 L 300,120" className="stroke-primary/50" />
          
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">CRITICAL-PATH SCHEDULE DIAGRAM // TM-03</text>
        </svg>
      )
    },
    {
      title: "Contractor Management",
      subtitle: "Subcontractor Scorecards",
      desc: "Supervising key contractors to secure spatial tolerances—managing tenders, checking compliance grids, and verifying physical mockups before launches.",
      metric: "Tolerances: Verified",
      details: ["Subcontractor KPI scorecard grids", "Tender documentation packages", "Certified mockups quality audits"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Subcontractor scorecard compliance matrix grid */}
          <rect x="70" y="40" width="260" height="135" rx="1.5" className="stroke-primary/35 fill-primary/[0.003]" />
          <line x1="70" y1="85" x2="330" y2="85" className="stroke-outline/20" />
          <line x1="70" y1="130" x2="330" y2="130" className="stroke-outline/20" />
          <line x1="160" y1="40" x2="160" y2="175" className="stroke-outline/20" />
          <line x1="250" y1="40" x2="250" y2="175" className="stroke-outline/20" />
          
          <circle cx="115" cy="62" r="5" className="stroke-primary/45 fill-primary/10" />
          <circle cx="205" cy="107" r="5" className="stroke-primary/45 fill-primary/10" />
          <text x="200" y="210" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">CONTRACTOR MATRIX CHART // CM-04</text>
        </svg>
      )
    },
    {
      title: "Quality Control",
      subtitle: "Ultrasonic Auditing",
      desc: "Running extensive quality assurance sweeps on-site—including ultrasonic structural concrete audits, material loading tests, and MEP clash inspections.",
      metric: "Accuracy: 100%",
      details: ["Ultrasonic concrete load testing", "Advanced material loading audits", "MEP clash-free coordinate checks"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Precision testing waveform audit */}
          <line x1="50" y1="120" x2="350" y2="120" className="stroke-outline/25" />
          <path d="M 50,120 Q 80,170 110,120 T 170,120 T 230,120 T 290,120 T 350,120" className="stroke-primary/45" />
          <path d="M 50,120 Q 80,70 110,120 T 170,120 T 230,120 T 290,120 T 350,120" className="stroke-outline/15 stroke-dasharray-[2_4]" />
          
          <rect x="180" y="80" width="40" height="80" rx="1.5" className="stroke-primary/30 fill-surface" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">WAVEFORM SITE INSPECTION // QC-05</text>
        </svg>
      )
    },
    {
      title: "Site Supervision",
      subtitle: "Command Center Inspections",
      desc: "Directing continuous on-site inspection routines—auditing construction clearances, setting up safety staging structures, and managing keys handover.",
      metric: "Staging: Advanced Safety",
      details: ["Daily on-site structural sweeps", "Clearance coordinates audits", " MEP system installation supervision"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Construction clearance sweep */}
          <rect x="60" y="40" width="280" height="145" className="stroke-primary/45 fill-primary/[0.003]" />
          <line x1="60" y1="112" x2="340" y2="112" className="stroke-outline/25" />
          <ellipse cx="200" cy="112" rx="45" ry="15" className="stroke-primary/30 stroke-dasharray-[2_4]" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">CLEARANCE AXIS MAPPING // SS-06</text>
        </svg>
      )
    },
    {
      title: "Risk Management",
      subtitle: "Active Mitigation Register",
      desc: "Identifying and defusing scheduling/cost hazards proactively—managing risk matrices, scheduling backup contractors, and auditing structural tolerances.",
      metric: "Risk Rating: Zero-Error",
      details: ["Active hazard tracking matrix", "Backup subcontractor registries", "Safety tolerance double-checks"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Mitigated risk register grid */}
          <rect x="80" y="30" width="240" height="160" rx="2" className="stroke-primary/35 fill-primary/[0.003]" />
          <line x1="80" y1="110" x2="320" y2="110" className="stroke-outline/25" />
          <rect x="100" y="45" width="80" height="50" className="stroke-outline/25" />
          <rect x="220" y="125" width="80" height="50" className="stroke-primary/45 fill-primary/5" />
          <text x="200" y="215" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">RISK TRACKING MATRIX // RM-07</text>
        </svg>
      )
    },
    {
      title: "Stakeholder Coordination",
      subtitle: "Unified Communications Interface",
      desc: "Supervising critical communication pathways—acting as the single coordination interface connecting clients, lead architects, logisticians, and subcontractors.",
      metric: "Supervision: Fully Unified",
      details: ["Lead architect design coordinate alignment", "Subcontractor execution logs checks", "MEP and logistics schedules mapping"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Collaborative communication node maps */}
          <circle cx="200" cy="110" r="30" className="stroke-primary/45 fill-primary/5" />
          <text x="200" y="113" textAnchor="middle" className="font-sans text-[6.5px] fill-primary font-bold">PMC CORE</text>
          
          <circle cx="100" cy="60" r="22" className="stroke-outline/35" />
          <circle cx="300" cy="60" r="22" className="stroke-outline/35" />
          <circle cx="200" cy="180" r="22" className="stroke-outline/35" />
          
          <line x1="122" y1="75" x2="178" y2="95" className="stroke-primary/35" />
          <line x1="278" y1="75" x2="222" y2="95" className="stroke-primary/35" />
          <line x1="200" y1="158" x2="200" y2="140" className="stroke-primary/35" />
          <text x="200" y="222" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">STAKEHOLDER INTEGRATION // SC-08</text>
        </svg>
      )
    },
    {
      title: "Procurement Coordination",
      subtitle: "Seamless Supply Staging",
      desc: "Sourcing and staging premium finishing materials under continuous audits—wire-brushed ash casework, honed travertine slabs, and anti-fingerprint lacquers.",
      metric: "Audit: Continuous Sourcing",
      details: ["Premium material quality inspections", "On-site material staging reviews", "Anodized runner hardware checks"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Supply chain staging flowchart */}
          <rect x="50" y="90" width="80" height="40" rx="1.5" className="stroke-outline/35" />
          <rect x="160" y="90" width="80" height="40" rx="1.5" className="stroke-primary/45 fill-primary/5" />
          <rect x="270" y="90" width="80" height="40" rx="1.5" className="stroke-outline/35" />
          
          <line x1="130" y1="110" x2="160" y2="110" className="stroke-primary/35" />
          <line x1="240" y1="110" x2="270" y2="110" className="stroke-primary/35" />
          <text x="200" y="165" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">MATERIAL FLOW DIAGRAM // PC-09</text>
        </svg>
      )
    },
    {
      title: "Project Reporting",
      subtitle: "High-Fidelity Command Logs",
      desc: "Publishing weekly diagnostic summaries for complete transparency—mapping cost curves, schedule indicators, safety logs, and drone site scans.",
      metric: "Reports: Weekly Digital Scans",
      details: ["Weekly diagnostic performance logs", "Cost vs schedule variance charts", "Site safety coordinate sweeps"],
      svg: (
        <svg className="w-10/12 h-10/12 text-secondary/35 stroke-current stroke-[0.8] fill-none" viewBox="0 0 400 240">
          {/* Analytical command log chart */}
          <rect x="70" y="40" width="260" height="135" rx="1.5" className="stroke-primary/45 fill-primary/[0.005]" />
          <line x1="70" y1="107" x2="330" y2="107" className="stroke-outline/20 stroke-dasharray-[2_4]" />
          
          {/* Column indicators */}
          <rect x="90" y="60" width="30" height="47" className="stroke-outline/35" />
          <rect x="140" y="80" width="30" height="27" className="stroke-outline/35" />
          <rect x="190" y="50" width="30" height="57" className="stroke-primary/45 fill-primary/5" />
          <rect x="240" y="70" width="30" height="37" className="stroke-outline/35" />
          <text x="200" y="210" textAnchor="middle" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-widest">COMMAND DASHBOARD LAYOUT // PR-10</text>
        </svg>
      )
    }
  ];

  // 2. Project Control Highlights
  const controlHighlights = [
    { title: "Precision Workflows", desc: "Every task operates under clear dependencies and critical-path constraints to prevent runtime bottlenecks." },
    { title: "Coordination Systems", desc: "Act as the single command coordination interface connecting clients, lead architects, logisticians, and subcontractors." },
    { title: "Execution Monitoring", desc: "Continuous on-site diagnostics, checking concrete column jackets, and MEP clearances under safe limits." },
    { title: "Milestone Management", desc: "Proactive float buffer management and early coordination reviews to protect client timeline schedules." }
  ];

  // 3. PMC Process Curation
  const processSteps = [
    { step: "01", title: "Requirement Analysis", desc: "Consultation auditing spatial dimensions, design requirements, and contractor bids brief." },
    { step: "02", title: "Strategic Planning", desc: "Drafting the CPM critical-path scheduling algorithms and baseline budget coordinate grids." },
    { step: "03", title: "Consultant Coordination", desc: "Aligning lead architects, structural planners, and damp proofing logisticians schedules." },
    { step: "04", title: "Execution Monitoring", desc: "Supervising concrete jacketing, ultrasonic column checking, and on-site coordinates audits." },
    { step: "05", title: "Quality Assurance", desc: "Performing weekly drone sweeps, MEP clash inspections, and concrete pressure testing sweeps." },
    { step: "06", title: "Reporting & Optimization", desc: "Publishing weekly digital command logs detailing cost curves and timeline variance tracking." },
    { step: "07", title: "Final Delivery Management", desc: "Managing safety check signoffs, performing deep clean audits, and keys handover." }
  ];

  // 4. Featured PMC Sectors
  const pmcSectors = [
    { name: "Luxury Residential Penthouses", desc: "Supervising double-height volumetric Curation, travertine claddings, and oak casings cabinetry setups.", area: "Golf Course Road, Gurugram" },
    { name: "Boutique Hospitality Lobby Cabins", desc: "Coordinating curved travertine reception desks, textured plaster rib layouts, and low-glare coves.", area: "Hospitality Hub, Bengaluru" },
    { name: "Executive Corporate Office Penthouses", desc: "Supervising acoustic glass splits, raw oak focus desks, and automated track lighting tracks setups.", area: "Whitefield, Bengaluru" }
  ];

  return (
    <>
      <Header />
      <main ref={containerRef} className="flex-grow bg-surface overflow-hidden">
        
        {/* ========================================
            1. HERO SECTION — CINEMATIC
            ======================================== */}
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-36 pb-24 overflow-hidden bg-surface text-on-surface border-b border-outline-variant/15">
          
          {/* Immersive Parallax Backdrop - Operational Command Center Critical-Path Chart */}
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
          >
            <svg className="w-full h-full text-secondary/35 stroke-current stroke-[1.2] fill-none opacity-85" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
              {/* Diffused warm coordinates lightsdefinitions */}
              <defs>
                <linearGradient id="sunlight-beams-pmc" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.08" />
                  <stop offset="60%" stopColor="var(--color-primary)" stopOpacity="0.02" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Sunlight beams */}
              <polygon points="0,0 250,0 600,600 200,600" fill="url(#sunlight-beams-pmc)" className="stroke-none" />
              
              {/* Integrated Project Coordination Node Map */}
              {/* Outer boundary grid */}
              <rect x="180" y="80" width="640" height="440" className="stroke-outline/45 fill-primary/[0.002]" />
              <circle cx="500" cy="300" r="150" className="stroke-primary/15 stroke-dasharray-[4_6]" />
              
              {/* Critical Path Methods flow lines */}
              <circle cx="350" cy="220" r="22" className="stroke-primary/45 fill-primary/5" />
              <circle cx="500" cy="180" r="22" className="stroke-outline/35 fill-surface" />
              <circle cx="650" cy="220" r="22" className="stroke-primary/45 fill-primary/5" />
              
              <line x1="372" y1="215" x2="478" y2="185" className="stroke-primary/35 stroke-[1.2]" />
              <line x1="522" y1="185" x2="628" y2="215" className="stroke-primary/35 stroke-[1.2]" />
              
              {/* Downward secondary paths */}
              <circle cx="500" cy="420" r="22" className="stroke-outline/35 fill-surface" />
              <line x1="365" y1="238" x2="480" y2="405" className="stroke-outline/25" />
              <line x1="635" y1="238" x2="520" y2="405" className="stroke-outline/25" />
              
              {/* Technical coordinates and annotations */}
              <text x="195" y="45" textAnchor="start" className="font-sans text-[7.5px] fill-secondary/65 font-bold uppercase tracking-[0.25em]">BOULDSPACE EXECUTION MANAGEMENT</text>
              <text x="805" y="45" textAnchor="end" className="font-sans text-[7.5px] fill-primary font-bold uppercase tracking-[0.25em]">COMMAND REGISTER: PM-10</text>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </motion.div>

          {/* Warm spotlight blur */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-10" />

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
                Integrated Command
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="font-serif text-[48px] sm:text-[68px] md:text-[84px] leading-[1.05] tracking-tight font-normal text-on-surface max-w-3xl"
              >
                Execution Without <br />
                Compromise.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-secondary max-w-2xl font-normal"
              >
                Integrated project management consultancy solutions designed to streamline planning, coordination, execution, timelines, quality, and delivery with precision.
              </motion.p>

              <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button variant="primary" showArrow={true} href="/contact?ref=pmc-hero">
                  Schedule PMC Consultation
                </Button>
                <Button variant="secondary" showArrow={false} href="#philosophies">
                  Explore Project Expertise
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating command center markers */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 left-8 md:left-16 z-20 font-sans text-[9px] tracking-[0.25em] uppercase text-secondary/60 hidden sm:flex flex-col gap-1.5 select-none pointer-events-none"
          >
            <span className="text-primary font-bold">Execution Control</span>
            <span>BOULDSPACE PROTOCOL PM-10</span>
            <span>INDEX // PMC SYSTEMS</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 right-8 md:right-16 z-20 font-sans text-[9px] tracking-[0.25em] uppercase text-secondary/60 text-right hidden sm:flex flex-col gap-1.5 select-none pointer-events-none"
          >
            <span className="text-primary font-bold">Critical-Path Axis</span>
            <span>07 STAGES // OPERATIONAL FLOW</span>
            <span>COORD MAPS // COMMANDS</span>
          </motion.div>
        </section>

        {/* ========================================
            2. PMC PHILOSOPHY SECTION
            ======================================== */}
        <section id="philosophies" className="py-32 bg-surface relative z-10 border-b border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Asymmetrical Editorial Heading */}
              <div className="lg:col-span-5 space-y-6">
                <FadeIn direction="right" duration={0.8} className="space-y-4">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 px-3 py-1 rounded inline-block">
                    01 // Philosophy in Orchestration
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[46px] leading-tight text-on-surface font-normal">
                    Orchestrated with absolute precision.
                  </h2>
                </FadeIn>
              </div>

              {/* Right Column: Narrative Storytelling */}
              <div className="lg:col-span-7 font-sans text-[16px] leading-relaxed text-secondary space-y-6 border-l border-outline-variant/25 pl-6 lg:pl-12">
                <FadeIn direction="left" delay={0.15} duration={0.8} className="space-y-6">
                  <p>
                    A premium infrastructure execution is an orchestration story. It coordinates subcontractor performance, resource stages, and cost curves to secure spatial success. We believe true execution lies in absolute control—which is why we supervise projects from the master brief, monitoring critical paths under strict audits.
                  </p>
                  <p>
                    Every CPM coordinate is custom-tailored, pairing independent contractor quality checks against advanced concrete load audits and weekly digital drone surveys. The result is a highly predictable execution system that protects budgets, safeguards timelines, and guarantees structural quality.
                  </p>
                </FadeIn>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================
            3. CORE PMC EXPERTISE SHOWCASE
            ======================================== */}
        <section className="py-32 bg-surface relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  STUDIO COMMANDS
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Expertise in Execution
                </h2>
              </FadeIn>
            </div>

            {/* Alternating Asymmetrical Style Layouts */}
            <div className="space-y-36">
              {pmcExpertise.map((style, idx) => {
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
                            Expertise Category 0{idx + 1}
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
                            <span>COORDINATION DESIGN // FD-STYLE-0{idx + 1}</span>
                            <span className="text-primary">[VOLUMETRIC FURNISHING]</span>
                          </div>

                          <div className="relative w-full h-full my-auto flex items-center justify-center py-4">
                            {style.svg}
                          </div>

                          <div className="flex justify-between text-[9px] tracking-wider text-secondary/60 border-t border-outline-variant/20 pt-4 font-semibold uppercase relative z-10">
                            <span>COMMAND REGISTER</span>
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
            4. PROJECT CONTROL EXPERIENCE
            ======================================== */}
        <section className="py-32 bg-surface-container border-t border-b border-outline-variant/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none blueprint-grid" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-24">
              <div className="lg:col-span-6">
                <FadeIn direction="right" duration={0.8} className="space-y-4">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                    Execution Controls
                  </span>
                  <h2 className="font-serif text-[38px] md:text-[46px] leading-tight text-on-surface font-normal">
                    Project Control Curation
                  </h2>
                </FadeIn>
              </div>
              <div className="lg:col-span-6">
                <FadeIn direction="left" delay={0.15} duration={0.8} className="space-y-4">
                  <p className="text-[15.5px] leading-relaxed text-secondary">
                    "Precision creates predictability. Execution is orchestrated, not improvised." We deploy analytical planning assets to manage structural tolerances, MEP alignments, and scheduling float buffers contextually.
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Tactile Material Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {controlHighlights.map((mat, idx) => (
                <FadeIn
                  key={mat.title}
                  direction="up"
                  delay={idx * 0.05}
                  duration={0.8}
                >
                  <div className="bg-surface-container-lowest p-6 rounded border border-outline-variant/30 flex flex-col justify-between shadow-elevated h-full relative group">
                    <div className="space-y-4">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2.5 py-0.5 rounded inline-block">Control Node 0{idx+1}</span>
                      <h4 className="font-serif text-[20px] text-on-surface font-normal leading-tight">{mat.title}</h4>
                      <p className="text-secondary text-[13px] leading-relaxed">{mat.desc}</p>
                    </div>
                    <div className="border-t border-outline-variant/20 pt-4 mt-6 text-[9.5px] font-bold text-outline uppercase tracking-wider">
                      PMC // SYSTEM ACTIVE
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================
            5. PMC PROCESS EXPERIENCE
            ======================================== */}
        <section className="py-32 bg-surface relative z-10 border-b border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  EXECUTION FLOW
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Our Command Process
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
            6. INDUSTRIES MANAGED
            ======================================== */}
        <section className="py-32 bg-surface relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  OPERATING SECTORS
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight text-on-surface font-normal">
                  Sectors Under Management
                </h2>
              </FadeIn>
            </div>

            {/* Masonry portfolio showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pmcSectors.map((space, idx) => (
                <FadeIn
                  key={idx}
                  direction="up"
                  delay={idx * 0.08}
                  duration={0.8}
                >
                  <div className="rounded border border-outline-variant/20 bg-surface-container-lowest p-8 flex flex-col justify-between shadow-elevated hover:border-primary/45 transition-all duration-300 group h-full">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-outline">SECTOR 0{idx+1}</span>
                        <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2.5 py-0.5 rounded">PMC ACTIVE</span>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-serif text-[22px] text-on-surface font-normal group-hover:text-primary transition-colors duration-300 leading-tight">
                          {space.name}
                        </h3>
                      </div>
                      
                      <p className="font-sans text-[14px] leading-relaxed text-secondary">
                        {space.desc}
                      </p>
                    </div>

                    <div className="border-t border-outline-variant/20 pt-6 mt-8 flex justify-between items-center text-[10px] font-sans font-bold uppercase tracking-widest text-outline group-hover:text-primary transition-colors duration-300">
                      <span>LOCATION</span>
                      <span>{space.area}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================
            7. PMC METRICS EXPERIENCE
            ======================================== */}
        <section className="py-32 bg-[#1e1b18] text-[#fbefe5] border-t border-b border-outline-variant/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none blueprint-grid" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 font-sans text-center">
              
              <FadeIn direction="up" delay={0.05} duration={0.8} className="space-y-2">
                <span className="font-serif text-[42px] sm:text-[56px] leading-none text-surface-bright font-bold block">100%</span>
                <span className="text-[10px] text-[#cdc5c0] uppercase tracking-widest font-semibold block">Independent audits</span>
              </FadeIn>

              <FadeIn direction="up" delay={0.15} duration={0.8} className="space-y-2">
                <span className="font-serif text-[42px] sm:text-[56px] leading-none text-surface-bright font-bold block">2.4M+</span>
                <span className="text-[10px] text-[#cdc5c0] uppercase tracking-widest font-semibold block">Sq. Ft. Managed</span>
              </FadeIn>

              <FadeIn direction="up" delay={0.25} duration={0.8} className="space-y-2">
                <span className="font-serif text-[42px] sm:text-[56px] leading-none text-surface-bright font-bold block">99.8%</span>
                <span className="text-[10px] text-[#cdc5c0] uppercase tracking-widest font-semibold block">Timeline accuracy</span>
              </FadeIn>

              <FadeIn direction="up" delay={0.35} duration={0.8} className="space-y-2">
                <span className="font-serif text-[42px] sm:text-[56px] leading-none text-surface-bright font-bold block">45+</span>
                <span className="text-[10px] text-[#cdc5c0] uppercase tracking-widest font-semibold block">Consultants managed</span>
              </FadeIn>

              <FadeIn direction="up" delay={0.45} duration={0.8} className="space-y-2 col-span-2 md:col-span-1">
                <span className="font-serif text-[42px] sm:text-[56px] leading-none text-surface-bright font-bold block">12</span>
                <span className="text-[10px] text-[#cdc5c0] uppercase tracking-widest font-semibold block">Cities served</span>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* ========================================
            8. WHY BOULDSPACE PMC
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
                  Why Bouldspace PMC
                </h2>
              </FadeIn>
            </div>

            {/* Differentiators Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
              {[
                { title: "Unified Coordination", desc: "No contractor fragmentation. We coordinate structural schedules from baseline rules." },
                { title: "Timeline Precision", desc: "Float buffer audits and early schedule warnings checked continuously under CMP." },
                { title: "Quality Assurance", desc: "Independent subcontractor audits, concrete loading checks, and drone inspections." },
                { title: "Predictable Delivery", desc: "Ultrasonic concrete auditing, cash-flow strain checks, and clash-free MEP coordinates." }
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
                    <span className="font-sans text-[9px] font-bold tracking-widest text-primary/30 uppercase mt-4">COORD // PM-{idx+1}</span>
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
                <Sliders className="h-6 w-6" />
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1} duration={0.8}>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary">
                CLIENT DIALOGUE
              </span>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} duration={0.8}>
              <blockquote className="font-serif text-[24px] sm:text-[32px] md:text-[38px] leading-snug font-normal text-surface-bright italic max-w-3xl">
                "Bouldspace coordinated our high-end residential complex with complete structural strategy and cost balance. They resolved minor MEP clashes weeks before site excavation, and their weekly digital command logs provided total budget peace."
              </blockquote>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.8} className="space-y-1 font-sans">
              <cite className="font-serif text-[18px] text-surface-bright not-italic block font-normal">Vikram Malhoutra</cite>
              <span className="text-[10px] text-[#cdc5c0] uppercase tracking-wider">Executive Director, Gurugram Residences</span>
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
                Great Projects Are Defined By Great Execution.
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} duration={0.8}>
              <p className="font-sans text-[16px] sm:text-[18px] leading-relaxed text-secondary max-w-xl">
                Partner with Bouldspace for project management consultancy solutions built around precision, coordination, transparency, and seamless delivery.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.8} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="primary" showArrow={true} href="/contact?ref=pmc-cta-book">
                Discuss Your Project
              </Button>
              <Button variant="secondary" showArrow={false} href="/contact?ref=pmc-cta-start">
                Schedule PMC Consultation
              </Button>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
