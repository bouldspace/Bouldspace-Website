"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function WorkWithUsHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative pt-36 pb-24 bg-surface overflow-hidden border-b border-outline-variant/20">
      {/* Blueprint background grid accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none blueprint-grid" />
      
      {/* Technical drafting watermark overlay */}
      <div className="absolute top-28 right-8 text-right font-sans text-[9px] uppercase tracking-[0.25em] text-secondary/40 pointer-events-none hidden lg:block leading-relaxed">
        <div>PROTOCOL // CO-COMMISSION</div>
        <div>SPEC 01-B // VENDOR & STUDIO INTEGRATION</div>
        <div>DISCIPLINE MONOGRAPH // 2026</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-start gap-6 md:gap-8"
        >
          {/* Section Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="font-sans text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.25em] text-primary">
              Partnership & Talent Monograph
            </span>
          </motion.div>

          {/* Grand Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-[44px] sm:text-[60px] md:text-[76px] leading-[1.05] tracking-tight text-on-surface font-normal"
          >
            Build With Masters. <br />
            <span className="italic text-secondary">Shape Landmark Environments.</span>
          </motion.h1>

          {/* Core Philosophy Paragraph */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-[16px] sm:text-[19px] leading-relaxed text-secondary max-w-2xl font-normal"
          >
            At Bouldspace, exceptional architecture is never executed in silos.
            We actively partner with visionary independent architects, master
            woodworkers, stone artisans, and tier-1 structural contractors who
            refuse to compromise on craftsmanship or material honesty.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
            <Button variant="primary" showArrow={true} href="#collaboration-form">
              Submit Collaboration Monograph
            </Button>
            <Button variant="secondary" showArrow={true} href="#tracks">
              Explore Partnership Tracks
            </Button>
          </motion.div>

          {/* Credibility Key Metrics Strip */}
          <motion.div
            variants={itemVariants}
            className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-outline-variant/30 mt-4"
          >
            <div>
              <p className="font-serif text-[32px] sm:text-[38px] text-primary font-bold leading-none mb-1">
                100%
              </p>
              <p className="font-sans text-[11px] uppercase tracking-wider text-secondary font-medium">
                Milestone Payout Rigor
              </p>
            </div>
            <div>
              <p className="font-serif text-[32px] sm:text-[38px] text-primary font-bold leading-none mb-1">
                Zero
              </p>
              <p className="font-sans text-[11px] uppercase tracking-wider text-secondary font-medium">
                Value-Engineering Dilution
              </p>
            </div>
            <div>
              <p className="font-serif text-[32px] sm:text-[38px] text-primary font-bold leading-none mb-1">
                BR-90
              </p>
              <p className="font-sans text-[11px] uppercase tracking-wider text-secondary font-medium">
                Digital BIM/CAD Standards
              </p>
            </div>
            <div>
              <p className="font-serif text-[32px] sm:text-[38px] text-primary font-bold leading-none mb-1">
                Tier-1
              </p>
              <p className="font-sans text-[11px] uppercase tracking-wider text-secondary font-medium">
                Direct Vendor Ecosystem
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
