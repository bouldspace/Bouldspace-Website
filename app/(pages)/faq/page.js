"use client";

import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Search, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  ArrowRight, 
  ThumbsUp, 
  ThumbsDown, 
  Compass, 
  Ruler, 
  Layers, 
  PhoneCall 
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";

export default function FAQPage() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax background translations
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const contentY = useTransform(scrollY, [0, 800], [0, -60]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Search and Category Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Accordion Open States (track index of items)
  const [openIndex, setOpenIndex] = useState(null);

  // Feedback State: tracks if question at index got Yes, No, or null
  const [feedbackState, setFeedbackState] = useState({});

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
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const categories = [
    "All",
    "General",
    "Services",
    "Pricing & Payments",
    "Process & Timeline",
    "Materials & Quality",
    "Warranty",
    "After-Sales Support"
  ];

  const popularQuestions = [
    {
      q: "How does Bouldspace manage end-to-end projects?",
      category: "Process & Timeline",
      index: 0
    },
    {
      q: "What industries do you specialize in?",
      category: "General",
      index: 2
    },
    {
      q: "How are project timelines handled?",
      category: "Process & Timeline",
      index: 8
    },
    {
      q: "Do you offer turnkey execution?",
      category: "Services",
      index: 4
    },
    {
      q: "How involved are clients during execution?",
      category: "Process & Timeline",
      index: 9
    }
  ];

  const faqs = [
    {
      q: "How does Bouldspace manage end-to-end projects?",
      a: "Bouldspace deploys a highly advanced 'Unified Command' model. Rather than forcing clients to coordinate separately with structural engineers, interior designers, and masonry sub-contractors, we represent a single unified dashboard. One senior project director coordinates all structural calculations, raw materials procurement logs, municipal approvals, and millwork tolerances under a single unified schedule.",
      category: "Process & Timeline",
      topics: ["Unified Command", "Project Management", "Site Direction"]
    },
    {
      q: "What makes Bouldspace different from standard contractors?",
      a: "Standard contractors work from pre-packaged templates, leading to synthetic materials and compromised engineering safety metrics. Bouldspace coordinates every project from primary principles. We utilize 'Material Honesty'—curating earthy terracotta plaster, solid oak casework, raw concrete panels, and custom stone slabs. We stress-test all blueprints against local building codes and do not inflate subcontracting costs.",
      category: "General",
      topics: ["Material Honesty", "Engineering Rigor", "Custom Architecture"]
    },
    {
      q: "What industries and sectors do you specialize in?",
      a: "Our advisory coordinates across high-end custom country estates, urban luxury penthouses, corporate headquarters, boutique hospitality landmarks, institutional campus masterplanning, and exploratory aerospace habitats (including parametric Mars dome shelter stress models).",
      category: "General",
      topics: ["Sectors of Operation", "Institutional Campuses", "Aerospace Design"]
    },
    {
      q: "Do you offer structural audits and permits coordination?",
      a: "Yes. Our structural advisory division handles all zoning audits, municipal setback permits, municipal paperwork compliance, and load deflection certifications under a unified client retainer, saving weeks of local administrative delays.",
      category: "Services",
      topics: ["Zoning Audits", "Municipal Permits", "Deflection Certificates"]
    },
    {
      q: "Do you offer turnkey execution?",
      a: "Yes. Our Turnkey Project Scale is our most comprehensive commission model. We handle structural construction, full-time engineering audit, masonry execution, bespoke carpentry curation, raw steel procurement, and final key handovers under a transparent percentage-of-cost contract.",
      category: "Services",
      topics: ["Turnkey Project Scale", "Construction Management", "Handover Protocol"]
    },
    {
      q: "How does your Architectural Retainer model work?",
      a: "Our Architectural Retainer is a design retainer based on conceptual milestones. Clients receive clash-free spatial blueprint grids, MEP coordinate maps, 3D parametric renders, and complete material boarding layouts. If you proceed with our Turnkey execution, this retainer fee is offset against project onboarding costs.",
      category: "Pricing & Payments",
      topics: ["Architectural Retainer", "Milestones Retainer", "Design Fee Offset"]
    },
    {
      q: "How are site visits and evaluation fees billed?",
      a: "Site visits are billed transparently. Same City Site Visits range from ₹2,500 – ₹7,500 based on scale, and are 100% credited against your project onboarding Conceptual Retainer. Outstation Visits are custom-quoted (base rate starts at ₹15,000) with transit, flight coordinates, and lodging billed directly at actual cost with zero markups.",
      category: "Pricing & Payments",
      topics: ["Same City Visits", "Outstation Site Visits", "Onboarding Credit"]
    },
    {
      q: "How are project timelines handled?",
      a: "Timelines are managed using advanced critical-path scheduling algorithms that integrate concrete setting cycles, steel fabrication times, and MEP coordination phases. We maintain strict compliance logs and share weekly digital reports with clients, linking progress directly to milestone payments.",
      category: "Process & Timeline",
      topics: ["Milestone Payments", "Timeline Audits", "Execution Schedules"]
    },
    {
      q: "How involved are clients during execution?",
      a: "Clients maintain absolute transparency through Bouldspace's digital dashboard. We share weekly high-resolution drone site surveys, physical material boards, and detailed coordinate reviews. Our studio director coordinates all major curations directly with you, while we manage all sub-contractors on-site.",
      category: "Process & Timeline",
      topics: ["Client Dashboard", "Drone Site Surveys", "Curation Meetings"]
    },
    {
      q: "What is material honesty in Bouldspace's philosophy?",
      a: "Material honesty represents our commitment to raw, enduring elements that age beautifully over time. We reject cold, synthetic laminates and vinyls. We curate structural materials in their authentic forms—solid wood timber joinery, raw clay terracotta finishes, exposed concrete casts, and textured stone countertops.",
      category: "Materials & Quality",
      topics: ["Material Honesty", "Solid Wood Joinery", "Terracotta Casts"]
    },
    {
      q: "How do you stress-test material batches?",
      a: "Every raw material shipment goes through rigorous structural screening. We conduct concrete core compression tests on-site, stone water-absorption diagnostic checks, timber structural moisture analyses, and metal deflection calculations to ensure batches exceed local safety norms.",
      category: "Materials & Quality",
      topics: ["Batch Diagnostics", "Concrete Core Tests", "Deflection Audits"]
    },
    {
      q: "Do you offer a structural warranty on turnkey executions?",
      a: "Yes. All turnkey execution projects are secured with Bouldspace's comprehensive **10-Year Structural Integrity Warranty** covering primary column load bearings, foundation settling, deflective beams, and deep structural water-insulation membranes.",
      category: "Warranty",
      topics: ["Structural Integrity Warranty", "Load Bearings Safety", "Water-Insulation Seal"]
    },
    {
      q: "What does the interior curation warranty cover?",
      a: "Our bespoke interior curations are backed by a **2-Year Craftsmanship Warranty** covering cabinet hinge alignment, custom wood milling joints, cast terrazzo countertops, and custom lighting fixtures coordinated by our studio.",
      category: "Warranty",
      topics: ["Craftsmanship Warranty", "Bespoke Millwork Joints", "Interior Curation"]
    },
    {
      q: "How is maintenance handled after project handover?",
      a: "After keys handover, Bouldspace schedules bi-annual structural wellness audits for the first 3 years. We inspect plumbing coordinates, electrical MEP parameters, thermal envelope seals, and load-deflection points. We also coordinate priority maintenance with specialized crews.",
      category: "After-Sales Support",
      topics: ["Wellness Inspections", "MEP Audits", "Emergency Support"]
    }
  ];

  // Filter FAQ items dynamically
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch = 
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = 
        activeCategory === "All" || 
        faq.category === activeCategory;
        
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const handlePopularQuestionClick = (faqIndex) => {
    setOpenIndex(faqIndex);
    const element = document.getElementById("faq-accordion-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFeedback = (idx, value) => {
    setFeedbackState(prev => ({
      ...prev,
      [idx]: value
    }));
  };

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
              <line x1="150" y1="0" x2="150" y2="600" className="stroke-outline/15 stroke-dasharray-[4_8]" />
              <line x1="500" y1="0" x2="500" y2="600" className="stroke-primary/25 stroke-dasharray-[2_4]" />
              <line x1="850" y1="0" x2="850" y2="600" className="stroke-outline/15 stroke-dasharray-[4_8]" />
              <line x1="0" y1="300" x2="1000" y2="300" className="stroke-primary/25 stroke-dasharray-[2_4]" />
              
              {/* Radial Knowledge System Coordinates */}
              <circle cx="500" cy="300" r="180" className="stroke-outline/15 stroke-dasharray-[6_6]" />
              <circle cx="500" cy="300" r="120" className="stroke-outline/25" />
              <circle cx="500" cy="300" r="50" className="stroke-primary/30 stroke-dasharray-[3_3]" />
              
              {/* Intersecting node coordinate lines */}
              <line x1="320" y1="120" x2="680" y2="480" className="stroke-outline/30" />
              <line x1="680" y1="120" x2="320" y2="480" className="stroke-outline/30" />
              
              {/* Connected Knowledge Nodes */}
              <circle cx="320" cy="120" r="6" className="fill-primary stroke-primary" />
              <circle cx="680" cy="120" r="6" className="fill-outline stroke-outline/80" />
              <circle cx="320" cy="480" r="6" className="fill-outline stroke-outline/80" />
              <circle cx="680" cy="480" r="6" className="fill-primary stroke-primary" />
              
              {/* Node Labels */}
              <text x="320" y="102" textAnchor="middle" className="font-sans text-[7px] fill-primary font-bold uppercase tracking-wider">NODE: SERVICES</text>
              <text x="680" y="102" textAnchor="middle" className="font-sans text-[7px] fill-secondary font-semibold uppercase tracking-wider">NODE: TIMELINE</text>
              <text x="320" y="498" textAnchor="middle" className="font-sans text-[7px] fill-secondary font-semibold uppercase tracking-wider">NODE: BILLING</text>
              <text x="680" y="498" textAnchor="middle" className="font-sans text-[7px] fill-primary font-bold uppercase tracking-wider">NODE: WARRANTY</text>
              
              {/* Repositioned text markings to completely avoid center text collisions */}
              <text x="165" y="45" textAnchor="start" className="font-sans text-[8px] fill-secondary/65 font-bold uppercase tracking-[0.25em]">BOULDSPACE ADVISORY NETWORK</text>
              <text x="835" y="45" textAnchor="end" className="font-sans text-[8px] fill-primary font-bold uppercase tracking-[0.25em]">SYSTEM CODE: FAQ-12</text>
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
                Informational Curation
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="font-serif text-[48px] sm:text-[68px] md:text-[84px] leading-[1.05] tracking-tight font-normal text-on-surface max-w-3xl"
              >
                Questions, Answered <br />
                With Clarity.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-secondary max-w-2xl font-normal"
              >
                Explore everything you need to know about Bouldspace’s architecture, planning,
                project management, material standards, and structural execution processes.
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
            <span className="text-primary font-bold">Knowledge Network</span>
            <span>BOULDSPACE PROTOCOL KN-12</span>
            <span>INDEX // ADVISORY COORDS</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 right-8 md:right-16 z-20 font-sans text-[9px] tracking-[0.25em] uppercase text-secondary/60 text-right hidden sm:flex flex-col gap-1.5 select-none pointer-events-none"
          >
            <span className="text-primary font-bold">Advisory Paths</span>
            <span>07 CATEGORIES // DIAGNOSTICS</span>
            <span>COORD: 28.4595° N, 77.0266° E</span>
          </motion.div>
        </section>

        {/* ========================================
            2. POPULAR QUESTIONS SHOWCASE
            ======================================== */}
        <section className="py-24 bg-surface relative z-10 border-b border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
              <FadeIn direction="up" duration={0.8}>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  Quick Exploration
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1} duration={0.8}>
                <h2 className="font-serif text-[34px] md:text-[40px] leading-tight text-on-surface font-normal">
                  Most Asked Questions
                </h2>
              </FadeIn>
            </div>

            {/* Tactile minimal floating cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {popularQuestions.map((pop, idx) => (
                <FadeIn
                  key={idx}
                  direction="up"
                  delay={idx * 0.08}
                  duration={0.8}
                >
                  <div
                    onClick={() => handlePopularQuestionClick(pop.index)}
                    className="cursor-pointer h-full rounded border border-outline-variant/20 bg-surface-container-lowest p-6 flex flex-col justify-between shadow-elevated shadow-premium-hover hover:border-primary/45 transition-all duration-300 group"
                  >
                    <div className="space-y-4">
                      <span className="font-sans text-[9px] font-bold uppercase tracking-wider text-primary/75 bg-primary/5 px-2.5 py-1 rounded inline-block">
                        {pop.category}
                      </span>
                      <h3 className="font-serif text-[17px] sm:text-[19px] leading-snug text-on-surface font-normal group-hover:text-primary transition-colors duration-300">
                        {pop.q}
                      </h3>
                    </div>
                    
                    <div className="pt-6 flex items-center gap-1.5 font-sans text-[9.5px] font-bold uppercase tracking-widest text-outline group-hover:text-primary transition-colors duration-300 mt-4">
                      <span>Explore</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================
            3. INTELLIGENT SEARCH EXPERIENCE
            ======================================== */}
        <section className="py-16 bg-surface-container relative z-10 border-b border-outline-variant/15">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            
            <FadeIn direction="up" duration={0.8}>
              <div className="relative rounded border border-outline-variant/30 bg-surface-container-lowest p-6 sm:p-8 shadow-elevated flex flex-col gap-6">
                
                <div className="space-y-1">
                  <h3 className="font-serif text-[22px] text-on-surface font-normal">Intelligent Knowledge Query</h3>
                  <p className="font-sans text-[12px] text-secondary">Filter through our operational protocols, warranties, or material guidelines dynamically.</p>
                </div>

                {/* Elegant Glass Search Bar */}
                <div className="relative flex items-center">
                  <Search className="absolute left-4 h-5 w-5 text-outline/65 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search your question (e.g., Turnkey, Retainer, Warranty)..."
                    className="w-full pl-12 pr-6 py-4 rounded border border-outline-variant/40 bg-surface focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 font-sans text-[14px] transition-all duration-300 text-on-surface placeholder-secondary/50"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 text-[10px] uppercase font-bold text-outline hover:text-primary transition-colors focus:outline-none"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Quick query tags */}
                <div className="flex flex-wrap items-center gap-2.5 font-sans text-[11px] text-secondary">
                  <span className="font-semibold uppercase tracking-wider text-outline/80">Suggested Tags:</span>
                  {["Material Honesty", "Turnkey Scale", "Warranty Scope", "Timeline", "Site Visit"].map((tag, tid) => (
                    <button
                      key={tid}
                      onClick={() => setSearchQuery(tag)}
                      className="bg-surface hover:bg-primary/5 hover:text-primary px-3 py-1 rounded border border-outline-variant/20 hover:border-primary/25 transition-colors duration-300"
                    >
                      {tag}
                    </button>
                  ))}
                </div>

              </div>
            </FadeIn>

          </div>
        </section>

        {/* ========================================
            4. FAQ CATEGORY NAVIGATION EXPERIENCE
            ======================================== */}
        <section className="py-12 bg-surface relative z-10 border-b border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Horizontal category grid with scroll interaction on mobile */}
            <div className="flex overflow-x-auto pb-4 gap-3 scrollbar-none justify-start lg:justify-center -mx-6 px-6 lg:mx-0 lg:px-0">
              {categories.map((cat, cid) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cid}
                    onClick={() => {
                      setActiveCategory(cat);
                      setOpenIndex(null); // Close active accordion on category switch
                    }}
                    className={`font-sans text-[10.5px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border transition-all duration-300 shrink-0 ${
                      isActive
                        ? "bg-primary border-primary text-on-primary shadow-elevated"
                        : "bg-surface border-outline-variant/20 text-secondary hover:text-primary hover:border-primary/30"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================
            5. CORE INTERACTIVE ACCORDIONS EXPERIENCE
            ======================================== */}
        <section id="faq-accordion-section" className="py-24 bg-surface relative z-10 min-h-[60vh]">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            
            {/* Dynamic Result Counter */}
            <div className="mb-10 flex justify-between items-center text-[12px] font-sans text-secondary font-semibold uppercase tracking-wider">
              <span>Showing {filteredFaqs.length} Diagnostic Answers</span>
              {activeCategory !== "All" && (
                <button
                  onClick={() => setActiveCategory("All")}
                  className="text-primary hover:underline lowercase font-normal"
                >
                  Clear Category Filter
                </button>
              )}
            </div>

            {/* Accordion Panels */}
            {filteredFaqs.length > 0 ? (
              <div className="space-y-6">
                {filteredFaqs.map((faq, idx) => {
                  // Find index of this item in the global array to preserve popular-click mapping
                  const globalIndex = faqs.findIndex(f => f.q === faq.q);
                  const isOpen = openIndex === globalIndex;
                  const feedback = feedbackState[globalIndex];

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className={`rounded border border-outline-variant/20 overflow-hidden bg-surface-container-lowest transition-all duration-300 ${
                        isOpen ? "shadow-elevated border-primary/25" : "hover:border-outline-variant/40"
                      }`}
                    >
                      {/* Accordion Trigger Trigger */}
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full flex justify-between items-center text-left p-6 sm:p-8 focus:outline-none group relative z-10"
                        aria-expanded={isOpen}
                      >
                        <div className="space-y-2 max-w-[90%]">
                          <span className="font-sans text-[8.5px] font-bold tracking-widest text-primary bg-primary/5 px-2.5 py-0.5 rounded uppercase">
                            {faq.category}
                          </span>
                          <h3 className="font-serif text-[18px] sm:text-[21px] text-on-surface group-hover:text-primary transition-colors duration-300 font-normal">
                            {faq.q}
                          </h3>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-primary shrink-0 transition-transform duration-300" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-secondary group-hover:text-primary shrink-0 transition-transform duration-300" />
                        )}
                      </button>

                      {/* Expandable Content Area */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <div className="px-6 pb-8 sm:px-8 sm:pb-10 pt-2 border-t border-outline-variant/10 space-y-6 relative z-10">
                              
                              {/* Detailed Answer text */}
                              <p className="font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed text-secondary font-normal">
                                {faq.a}
                              </p>

                              {/* Related Topics metadata tags */}
                              <div className="flex flex-wrap items-center gap-2 pt-2">
                                <span className="font-sans text-[9px] font-bold uppercase tracking-wider text-outline">Related Coordinates:</span>
                                {faq.topics.map((t, tid) => (
                                  <span
                                    key={tid}
                                    className="font-sans text-[9.5px] text-secondary/80 bg-surface-container px-2.5 py-0.5 rounded border border-outline-variant/10 font-semibold"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>

                              {/* FEEDBACK SYSTEM (Unified Curation requirement!) */}
                              <div className="pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <span className="font-sans text-[11px] font-bold text-secondary/70 uppercase tracking-wider">
                                  Did this answer your question?
                                </span>
                                
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => handleFeedback(globalIndex, "YES")}
                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-wider border transition-all duration-300 ${
                                      feedback === "YES"
                                        ? "bg-primary border-primary text-on-primary"
                                        : "bg-surface border-outline-variant/20 text-secondary hover:text-primary hover:border-primary/25"
                                    }`}
                                  >
                                    <ThumbsUp className="h-3.5 w-3.5" />
                                    Yes
                                  </button>
                                  <button
                                    onClick={() => handleFeedback(globalIndex, "NO")}
                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-wider border transition-all duration-300 ${
                                      feedback === "NO"
                                        ? "bg-primary border-primary text-on-primary"
                                        : "bg-surface border-outline-variant/20 text-secondary hover:text-primary hover:border-primary/25"
                                    }`}
                                  >
                                    <ThumbsDown className="h-3.5 w-3.5" />
                                    No
                                  </button>
                                </div>
                              </div>

                              {/* Dynamic Feedback Response Notification */}
                              {feedback === "YES" && (
                                <motion.div
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="p-3.5 rounded bg-primary/[0.03] border border-primary/10 flex gap-2 items-center"
                                >
                                  <ShieldCheck className="h-4.5 w-4.5 text-primary shrink-0" />
                                  <p className="font-sans text-[11px] text-secondary leading-none">
                                    Thank you! Your feedback helps us improve Bouldspace's consultative transparency.
                                  </p>
                                </motion.div>
                              )}

                              {feedback === "NO" && (
                                <motion.div
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="p-4 rounded bg-primary/[0.04] border border-primary/15 space-y-3.5"
                                >
                                  <div className="flex gap-2 items-start">
                                    <PhoneCall className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                                    <p className="font-sans text-[12.5px] leading-relaxed text-secondary">
                                      We are committed to absolute operational clarity. Let's align directly to resolve this for you:
                                    </p>
                                  </div>
                                  <div className="flex flex-wrap gap-3.5 pl-6 pt-1">
                                    <a
                                      href="/contact?ref=faq-no"
                                      className="font-sans text-[11px] font-bold uppercase tracking-widest text-primary border-b border-primary hover:text-primary-container hover:border-primary-container transition-colors"
                                    >
                                      Schedule Briefing Call
                                    </a>
                                    <a
                                      href="https://wa.me/+917568903919"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="font-sans text-[11px] font-bold uppercase tracking-widest text-secondary border-b border-secondary hover:text-primary hover:border-primary transition-colors"
                                    >
                                      Chat with Advisory Studio
                                    </a>
                                  </div>
                                </motion.div>
                              )}

                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center p-16 rounded border border-outline-variant/20 bg-surface-container-low font-sans text-secondary space-y-4">
                <HelpCircle className="h-10 w-10 text-outline mx-auto" />
                <h4 className="font-serif text-[18px] text-on-surface font-normal">No Matching Diagnostic Found</h4>
                <p className="text-[13px] max-w-sm mx-auto leading-relaxed">We could not locate answers corresponding to your query. Try resetting your search filter or categories.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="font-sans text-[11px] font-bold text-primary uppercase tracking-widest border border-primary/20 hover:border-primary px-4 py-2 rounded transition-colors duration-300 mt-2"
                >
                  Reset Diagnostics Grid
                </button>
              </div>
            )}

          </div>
        </section>

        {/* ========================================
            6. "STILL HAVE QUESTIONS?" SECTION
            ======================================== */}
        <section className="py-28 bg-surface-container border-t border-outline-variant/30 text-on-surface text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid" />
          
          <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 space-y-8 flex flex-col items-center">
            <FadeIn direction="up" duration={0.8}>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full">
                Personalized Scoping
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1} duration={0.8}>
              <h2 className="font-serif text-[42px] sm:text-[56px] leading-tight text-on-surface font-normal max-w-3xl">
                Need Personalized Guidance?
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} duration={0.8}>
              <p className="font-sans text-[16px] sm:text-[18px] leading-relaxed text-secondary max-w-xl">
                Our advisory team is available to help you understand spatial planning, material curations,
                project execution checklists, timelines, and turnkeys.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.8} className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="primary" showArrow={true} href="/contact?ref=faq-cta">
                Schedule Studio Consultation
              </Button>
              <Button variant="secondary" showArrow={false} href="/contact?ref=faq-talk">
                Contact Studio
              </Button>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
