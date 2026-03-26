"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[500px] md:h-screen md:min-h-[600px] flex items-center justify-center pt-28 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        {/* Darker gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black/90 via-black/40 to-black/30"></div>
      </div>

      <div className="container-custom relative z-10 text-center text-white mt-8 md:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-7xl font-heading font-bold tight leading-[1.1] mb-4 md:mb-6 drop-shadow-2xl">
            Design Your <br className="hidden md:block"/>
            <span className="text-accent italic font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Dream Space</span>{" "}
            <br className="md:hidden"/>with Confidence
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-base md:text-xl text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] text-balance">
            End-to-end interior solutions with transparent pricing and expert designers. We bring your vision to life beautifully.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 relative z-20 px-4 sm:px-0"
        >
          <Link
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-accent/30 text-sm md:text-base"
          >
            Get Free Quote
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#portfolio"
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 glass bg-white/10 dark:bg-black/40 backdrop-blur-md text-white border border-white/20 font-medium rounded-full hover:bg-white/20 transition-all shadow-xl text-sm md:text-base"
          >
            View Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
