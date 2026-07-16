"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Compass, FileText, Check } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BlueprintReality() {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const svgRef = useRef(null);
  const cursorRef = useRef(null);
  const footprintPathRef = useRef(null);

  // Text refs for count-up metrics
  const projectsValRef = useRef(null);
  const spaceValRef = useRef(null);
  const citiesValRef = useRef(null);
  const satValRef = useRef(null);

  // Slides data (extended to 9 stages)
  const stages = [
    {
      num: "01",
      title: "The Grid Foundation",
      desc: "Every visionary architecture begins on a canvas of absolute order. We activate a subtle spatial grid, setting reference axes and structural guide markers under strict coordinates to establish geometric integrity.",
      meta: "COORD MAP // 0.00.00"
    },
    {
      num: "02",
      title: "Grounding the Footprint",
      desc: "Using advanced visual plotting, the outer boundaries of the villa are sketched. Every line represents concrete foundations designed from load-bearing wind and sun trajectory guidelines.",
      meta: "FOUNDATION PROFILE // 0.01.20"
    },
    {
      num: "03",
      title: "Spatial Partitioning",
      desc: "Dividing walls and corridor segments are introduced. We define the internal functional cavities—organizing the spaces for flow, passive ventilation channels, and visual axes.",
      meta: "VOLUMETRIC SPLIT // 0.02.45"
    },
    {
      num: "04",
      title: "Programmatic Designation",
      desc: "Rooms receive their conceptual callouts. We allocate dedicated zones—Reception, Workspace, Meeting Room, Operations, and Planning—aligning function with the client's operational briefs.",
      meta: "ZONING SCHED // 0.03.10"
    },
    {
      num: "05",
      title: "Technical Annotations",
      desc: "Precise dimensions and coordinate ticks are laser-scribed onto the drawing. A dynamic glowing drafting cursor tracks the blueprint vectors, validating structural offsets.",
      meta: "DIMENSION SCRIBE // 0.04.50"
    },
    {
      num: "06",
      title: "Architectural Metamorphosis",
      desc: "The lines transition into material reality. Fills representing concrete walls, travertine textures, and glass structures fade in, introducing depth and physical weight.",
      meta: "MATERIAL RENDER // 0.05.80"
    },
    {
      num: "07",
      title: "Calculated Impact",
      desc: "Our architectural blueprint completes, backed by a legacy of structural performance. The metrics speak to our strict standards, showing a history of execution precision.",
      meta: "METRICS VALIDATION // 0.06.90"
    },
    {
      num: "08",
      title: "Multi-Floor Stratification",
      desc: "Expanding the vertical dimension. We stack individual floor plans—from base structural slabs to penthouse terraces—aligning vertical MEP shafts and spatial stair runs.",
      meta: "VERTICAL STACK // 0.07.45"
    },
    {
      num: "09",
      title: "Isometric Realization",
      desc: "The final leap into physical volume. The 2D lines project upward, forming an isometric 3D wireframe mesh that bridges technical drafting with finished, living architecture.",
      meta: "3D REALIZATION // 0.08.20"
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const trigger = triggerRef.current;
    if (!container || !trigger) return;

    // Get total path length for footprint stroke animation
    const path = footprintPathRef.current;
    let pathLength = 1600; // fallback default
    if (path) {
      try {
        pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = pathLength;
      } catch (e) {
        console.warn("Could not calculate path length", e);
      }
    }

    // Set initial stats values
    if (projectsValRef.current) projectsValRef.current.innerText = "0+";
    if (spaceValRef.current) spaceValRef.current.innerText = "0.0M+";
    if (citiesValRef.current) citiesValRef.current.innerText = "0+";
    if (satValRef.current) satValRef.current.innerText = "0.0%";

    // GSAP MatchMedia for layout responsiveness
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isMobileOrTablet: "(max-width: 1023px)"
      },
      (context) => {
        const { isDesktop } = context.conditions;

        // Base scroll trigger timeline for pinned scrolling
        const masterTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: trigger,
            start: "top top",
            end: "+=800%", // 9 stages = 8 scroll intervals
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          }
        });

        // --- STAGE ANIMATION SEQUENCES ---

        // 1. Grid Fade In (Start)
        masterTimeline.to(".bp-grid", { opacity: 0.15, duration: 0.5 });
        masterTimeline.to(".bp-axes", { opacity: 0.4, duration: 0.5 }, "<");

        // 2. Footprint Sketch (Stage 1 to 2 transition)
        // Show cursor and animate footprint path
        masterTimeline.to(".drafting-cursor", { opacity: 1, scale: 1, duration: 0.2 });
        
        // Synchronized drawing of the footprint & cursor movement
        masterTimeline.to(path, { strokeDashoffset: 0, ease: "none", duration: 2 }, "+=0.1");
        
        // Move cursor in proportions matching the 8 segments of the path
        const cursor = cursorRef.current;
        if (cursor) {
          const cursorTimeline = gsap.timeline();
          cursorTimeline
            .to(cursor, { x: 450, y: 150, duration: 300 / 1600 })
            .to(cursor, { x: 450, y: 220, duration: 70 / 1600 })
            .to(cursor, { x: 650, y: 220, duration: 200 / 1600 })
            .to(cursor, { x: 650, y: 450, duration: 230 / 1600 })
            .to(cursor, { x: 350, y: 450, duration: 300 / 1600 })
            .to(cursor, { x: 350, y: 380, duration: 70 / 1600 })
            .to(cursor, { x: 150, y: 380, duration: 200 / 1600 })
            .to(cursor, { x: 150, y: 150, duration: 230 / 1600 });
          
          masterTimeline.add(cursorTimeline, "<");
        }

        // Hide cursor after drawing footprint
        masterTimeline.to(".drafting-cursor", { opacity: 0, scale: 0, duration: 0.2 });

        // 3. Internal Walls & Partitions (Stage 2 to 3 transition)
        masterTimeline.to(".bp-internal-walls", { opacity: 1, duration: 1 }, "+=0.1");
        masterTimeline.to(".bp-door-swings", { opacity: 1, duration: 0.8 }, "<+=0.2");

        // 4. Room Labels (Stage 3 to 4 transition)
        masterTimeline.to(".bp-room-labels", { opacity: 1, y: 0, stagger: 0.15, duration: 1.2 }, "+=0.1");

        // 5. Annotations (Stage 4 to 5 transition)
        masterTimeline.to(".bp-dimensions", { opacity: 0.8, duration: 1 }, "+=0.1");

        // 6. Architectural Metamorphosis Fills (Stage 5 to 6 transition)
        masterTimeline.to(".bp-room-fills", { opacity: 0.06, duration: 1.2 }, "+=0.1");
        masterTimeline.to(".bp-footprint-double", { opacity: 0.35, duration: 1 }, "<");

        // 7. Metric Validation Count-Ups (Stage 6 to 7 transition)
        // Reveal statistics panel
        masterTimeline.to(".bp-metrics-screen", { opacity: 1, pointerEvents: "auto", duration: 0.8 }, "+=0.1");

        const stats = { projects: 0, space: 0, cities: 0, satisfaction: 0 };
        masterTimeline.to(stats, {
          projects: 180,
          space: 2.4,
          cities: 12,
          satisfaction: 99.8,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: () => {
            if (projectsValRef.current) projectsValRef.current.innerText = Math.floor(stats.projects) + "+";
            if (spaceValRef.current) spaceValRef.current.innerText = stats.space.toFixed(1) + "M+";
            if (citiesValRef.current) citiesValRef.current.innerText = Math.floor(stats.cities) + "+";
            if (satValRef.current) satValRef.current.innerText = stats.satisfaction.toFixed(1) + "%";
          }
        }, "<");

        // 8. Multi-Floor Stratification (Stage 7 to 8 transition)
        // Hide metrics overlay & fade out 2D layout elements
        masterTimeline.to(".bp-metrics-screen", { opacity: 0, pointerEvents: "none", duration: 0.6 }, "+=0.1");
        masterTimeline.to(
          [".bp-axes", ".bp-room-fills", footprintPathRef.current, ".bp-footprint-double", ".bp-internal-walls", ".bp-door-swings", ".bp-room-labels", ".bp-dimensions"],
          { opacity: 0, duration: 0.6 },
          "<"
        );

        // Fade in stacked isometric floors and make them spread vertically
        masterTimeline.to(".bp-stacked-floors", { opacity: 1, duration: 0.6 }, "+=0.1");
        masterTimeline.fromTo(
          ".bp-floor-1", 
          { transform: "translate(0, 0)" }, 
          { transform: "translate(0, 60)", duration: 1.5, ease: "power2.out" }, 
          "<"
        );
        masterTimeline.fromTo(
          ".bp-floor-3", 
          { transform: "translate(0, 0)" }, 
          { transform: "translate(0, -60)", duration: 1.5, ease: "power2.out" }, 
          "<"
        );
        masterTimeline.to(".bp-floor-align-lines", { opacity: 1, duration: 1 }, "<+=0.5");

        // 9. Isometric Realization (Stage 8 to 9 transition)
        // Fade out stacked floors and fade in 3D Isometric building model
        masterTimeline.to(".bp-stacked-floors", { opacity: 0, duration: 0.6 }, "+=0.1");
        masterTimeline.to(".bp-3d-model", { opacity: 1, duration: 0.8 }, "<");
        
        // Scale and rotate floating animation for the 3D model
        masterTimeline.fromTo(
          ".bp-3d-model-content",
          { scale: 0.9, rotate: -2 },
          { scale: 1.05, rotate: 1.5, duration: 2, ease: "power1.inOut" },
          "<"
        );

        // --- STICKY LEFT COLUMN SCROLL ANCHORING ---
        if (isDesktop) {
          // Slide text triggers
          stages.forEach((_, index) => {
            if (index === 0) return; // First is already visible
            
            // Fade out previous slide and fade in next slide
            masterTimeline.to(`.slide-text-${index - 1}`, { opacity: 0, y: -20, display: "none", duration: 0.3 }, `+=0.2`);
            masterTimeline.fromTo(
              `.slide-text-${index}`,
              { opacity: 0, y: 20, display: "none" },
              { opacity: 1, y: 0, display: "flex", duration: 0.4 }
            );
          });
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      mm.revert();
    };
  }, []);

  return (
    <div ref={triggerRef} className="relative bg-[#090b11] text-[#f7ebe1] overflow-hidden border-b border-outline-variant/10">
      <div className="absolute inset-0 z-0 bg-radial-gradient from-primary/5 via-transparent to-transparent pointer-events-none opacity-40" />

      {/* Main scrolling wrapper */}
      <div ref={containerRef} className="min-h-screen flex flex-col justify-center relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Sticky Narrative Storyboard */}
          <div className="lg:col-span-5 flex flex-col justify-center relative min-h-[380px] sm:min-h-[440px] lg:min-h-0 z-20">
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-primary mb-6 block">
              OPERATIONAL STORYBOARD
            </span>

            {stages.map((stage, index) => (
              <div
                key={index}
                className={`slide-text-${index} flex-col gap-4 ${
                  index === 0 ? "flex" : "hidden opacity-0"
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-[42px] lg:text-[56px] text-primary/60 leading-none font-bold">
                    {stage.num}
                  </span>
                  <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] leading-tight text-[#f7ebe1] font-normal">
                    {stage.title}
                  </h2>
                </div>

                <p className="font-sans text-[14px] sm:text-[16px] leading-relaxed text-[#cdc5c0] max-w-md font-normal">
                  {stage.desc}
                </p>

                <div className="pt-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />
                  <span className="font-sans text-[9px] font-bold tracking-widest text-primary uppercase">
                    {stage.meta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: SVG Blueprint Canvas */}
          <div className="lg:col-span-7 w-full flex items-center justify-center relative z-10 py-6 lg:py-0">
            {/* Blueprint outer frame casing styling */}
            <div className="relative w-full aspect-[4/3] rounded border border-primary/25 bg-[#0e111a] p-4 sm:p-6 shadow-[0_24px_50px_rgba(0,0,0,0.4)] overflow-hidden group select-none">
              
              {/* Corner brackets details */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-primary/30 pointer-events-none" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-primary/30 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-primary/30 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-primary/30 pointer-events-none" />

              {/* Grid axes markers labels */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 font-sans text-[7px] text-primary/40 uppercase tracking-widest pointer-events-none">
                GRID AXIS Y-COORD
              </div>
              <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 origin-left font-sans text-[7px] text-primary/40 uppercase tracking-widest pointer-events-none">
                GRID AXIS X-COORD
              </div>

              {/* Dynamic SVG Blueprint */}
              <svg
                ref={svgRef}
                className="w-full h-full stroke-current stroke-[0.8] fill-none"
                viewBox="0 0 800 600"
              >
                <defs>
                  {/* Subtle Blueprint Grid Pattern */}
                  <pattern
                    id="bp-grid-pattern"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      className="stroke-primary/5 stroke-[0.5] fill-none"
                    />
                  </pattern>

                  {/* Arrow marker for measurements */}
                  <marker
                    id="bp-arrow"
                    viewBox="0 0 10 10"
                    refX="5"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1 L 10 5 L 0 9 z" className="fill-primary/60 stroke-none" />
                  </marker>

                  {/* Blueprint glowing effect filter */}
                  <filter id="bp-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* 1. Grid Layer (Stage 1) */}
                <rect
                  width="800"
                  height="600"
                  fill="url(#bp-grid-pattern)"
                  className="bp-grid opacity-0 transition-opacity duration-300 pointer-events-none"
                />

                {/* Central reference axes */}
                <g className="bp-axes opacity-0 transition-opacity duration-300">
                  <line x1="400" y1="20" x2="400" y2="580" className="stroke-primary/20 stroke-dasharray-[4_8]" />
                  <line x1="20" y1="300" x2="780" y2="300" className="stroke-primary/20 stroke-dasharray-[4_8]" />
                  <circle cx="400" cy="300" r="40" className="stroke-primary/10 stroke-dasharray-[2_4]" />
                  <circle cx="400" cy="300" r="4" className="stroke-primary/30 fill-primary/10" />
                </g>

                {/* 6. Room Area Fills Layer (Stage 6) */}
                <g className="bp-room-fills opacity-0 transition-opacity duration-500">
                  {/* Planning */}
                  <rect x="150" y="150" width="150" height="130" className="fill-primary/30" />
                  {/* Reception */}
                  <rect x="150" y="280" width="150" height="100" className="fill-primary/20" />
                  {/* Workspace */}
                  <polygon points="300,150 450,150 450,450 350,450 350,380 300,380" className="fill-primary/25" />
                  {/* Meeting Room */}
                  <rect x="450" y="220" width="200" height="110" className="fill-primary/30" />
                  {/* Operations */}
                  <rect x="450" y="330" width="200" height="120" className="fill-primary/20" />
                </g>

                {/* 2. Building Outer Footprint (Stage 2) */}
                <g>
                  {/* Double outer wall line shown during Stage 6 */}
                  <path
                    d="M 146 146 L 454 146 L 454 216 L 654 216 L 654 454 L 346 454 L 346 384 L 146 384 Z"
                    className="bp-footprint-double stroke-primary/30 stroke-[0.8] fill-none opacity-0"
                  />
                  {/* Main animated path */}
                  <path
                    ref={footprintPathRef}
                    d="M 150 150 L 450 150 L 450 220 L 650 220 L 650 450 L 350 450 L 350 380 L 150 380 Z"
                    className="stroke-[#f7ebe1] stroke-[1.2] fill-none"
                  />
                </g>

                {/* 3. Internal Divider Walls & Door Swings (Stage 3) */}
                <g className="bp-internal-walls opacity-0 transition-opacity duration-300">
                  {/* Divider 1 */}
                  <line x1="300" y1="150" x2="300" y2="380" className="stroke-[#f7ebe1]/85 stroke-[0.9]" />
                  {/* Divider 2 */}
                  <line x1="450" y1="220" x2="450" y2="450" className="stroke-[#f7ebe1]/85 stroke-[0.9]" />
                  {/* Divider 3 */}
                  <line x1="450" y1="330" x2="650" y2="330" className="stroke-[#f7ebe1]/85 stroke-[0.9]" />
                  {/* Divider 4 */}
                  <line x1="150" y1="280" x2="300" y2="280" className="stroke-[#f7ebe1]/85 stroke-[0.9]" />
                </g>

                {/* Door swings group */}
                <g className="bp-door-swings opacity-0 transition-opacity duration-300">
                  {/* Door 1 swing */}
                  <line x1="300" y1="200" x2="270" y2="200" className="stroke-[#f7ebe1]/50 stroke-[0.8]" />
                  <path d="M 300,200 A 30,30 0 0,1 270,230" className="stroke-primary/50 stroke-[0.8] stroke-dasharray-[2_2]" />
                  {/* Door 2 swing */}
                  <line x1="450" y1="260" x2="420" y2="260" className="stroke-[#f7ebe1]/50 stroke-[0.8]" />
                  <path d="M 450,260 A 30,30 0 0,1 420,290" className="stroke-primary/50 stroke-[0.8] stroke-dasharray-[2_2]" />
                </g>

                {/* 4. Room Labels (Stage 4) */}
                <g className="bp-room-labels translate-y-3 opacity-0">
                  <g className="fill-[#f7ebe1]">
                    <text x="225" y="210" textAnchor="middle" className="font-sans text-[7.5px] font-bold tracking-widest">PLANNING</text>
                    <text x="225" y="325" textAnchor="middle" className="font-sans text-[7.5px] font-bold tracking-widest">RECEPTION</text>
                    <text x="375" y="295" textAnchor="middle" className="font-sans text-[7.5px] font-bold tracking-widest">WORKSPACE</text>
                    <text x="550" y="275" textAnchor="middle" className="font-sans text-[7.5px] font-bold tracking-widest">MEETING RM</text>
                    <text x="550" y="390" textAnchor="middle" className="font-sans text-[7.5px] font-bold tracking-widest">OPERATIONS</text>
                  </g>
                  {/* Coordinate labels underneath room names */}
                  <g className="fill-primary/55 font-sans text-[5.5px] tracking-wider text-center">
                    <text x="225" y="220" textAnchor="middle">COORD A-12</text>
                    <text x="225" y="335" textAnchor="middle">COORD A-15</text>
                    <text x="375" y="305" textAnchor="middle">COORD B-10</text>
                    <text x="550" y="285" textAnchor="middle">COORD C-04</text>
                    <text x="550" y="400" textAnchor="middle">COORD C-09</text>
                  </g>
                </g>

                {/* 5. Dimensions & Coordinates Annotations (Stage 5) */}
                <g className="bp-dimensions opacity-0 transition-opacity duration-300">
                  {/* Top dimension */}
                  <line x1="150" y1="110" x2="450" y2="110" className="stroke-primary/50 stroke-[0.8]" markerEnd="url(#bp-arrow)" markerStart="url(#bp-arrow)" />
                  <text x="300" y="102" textAnchor="middle" className="fill-[#f7ebe1]/80 font-sans text-[7px] font-semibold">30.00 m</text>
                  <line x1="150" y1="100" x2="150" y2="140" className="stroke-primary/20 stroke-[0.6] stroke-dasharray-[2_2]" />
                  <line x1="450" y1="100" x2="450" y2="140" className="stroke-primary/20 stroke-[0.6] stroke-dasharray-[2_2]" />

                  {/* Right dimension */}
                  <line x1="685" y1="220" x2="685" y2="450" className="stroke-primary/50 stroke-[0.8]" markerEnd="url(#bp-arrow)" markerStart="url(#bp-arrow)" />
                  <text x="708" y="340" textAnchor="middle" className="fill-[#f7ebe1]/80 font-sans text-[7px] font-semibold rotate-90 origin-center">23.00 m</text>
                  <line x1="650" y1="220" x2="695" y2="220" className="stroke-primary/20 stroke-[0.6] stroke-dasharray-[2_2]" />
                  <line x1="650" y1="450" x2="695" y2="450" className="stroke-primary/20 stroke-[0.6] stroke-dasharray-[2_2]" />
                  
                  {/* Scale indicator inside the blueprint */}
                  <text x="50" y="555" textAnchor="start" className="fill-primary/60 font-sans text-[7px] font-bold tracking-widest">SCALE 1:100</text>
                  <line x1="50" y1="565" x2="150" y2="565" className="stroke-primary/50 stroke-[1.2]" />
                  <line x1="50" y1="562" x2="50" y2="568" className="stroke-primary/50 stroke-[0.8]" />
                  <line x1="100" y1="562" x2="100" y2="568" className="stroke-primary/50 stroke-[0.8]" />
                  <line x1="150" y1="562" x2="150" y2="568" className="stroke-primary/50 stroke-[0.8]" />
                  <text x="100" y="575" textAnchor="middle" className="fill-primary/40 font-sans text-[5.5px]">5.0m</text>
                  <text x="150" y="575" textAnchor="middle" className="fill-primary/40 font-sans text-[5.5px]">10.0m</text>
                </g>

                {/* Glowing cursor tracking circle (Stage 2) */}
                <g
                  ref={cursorRef}
                  className="drafting-cursor opacity-0 scale-0 pointer-events-none"
                  style={{ filter: "url(#bp-glow)" }}
                >
                  <circle cx="0" cy="0" r="6" className="fill-primary" />
                  <circle cx="0" cy="0" r="14" className="stroke-primary/30 stroke-[2] fill-none" />
                </g>

                {/* 8. Multi-Floor Stacked Isometric Layout (Stage 8) */}
                <g className="bp-stacked-floors opacity-0">
                  {/* Vertical Column guides connecting levels */}
                  <g className="bp-floor-align-lines opacity-0">
                    <line x1="250" y1="480" x2="250" y2="120" className="stroke-primary/35 stroke-[0.8] stroke-dasharray-[2_4]" />
                    <line x1="550" y1="480" x2="550" y2="120" className="stroke-primary/35 stroke-[0.8] stroke-dasharray-[2_4]" />
                    <line x1="400" y1="410" x2="400" y2="50" className="stroke-primary/35 stroke-[0.8] stroke-dasharray-[2_4]" />
                    <line x1="400" y1="550" x2="400" y2="190" className="stroke-primary/35 stroke-[0.8] stroke-dasharray-[2_4]" />
                  </g>

                  {/* Floor 1 (Ground Floor - Shifted Down) */}
                  <g className="bp-floor-1 transition-transform duration-500">
                    <polygon points="250,420 400,350 550,420 400,490" className="stroke-[#f7ebe1] stroke-[1] fill-primary/[0.02]" />
                    <line x1="325" y1="385" x2="475" y2="455" className="stroke-primary/40 stroke-[0.7]" />
                    <line x1="325" y1="455" x2="475" y2="385" className="stroke-primary/40 stroke-[0.7]" />
                    <text x="400" y="445" textAnchor="middle" className="fill-[#f7ebe1]/80 font-sans text-[6px] font-bold tracking-widest">GROUND FL // 01</text>
                  </g>

                  {/* Floor 2 (First Floor - Center) */}
                  <g className="bp-floor-2">
                    <polygon points="250,300 400,230 550,300 400,370" className="stroke-[#f7ebe1] stroke-[1.2] fill-primary/[0.04]" />
                    <line x1="325" y1="265" x2="475" y2="335" className="stroke-primary/45 stroke-[0.8]" />
                    <line x1="325" y1="335" x2="475" y2="265" className="stroke-primary/45 stroke-[0.8]" />
                    <text x="400" y="325" textAnchor="middle" className="fill-[#f7ebe1]/80 font-sans text-[6px] font-bold tracking-widest">FIRST FL // 02</text>
                  </g>

                  {/* Floor 3 (Second Floor - Shifted Up) */}
                  <g className="bp-floor-3 transition-transform duration-500">
                    <polygon points="250,180 400,110 550,180 400,250" className="stroke-[#f7ebe1] stroke-[1] fill-primary/[0.02]" />
                    <line x1="325" y1="145" x2="475" y2="215" className="stroke-primary/40 stroke-[0.7]" />
                    <line x1="325" y1="215" x2="475" y2="145" className="stroke-primary/40 stroke-[0.7]" />
                    <text x="400" y="205" textAnchor="middle" className="fill-[#f7ebe1]/80 font-sans text-[6px] font-bold tracking-widest">TERRACE FL // 03</text>
                  </g>
                </g>

                {/* 9. 3D Isometric Realized wireframe building model (Stage 9) */}
                <g className="bp-3d-model opacity-0">
                  <g className="bp-3d-model-content origin-center">
                    {/* Glass planes (semitransparent polygons) */}
                    <polygon points="250,180 400,110 400,250 250,320" className="stroke-primary/30 fill-primary/10" />
                    <polygon points="400,250 550,180 550,320 400,390" className="stroke-primary/30 fill-primary/10" />
                    <polygon points="250,320 400,250 400,390 250,460" className="stroke-primary/30 fill-primary/5" />
                    <polygon points="400,390 550,320 550,460 400,530" className="stroke-primary/30 fill-primary/5" />

                    {/* Structural vertical columns */}
                    <line x1="250" y1="460" x2="250" y2="180" className="stroke-[#f7ebe1] stroke-[1.2]" />
                    <line x1="550" y1="460" x2="550" y2="180" className="stroke-[#f7ebe1] stroke-[1.2]" />
                    <line x1="400" y1="530" x2="400" y2="250" className="stroke-[#f7ebe1] stroke-[1.2]" />
                    <line x1="325" y1="495" x2="325" y2="215" className="stroke-[#f7ebe1]/75 stroke-[0.8] stroke-dasharray-[1_3]" />
                    <line x1="475" y1="495" x2="475" y2="215" className="stroke-[#f7ebe1]/75 stroke-[0.8] stroke-dasharray-[1_3]" />

                    {/* Floor slabs contours */}
                    <polygon points="250,460 400,390 550,460 400,530" className="stroke-[#f7ebe1] stroke-[1]" />
                    <polygon points="250,320 400,250 550,320 400,390" className="stroke-[#f7ebe1] stroke-[1.2] fill-primary/[0.02]" />
                    
                    {/* Cantilevered roof slab */}
                    <polygon points="220,170 400,90 580,170 400,250" className="stroke-[#f7ebe1] stroke-[1.5] fill-primary/15" />
                    <polygon points="220,175 400,95 580,175 400,255" className="stroke-[#f7ebe1]/20 fill-none" />

                    {/* Sleek Copper structural beam highlight */}
                    <line x1="220" y1="170" x2="580" y2="170" className="stroke-primary stroke-[2]" />
                    
                    {/* Core texts annotations inside 3D canvas */}
                    <text x="400" y="160" textAnchor="middle" className="fill-[#f7ebe1]/90 font-serif text-[10px] font-bold tracking-widest">REALIZED PHYSICAL STRUCTURE</text>
                    <text x="400" y="175" textAnchor="middle" className="fill-primary font-sans text-[6px] font-semibold tracking-wider">3D ISOMETRIC MESH MODEL</text>
                  </g>
                </g>
              </svg>

              {/* 7. Animated Statistics Overlay (Stage 7) */}
              <div className="absolute inset-0 bg-[#090b11]/95 backdrop-blur-sm z-30 opacity-0 pointer-events-none transition-all duration-500 flex flex-col justify-center p-8 sm:p-12 bp-metrics-screen scale-95 border border-primary/20 rounded">
                <div className="absolute inset-4 border border-primary/10 pointer-events-none" />
                
                <div className="text-center space-y-2 mb-10">
                  <span className="font-sans text-[9px] font-bold uppercase tracking-[0.25em] text-primary bg-primary/5 px-2.5 py-1 rounded inline-block">VERIFIED STATISTICAL ARCHIVE</span>
                  <h3 className="font-serif text-[24px] sm:text-[30px] text-[#f7ebe1] font-normal">Calculated Execution Metrics</h3>
                </div>

                <div className="grid grid-cols-2 gap-6 sm:gap-8 max-w-lg mx-auto w-full">
                  <div className="text-center space-y-1.5">
                    <span className="font-sans text-[8.5px] font-bold text-secondary uppercase tracking-widest block">PROJECTS DELIVERED</span>
                    <span ref={projectsValRef} className="font-serif text-[28px] sm:text-[36px] text-primary font-bold leading-none">0+</span>
                  </div>
                  <div className="text-center space-y-1.5">
                    <span className="font-sans text-[8.5px] font-bold text-secondary uppercase tracking-widest block">COMMERCIAL SQ. FT.</span>
                    <span ref={spaceValRef} className="font-serif text-[28px] sm:text-[36px] text-primary font-bold leading-none">0.0M+</span>
                  </div>
                  <div className="text-center space-y-1.5">
                    <span className="font-sans text-[8.5px] font-bold text-secondary uppercase tracking-widest block">CITIES SERVED</span>
                    <span ref={citiesValRef} className="font-serif text-[28px] sm:text-[36px] text-primary font-bold leading-none">0+</span>
                  </div>
                  <div className="text-center space-y-1.5">
                    <span className="font-sans text-[8.5px] font-bold text-secondary uppercase tracking-widest block">CLIENT SATISFACTION</span>
                    <span ref={satValRef} className="font-serif text-[28px] sm:text-[36px] text-primary font-bold leading-none">0.0%</span>
                  </div>
                </div>

                {/* Verification seals */}
                <div className="mt-10 flex justify-center gap-6 sm:gap-10 border-t border-outline-variant/10 pt-6 font-sans text-[9px] uppercase tracking-wider text-secondary/60 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                    <span>AUDITED METRICS</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Compass className="h-4 w-4 text-primary shrink-0" />
                    <span>GEOMETRIC STANDARD</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
