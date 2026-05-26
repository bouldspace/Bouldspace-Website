"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function AboutHero() {
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
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      },
    },
  };

  return (
    <section className="relative pt-36 pb-24 bg-surface overflow-hidden border-b border-outline-variant/10">
      {/* Background blueprint grid subtle overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid" />

      {/* Blueprint background grid lines */}
      <div className="absolute top-1/3 left-0 w-full h-[1px] bg-outline/5 pointer-events-none" />
      <div className="absolute top-2/3 left-0 w-full h-[1px] bg-outline/5 pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-[1px] h-full bg-outline/5 pointer-events-none" />
      <div className="absolute top-0 left-2/3 w-[1px] h-full bg-outline/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Monograph Top Label */}
        <div className="mb-8 font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-primary bg-primary/5 px-4 py-1.5 rounded-full inline-block">
          Company Monograph // 01
        </div>

        {/* Asymmetrical Layout Split: SVG Blueprint Left, Narrative Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* LEFT SIDEBAR: Highly Technical SVG Cantilever Blueprint Canvas (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative order-2 lg:order-1"
          >
            <div className="aspect-[16/10] w-full rounded border border-outline-variant/30 bg-surface-container p-6 sm:p-8 flex flex-col justify-between font-sans shadow-elevated relative overflow-hidden group select-none">
              {/* Internal grid line markers */}
              <div className="absolute inset-0 opacity-20 blueprint-grid pointer-events-none" />
              
              {/* Drafting boundaries */}
              <div className="absolute inset-4 border border-outline/10 pointer-events-none" />

              {/* Blueprint metadata label */}
              <div className="flex justify-between items-start text-[9px] tracking-widest text-outline/60 uppercase font-bold relative z-10">
                <span>FOUNDATION SHEET // ABOUT-01</span>
                <span className="text-primary">[MODEL REVISION: 2.04]</span>
              </div>

              {/* Structural Elevation Drafting Vectors */}
              <div className="relative w-full h-full my-auto flex items-center justify-center py-4">
                <svg className="w-11/12 h-11/12 text-secondary/35 stroke-current stroke-[0.75] fill-none" viewBox="0 0 450 250">
                  {/* Primary design axis guidelines */}
                  <line x1="225" y1="0" x2="225" y2="250" className="stroke-primary/20 stroke-dasharray-[2_4]" />
                  <line x1="0" y1="125" x2="450" y2="125" className="stroke-primary/20 stroke-dasharray-[2_4]" />

                  {/* Ground Foundation Level */}
                  <line x1="30" y1="210" x2="420" y2="210" className="stroke-outline/40 stroke-[1.5]" />
                  
                  {/* Concrete Footing pads */}
                  <rect x="70" y="210" width="60" height="20" className="stroke-outline/35 fill-primary/5" />
                  <rect x="320" y="210" width="60" height="20" className="stroke-outline/35 fill-primary/5" />

                  {/* Main structural support columns */}
                  <rect x="90" y="70" width="20" height="140" className="stroke-outline/40" />
                  <rect x="340" y="70" width="20" height="140" className="stroke-outline/40" />

                  {/* Cantilever roof projecting framework */}
                  <path d="M 50,70 L 400,70 L 370,30 L 80,30 Z" className="stroke-primary/50 stroke-[1.25] fill-primary/[0.02]" />

                  {/* Triangulation reinforcement struts */}
                  <line x1="90" y1="140" x2="50" y2="70" className="stroke-primary/40 stroke-dasharray-[3_3]" />
                  <line x1="360" y1="140" x2="400" y2="70" className="stroke-primary/40 stroke-dasharray-[3_3]" />

                  {/* Load vector force arrows */}
                  <path d="M 50,70 L 50,90" className="stroke-primary/60" />
                  <path d="M 50,90 L 47,85 M 50,90 L 53,85" className="stroke-primary/60" />
                  
                  <path d="M 400,70 L 400,90" className="stroke-primary/60" />
                  <path d="M 400,90 L 397,85 M 400,90 L 403,85" className="stroke-primary/60" />

                  {/* Technical annotation text labels */}
                  <text x="225" y="20" textAnchor="middle" className="font-sans text-[7px] fill-primary font-bold uppercase tracking-[0.25em]">PRIMARY STRUCTURAL BEARING // LEVEL 1</text>
                  <text x="50" y="105" textAnchor="middle" className="font-sans text-[6px] fill-secondary font-medium">POINT LOAD A: 12.5kN</text>
                  <text x="400" y="105" textAnchor="middle" className="font-sans text-[6px] fill-secondary font-medium">POINT LOAD B: 12.5kN</text>
                  <text x="225" y="235" textAnchor="middle" className="font-sans text-[7px] fill-secondary/50 font-bold uppercase tracking-[0.2em]">CANTILEVER PROJECTION SPAN: 3500mm</text>
                  <text x="100" y="130" className="font-sans text-[6px] fill-primary/60 font-semibold tracking-wider uppercase">COL-01</text>
                  <text x="350" y="130" className="font-sans text-[6px] fill-primary/60 font-semibold tracking-wider uppercase">COL-02</text>
                </svg>
              </div>

              {/* Bottom detail credentials */}
              <div className="flex justify-between text-[9px] tracking-wider text-secondary/60 border-t border-outline-variant/20 pt-4 font-semibold uppercase relative z-10">
                <span>TOLERANCE: &lt; 0.5mm</span>
                <span>SYSTEM: COMPLIANT SYSTEM BR-90</span>
              </div>
            </div>

            {/* Overlapping floating statistics badge */}
            <div className="absolute -bottom-6 -right-6 bg-surface p-6 shadow-elevated border border-outline-variant/30 rounded z-20 hidden sm:block">
              <p className="font-serif text-[32px] text-primary mb-1 leading-none font-bold">
                10+
              </p>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-wider text-secondary">
                Years of Precision
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDEBAR: Elegant Storytelling Column (5 Columns) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col items-start gap-6 md:gap-8 order-1 lg:order-2"
          >
            <motion.h1
              variants={itemVariants}
              className="font-serif text-[42px] sm:text-[54px] lg:text-[62px] leading-[1.05] tracking-tight text-on-surface font-normal"
            >
              Precision <br className="hidden sm:inline" />
              Over Templates.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-secondary font-normal"
            >
              At Bouldspace, we believe landmark structures are not built from standard templates. We balance cold mechanical engineering coordinates with organic warmth—using custom terracotta plaster, oak mills, and stone casings.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-sans text-[14px] leading-relaxed text-secondary/80 italic border-l-2 border-primary pl-4 py-1"
            >
              "We manage all phases of complex residential, commercial, and exploratory spatial consulting under a single unified dashboard, bringing absolute rigor from concept to completion."
            </motion.p>

            {/* Interactive buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2 z-20">
              <Button variant="primary" showArrow={true} href="/projects">
                Explore Our Work
              </Button>
              <Button variant="secondary" showArrow={false} href="/contact">
                Get In Touch
              </Button>
            </motion.div>

            {/* Floating studio location coords */}
            <motion.div
              variants={itemVariants}
              className="font-sans text-[9px] tracking-widest text-outline uppercase flex gap-8 border-t border-outline-variant/20 pt-6 w-full"
            >
              <span>COORD: 28.4595° N</span>
              <span>AZIMUTH: 180°</span>
              <span>PLANNING STAGES: 06</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
