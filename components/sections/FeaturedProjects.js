"use client";

import React from "react";
import Button from "../ui/Button";
import FadeIn from "../animations/FadeIn";

export default function FeaturedProjects() {
  const projects = [
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeXvKXrIUdg-eeCiBEi7ysER_Qg8UmjdNbnN45-sl1vHrweA0_RFlq-ZFAJ1-aW-mtEBum4LPB_eIahYPOSMatfEhFu9DH4ilB1HuZbowUGipWdLOXvT4wsLQ5SEzXqsoYqBFgqZ1XUjBOOR6hsIc1bXYa-htipWkfnM9KlwEKQuTEICwnBDAcwYrr1th1PNFUL3QnFYCF8ndTd1axdyXIf45xdVYQOHDpjVsfqyi1GJGQqqcNlgr97A6Y6tymPyjkZgcLOTvN3-EG",
      title: "The Earth House",
      desc: "Luxury Residential Project",
      location: "Bengaluru, India",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuByCKe9_ZP0wKHaOUp7ROAUYWeE-y-j-fGE7co_uaFPPlG6BcGc1vIijFy0y7CoGuSqWgMO2bH_uOGw1r3BCcElwevYXS4QMr9wtFTtR5cR9lHsGKu56VyZptRPmeoEjxJndvsTptYFp4HHXahF82kqzvZJe7_g7MhcDf4B5wMdn-Kmz-XLiAoh4RjfS9YB0LoBp7ztB1bo2LxHCV9Fu9CkXcbsAL1Tnkuia-eJoAIuSewF7N5l9PlJSTDh9NQeex3QUyrubnSE99Fc",
      title: "Olive View Villa",
      desc: "Minimalist Modern Residence",
      location: "Hyderabad, India",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwl_EGXX9CwodqZS9y81D5KGVyJT10mllBU2F6Bq3KZLaLSLr2w4hlfVMjWOlbxIQpfIjD5cVm3H9zJCHi306sjr2ID_-z3tt6m0B135eEa1LzvF7GHAMhcPK7Y5KfXeTjuY-lwESJn-l4T7DmwVSZMEL9yyjI7rz8H97g2n0-vZe7wsyzBdF1MxJstxNrJUhF1HrfsiYfaAcrWQM4p-0SrUxiw5e2teqNaeMgw7mi6qkyWp2OZ52dtqE-4LMFl1cUQpCC8XE48sZo",
      title: "The Warm Abode",
      desc: "Grounded Interior Concept",
      location: "Pune, India",
    },
  ];

  return (
    <section className="py-28 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <FadeIn direction="right" duration={0.8}>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-primary mb-3 block">
                Selected Commissions
              </span>
            </FadeIn>
            <FadeIn direction="right" delay={0.1} duration={0.8}>
              <h2 className="font-serif text-[38px] md:text-[48px] leading-tight text-on-surface font-normal">
                Spaces We Are Proud Of.
              </h2>
            </FadeIn>
          </div>
          <FadeIn direction="left" delay={0.2} duration={0.8}>
            <Button variant="secondary" className="hidden md:inline-flex" href="/projects">
              Explore Portfolio
            </Button>
          </FadeIn>
        </div>

        {/* Portfolio Asymmetrical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <FadeIn
              key={idx}
              direction="up"
              delay={idx * 0.15}
              duration={0.8}
            >
              <div className="group cursor-pointer flex flex-col gap-4">
                <div className="relative overflow-hidden rounded aspect-[4/3] shadow-elevated">
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={project.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b18]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-[#fbefe5] font-sans text-[11px] font-semibold uppercase tracking-widest">
                      View Details
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-[24px] text-on-surface font-normal">
                    {project.title}
                  </h3>
                  <p className="font-sans text-[13px] text-secondary">
                    {project.desc} — {project.location}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <FadeIn direction="up" duration={0.8}>
            <Button variant="secondary" className="w-full justify-center" href="/projects">
              Explore Portfolio
            </Button>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
