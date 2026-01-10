"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import { MotionWrapper } from "@/components/animations";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function About() {
  return (
    <Section id="about" className="bg-zinc-950">
      <MotionWrapper variants={staggerContainer}>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div variants={staggerItem} className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge - Centered and Extra Bold */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center rounded-full border border-zinc-600 bg-zinc-800 px-8 py-4 text-xl font-black tracking-wider text-white shadow-xl uppercase">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Who We Are?
            </h2>

            {/* Bio Paragraphs */}
            <div className="space-y-5 text-zinc-400">
              <p>
                At Raji Dewebs, we help businesses grow through impactful design,
                creating seamless and enjoyable user experiences. We specialize in
                building high-converting websites that turn visitors into loyal customers.
              </p>
              <p>
                We are a team of passionate designers and developers who are
                committed to helping businesses grow through impactful design,
                creating seamless and enjoyable user experiences. Our focus is on
                delivering pixel-perfect, performance-optimized websites.
              </p>
              <p>
                Also we provide long term support to our clients. We are always
                available to help you with any issues or questions you may have.
                Email us at{" "}
                <span className="text-white">taiworajiiyanuoluwa@gmail.com</span> or drop
                us a message on Facebook (Raji Dewebs).
              </p>
            </div>

            {/* Skills & Technologies */}
            <div className="mt-8 space-y-6">
              {/* Skills */}
              <div>
                <h3 className="mb-3 text-lg font-semibold text-white">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "UI/UX Design",
                    "Web Development",
                    "Brand Identity",
                    "Responsive Design",
                    "Performance Optimization",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Figma",
                    "Framer Motion",
                    "Node.js",
                    "Vercel",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button - Centered */}
            <div className="flex justify-center lg:justify-start mt-8">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-10 py-4 text-lg font-bold text-zinc-900 transition-colors hover:bg-yellow-300 shadow-lg shadow-yellow-400/20"
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Full Profile Image */}
          <motion.div
            variants={staggerItem}
            className="order-1 lg:order-2"
          >
            <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden rounded-3xl">
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 p-[3px]">
                <div className="h-full w-full rounded-3xl bg-zinc-900 overflow-hidden">
                  {/* Profile Image - Full Coverage */}
                  <img
                    src="/profile.jpg"
                    alt="Raji Dewebs - Founder of Raji Dewebs"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-3 top-1/4 z-20 h-6 w-6 rounded-full bg-yellow-400 shadow-xl shadow-yellow-400/50"
              />
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-3 top-1/2 z-20 h-4 w-4 rounded-full bg-yellow-400/80 shadow-lg shadow-yellow-400/30"
              />
              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 -right-2 z-20 h-3 w-3 rounded-full bg-yellow-400/60"
              />

              {/* Glow effects */}
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-yellow-400/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </MotionWrapper>
    </Section>
  );
}

