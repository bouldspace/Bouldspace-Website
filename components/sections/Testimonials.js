"use client";

import React from "react";
import { Quote } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import Card from "../ui/Card";

export default function Testimonials() {
  const stories = [
    {
      quote:
        "Bouldspace redefined our design standards. Their end-to-end consulting balanced pure artistic vision with rigid compliance, completing our country villa on budget and three weeks ahead of schedule.",
      author: "Kabir Varma",
      role: "Luxury Residential Owner",
      location: "Bengaluru",
    },
    {
      quote:
        "Managing large commercial builds can be highly chaotic. Having Bouldspace as our single-point project director simplified the entire planning and contractor management process. A class apart.",
      author: "Meera Sen",
      role: "Co-Founder, Capital Boutique Hotels",
      location: "Mumbai",
    },
    {
      quote:
        "Their commitment to material honesty and organic terracotta palettes represents a masterful architectural approach. Highly sophisticated structural advisory and design work.",
      author: "Rajesh Malhotra",
      role: "Managing Director, Landmark Developments",
      location: "Delhi NCR",
    },
  ];

  return (
    <section className="py-28 bg-surface overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-20 space-y-4">
          <FadeIn direction="right" duration={0.8}>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary">
              Client Valuations
            </span>
          </FadeIn>
          <FadeIn direction="right" delay={0.1} duration={0.8}>
            <h2 className="font-serif text-[38px] md:text-[48px] leading-tight text-on-surface font-normal">
              Trusted by Discerning Visionaries.
            </h2>
          </FadeIn>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <FadeIn
              key={idx}
              direction="up"
              delay={idx * 0.15}
              duration={0.8}
            >
              <Card variant="flat" className="h-full flex flex-col justify-between gap-8 p-8 sm:p-10 border border-outline-variant/10 bg-surface-container shadow-elevated">
                <Quote className="h-8 w-8 text-primary/30 shrink-0" />
                <p className="font-sans text-[15px] leading-relaxed text-secondary italic font-normal">
                  "{story.quote}"
                </p>
                <div className="pt-6 border-t border-outline-variant/30">
                  <h4 className="font-serif text-[18px] text-on-surface font-normal">
                    {story.author}
                  </h4>
                  <p className="font-sans text-[12px] text-primary font-semibold uppercase tracking-wider mt-1">
                    {story.role} — {story.location}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
