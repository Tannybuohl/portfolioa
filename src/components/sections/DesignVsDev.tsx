"use client";

import { motion } from "framer-motion";

const designPoints = [
  "Visual Mockups in Figma/Adobe XD",
  "UI/UX Layout & Structure",
  "Color Schemes & Typography",
  "Design Assets & Icons",
];

const devPoints = [
  "Fully Functional Website",
  "Interactive Elements",
  "Backend Integration",
  "Responsive & Optimized Code",
];

function CheckIcon({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${
        dark ? "bg-zinc-800 text-white" : "bg-zinc-200 text-zinc-900"
      }`}
    >
      <svg
        className="h-3.5 w-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2.5"
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

export function DesignVsDev() {
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
            Understanding the Difference
          </span>

          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Design vs Development
          </h2>
          <p className="mx-auto max-w-2xl text-base text-zinc-400 md:text-lg">
            Many people confuse website design with full development. Let&apos;s
            clarify the key differences.
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
          {/* Left Card - Website Design (Dark) */}
          <div className="rounded-3xl bg-zinc-900/80 p-8 md:p-10">
            <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">
              Website Design
            </h3>
            <p className="mb-6 text-sm text-zinc-400 md:text-base">
              Static visual mockups and layouts
            </p>

            {/* Divider */}
            <div className="mb-6 h-px bg-zinc-800" />

            {/* Points */}
            <ul className="mb-8 space-y-4">
              {designPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-4">
                  <CheckIcon dark />
                  <span className="text-sm font-medium text-white md:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Note Box */}
            <div className="rounded-xl bg-zinc-800/60 p-4">
              <p className="text-sm text-zinc-400">
                <span className="font-semibold text-white">Important:</span>{" "}
                Design files are static images. They cannot be published as a
                live website.
              </p>
            </div>
          </div>

          {/* Right Card - Website Development (White with Yellow Hover) */}
          <div className="group cursor-pointer rounded-3xl bg-white p-8 transition-all duration-300 hover:bg-yellow-400 md:p-10">
            <h3 className="mb-2 text-2xl font-bold text-zinc-900 md:text-3xl">
              Website Development
            </h3>
            <p className="mb-6 text-sm text-zinc-600 transition-colors duration-300 group-hover:text-zinc-800 md:text-base">
              Live, functional, and interactive code
            </p>

            {/* Divider */}
            <div className="mb-6 h-px bg-zinc-200 transition-colors duration-300 group-hover:bg-zinc-400" />

            {/* Points */}
            <ul className="mb-8 space-y-4">
              {devPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-200 text-zinc-900 transition-colors duration-300 group-hover:bg-zinc-900 group-hover:text-yellow-400">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-zinc-900 md:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Note Box */}
            <div className="rounded-xl bg-zinc-100 p-4 transition-colors duration-300 group-hover:bg-zinc-900/20">
              <p className="text-sm text-zinc-600 transition-colors duration-300 group-hover:text-zinc-900">
                <span className="font-semibold text-zinc-900">
                  Key Benefit:
                </span>{" "}
                Development brings designs to life. You get a real website you
                can launch and share with the world.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center md:mt-16"
        >
          <p className="mx-auto max-w-3xl text-base text-zinc-400 md:text-lg">
            <span className="font-semibold text-white">Design</span> is like an
            architectural blueprint, it shows you what the building will look
            like.{" "}
            <span className="font-semibold text-white">Development</span> is the
            actual construction, building the structure so people can walk in
            and use it.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-400 md:text-lg">
            Most of our packages include{" "}
            <span className="font-semibold text-white">
              both design and development
            </span>
            , giving you a complete, live website ready to launch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

