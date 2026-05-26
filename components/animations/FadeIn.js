"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  threshold = 0.15,
}) {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 1, 0.5, 1], // Premium easeOutQuint
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
