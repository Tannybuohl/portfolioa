"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { TiltCard } from "@/components/ui";

// Web Design Icon - Pen tool / design
function WebDesignIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

// Web Development Icon - Code brackets
function WebDevIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  );
}

// UX/UI Icon - Layout with cursor
function UXUIIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
      <path d="M14 15l2 2 4-4" />
    </svg>
  );
}

// Brand Identity Icon - Palette/diamond
function BrandIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="10.5" r="2.5" />
      <circle cx="8.5" cy="7.5" r="2.5" />
      <circle cx="6.5" cy="12.5" r="2.5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: WebDesignIcon,
    title: "Web Design",
    description:
      "Beautiful, conversion-focused designs that capture your brand essence and engage your audience from the first click. Every pixel is crafted with purpose.",
  },
  {
    icon: WebDevIcon,
    title: "Web Development",
    description:
      "Clean, performant code using Next.js 15 and React. Fast loading, SEO optimized, and built to scale with your business needs.",
  },
  {
    icon: UXUIIcon,
    title: "UX/UI Design",
    description:
      "User-centered design that balances aesthetics with functionality. Intuitive interfaces that users love to interact with.",
  },
  {
    icon: BrandIcon,
    title: "Brand Identity",
    description:
      "Cohesive visual identity systems that tell your story. From logos to color palettes, we craft memorable brand experiences.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-black py-16 md:py-20">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
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
            Our Services
          </span>

          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            A Breakdown of What We Do
          </h2>
          <p className="mx-auto max-w-2xl text-base text-zinc-400 md:text-lg">
            Services that are built to last, with the latest technology. Get the
            world-class designs, faster.
          </p>
        </motion.div>

        {/* Services Grid - 2 columns on larger screens */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-5 md:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              className="group"
            >
              <TiltCard className="h-full" tiltAmount={8} glareEnabled>
                <div className="relative h-full overflow-hidden rounded-2xl bg-zinc-900 p-6 transition-all duration-500 hover:bg-zinc-800/80 md:p-8">
                  {/* Gradient overlay on hover */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent" />
                  </div>

                  {/* Border glow on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-yellow-400/20 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 transition-all duration-300 group-hover:bg-yellow-400/20"
                    >
                      <service.icon className="h-6 w-6 text-yellow-400" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400 md:text-2xl">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
                      {service.description}
                    </p>

                    {/* Learn more link */}
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-zinc-500 transition-all duration-300 group-hover:text-yellow-400">
                      <span>Learn more</span>
                      <motion.svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        whileHover={{ x: 5 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </motion.svg>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
