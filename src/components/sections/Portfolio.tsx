"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { TiltCard } from "@/components/ui";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Elijah",
    category: "Portfolio",
    image: "/projects/project-1.jpg",
  },
  {
    id: "2",
    title: "Serenity",
    category: "Travel & Booking",
    image: "/projects/project-2.jpg",
  },
  {
    id: "3",
    title: "Creatively",
    category: "Architecture",
    image: "/projects/project-3.jpg",
  },
  {
    id: "4",
    title: "Precision Welding",
    category: "Automotive",
    image: "/projects/project-4.jpg",
  },
  {
    id: "5",
    title: "Peak Skiing",
    category: "Sports & Coaching",
    image: "/projects/project-5.jpg",
  },
  {
    id: "6",
    title: "Modern Living",
    category: "Real Estate",
    image: "/projects/project-6.jpg",
  },
  {
    id: "7",
    title: "Chrono",
    category: "Luxury Watches",
    image: "/projects/project-7.jpg",
  },
  {
    id: "8",
    title: "Roasty Aroma",
    category: "Coffee & Bakery",
    image: "/projects/project-8.jpg",
  },
  {
    id: "9",
    title: "Step In Style",
    category: "Fashion & Sneakers",
    image: "/projects/project-9.jpg",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div variants={staggerItem} className="group">
      <TiltCard className="overflow-hidden rounded-xl" tiltAmount={6} glareEnabled>
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900">
          {/* Project Image */}
          {!imageError ? (
            <motion.div
              className="h-full w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                quality={95}
                className="object-cover object-top transition-all duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onError={() => setImageError(true)}
              />
            </motion.div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-zinc-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="mt-2 text-xs text-zinc-600">Add image</p>
              </div>
            </div>
          )}

          {/* Hover overlay with gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </TiltCard>

      {/* Project Info */}
      <motion.div
        className="mt-3 px-1"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {/* Category Tag */}
        <span className="inline-block rounded-full bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-400 transition-colors duration-300 group-hover:bg-yellow-400/20 group-hover:text-yellow-400">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="mt-2 text-base font-bold text-white transition-colors duration-300 group-hover:text-yellow-400 md:text-lg">
          {project.title}
        </h3>
      </motion.div>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section id="work" className="relative bg-black py-16 md:py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            Our Work
          </span>

          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-base text-zinc-400 md:text-lg">
            A showcase of our recent work. Each project represents our
            commitment to quality, creativity, and results.
          </p>
        </motion.div>

        {/* Projects Grid - 3 columns */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
