"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sofa, Utensils, Paintbrush, Hammer, Building, Briefcase, Key } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "architecture",
    title: "Architecture",
    description: "Expert architectural planning and structural design tailored to your vision.",
    icon: Building,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "interior",
    title: "Interior Design",
    description: "Complete end-to-end interior design and execution for your spaces.",
    icon: Sofa,
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "pmc",
    title: "PMC",
    description: "Professional project management consultancy ensuring timely and quality delivery.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "turnkey",
    title: "Turnkey Solutions",
    description: "Hassle-free, comprehensive turnkey services from concept to completion.",
    icon: Key,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "renovation",
    title: "Renovation",
    description: "Transform your old spaces into modern masterpieces.",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "modular-kitchen",
    title: "Modular Kitchen",
    description: "Smart, ergonomic, and aesthetic kitchen designs tailored for you.",
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "furniture-decor",
    title: "Furniture & Decor",
    description: "Premium curated furniture and bespoke decor pieces.",
    icon: Paintbrush,
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-24 bg-brand-50 dark:bg-brand-950">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 gap-6 md:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl text-center md:text-left"
          >
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
              What We Do Best
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <Link href="#portfolio" className="flex items-center gap-2 font-medium text-foreground hover:text-accent transition-colors">
              View All Services <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-surface shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/80 dark:border-white/5"
            >
              <div className="relative h-28 sm:h-48 md:h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-3 sm:p-5 md:p-8 md:pb-10">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-2 sm:mb-4 md:mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <service.icon className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-[13px] sm:text-lg md:text-xl font-heading font-bold text-foreground mb-1 sm:mb-3 leading-tight">{service.title}</h4>
                <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-relaxed mb-3 sm:mb-6 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs md:text-sm font-semibold text-accent opacity-100 sm:opacity-0 sm:-translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <span className="hidden sm:inline">Know More</span><span className="sm:hidden">More</span> <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
