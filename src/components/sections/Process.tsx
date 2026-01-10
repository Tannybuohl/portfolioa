"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
    title: "Proposal",
    description:
      "At Raji Dewebs, we start off with a proposal to understand your requirements and provide a quote. We ensure that you are satisfied with the proposal before we start working on your project.",
  },
  {
    number: "02",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
    title: "Design",
    description:
      "Starting with the different design options. We make sure that you are satisfied with the design before we start working on your project. Moreover, we don't proceed without your approval.",
  },
  {
    number: "03",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
    title: "Development",
    description:
      "After the design is approved, we start the development process. All the development is done by professional and any custom integration can be done during the development process.",
  },
  {
    number: "04",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      </svg>
    ),
    title: "Launch",
    description:
      "After the development is completed, we deploy the project on the server. We make sure that the project is deployed successfully and is running without any issues.",
  },
];

// Animated Zigzag Line Component - Desktop only
function ZigzagConnector() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-full -translate-x-1/2 lg:block"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 100 400"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Glow filter */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Background dashed line (static) */}
        <path
          d="M 50 0 
             C 50 25, 20 35, 20 50
             C 20 65, 80 85, 80 100
             C 80 115, 20 135, 20 150
             C 20 165, 80 185, 80 200
             C 80 215, 20 235, 20 250
             C 20 265, 80 285, 80 300
             C 80 315, 50 335, 50 350
             L 50 400"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="0.5"
          strokeDasharray="2 2"
          fill="none"
        />

        {/* Animated main line */}
        <motion.path
          d="M 50 0 
             C 50 25, 20 35, 20 50
             C 20 65, 80 85, 80 100
             C 80 115, 20 135, 20 150
             C 20 165, 80 185, 80 200
             C 80 215, 20 235, 20 250
             C 20 265, 80 285, 80 300
             C 80 315, 50 335, 50 350
             L 50 400"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          filter="url(#glow)"
          style={{ pathLength }}
          strokeLinecap="round"
        />

        {/* Step dots */}
        {[50, 150, 250, 350].map((y, i) => (
          <motion.g key={i} style={{ opacity: glowOpacity }}>
            {/* Outer glow ring */}
            <motion.circle
              cx={i % 2 === 0 ? 20 : 80}
              cy={y}
              r="6"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.5"
              opacity="0.3"
              animate={{
                r: [6, 10, 6],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
            {/* Inner dot */}
            <circle
              cx={i % 2 === 0 ? 20 : 80}
              cy={y}
              r="3"
              fill="#ffffff"
              filter="url(#glow)"
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

// Mobile Timeline Component
function MobileTimeline() {
  return (
    <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-white/50 via-white/30 to-transparent lg:hidden" />
  );
}

// Step indicator dot
function StepDot({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-yellow-400 bg-yellow-400 text-zinc-900 shadow-lg shadow-yellow-400/20"
    >
      <span className="text-sm font-bold">{String(index + 1).padStart(2, "0")}</span>
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-yellow-400"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.div>
  );
}

// Mobile Step Card
function MobileStepCard({ step, index }: { step: Step; index: number }) {
  const isLast = index === steps.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-4 lg:hidden"
    >
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center">
        <StepDot index={index} />
        {!isLast && (
          <div className="h-full w-px bg-gradient-to-b from-white/30 to-transparent" />
        )}
      </div>

      {/* Card */}
      <div className="group mb-8 flex-1 cursor-pointer rounded-2xl bg-zinc-900/80 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-yellow-400">
        {/* Step label */}
        <div className="mb-3 text-xs font-bold uppercase tracking-wider text-yellow-400 transition-colors duration-300 group-hover:text-zinc-900">
          Step {step.number}
        </div>

        {/* Icon */}
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-white transition-colors duration-300 group-hover:bg-zinc-900 group-hover:text-yellow-400">
          {step.icon}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-lg font-bold text-white transition-colors duration-300 group-hover:text-zinc-900">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-700">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

// Desktop Step Card
function DesktopStepCard({ step, index }: { step: Step; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative hidden items-center gap-8 lg:flex ${
        isEven ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* Card */}
      <div className="group w-5/12 cursor-pointer rounded-2xl bg-zinc-900/80 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-yellow-400">
        {/* Step number badge */}
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400 transition-all duration-300 group-hover:bg-zinc-900 group-hover:text-yellow-400">
            <span className="text-sm font-bold">{step.number}</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-yellow-400/50 to-transparent transition-all duration-300 group-hover:from-zinc-900/50" />
        </div>

        {/* Icon */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-white transition-colors duration-300 group-hover:bg-zinc-900 group-hover:text-yellow-400">
          {step.icon}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-zinc-900">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-700">
          {step.description}
        </p>
      </div>

      {/* Center connector dot */}
      <div className="flex w-2/12 items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
          className="relative z-20 flex h-14 w-14 items-center justify-center rounded-full border-2 border-yellow-400 bg-yellow-400 text-zinc-900 shadow-lg shadow-yellow-400/30"
        >
          <span className="text-base font-bold">{step.number}</span>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-yellow-400"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.6, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Step Number Display */}
      <div className="flex w-5/12 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
          className="text-center"
        >
          <span className="text-6xl font-black tracking-tight text-white lg:text-7xl">
            STEP {step.number}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Process() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-16 md:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-zinc-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-16 lg:mb-20"
        >
          {/* Badge */}
          <span className="mb-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800 px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-lg">
            Project Scope
          </span>

          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Our Complete Process
          </h2>
          <p className="mx-auto max-w-2xl text-base text-zinc-400 md:text-lg">
            This is our complete process for projects from start to finish with
            our team of experts.
          </p>
        </motion.div>

        {/* Zigzag Connector - Desktop only */}
        <div className="relative">
          <ZigzagConnector />

          {/* Desktop Steps */}
          <div className="relative z-10 space-y-16 lg:space-y-20">
            {steps.map((step, index) => (
              <DesktopStepCard key={step.number} step={step} index={index} />
            ))}
          </div>

          {/* Mobile Steps */}
          <div className="relative lg:hidden">
            {steps.map((step, index) => (
              <MobileStepCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
