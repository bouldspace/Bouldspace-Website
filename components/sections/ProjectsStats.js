"use client";

import React from "react";
import FadeIn from "../animations/FadeIn";

export default function ProjectsStats() {
  const stats = [
    { number: "450+", label: "Projects Delivered", desc: "Monuments of spatial excellence", coord: "REF // 01" },
    { number: "12M+", label: "Sq. Ft. Executed", desc: "Uncompromising physical volume", coord: "REF // 02" },
    { number: "15+", label: "Cities Served", desc: "National consultancy coverage", coord: "REF // 03" },
    { number: "6+", label: "Industry Sectors", desc: "Residential to aerospace", coord: "REF // 04" },
    { number: "99%", label: "Client Satisfaction", desc: "Adherence to path specifications", coord: "REF // 05" },
  ];

  return (
    <section className="py-32 bg-surface-container overflow-hidden relative border-t border-b border-outline-variant/20 text-on-surface">
      {/* Blueprint grid subtle background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid" />

      {/* Structural Crosshairs / Blueprint Lines */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/20 pointer-events-none" />
      <div className="absolute top-0 left-1/5 w-[1px] h-full bg-outline-variant/10 pointer-events-none hidden lg:block" />
      <div className="absolute top-0 left-2/5 w-[1px] h-full bg-outline-variant/10 pointer-events-none hidden lg:block" />
      <div className="absolute top-0 left-3/5 w-[1px] h-full bg-outline-variant/10 pointer-events-none hidden lg:block" />
      <div className="absolute top-0 left-4/5 w-[1px] h-full bg-outline-variant/10 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Subtitle */}
        <div className="max-w-2xl mb-20 space-y-2">
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
            Scale & Authority
          </span>
          <h3 className="font-serif text-[28px] font-normal leading-tight text-on-surface">
            Execution Metrics In Numbers
          </h3>
        </div>

        {/* Dynamic Blueprint Metrics Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {stats.map((stat, idx) => (
            <FadeIn
              key={idx}
              direction="up"
              delay={idx * 0.15}
              duration={1.0}
            >
              <div className="relative group flex flex-col items-start gap-4 p-6 rounded hover:bg-surface/30 transition-all duration-500 border border-transparent hover:border-outline-variant/15">
                
                {/* Structural Grid Coordinates Tag */}
                <div className="flex justify-between items-center w-full font-sans text-[9px] tracking-widest text-outline uppercase font-semibold">
                  <span>{stat.coord}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary">[X: 0{idx + 1} / Y: 108]</span>
                </div>

                <span className="font-serif text-[64px] sm:text-[72px] lg:text-[80px] font-normal text-primary leading-none tracking-tighter">
                  {stat.number}
                </span>

                <div className="space-y-1">
                  <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-on-surface">
                    {stat.label}
                  </h4>
                  <p className="font-sans text-[13px] text-secondary leading-relaxed">
                    {stat.desc}
                  </p>
                </div>

                {/* Corner blueprint bracket decor */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-outline-variant/30 group-hover:border-primary transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-outline-variant/30 group-hover:border-primary transition-colors duration-300" />
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
