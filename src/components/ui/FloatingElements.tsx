"use client";

import { motion } from "framer-motion";

interface FloatingElement {
  size: number;
  x: string;
  y: string;
  delay: number;
  duration: number;
  opacity: number;
}

const elements: FloatingElement[] = [
  { size: 4, x: "10%", y: "20%", delay: 0, duration: 6, opacity: 0.3 },
  { size: 6, x: "85%", y: "15%", delay: 1, duration: 8, opacity: 0.2 },
  { size: 3, x: "70%", y: "60%", delay: 2, duration: 7, opacity: 0.25 },
  { size: 5, x: "15%", y: "70%", delay: 0.5, duration: 9, opacity: 0.2 },
  { size: 4, x: "90%", y: "80%", delay: 1.5, duration: 6, opacity: 0.3 },
  { size: 8, x: "50%", y: "10%", delay: 2.5, duration: 10, opacity: 0.15 },
  { size: 3, x: "30%", y: "85%", delay: 0.8, duration: 7, opacity: 0.25 },
  { size: 5, x: "60%", y: "30%", delay: 1.8, duration: 8, opacity: 0.2 },
];

export function FloatingElements() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-yellow-400"
          style={{
            width: el.size,
            height: el.size,
            left: el.x,
            top: el.y,
            opacity: el.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.2, 1],
            opacity: [el.opacity, el.opacity * 1.5, el.opacity],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Larger gradient orbs */}
      <motion.div
        className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-yellow-400/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-yellow-400/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}

// Animated grid background
export function AnimatedGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(250, 204, 21, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(250, 204, 21, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 70%)",
        }}
      />
    </div>
  );
}

