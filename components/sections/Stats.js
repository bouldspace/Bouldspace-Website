"use client";

import React from "react";
import { Award, Briefcase, Users, Zap } from "lucide-react";
import FadeIn from "../animations/FadeIn";

export default function Stats() {
  const statItems = [
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      number: "450+",
      label: "Projects Managed",
      desc: "Architectural & consulting achievements",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      number: "250+",
      label: "Active Consultants",
      desc: "Top-tier global professionals",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      number: "25+",
      label: "Years Experience",
      desc: "Deep domain operational expertise",
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      number: "10+",
      label: "Industry Awards",
      desc: "Recognitions for architectural excellence",
    },
  ];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 -mt-16 md:-mt-20 mb-28">
      <FadeIn direction="up" duration={0.8}>
        <div className="bg-surface-container-lowest rounded p-8 md:p-12 shadow-elevated border border-outline-variant/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
          {statItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center md:items-start text-center md:text-left gap-4 ${
                index > 0 ? "pt-6 md:pt-0 md:pl-6 lg:pl-8" : "md:pr-4"
              }`}
            >
              <div className="h-12 w-12 rounded bg-surface-container flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <span className="font-serif text-[32px] md:text-[36px] font-bold text-on-surface leading-none">
                  {item.number}
                </span>
                <h4 className="font-sans text-[12px] font-semibold uppercase tracking-wider text-primary mt-1">
                  {item.label}
                </h4>
                <p className="font-sans text-[13px] text-secondary mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
