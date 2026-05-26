"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1], // Premium easeOutQuint
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-32 pb-40 overflow-hidden bg-surface">
      {/* Background Image Container */}
      <div className="absolute top-0 right-0 w-full lg:w-7/12 h-full pointer-events-none select-none z-0">
        {/* Subtle architectural lines background */}
        <div className="absolute inset-0 z-10 opacity-[0.03] blueprint-grid" />
        <img
          alt="Premium Minimalist Architectural View"
          className="w-full h-full object-cover opacity-90 lg:opacity-100"
          src="/images/hero-villa.png"
        />
        {/* Luxury gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10 lg:hidden" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col items-start gap-6 md:gap-8"
        >
          <motion.span
            variants={itemVariants}
            className="font-sans text-[11px] font-bold uppercase tracking-widest text-primary border-l-2 border-primary pl-3"
          >
            We Design Spaces That Inspire
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-[48px] sm:text-[64px] md:text-[80px] leading-[1.05] tracking-tight text-on-surface font-normal"
          >
            Visionary Design. <br className="hidden md:inline" />
            Precision Execution.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-secondary max-w-xl font-normal"
          >
            Bouldspace delivers premium architecture, planning, project
            management, and construction solutions from concept to completion.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <Button variant="primary" showArrow={true} href="/contact">
              Get Free Quote
            </Button>
            <Button variant="secondary" showArrow={false} href="/projects">
              View Portfolio
            </Button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
