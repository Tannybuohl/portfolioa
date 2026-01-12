"use client";

import { motion } from "framer-motion";

// Platform logos as SVG components for crisp rendering
const logos = [
  {
    name: "Fiverr",
    svg: (
      <svg viewBox="0 0 89 27" fill="currentColor" className="h-6 w-auto md:h-8">
        <path d="M81.6 7.4c-1.1 0-1.9.5-2.4 1.2V7.7h-3v13.5h3.1v-7.6c0-1.5.8-2.2 2-2.2.5 0 1 .1 1.4.2l.5-3c-.4-.1-.9-.2-1.6-.2zm-8.1 0c-1.1 0-1.9.5-2.4 1.2V7.7h-3v13.5h3.1v-7.6c0-1.5.8-2.2 2-2.2.5 0 1 .1 1.4.2l.5-3c-.4-.1-.9-.2-1.6-.2zm-13.2 0c-3.1 0-5.5 2.3-5.5 7s2.4 7 5.5 7c1.6 0 2.9-.6 3.7-1.6v1.3h3V7.7h-3v1.3c-.8-1-2.1-1.6-3.7-1.6zm.6 11c-1.6 0-2.8-1.2-2.8-4s1.2-4 2.8-4c1.6 0 2.8 1.2 2.8 4s-1.2 4-2.8 4zm-11.9-11c-3.4 0-5.9 2.5-5.9 7s2.5 7 6.1 7c2.4 0 4.3-1.1 5.3-3l-2.6-1.4c-.5.9-1.4 1.5-2.6 1.5-1.6 0-2.8-.9-3-2.8h8.5c.1-.5.1-.9.1-1.3 0-4.3-2.3-7-5.9-7zm-2.7 5.5c.2-1.7 1.3-2.7 2.7-2.7 1.5 0 2.5 1 2.6 2.7h-5.3zm-9.4-5.5c-1.9 0-3.4.9-4.2 2.4V7.7h-3.2v13.5h3.2v-8c0-1.5 1.1-2.4 2.5-2.4 1.4 0 2.3.8 2.3 2.4v8h3.2v-8.8c0-3-1.8-5-4.8-5zm-12.5 0c-3.5 0-5.9 2.5-5.9 7s2.4 7 5.9 7c3.5 0 5.9-2.5 5.9-7s-2.4-7-5.9-7zm0 11c-1.6 0-2.8-1.2-2.8-4s1.2-4 2.8-4c1.6 0 2.8 1.2 2.8 4s-1.2 4-2.8 4zM18.4 7.7h-3.2v13.5h3.2V7.7zm-1.6-6.3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM12.1 7.7H8.9v13.5h3.2v-6.8h3.5V11.5h-3.5V7.7zm-4.5 5.7H4.1v-3.2c0-1.1.5-1.5 1.5-1.5h1.1V5.4H5.2C2.3 5.4 0 6.9 0 10.1v11.1h3.6v-7.8h3.5l.5-2.7z" />
      </svg>
    ),
  },
  {
    name: "Upwork",
    svg: (
      <svg viewBox="0 0 102 30" fill="currentColor" className="h-6 w-auto md:h-8">
        <path d="M37.2 16.5c-.8-2.1-2.1-5.2-2.1-5.2S35 13.4 35 16v7.7h-3.2V7.2h3.1l4.5 10.3 4.5-10.3h3.1v16.5h-3.2V16c0-2.6-.1-4.7-.1-4.7s-1.3 3.1-2.1 5.2l-2.2 5.2h-2.4l-2.2-5.2h.4zm-17.9 0c0 3 2.4 5.4 5.4 5.4 2.1 0 3.4-1.1 4.1-2l2.2 1.8c-1.3 1.7-3.5 3-6.3 3-4.8 0-8.6-3.6-8.6-8.2s3.8-8.2 8.6-8.2c4.3 0 7.7 3.2 7.7 8.2v1.5H22.7c.2 2.8 2.3 5 5.2 5 1.8 0 3.3-.8 4.2-2l2 1.6c-1.5 1.8-3.8 3-6.4 3-4.8 0-8.4-3.6-8.4-8.1zm8.4-5.5c-2.7 0-4.8 2-5.1 4.6h10c-.2-2.6-2.2-4.6-4.9-4.6zm45.4 5.5c0 4.6 3.7 8.2 8.5 8.2 3.6 0 5.6-1.6 6.8-3.5l-2.5-1.4c-.8 1.4-2.4 2.3-4.3 2.3-3 0-5.3-2.4-5.3-5.5s2.3-5.5 5.3-5.5c1.9 0 3.4.9 4.3 2.3l2.5-1.4c-1.2-1.9-3.2-3.5-6.8-3.5-4.8-.1-8.5 3.5-8.5 8zm-7.3-8.2c-4.8 0-8.5 3.6-8.5 8.2s3.7 8.2 8.5 8.2c4.8 0 8.5-3.6 8.5-8.2s-3.7-8.2-8.5-8.2zm0 13.6c-3 0-5.3-2.4-5.3-5.4s2.3-5.4 5.3-5.4 5.3 2.4 5.3 5.4-2.3 5.4-5.3 5.4zM97.4 23.7l-5.6-16.5h3.5l3.8 12.1 3.8-12.1H102l-5.6 16.5h-2.4zM0 7.2h3.4v9.3c0 2.2 1.3 3.5 3.2 3.5 1.9 0 3.2-1.3 3.2-3.5V7.2h3.4v9.5c0 4-2.8 6.9-6.6 6.9S0 20.8 0 16.7V7.2z" />
      </svg>
    ),
  },
  {
    name: "Kwork",
    svg: (
      <svg viewBox="0 0 100 30" fill="currentColor" className="h-6 w-auto md:h-8">
        <text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold">Kwork</text>
      </svg>
    ),
  },
  {
    name: "PayPal",
    svg: (
      <svg viewBox="0 0 100 24" fill="currentColor" className="h-6 w-auto md:h-8">
        <path d="M13.4 4.6H6.8c-.4 0-.8.3-.9.7L3.5 20.6c-.1.3.2.6.5.6h3.2c.4 0 .8-.3.9-.7l.6-4.1c.1-.4.4-.7.9-.7h2c4.2 0 6.6-2 7.2-6 .3-1.7 0-3.1-.8-4.1-.9-1-2.6-1.5-4.6-1.5zm.7 5.9c-.3 2.3-2.1 2.3-3.8 2.3h-1l.7-4.3c0-.2.2-.4.5-.4h.5c1.2 0 2.3 0 2.8.7.4.4.5 1 .3 1.7zm18.1-.1h-3.2c-.2 0-.4.2-.5.4l-.1.8-.2-.3c-.6-.9-2-1.2-3.4-1.2-3.2 0-5.9 2.4-6.4 5.8-.3 1.7.1 3.3 1.1 4.4.9 1 2.2 1.4 3.7 1.4 2.6 0 4.1-1.7 4.1-1.7l-.1.8c-.1.3.2.6.5.6h2.9c.4 0 .8-.3.9-.7l1.7-10.7c.1-.3-.2-.6-.5-.6zm-4.1 5.6c-.3 1.6-1.5 2.7-3.2 2.7-.8 0-1.5-.3-1.9-.8-.4-.5-.6-1.2-.4-2 .2-1.6 1.5-2.8 3.1-2.8.8 0 1.5.3 1.9.8.5.5.6 1.3.5 2.1zm20.4-5.6h-3.2c-.3 0-.5.1-.7.3l-3.8 5.6-1.6-5.4c-.1-.4-.5-.6-.9-.6h-3.2c-.4 0-.6.4-.5.7l3.1 9-2.9 4.1c-.3.4 0 .9.4.9h3.2c.3 0 .5-.1.7-.3l9.2-13.3c.2-.5-.1-1-.4-1h.6z" />
        <path d="M61.7 4.6h-6.6c-.4 0-.8.3-.9.7l-2.4 15.3c-.1.3.2.6.5.6h3.4c.3 0 .5-.2.6-.5l.7-4.3c.1-.4.4-.7.9-.7h2c4.2 0 6.6-2 7.2-6 .3-1.7 0-3.1-.8-4.1-.9-1-2.5-1.5-4.6-1zm.8 5.9c-.3 2.3-2.1 2.3-3.8 2.3h-1l.7-4.3c0-.2.2-.4.5-.4h.5c1.2 0 2.3 0 2.8.7.3.4.4 1 .3 1.7zm18-.1h-3.2c-.2 0-.4.2-.5.4l-.1.8-.2-.3c-.6-.9-2-1.2-3.4-1.2-3.2 0-5.9 2.4-6.4 5.8-.3 1.7.1 3.3 1.1 4.4.9 1 2.2 1.4 3.7 1.4 2.6 0 4.1-1.7 4.1-1.7l-.1.8c-.1.3.2.6.5.6h2.9c.4 0 .8-.3.9-.7l1.7-10.7c.1-.3-.1-.6-.5-.6zm-4 5.6c-.3 1.6-1.5 2.7-3.2 2.7-.8 0-1.5-.3-1.9-.8-.4-.5-.6-1.2-.4-2 .2-1.6 1.5-2.8 3.1-2.8.8 0 1.5.3 1.9.8.5.5.6 1.3.5 2.1zm8.6-11.4l-2.5 15.7c-.1.3.2.6.5.6h2.8c.4 0 .8-.3.9-.7l2.4-15.3c.1-.3-.2-.6-.5-.6h-3.1c-.2 0-.4.1-.5.3z" />
      </svg>
    ),
  },
  {
    name: "Skrill",
    svg: (
      <svg viewBox="0 0 80 24" fill="currentColor" className="h-6 w-auto md:h-8">
        <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">Skrill</text>
      </svg>
    ),
  },
  {
    name: "Grey",
    svg: (
      <svg viewBox="0 0 80 24" fill="currentColor" className="h-6 w-auto md:h-8">
        <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">Grey</text>
      </svg>
    ),
  },
  {
    name: "Bybit",
    svg: (
      <svg viewBox="0 0 80 24" fill="currentColor" className="h-6 w-auto md:h-8">
        <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">Bybit</text>
      </svg>
    ),
  },
  {
    name: "Wise",
    svg: (
      <svg viewBox="0 0 80 24" fill="currentColor" className="h-6 w-auto md:h-8">
        <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">Wise</text>
      </svg>
    ),
  },
  {
    name: "Payoneer",
    svg: (
      <svg viewBox="0 0 100 24" fill="currentColor" className="h-6 w-auto md:h-8">
        <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">Payoneer</text>
      </svg>
    ),
  },
  {
    name: "Freelancer",
    svg: (
      <svg viewBox="0 0 110 24" fill="currentColor" className="h-6 w-auto md:h-8">
        <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">Freelancer</text>
      </svg>
    ),
  },
  {
    name: "Dribbble",
    svg: (
      <svg viewBox="0 0 100 24" fill="currentColor" className="h-6 w-auto md:h-8">
        <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">Dribbble</text>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    svg: (
      <svg viewBox="0 0 100 24" fill="currentColor" className="h-6 w-auto md:h-8">
        <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">LinkedIn</text>
      </svg>
    ),
  },
];

export function TrustedBy() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-12 md:py-16">
      {/* Background gradient */}
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
          className="mb-10 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            Trusted By
          </span>
        </motion.div>

        {/* Infinite scrolling logos */}
        <div className="relative">
          {/* Gradient masks for smooth fade effect */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-zinc-950 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-zinc-950 to-transparent" />

          {/* Scrolling container */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex shrink-0 items-center gap-12 md:gap-16"
              animate={{
                x: [0, -1400],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center justify-center text-zinc-500 opacity-60 transition-opacity hover:opacity-100"
                  title={logo.name}
                >
                  {logo.svg}
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center justify-center text-zinc-500 opacity-60 transition-opacity hover:opacity-100"
                  title={logo.name}
                >
                  {logo.svg}
                </div>
              ))}
              {/* Third set for extra seamlessness */}
              {logos.map((logo, index) => (
                <div
                  key={`third-${index}`}
                  className="flex items-center justify-center text-zinc-500 opacity-60 transition-opacity hover:opacity-100"
                  title={logo.name}
                >
                  {logo.svg}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

