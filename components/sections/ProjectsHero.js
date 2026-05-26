"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "../ui/Button";

export default function ProjectsHero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax: scroll the background slower than contents
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
    const nextSection = document.getElementById("featured-projects-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface text-on-surface"
    >
      {/* Blueprint Vector Parallax Backdrop */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
      >
        <svg className="w-full h-full text-outline/15 stroke-current stroke-[0.75] fill-none opacity-50" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
          {/* Structural axes guidelines */}
          <line x1="100" y1="0" x2="100" y2="600" className="stroke-outline/5 stroke-dasharray-[4_8]" />
          <line x1="500" y1="0" x2="500" y2="600" className="stroke-primary/10 stroke-dasharray-[2_4]" />
          <line x1="900" y1="0" x2="900" y2="600" className="stroke-outline/5 stroke-dasharray-[4_8]" />
          <line x1="0" y1="300" x2="1000" y2="300" className="stroke-primary/10 stroke-dasharray-[2_4]" />
          
          {/* Cantilever structural villa outlines */}
          <path d="M 150,450 L 450,450 L 450,250 L 750,250 L 750,150 L 250,150 L 250,350 L 150,350 Z" className="stroke-outline/35 stroke-[1]" />
          
          {/* Floor slabs and concrete details */}
          <line x1="150" y1="450" x2="850" y2="450" className="stroke-primary/45 stroke-[1.5]" />
          <line x1="150" y1="350" x2="850" y2="350" className="stroke-outline/25 stroke-[1]" />
          <line x1="250" y1="250" x2="750" y2="250" className="stroke-outline/25 stroke-[1]" />
          <line x1="250" y1="150" x2="850" y2="150" className="stroke-primary/35 stroke-[1.5]" />
          
          {/* Support pillars / columns */}
          <line x1="200" y1="450" x2="200" y2="600" className="stroke-outline/20" />
          <line x1="400" y1="450" x2="400" y2="600" className="stroke-outline/20" />
          <line x1="600" y1="250" x2="600" y2="450" className="stroke-outline/15" />
          <line x1="700" y1="250" x2="700" y2="450" className="stroke-outline/15" />
          
          {/* Diagonals structural load vectors */}
          <line x1="450" y1="250" x2="550" y2="150" className="stroke-primary/55" />
          <line x1="250" y1="150" x2="350" y2="50" className="stroke-outline/20" />
          <line x1="750" y1="150" x2="650" y2="50" className="stroke-outline/20" />
          
          {/* Parametric radial drawing detail on left */}
          <circle cx="200" cy="300" r="120" className="stroke-outline/5 stroke-dasharray-[2_6]" />
          <circle cx="200" cy="300" r="80" className="stroke-outline/15" />
          <circle cx="200" cy="300" r="10" className="stroke-primary/45 fill-primary/5" />
          
          {/* Tension nodes on right */}
          <circle cx="800" cy="200" r="100" className="stroke-outline/5 stroke-dasharray-[2_6]" />
          <circle cx="800" cy="200" r="50" className="stroke-primary/25" />
          <circle cx="800" cy="200" r="5" className="fill-outline/35" />
          
          {/* Vector dimension leader labels */}
          <text x="500" y="475" textAnchor="middle" className="font-sans text-[10px] fill-secondary/50 font-bold uppercase tracking-[0.25em]">PRIMARY STRUCTURAL AXIS : SECTION A-A'</text>
          <text x="250" y="130" className="font-sans text-[8px] fill-primary font-bold uppercase tracking-[0.2em]">CANTILEVER PROJECTION : 4500mm</text>
          <text x="800" y="90" className="font-sans text-[7px] fill-outline/40 uppercase">SEC // 12-VILLA DETAIL</text>
        </svg>
        {/* Soft atmospheric gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
      </motion.div>

      {/* Blueprint grid subtle background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid z-10" />

      {/* Fine horizontal & vertical blueprint accent guidelines */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-outline/10 pointer-events-none z-10" />
      <div className="absolute top-3/4 left-0 w-full h-[1px] bg-outline/10 pointer-events-none z-10" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-outline/10 pointer-events-none z-10" />
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-outline/10 pointer-events-none z-10" />

      {/* Floating Blueprint Metadata (Left) */}
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-16 left-8 md:left-16 z-20 font-sans text-[10px] tracking-[0.25em] uppercase text-secondary/60 hidden sm:flex flex-col gap-1.5"
      >
        <span className="text-primary font-bold">Commission Index</span>
        <span>BS-2026 / REGIONAL MASTERWORK</span>
        <span>COORD: 28.4595° N, 77.0266° E</span>
      </motion.div>

      {/* Floating Exhibition Metadata (Right) */}
      <motion.div
        initial={{ opacity: 0, x: 35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-16 right-8 md:right-16 z-20 font-sans text-[10px] tracking-[0.25em] uppercase text-secondary/60 text-right hidden sm:flex flex-col gap-1.5"
      >
        <span className="text-primary font-bold">Current Chapter</span>
        <span>01 / DESIGN & INTENTION</span>
        <span>BOULDSPACE NATIONWIDE COMMISSIONS</span>
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
          Architectural Monograph
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="font-serif text-[48px] sm:text-[68px] md:text-[84px] leading-[1.05] tracking-tight font-normal text-on-surface max-w-3xl"
        >
          Spaces That Speak <br />
          Beyond Structure.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-secondary max-w-2xl font-normal"
        >
          A curated portfolio of architecture, planning, and construction execution
          crafted with precision, emotion, and timeless vision.
        </motion.p>

        <motion.div variants={itemVariants} className="pt-4">
          <Button variant="primary" showArrow={true} href="/contact">
            Discuss Your Project
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
          Scroll to explore
        </span>
        <ChevronDown className="h-4 w-4 text-secondary/45 group-hover:text-primary transition-colors duration-300" />
      </motion.div>
    </section>
  );
}
