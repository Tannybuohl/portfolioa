"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/ui";
import { staggerContainer, staggerItem } from "@/lib/animations";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Completed",
    description: "Successfully delivered websites",
  },
  {
    value: 30,
    suffix: "+",
    label: "Happy Clients",
    description: "From startups to enterprises",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "Building digital experiences",
  },
  {
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    description: "5-star reviews & testimonials",
  },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-transparent to-zinc-900/50" />

      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 100px,
              rgba(250, 204, 21, 0.1) 100px,
              rgba(250, 204, 21, 0.1) 101px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group relative text-center"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-yellow-400/0 blur-xl transition-all duration-500 group-hover:bg-yellow-400/10" />

              <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/30 hover:bg-zinc-900/80">
                {/* Number */}
                <div className="mb-2 text-5xl font-bold text-yellow-400 md:text-6xl">
                  <Counter
                    to={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>

                {/* Label */}
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400">{stat.description}</p>

                {/* Decorative corner */}
                <div className="absolute right-4 top-4 h-8 w-8 opacity-20">
                  <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-yellow-400 to-transparent" />
                  <div className="absolute right-0 top-0 h-px w-full bg-gradient-to-l from-yellow-400 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

