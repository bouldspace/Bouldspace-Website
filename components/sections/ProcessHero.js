"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "../ui/Button";

export default function ProcessHero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax background scroll translations
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);
  const contentY = useTransform(scrollY, [0, 1000], [0, -80]);
  const opacity = useTransform(scrollY, [0, 700], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      },
    },
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById("process-journey-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface text-on-surface"
    >
      {/* Immersive Parallax Backdrop */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
      >
        <svg className="w-full h-full text-outline/15 stroke-current stroke-[0.75] fill-none opacity-50" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
          {/* Horizontal & vertical grid lines */}
          <line x1="200" y1="0" x2="200" y2="600" className="stroke-outline/5 stroke-dasharray-[4_8]" />
          <line x1="500" y1="0" x2="500" y2="600" className="stroke-primary/10 stroke-dasharray-[2_4]" />
          <line x1="800" y1="0" x2="800" y2="600" className="stroke-outline/5 stroke-dasharray-[4_8]" />
          <line x1="0" y1="300" x2="1000" y2="300" className="stroke-primary/10 stroke-dasharray-[2_4]" />
          
          {/* Integration flow nodes (1 to 6 process chapters) */}
          {/* Node 01: Discover */}
          <circle cx="150" cy="300" r="30" className="stroke-outline/35 stroke-[1]" />
          <circle cx="150" cy="300" r="5" className="fill-primary stroke-primary" />
          <text x="150" y="355" textAnchor="middle" className="font-sans text-[8px] fill-secondary/50 uppercase font-bold tracking-widest">01 / DISCOVER</text>
          
          {/* Node 02: Plan */}
          <circle cx="290" cy="200" r="30" className="stroke-outline/25 stroke-[1]" />
          <circle cx="290" cy="200" r="5" className="fill-outline/50 stroke-outline" />
          <text x="290" y="255" textAnchor="middle" className="font-sans text-[8px] fill-secondary/50 uppercase font-bold tracking-widest">02 / PLAN</text>
          
          {/* Node 03: Design */}
          <circle cx="430" cy="300" r="40" className="stroke-primary/35 stroke-[1.5]" />
          <circle cx="430" cy="300" r="8" className="fill-primary stroke-primary" />
          <text x="430" y="365" textAnchor="middle" className="font-sans text-[8px] fill-primary uppercase font-bold tracking-widest">03 / DESIGN</text>
          
          {/* Node 04: Coordination */}
          <circle cx="570" cy="200" r="30" className="stroke-outline/25 stroke-[1]" />
          <circle cx="570" cy="200" r="5" className="fill-outline/50 stroke-outline" />
          <text x="570" y="255" textAnchor="middle" className="font-sans text-[8px] fill-secondary/50 uppercase font-bold tracking-widest">04 / COORD</text>
          
          {/* Node 05: Construction */}
          <circle cx="710" cy="300" r="30" className="stroke-primary/25 stroke-[1]" />
          <circle cx="710" cy="300" r="5" className="fill-primary stroke-primary" />
          <text x="710" y="355" textAnchor="middle" className="font-sans text-[8px] fill-secondary/50 uppercase font-bold tracking-widest">05 / EXECUTE</text>
          
          {/* Node 06: Delivery */}
          <circle cx="850" cy="200" r="30" className="stroke-outline/35 stroke-[1]" />
          <circle cx="850" cy="200" r="5" className="fill-primary stroke-primary" />
          <text x="850" y="255" textAnchor="middle" className="font-sans text-[8px] fill-secondary/50 uppercase font-bold tracking-widest">06 / DELIVER</text>
          
          {/* Connecting vectors / workflow links */}
          <path d="M 180,290 L 260,210" className="stroke-outline/20" />
          <path d="M 320,210 L 400,290" className="stroke-primary/25 stroke-[1.5]" />
          <path d="M 470,290 L 540,210" className="stroke-primary/25 stroke-[1.5]" />
          <path d="M 600,210 L 680,290" className="stroke-outline/20" />
          <path d="M 740,290 L 820,210" className="stroke-outline/20" />
          
          {/* Global operational flow coordinates */}
          <text x="500" y="475" textAnchor="middle" className="font-sans text-[9px] fill-secondary/50 font-bold uppercase tracking-[0.25em]">OPERATIONAL PATHWAY SEQUENCE: Concept to Delivery</text>
          <text x="500" y="50" textAnchor="middle" className="font-sans text-[8px] fill-primary font-bold uppercase tracking-[0.2em]">BOULDSPACE INTEGRATION SYSTEM</text>
        </svg>
        {/* Soft atmospheric gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid z-10" />

      {/* Blueprint Grid Lines */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-outline/10 pointer-events-none z-10" />
      <div className="absolute top-3/4 left-0 w-full h-[1px] bg-outline/10 pointer-events-none z-10" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-outline/10 pointer-events-none z-10" />
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-outline/10 pointer-events-none z-10" />

      {/* Floating blueprint markers */}
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-16 left-8 md:left-16 z-20 font-sans text-[10px] tracking-[0.25em] uppercase text-secondary/60 hidden sm:flex flex-col gap-1.5"
      >
        <span className="text-primary font-bold">Operational Model</span>
        <span>BOULDSPACE PROTOCOL BR-90</span>
        <span>INDEX // DESIGN-TO-HANDOVER</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-16 right-8 md:right-16 z-20 font-sans text-[10px] tracking-[0.25em] uppercase text-secondary/60 text-right hidden sm:flex flex-col gap-1.5"
      >
        <span className="text-primary font-bold">Exhibition Path</span>
        <span>06 STAGES OF EXECUTION</span>
        <span>COORD: 28.4595° N, 77.0266° E</span>
      </motion.div>

      {/* Centered Editorial Block */}
      <motion.div
        style={{ y: contentY, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8 mt-12"
      >
        <motion.span
          variants={itemVariants}
          className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-primary bg-primary/5 border border-primary/20 px-4 py-1.5 rounded-full"
        >
          Delivery Framework
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="font-serif text-[48px] sm:text-[68px] md:text-[84px] leading-[1.05] tracking-tight font-normal text-on-surface max-w-3xl"
        >
          Where Vision <br />
          Becomes Reality.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-secondary max-w-2xl font-normal"
        >
          A precision-driven development process crafted to deliver seamless architecture,
          planning, coordination, and execution from concept to completion.
        </motion.p>

        <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-4">
          <Button variant="primary" showArrow={true} href="/contact">
            Start Your Project
          </Button>
        </motion.div>
      </motion.div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1.2 }}
        onClick={handleScrollDown}
        className="absolute bottom-6 z-20 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-secondary/45 group-hover:text-primary transition-colors duration-300">
          Scroll to explore journey
        </span>
        <ChevronDown className="h-4 w-4 text-secondary/45 group-hover:text-primary transition-colors duration-300" />
      </motion.div>
    </section>
  );
}
