"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../ui/Button";
import FadeIn from "../animations/FadeIn";

export default function ProcessCTA() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Background parallax translations
  const bgY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.01, 1.06]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#12100e] text-[#fff8f4] border-b border-outline-variant/15"
    >
      {/* Immersive Parallax Background */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
      >
        <img
          alt="Bouldspace Blueprint Construction Closing View"
          className="w-full h-full object-cover opacity-30"
          src="/images/hero-studio.png"
        />
        {/* Layered cinematic gradients to blend with footer */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#12100e] via-[#12100e]/85 to-[#12100e]" />
        {/* Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.85)]" />
      </motion.div>

      {/* Blueprint grid accent */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid z-10" />

      {/* Centered Content */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-20 space-y-10 flex flex-col items-center py-20">
        <FadeIn direction="up" duration={0.8}>
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-primary bg-primary/10 border border-primary/25 px-4 py-1.5 rounded-full">
            Technical Integration
          </span>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.15} duration={0.8}>
          <h2 className="font-serif text-[42px] sm:text-[56px] md:text-[68px] leading-[1.1] font-normal max-w-3xl">
            Exceptional Spaces Begin <br className="hidden sm:inline" />
            With Exceptional Process.
          </h2>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.25} duration={0.8}>
          <p className="font-sans text-[16px] sm:text-[18px] leading-relaxed text-[#cdc5c0] max-w-xl">
            Partner with Bouldspace for architecture and execution guided by precision, collaboration, and timeless vision.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.35} duration={0.8} className="pt-2 flex flex-col sm:flex-row gap-5">
          <Button variant="primary" showArrow={true} href="/contact">
            Start Your Project
          </Button>
          <Button variant="secondary" showArrow={false} href="/contact" className="!border-[#fff8f4] !text-[#fff8f4] hover:!bg-[#fff8f4] hover:!text-[#12100e]">
            Schedule Consultation
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
