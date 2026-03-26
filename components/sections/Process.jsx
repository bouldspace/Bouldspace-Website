"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Hammer, PackageCheck } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Consultation",
    description: "Meet with our expert designers to discuss your vision, requirements, and budget.",
    icon: MessageSquare,
  },
  {
    id: 2,
    title: "Design Planning",
    description: "We create 3D renders and detailed floor plans for your approval.",
    icon: PenTool,
  },
  {
    id: 3,
    title: "Execution",
    description: "Our skilled craftsmen bring the designs to life with premium materials.",
    icon: Hammer,
  },
  {
    id: 4,
    title: "Delivery",
    description: "On-time handover of your dream home, complete with our warranty.",
    icon: PackageCheck,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-12 md:py-24 bg-surface text-foreground relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-50 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50 dark:opacity-5"></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">How It Works</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-4 md:mb-6">
              Your Journey to a Dream Home
            </h3>
            <p className="text-muted-foreground text-lg">
              A seamless, transparent process designed to make your interior design experience stress-free.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[60px] left-12 right-12 h-0.5 bg-border z-0" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-32 md:h-32 rounded-full bg-surface border border-accent/20 flex items-center justify-center mb-4 sm:mb-6 md:mb-8 relative shadow-lg shadow-accent/10 dark:shadow-none group">
                  <div className="absolute inset-0 rounded-full border border-accent border-dashed scale-[1.15] animate-[spin_15s_linear_infinite] group-hover:scale-[1.2] transition-transform duration-500"></div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 rounded-full bg-accent text-white flex items-center justify-center text-sm md:text-2xl group-hover:scale-110 transition-transform duration-500">
                    <step.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" />
                  </div>
                </div>

                <div className="bg-surface relative px-3 py-3 sm:px-6 sm:py-4 rounded-xl border border-border shadow-sm w-full">
                  <div className="absolute -top-[5px] sm:-top-[10px] left-1/2 -translate-x-1/2 w-2 h-2 sm:w-4 sm:h-4 rounded-sm bg-surface border-t border-l border-border rotate-45"></div>
                  <span className="text-accent font-bold font-heading mb-0.5 sm:mb-1 block text-[10px] sm:text-sm">Step {step.id}</span>
                  <h4 className="text-[13px] sm:text-xl font-heading font-bold mb-1 sm:mb-3 leading-tight">{step.title}</h4>
                  <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm leading-snug sm:leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
