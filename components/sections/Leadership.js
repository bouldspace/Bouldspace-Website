"use client";

import React from "react";
import FadeIn from "../animations/FadeIn";

export default function Leadership() {
  const members = [
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsQAIR8GIcu6VERa6yc8sup_pv3EJvK_kdXMWIxeOfv3o62nkLWng0comeipAY-RJbVU7Go9SjI92iuF3KmubD_h972gtEmQ5h3m09FU38-Olft9IdUwdYLVmHhBIfod1eaEMv5L_o1GRdiSpqW4kYqCf6axXXMD-jrZEMVWEcaK5cFAZt__7NCPdSSukMXHfunnz4qwjGfD_LbhmZv6l-kCV4G0oC3Gw-lyD4AuUo5JN4lR8uGqnhn-Fbdb7QxuyXr81XQPqZEF4o",
      name: "Vikram Sethi",
      role: "Founder & Principal Architect",
      expertise: "Concept Design & Curation",
      quote: "Timeless architecture bridges absolute material honesty with organic domestic curves.",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBKZYRAEUHroosEW4uVfHm7u_lV9LPN2W48mdror5Xm2cMucz1prTRxLQ7yZ56qwQ8FLmi_pZeXZC9_KSkgnmwsBiCM_eV0-oRAnJiaQy29QiSBPnGiwPda4QwCkLrz3EdyR_FPrIzQlvKdE_YTjKyGnw6yKxA3hSJYJ8u2LY21-lJCu6dE3RdjNTxC3g7tqZqgkb3v4uL1GzEs_b4EOFGlJjFH33C6o9d4KaNc_zTvr2bO2N7wSCnYxK_CSLsGKzoJBdl6xFyqrQp",
      name: "Rohan Mehta",
      role: "Director – Project Management",
      expertise: "Rigor & Budget Adherence",
      quote: "True architectural value is defined solely by the flawless execution of that vision.",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAB7vdWTV-8ikTs34nzCeIMCO-y6mzXTCPzJedDMZIg-A_bG6AIMKCldhvmXqHx3kSQgK18MK5LOKEmr8zhMwr-rB9K-gmzENa7zqYz_Zaj_xC-fu88AfCWBD50sC6ErgJN5pxtUf_85GOEaQt9X1mDEq2xkYPLMTTDIV-WnL2G-oLiTRRI2eOqFB51ZBwh2MfsXT4ebR8_gzhNhnpYgqOArxP9uUrkD8uGCp3n2b_-0-8pTuAoWehpMQX1JL8QVPcq03GmvJSs5kFz",
      name: "Ananya Rao",
      role: "Design Lead",
      expertise: "Earthy Warm Harmonies",
      quote: "Curating textures like terracotta plaster and wood creates breathing room in built environments.",
    },
  ];

  return (
    <section className="py-28 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <FadeIn direction="right" duration={0.8}>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary mb-3 block">
                Executive Leadership
              </span>
            </FadeIn>
            <FadeIn direction="right" delay={0.1} duration={0.8}>
              <h2 className="font-serif text-[38px] md:text-[48px] leading-tight text-on-surface font-normal">
                Advisory Directors & Architects.
              </h2>
            </FadeIn>
          </div>
          <FadeIn direction="left" delay={0.2} duration={0.8}>
            <p className="font-sans text-[15px] leading-relaxed text-secondary max-w-sm">
              Our directors balance artistic visual mastery directly with technical operational rigor.
            </p>
          </FadeIn>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <FadeIn
              key={idx}
              direction="up"
              delay={idx * 0.15}
              duration={0.8}
            >
              <div className="group cursor-pointer flex flex-col gap-6">
                <div className="relative overflow-hidden rounded aspect-square shadow-elevated bg-surface-container">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    src={member.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b18]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-[#fbefe5] font-sans text-[11px] font-semibold uppercase tracking-widest">
                      {member.expertise}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-[24px] text-on-surface font-normal">
                    {member.name}
                  </h3>
                  <p className="font-sans text-[12px] text-primary font-semibold uppercase tracking-wider mt-1">
                    {member.role}
                  </p>
                  <p className="font-sans text-[14px] text-secondary mt-3 italic border-l-2 border-outline-variant pl-4">
                    "{member.quote}"
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
