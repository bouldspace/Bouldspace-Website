"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-brand-50 dark:bg-brand-950 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px] w-full"
          >
            <div className="absolute top-0 left-0 w-3/4 h-[80%] rounded-2xl overflow-hidden shadow-2xl z-10">
              <Image 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
                alt="Interior Design Work"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-3/5 h-[60%] rounded-2xl overflow-hidden shadow-2xl z-20 border-8 border-brand-50 dark:border-brand-950">
              <Image 
                src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=600"
                alt="Founder Reviewing Blueprint"
                fill
                className="object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-24 h-24 md:w-32 md:h-32 bg-accent rounded-full text-brand-950 flex flex-col items-center justify-center shadow-lg border-4 border-brand-50 dark:border-brand-950 shadow-black/20">
              <span className="text-2xl md:text-3xl font-heading font-bold">10+</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-medium">Years Exp</span>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3 drop-shadow-sm">Our Story</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-4 md:mb-6 text-foreground leading-tight">
              Crafting Spaces That Tell <span className="text-accent dark:text-accent font-bold italic drop-shadow-sm">Your</span> Story
            </h3>
            
            <div className="space-y-4 md:space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                Founded out of a passion for architectural perfection, Bouldspace began with a simple mission: to democratize premium interior design. We believed that everyone deserves a home that inspires them.
              </p>
              <p>
                Over the years, we've noticed a disconnect in the industry i.e. hidden costs, delayed timelines, and a lack of personalization. We set out to change that narrative. Today, Bouldspace stands as a beacon of transparency and uncompromising quality.
              </p>
              <div className="pt-4 border-t border-border mt-8">
                <p className="font-heading text-xl font-bold text-foreground mb-1">Sayyed A.R. Rehmaan</p>
                <p className="text-sm text-accent uppercase tracking-widest font-medium drop-shadow-sm">Founder & Principal Designer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
