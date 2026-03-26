"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus } from "lucide-react";

const categories = ["All", "Architecture", "Interior", "PMC", "Turnkey", "Renovation", "Modular Kitchen", "Furniture & Decor"];

const portfolioItems = [
  {
    id: 1,
    title: "Modern Residence Design",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "Luxury Living Space",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "Commercial Complex Management",
    category: "PMC",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    title: "End-to-End Office Setup",
    category: "Turnkey",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 5,
    title: "Heritage Home Upgrade",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 6,
    title: "Smart Ergonomic Kitchen",
    category: "Modular Kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 7,
    title: "Bespoke Decor Collection",
    category: "Furniture & Decor",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 8,
    title: "Contemporary Villa Exterior",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 9,
    title: "Minimalist Lounge Area",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 10,
    title: "Site Execution & Planning",
    category: "PMC",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 11,
    title: "Complete Retail Store Setup",
    category: "Turnkey",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 12,
    title: "Modern Bathroom Remodel",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 13,
    title: "Premium Island Kitchen",
    category: "Modular Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 14,
    title: "Custom Wooden Furnishings",
    category: "Furniture & Decor",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1200",
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-12 md:py-24 bg-background">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Our Work</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-4 md:mb-6 text-foreground">
              Explore Our Portfolio
            </h3>
            <p className="text-muted-foreground text-lg mb-10">
              Browse through our recent transformations and find inspiration for your own space.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  suppressHydrationWarning
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-foreground text-background shadow-md"
                      : "bg-surface border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-pointer h-32 sm:h-48 md:h-80 rounded-2xl overflow-hidden shadow-sm"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 md:bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 md:p-6">
                  <div className="translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-accent text-[8px] sm:text-[10px] md:text-sm font-medium uppercase tracking-wider mb-0 sm:mb-1">
                      {item.category}
                    </p>
                    <h4 className="text-white text-[11px] sm:text-base md:text-xl font-heading font-bold flex justify-between items-center leading-tight">
                      {item.title}
                      <span className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </span>
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                suppressHydrationWarning
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
                onClick={() => setSelectedImage(null)}
              >
                <Plus size={24} className="rotate-45" />
              </button>
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white text-center">
                <span className="text-accent text-sm font-medium uppercase tracking-wider block mb-2">{selectedImage.category}</span>
                <h3 className="text-3xl font-heading font-bold">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
