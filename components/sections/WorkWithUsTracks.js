"use client";

import React from "react";
import { Compass, Hammer, HardHat, ShieldCheck, ArrowUpRight } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import Card from "../ui/Card";

export default function WorkWithUsTracks() {
  const tracks = [
    {
      id: "architecture",
      number: "TRACK // 01",
      icon: <Compass className="h-6 w-6 text-primary" />,
      title: "Architects & Spatial Designers",
      subtitle: "Creative co-commissions & lead spatial design",
      description:
        "We collaborate with progressive architectural practices, boutique interior designers, and visualization specialists to co-develop benchmark residential estates and commercial headquarters.",
      profiles: [
        "Senior Project Architects",
        "Luxury Interior Designers",
        "Computational & BIM Modelers",
        "Architectural Lighting Curators",
      ],
      scope:
        "Full concept-to-detail packages, 3D spatial renders, material specifications, and aesthetic site supervision.",
    },
    {
      id: "artisans",
      number: "TRACK // 02",
      icon: <Hammer className="h-6 w-6 text-primary" />,
      title: "Artisans & Specialty Craftsmen",
      subtitle: "Bespoke millwork, stone, and architectural metal",
      description:
        "Our projects require handcrafted authenticity. We partner directly with master woodworkers, stone masons, terrazzo casters, and metal fabricators who treat raw materiality with absolute reverence.",
      profiles: [
        "Architectural Millworkers & Joiners",
        "Italian Marble & Natural Stone Fabricators",
        "Custom Terrazzo & Plaster Artisans",
        "Patinated Metal & Brass Smiths",
      ],
      scope:
        "Custom cabinetry, statement furniture fabrication, architectural wall paneling, and site-cast masonry installations.",
    },
    {
      id: "contractors",
      number: "TRACK // 03",
      icon: <HardHat className="h-6 w-6 text-primary" />,
      title: "General Contractors & MEP Teams",
      subtitle: "Rigid structural execution & building engineering",
      description:
        "For builders who operate with engineering precision. We engage certified civil contractors, structural teams, and advanced MEP engineering firms committed to strict timeline and safety compliance.",
      profiles: [
        "High-End Civil & Structural Contractors",
        "HVAC & Environmental Control Engineers",
        "Home Automation & Low-Voltage Specialists",
        "Specialized Glazing & Facade Erectors",
      ],
      scope:
        "RCC structural execution, MEP rough-ins and commissioning, waterproofing systems, and acoustic glazing delivery.",
    },
    {
      id: "pmc",
      number: "TRACK // 04",
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Project Directors & PMC Leads",
      subtitle: "Single-point site control & structural QA/QC",
      description:
        "Experienced site directors who ensure drawings become physical reality without compromise. We recruit single-point project managers, quantity surveyors, and quality auditors for ongoing oversight.",
      profiles: [
        "Senior Construction Project Managers",
        "Quantity Surveyors & Cost Engineers",
        "Structural QA/QC Site Auditors",
        "Health, Safety & Compliance Directors",
      ],
      scope:
        "Daily site superintendence, contractor coordination, milestone sign-offs, and client reporting monographs.",
    },
  ];

  return (
    <section id="tracks" className="py-24 bg-surface-container-low relative overflow-hidden">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <FadeIn direction="up" duration={0.8}>
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
              Specialized Disciplines
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1} duration={0.8}>
            <h2 className="font-serif text-[36px] sm:text-[48px] leading-tight text-on-surface font-normal">
              Four Collaboration Tracks. <br />
              <span className="italic text-secondary">A Unified Standard of Rigor.</span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} duration={0.8}>
            <p className="font-sans text-[16px] leading-relaxed text-secondary font-normal max-w-2xl">
              Whether you lead an independent studio, operate an artisanal workshop,
              or direct large-scale contracting teams, find the discipline where your
              capabilities integrate into Bouldspace commissions.
            </p>
          </FadeIn>
        </div>

        {/* Tracks Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track, idx) => (
            <FadeIn key={track.id} direction="up" delay={idx * 0.1} duration={0.8}>
              <Card
                variant="elevated"
                className="h-full bg-surface p-8 sm:p-10 border border-outline-variant/15 shadow-elevated flex flex-col justify-between hover:border-primary/40 transition-all duration-300"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-outline-variant/20 mb-6">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                      {track.number}
                    </span>
                    <div className="h-12 w-12 rounded bg-surface-container flex items-center justify-center shrink-0">
                      {track.icon}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-[24px] sm:text-[28px] text-on-surface font-normal mb-1">
                    {track.title}
                  </h3>
                  <p className="font-sans text-[12px] font-semibold uppercase tracking-wider text-secondary mb-4">
                    {track.subtitle}
                  </p>
                  <p className="font-sans text-[15px] leading-relaxed text-secondary mb-6">
                    {track.description}
                  </p>

                  {/* Target Profiles */}
                  <div className="space-y-3 pt-4 border-t border-outline-variant/15 mb-6">
                    <h4 className="font-sans text-[11px] font-bold uppercase tracking-widest text-on-surface">
                      Target Profiles:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {track.profiles.map((profile, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 font-sans text-[13px] text-secondary">
                          <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                          <span>{profile}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Collaboration Scope */}
                  <div className="bg-surface-container-lowest p-4 rounded border border-outline-variant/15">
                    <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-primary mb-1">
                      Expected Scope:
                    </p>
                    <p className="font-sans text-[13px] leading-relaxed text-secondary">
                      {track.scope}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-6 mt-6 border-t border-outline-variant/20 flex justify-between items-center">
                  <a
                    href="#collaboration-form"
                    className="font-sans text-[12px] font-bold uppercase tracking-widest text-primary hover:text-on-surface flex items-center gap-1.5 transition-colors duration-300"
                  >
                    <span>Apply for this track</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
