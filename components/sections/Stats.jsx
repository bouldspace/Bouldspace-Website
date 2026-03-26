"use client";

import { motion } from "framer-motion";
import { Home, Users, MapPin, Star } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { id: 1, value: 1, suffix: "K+", label: "Homes Designed", icon: Home },
  { id: 2, value: 10, suffix: "+", label: "Expert Designers", icon: Users },
  { id: 3, value: 5, suffix: "+", label: "Cities Presence", icon: MapPin },
  { id: 4, value: 4.8, suffix: "/5", label: "Customer Rating", icon: Star },
];

export default function Stats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative -mt-8 md:-mt-12 z-20 pb-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card bg-surface/90 dark:bg-surface/80 p-6 md:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x divide-border/50">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center text-center px-4"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <stat.icon size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-xl md:text-3xl font-heading font-bold text-accent">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
