"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, ChevronLeft, ChevronRight, Grid, LayoutGrid, Layers, SlidersHorizontal } from "lucide-react";
import Button from "../ui/Button";

export default function GalleryView({ initialImages = [], categories = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(16);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter images based on selected category
  const filteredImages = selectedCategory === "All"
    ? initialImages
    : initialImages.filter((img) => img.category === selectedCategory);

  // Reset pagination when category changes
  useEffect(() => {
    setVisibleCount(16);
  }, [selectedCategory]);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, filteredImages.length));
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction, e) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    
    let nextIndex = lightboxIndex + direction;
    if (nextIndex < 0) {
      nextIndex = filteredImages.length - 1;
    } else if (nextIndex >= filteredImages.length) {
      nextIndex = 0;
    }
    setLightboxIndex(nextIndex);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  // Calculate count for each category
  const getCategoryCount = (category) => {
    if (category === "All") return initialImages.length;
    return initialImages.filter((img) => img.category === category).length;
  };

  return (
    <section className="relative min-h-screen pt-36 pb-28 bg-[#090b11] text-[#f7ebe1]">
      <div className="absolute inset-0 z-0 bg-radial-gradient from-primary/5 via-transparent to-transparent pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-primary bg-primary/5 px-4 py-1.5 rounded-full inline-block">
            Inspiration Library
          </span>
          <h1 className="font-serif text-[42px] sm:text-[56px] leading-[1.1] tracking-tight font-normal text-[#f7ebe1]">
            Design Idea Gallery
          </h1>
          <p className="font-sans text-[15px] sm:text-[17px] leading-relaxed text-[#cdc5c0] max-w-xl mx-auto font-normal">
            Explore our curated catalog of custom spatial elements, detailed casework, and material transitions compiled from our landmark residential executions.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col gap-6 mb-12 border-b border-outline-variant/10 pb-8">
          <div className="flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-wider text-primary">
            <SlidersHorizontal className="h-4 w-4" />
            <span>Filter by Space Curation</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded text-[11px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === "All"
                  ? "bg-primary text-on-primary shadow-elevated"
                  : "border border-outline-variant/30 text-secondary hover:border-primary/55 hover:text-primary bg-transparent"
              }`}
            >
              All Curations ({getCategoryCount("All")})
            </button>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded text-[11px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-primary text-on-primary shadow-elevated"
                    : "border border-outline-variant/30 text-secondary hover:border-primary/55 hover:text-primary bg-transparent"
                }`}
              >
                {cat} ({getCategoryCount(cat)})
              </button>
            ))}
          </div>
        </div>

        {/* Counter Info */}
        <div className="flex justify-between items-center mb-6 font-sans text-[11px] text-secondary tracking-wider uppercase font-semibold">
          <span>Showing {Math.min(visibleCount, filteredImages.length)} of {filteredImages.length} Curations</span>
          <span className="text-primary">[BOULDSPACE INDEX]</span>
        </div>

        {/* Gallery Grid */}
        {filteredImages.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-outline-variant/20 rounded">
            <p className="font-sans text-[14px] text-secondary">No design curations found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.slice(0, visibleCount).map((image, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  key={image.src}
                  onClick={() => openLightbox(index)}
                  className="group relative aspect-[3/4] w-full rounded border border-outline-variant/20 bg-[#0e111a] overflow-hidden shadow-elevated hover:border-primary/45 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle dark overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b11]/90 via-[#090b11]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

                  {/* Corner outline accents on hover */}
                  <div className="absolute inset-3 border border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />

                  {/* Hover content */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-end">
                    <div className="space-y-1">
                      <span className="font-sans text-[8px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2 py-0.5 rounded border border-primary/20 inline-block">
                        {image.category}
                      </span>
                      <h4 className="font-serif text-[15px] text-[#f7ebe1] font-normal leading-tight">
                        {image.name}
                      </h4>
                    </div>
                    <div className="h-7 w-7 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                      <Eye className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Load More Trigger */}
        {visibleCount < filteredImages.length && (
          <div className="mt-16 text-center">
            <Button variant="secondary" showArrow={false} onClick={loadMore}>
              Load More Inspirations
            </Button>
          </div>
        )}

      </div>

      {/* LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-[#090b11]/98 backdrop-blur-md flex flex-col justify-between p-6 cursor-zoom-out"
          >
            {/* Top Bar info */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto z-10">
              <div className="space-y-1">
                <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2.5 py-1 rounded border border-primary/20 inline-block">
                  {filteredImages[lightboxIndex].category}
                </span>
                <h3 className="font-serif text-[18px] sm:text-[22px] text-[#f7ebe1]">
                  {filteredImages[lightboxIndex].name}
                </h3>
              </div>

              <button
                onClick={closeLightbox}
                className="h-10 w-10 rounded-full border border-outline-variant/30 text-[#f7ebe1] hover:border-primary hover:text-primary transition-colors flex items-center justify-center cursor-pointer focus:outline-none"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Middle Image viewport */}
            <div className="relative w-full max-w-5xl mx-auto h-[60vh] sm:h-[70vh] flex items-center justify-center my-auto">
              
              {/* Navigation Left */}
              <button
                onClick={(e) => navigateLightbox(-1, e)}
                className="absolute left-0 sm:-left-12 z-20 h-12 w-12 rounded-full border border-outline-variant/30 text-[#f7ebe1] hover:border-primary hover:text-primary bg-[#090b11]/50 hover:bg-[#090b11] transition-all flex items-center justify-center cursor-pointer focus:outline-none"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Lightbox main Image */}
              <motion.img
                key={filteredImages[lightboxIndex].src}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].name}
                className="max-w-full max-h-full object-contain rounded border border-outline-variant/10 shadow-elevated cursor-default"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Navigation Right */}
              <button
                onClick={(e) => navigateLightbox(1, e)}
                className="absolute right-0 sm:-right-12 z-20 h-12 w-12 rounded-full border border-outline-variant/30 text-[#f7ebe1] hover:border-primary hover:text-primary bg-[#090b11]/50 hover:bg-[#090b11] transition-all flex items-center justify-center cursor-pointer focus:outline-none"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Bottom metadata details */}
            <div className="text-center font-sans text-[11px] text-secondary tracking-widest uppercase z-10 w-full max-w-7xl mx-auto border-t border-outline-variant/10 pt-4 flex justify-between">
              <span>DESIGN SPECIFICATION SHEET</span>
              <span>CURATION {lightboxIndex + 1} OF {filteredImages.length}</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
