"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

export default function ProjectsFilterGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Residential",
    "Hospitality",
    "High-End Residences",
  ];

  const projects = [
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/da/13/9f/hotel-facade.jpg?w=1400&h=800&s=1",
      title: "Hotel Lilac",
      category: "Hospitality",
      location: "Kota, RJ",
      status: "Completed",
      commId: "BS-HL-01",
      gridClass: "md:col-span-8 lg:col-span-7 aspect-[16/10]",
    },
    {
      img: "https://dynamic.realestateindia.com/proj_images/project15040/proj_header_image-15040-770x400.jpg",
      title: "Skypark Kota",
      category: "High-End Residences",
      location: "Kota, RJ",
      status: "Completed",
      commId: "BS-SK-02",
      gridClass: "md:col-span-4 lg:col-span-5 aspect-[3/4]",
    },
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3a/cf/34/entrance.jpg?w=1400&h=800&s=1",
      title: "Hotel ORTUS",
      category: "Hospitality",
      location: "Kota, RJ",
      status: "Completed",
      commId: "BS-HO-03",
      gridClass: "md:col-span-6 lg:col-span-4 aspect-[4/3]",
    },
    {
      img: "https://housing-images.n7net.in/4f2250e8/fdabfc1c1a251452db90acc3a0d78ec3/v6/fs-large/sunprime_infratech_sunprime_infratech_skyline-instrumentation_limited_colony-kota-sunprime_infratech_pvtltd.jpg",
      title: "Skyline Kota",
      category: "Residential",
      location: "Kota, RJ",
      status: "Completed",
      commId: "BS-SKL-04",
      gridClass: "md:col-span-6 lg:col-span-8 aspect-[16/10]",
    },
    {
      img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/543027436.jpg?k=103a5d86c6d6940f386b8c679d879bbfb05491e251c280a27dc0dc1a698296ab&o=",
      title: "Hotel Classic Sapphire",
      category: "Hospitality",
      location: "Bundi Kota, RJ",
      status: "Completed",
      commId: "BS-HCS-05",
      gridClass: "md:col-span-6 lg:col-span-5 aspect-[3/4]",
    },
    {
      img: "https://pix8.agoda.net/hotelImages/12548872/-1/e0478fb6280b648adc5c2533373eddaa.jpg?ca=15&ce=1&s=1024x",
      title: "Hotel Clarks Premier",
      category: "Hospitality",
      location: "Kota, RJ",
      status: "Completed",
      commId: "BS-HCP-06",
      gridClass: "md:col-span-6 lg:col-span-7 aspect-[4/3]",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-32 bg-surface relative overflow-hidden border-t border-outline-variant/15">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none blueprint-grid" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Curated Sector Navigation */}
        <div className="flex overflow-x-auto pb-6 mb-20 scrollbar-thin border-b border-outline-variant/20 -mx-6 px-6 justify-start lg:justify-center scroll-smooth">
          <div className="flex gap-8 whitespace-nowrap min-w-max">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative pb-4 font-sans text-[12px] font-bold uppercase tracking-[0.25em] transition-colors duration-300 cursor-pointer ${
                    isActive ? "text-primary" : "text-secondary hover:text-on-surface"
                  }`}
                >
                  {category}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryLine"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Irregular Masonry Showcase Wall */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`group cursor-pointer flex flex-col gap-5 ${project.gridClass}`}
              >
                {/* Image Container with crop & zoom and coordinates */}
                <div className="relative w-full h-full overflow-hidden rounded shadow-elevated border border-outline-variant/15 bg-surface-container">
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover scale-100 group-hover:scale-[1.03] transition-all duration-[1000ms] ease-out filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:contrast-100"
                    src={project.img}
                  />

                  {/* Absolute Atmospheric Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12100e]/80 via-[#12100e]/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

                  {/* Commission ID Stamp (Blueprint style) */}
                  <div className="absolute top-5 left-5 bg-[#12100e]/85 backdrop-blur-sm border border-outline-variant/20 text-[#fff8f4]/60 px-3 py-1.5 rounded-sm text-[9px] font-sans font-bold tracking-[0.2em] uppercase opacity-90">
                    {project.commId}
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute top-5 right-5 bg-primary/95 text-on-primary px-3 py-1.5 rounded-sm text-[9px] font-sans font-bold tracking-[0.2em] uppercase shadow-elevated">
                    {project.status}
                  </div>
                </div>

                {/* Overlapping/Asymmetric Metadata labels below image */}
                <div className="flex justify-between items-start pt-1 font-sans">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-[22px] text-on-surface font-normal leading-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="text-right space-y-1">
                    <span className="text-[10px] tracking-wider text-secondary flex items-center gap-1 justify-end font-medium">
                      <MapPin className="h-3 w-3 text-primary" /> {project.location}
                    </span>
                    <span className="text-[9px] tracking-widest text-outline uppercase font-semibold block">
                      ARCHIVE CO-90
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
