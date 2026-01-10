"use client";

import { motion } from "framer-motion";

const negativePoints = [
  "Expensive paid plugins and themes",
  "Severely limited functionalities",
  "Frustratingly slow performance and speed",
  "Critical security issues and vulnerabilities",
  "Terrible SEO unfriendly and not optimized",
  "Bare minimum support and updates",
];

const positivePoints = [
  "Zero paid plugins and themes",
  "Unlimited advance functionalities",
  "Blazing 10x performance and speed",
  "Rock-solid security and protection",
  "Perfectly SEO optimized",
  "Lifetime updates and support",
];

function XIcon() {
  return (
    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-red-500 text-red-500">
      <svg
        className="h-3 w-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-900 text-zinc-900">
      <svg
        className="h-4 w-4 text-yellow-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  );
}

export function Comparison() {
  return (
    <section className="relative bg-zinc-950 py-16 md:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-16"
        >
          {/* Badge */}
          <span className="mb-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800 px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-lg">
            Problems
          </span>

          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Problems of Website Builder
          </h2>
          <p className="mx-auto max-w-3xl text-base text-zinc-400 md:text-lg">
            Many founders, startups, and agencies use website builders like
            Framer, Webflow, Wordpress, Shopify, etc. but they are not for you.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {/* Left Card - Negative (Website Builders) */}
          <div className="rounded-3xl bg-zinc-900/80 p-8 md:p-10">
            <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              Framer & Webflow
            </h3>
            <p className="mb-8 text-sm text-zinc-400 md:text-base">
              Website builders like Framer, Webflow, Wordpress, Shopify, Wix,
              Squarespace, etc. are not for you.
            </p>

            <ul className="space-y-5">
              {negativePoints.map((point, index) => (
                <li key={index} className="flex items-center gap-4">
                  <XIcon />
                  <span className="text-sm font-medium text-white md:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card - Positive (React & Next.js) */}
          <div className="rounded-3xl bg-yellow-400 p-8 md:p-10">
            <h3 className="mb-3 text-2xl font-bold text-zinc-900 md:text-3xl">
              React and Nextjs
            </h3>
            <p className="mb-8 text-sm text-zinc-700 md:text-base">
              React and Nextjs are the best option with the full control of the
              website and the best performance and speed.
            </p>

            <ul className="space-y-5">
              {positivePoints.map((point, index) => (
                <li key={index} className="flex items-center gap-4">
                  <CheckIcon />
                  <span className="text-sm font-medium text-zinc-900 md:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

