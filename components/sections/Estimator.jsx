"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, CheckCircle2 } from "lucide-react";

export default function Estimator() {
  const [homeType, setHomeType] = useState("3BHK");
  const [area, setArea] = useState(1200);
  const [quality, setQuality] = useState("Premium");

  // Simple mock calculation logic
  const baseRate = quality === "Standard" ? 1500 : quality === "Premium" ? 2500 : 4000;
  const estimatedCost = area * baseRate;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-12 md:py-24 bg-brand-950 text-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent rounded-full -translate-x-1/2 translate-y-1/2 blur-[100px] opacity-20"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Instant Quote</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-4 md:mb-6">
              Estimate Your Project Cost
            </h3>
            <p className="text-brand-300 text-lg mb-8 leading-relaxed">
              Use our interactive calculator to get an idea of how much your dream interior might cost. We offer transparent pricing with no hidden charges.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "100% price transparency",
                "No hidden costs or timeline delays",
                "Flexible EMI options available",
                "Price-match guarantee for similar quality"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-200">
                  <CheckCircle2 size={20} className="text-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card bg-surface/10 dark:bg-surface/10 border-white/10 p-6 md:p-10"
          >
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
              <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                <Calculator size={24} />
              </div>
              <div>
                <h4 className="text-xl font-heading font-bold">Cost Calculator</h4>
                <p className="text-sm text-brand-300">Get an instant estimate in seconds</p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Home Type */}
              <div>
                <label className="block text-sm font-medium text-brand-200 mb-3">Home Type</label>
                <div className="grid grid-cols-3 gap-3">
                  {["1BHK", "2BHK", "3BHK", "4BHK+"].map((type) => (
                    <button
                      suppressHydrationWarning
                      key={type}
                      onClick={() => setHomeType(type)}
                      className={`py-3 rounded-lg text-sm font-medium transition-all ${
                        homeType === type
                          ? "bg-accent text-white shadow-md shadow-accent/20"
                          : "bg-surface/10 text-brand-100 hover:bg-surface/20 border border-white/10"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-sm font-medium text-brand-200">Carpet Area (sq. ft)</label>
                  <span className="text-accent font-bold">{area} sq.ft</span>
                </div>
                <input
                  suppressHydrationWarning
                  type="range"
                  min="500"
                  max="5000"
                  step="50"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              {/* Finish Quality */}
              <div>
                <label className="block text-sm font-medium text-brand-200 mb-3">Package Type</label>
                <div className="grid grid-cols-3 gap-3">
                  {["Standard", "Premium", "Luxury"].map((type) => (
                    <button
                      suppressHydrationWarning
                      key={type}
                      onClick={() => setQuality(type)}
                      className={`py-3 rounded-lg text-sm font-medium transition-all ${
                        quality === type
                          ? "bg-accent text-white shadow-md shadow-accent/20"
                          : "bg-surface/10 text-brand-100 hover:bg-surface/20 border border-white/10"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Result Area */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-brand-300 mb-2">Estimated Starting Price</p>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <span className="text-4xl font-heading font-bold text-white">
                    {formatCurrency(estimatedCost)}
                  </span>
                  <button suppressHydrationWarning className="px-6 py-3 bg-white text-brand-950 font-semibold rounded-full hover:bg-brand-50 transition-colors shadow-lg shadow-white/10">
                    Book Consultation
                  </button>
                </div>
                <p className="text-xs text-brand-400 mt-4">
                  *This is a rough estimate. Final price depends on design complexity, actual layout, and material selection.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
