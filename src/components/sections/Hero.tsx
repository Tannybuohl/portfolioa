"use client";

import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { CalButton, FloatingElements, MagneticButton } from "@/components/ui";

// Rotating words for the headline
const rotatingWords = ["Repeat", "Demand"];

// Rotating team types
const teamTypes = ["WEB DEVELOPERS", "APP DEVELOPERS", "UI/UX DESIGNERS"];

// Lightning bolt icon component
function LightningIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

const trustIndicators = [
  "Latest Next.js + React Development",
  "High Converting Figma Designs",
  "Custom Built Websites",
];

// Word animation variants
const wordContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const wordChild: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 100,
    },
  },
};

// Rotating word component
function RotatingWord() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block min-w-[180px] sm:min-w-[220px] md:min-w-[280px] lg:min-w-[340px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={rotatingWords[currentIndex]}
          initial={{ opacity: 0, y: 30, rotateX: -60 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -30, rotateX: 60 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute left-0 inline-block bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent"
          style={{ transformOrigin: "bottom" }}
        >
          {rotatingWords[currentIndex]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible placeholder to maintain width */}
      <span className="invisible">Demand</span>
    </span>
  );
}

// Typewriter team type component
function RotatingTeamType() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentWord = teamTypes[currentIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing forward
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 80); // Typing speed
      } else {
        // Finished typing, wait then start deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause before deleting
      }
    } else {
      // Typing backward (deleting)
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50); // Deleting speed (faster)
      } else {
        // Finished deleting, move to next word
        setCurrentIndex((prev) => (prev + 1) % teamTypes.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentIndex]);

  return (
    <span className="inline-flex items-center">
      <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text font-black text-transparent">
        {displayText}
      </span>
      {/* Blinking cursor */}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="ml-0.5 inline-block h-[1em] w-[2px] bg-yellow-400"
      />
    </span>
  );
}

// Animated headline component
function AnimatedHeadline() {
  const line1 = ["World", "Class", "Websites", "That"];
  const line2 = ["Convert", "Visitors", "Into", "Paying"];
  const line3 = ["Customers", "On"];

  return (
    <motion.h1
      className="shimmer-text mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
      style={{ perspective: "1000px" }}
    >
      <motion.span
        variants={wordContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3"
      >
        {line1.map((word, i) => (
          <motion.span
            key={i}
            variants={wordChild}
            className="inline-block"
            style={{ transformOrigin: "bottom" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
      <motion.span
        variants={wordContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3"
      >
        {line2.map((word, i) => (
          <motion.span
            key={i}
            variants={wordChild}
            className="inline-block"
            style={{ transformOrigin: "bottom" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
      <motion.span
        variants={wordContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3"
      >
        {line3.map((word, i) => (
          <motion.span
            key={i}
            variants={wordChild}
            className="inline-block"
            style={{ transformOrigin: "bottom" }}
          >
            {word}
          </motion.span>
        ))}
        <motion.span
          variants={wordChild}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          <RotatingWord />
        </motion.span>
      </motion.span>
    </motion.h1>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-black pb-8 pt-32 md:pb-12 md:pt-40">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/50 to-black" />
        {/* Subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-transparent to-transparent" />
        {/* Top ambient glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-800/30 blur-3xl" />
      </div>

      {/* Floating background elements */}
      <FloatingElements />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"
      >
        {/* Badges Container - Centered */}
        <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          {/* Badge with bounce animation */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", damping: 10, stiffness: 100 }}
            className="inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/80 px-5 py-2.5 backdrop-blur-sm"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-yellow-400" />
            </span>
            <span className="text-sm font-medium text-zinc-300">
              Projects Open for{" "}
              <span className="font-semibold text-white">January</span>
            </span>
          </motion.div>

          {/* Availability/Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", damping: 12 }}
            className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2.5 backdrop-blur-sm"
          >
            <span className="text-lg">🔥</span>
            <span className="text-sm font-semibold text-orange-400">
              Only 2 Spots Left This Month
            </span>
          </motion.div>
        </div>

        {/* Animated Main Headline */}
        <AnimatedHeadline />

        {/* Subheadline with fade in */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mx-auto mb-6 max-w-2xl text-base text-zinc-400 sm:text-lg md:text-xl"
        >
          From Figma Website Designs to Pixel Perfect
          <br className="hidden sm:block" />
          Developed Next.js 15 Website.
        </motion.p>

        {/* Rotating Team Type - Subtle/Tiny */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mb-8 flex items-center justify-center gap-2 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            A team of senior
          </span>
          <span className="text-xs font-bold uppercase tracking-wider sm:text-sm">
            <RotatingTeamType />
          </span>
        </motion.div>

        {/* CTA Buttons with magnetic effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <MagneticButton strength={0.2}>
            <CalButton
              calLink="taiwo-uuuogw/15-min-meeting-or-discovery-call"
              className="glow-button h-14 w-full px-10 sm:w-auto"
            >
              Book a Call
            </CalButton>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <Link
              href="#contact"
              className="inline-flex h-14 w-full items-center justify-center rounded-full bg-zinc-800 px-10 text-base font-semibold text-white transition-all duration-300 hover:bg-zinc-700 sm:w-auto"
            >
              Get Started
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Trust Indicators with stagger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8 md:gap-12"
        >
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0 + index * 0.15 }}
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-300"
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                <LightningIcon className="h-4 w-4 text-yellow-400" />
              </motion.span>
              <span>{indicator}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  );
}
