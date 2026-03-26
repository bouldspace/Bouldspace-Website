"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, CreditCard, SearchCode } from "lucide-react";

const features = [
  {
    id: 1,
    title: "5-Year Warranty",
    description: "Our materials and workmanship are guaranteed to stand the test of time.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "On-Time Delivery",
    description: "45-day guaranteed move-in timeline or we pay your rent.",
    icon: Clock,
  },
  {
    id: 3,
    title: "Transparent Pricing",
    description: "Detailed quotes with zero hidden costs. What you see is what you pay.",
    icon: SearchCode,
  },
  {
    id: 4,
    title: "Flexible EMI Options",
    description: "Design now, pay later with our 0% interest financing plans.",
    icon: CreditCard,
  },
];

export default function Features() {
  return (
    <section className="py-12 md:py-24 bg-surface text-foreground relative">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Why Bouldspace</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-4 md:mb-6">
              The Bouldspace Promise
            </h3>
            <p className="text-muted-foreground text-lg">
              We go beyond just great design. Our comprehensive service ensures absolute peace of mind.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-brand-50 dark:bg-surface/50 p-4 sm:p-5 md:p-8 rounded-2xl hover:bg-accent/5 dark:hover:bg-accent/10 transition-colors border border-border"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-accent mb-3 sm:mb-4 md:mb-6 shadow-sm group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <feature.icon className="w-5 h-5 md:w-7 md:h-7" />
              </div>
              <h4 className="text-sm sm:text-lg md:text-xl font-heading font-bold mb-1 sm:mb-3 leading-tight">{feature.title}</h4>
              <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm leading-snug sm:leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
