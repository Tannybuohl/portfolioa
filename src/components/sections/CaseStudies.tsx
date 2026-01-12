"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Image component with loading state
function ProjectImage({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <>
      {/* Loading skeleton */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-zinc-800 to-zinc-900">
          <div className="flex h-full items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-yellow-400 border-t-transparent" />
          </div>
        </div>
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
          <div className="text-center">
            <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-700/50">
              <svg
                className="h-8 w-8 text-zinc-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-sm text-zinc-500">Image unavailable</p>
          </div>
        </div>
      )}

      {/* Actual image */}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        unoptimized
        className={`object-cover transition-all duration-500 ${
          isLoading ? "scale-110 opacity-0 blur-sm" : "scale-100 opacity-100 blur-0"
        } ${className}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </>
  );
}

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  image: string;
  results: {
    metric: string;
    value: string;
    label: string;
  }[];
  technologies: string[];
  clientName?: string;
  duration?: string;
  year?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "E-Commerce Platform Redesign",
    category: "Web Development",
    description:
      "Complete redesign and development of an e-commerce platform with focus on conversion optimization.",
    fullDescription:
      "We completely redesigned and developed a modern e-commerce platform for a retail client. The project focused on improving user experience, optimizing for conversions, and building a scalable architecture that could handle high traffic during sales events.",
    challenge:
      "The client's existing website was outdated, slow, and had a high cart abandonment rate. Mobile users struggled with the checkout process, leading to lost sales.",
    solution:
      "We built a lightning-fast Next.js e-commerce platform with a streamlined checkout process, real-time inventory updates, and a mobile-first design. Implemented Stripe for secure payments and added personalized product recommendations.",
    image: "/projects/project-1.jpg",
    results: [
      { metric: "150%", value: "150", label: "Sales Increase" },
      { metric: "40%", value: "40", label: "Faster Load" },
      { metric: "3x", value: "3", label: "Conversions" },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    clientName: "RetailCo",
    duration: "8 weeks",
    year: "2024",
  },
  {
    id: "2",
    title: "SaaS Dashboard Interface",
    category: "Web Development",
    description:
      "Designed and developed a comprehensive dashboard for a SaaS analytics platform.",
    fullDescription:
      "Created an intuitive and powerful analytics dashboard for a B2B SaaS company. The dashboard features real-time data visualization, customizable widgets, and an easy-to-navigate interface that helps users make data-driven decisions.",
    challenge:
      "Users found the existing dashboard confusing and overwhelming. Key metrics were buried in complex menus, leading to low feature adoption and high churn.",
    solution:
      "We redesigned the entire dashboard with a focus on clarity and usability. Implemented D3.js for beautiful, interactive charts and added a customizable layout so users could prioritize the metrics that matter most to them.",
    image: "/projects/project-2.jpg",
    results: [
      { metric: "85%", value: "85", label: "Satisfaction" },
      { metric: "60%", value: "60", label: "Less Churn" },
      { metric: "2x", value: "2", label: "Adoption" },
    ],
    technologies: ["React", "D3.js", "Framer Motion", "Node.js"],
    clientName: "AnalyticsPro",
    duration: "10 weeks",
    year: "2024",
  },
  {
    id: "3",
    title: "Fintech Web Application",
    category: "Web Development",
    description:
      "Built a secure fintech web application with seamless payment integration.",
    fullDescription:
      "Developed a comprehensive fintech web application that allows users to manage their finances, send money, and track transactions in real-time. The app prioritizes security while maintaining an excellent user experience.",
    challenge:
      "The client needed a secure, compliant financial application that could handle sensitive user data while providing a smooth, intuitive experience across all devices.",
    solution:
      "Built a secure web application with bank-level encryption, real-time transaction tracking, and seamless integration with multiple payment providers. Implemented robust authentication and compliance with financial regulations.",
    image: "/projects/project-3.jpg",
    results: [
      { metric: "50K+", value: "50000", label: "Users" },
      { metric: "99.9%", value: "99.9", label: "Uptime" },
      { metric: "4.8★", value: "4.8", label: "Rating" },
    ],
    technologies: ["React", "Node.js", "Plaid API", "AWS"],
    clientName: "FinanceFlow",
    duration: "12 weeks",
    year: "2024",
  },
  {
    id: "4",
    title: "Event Booking Mobile App",
    category: "App Development",
    description:
      "Cross-platform mobile app for discovering, booking, and managing events with real-time updates.",
    fullDescription:
      "Developed a comprehensive event booking mobile application that allows users to discover local events, book tickets, manage favorites, and stay organized with an integrated calendar. The app features a modern coral/red theme with intuitive navigation.",
    challenge:
      "Users needed a seamless way to discover events, book tickets, and manage their event calendar all in one place. Existing solutions were fragmented and lacked a cohesive experience.",
    solution:
      "Built a cross-platform mobile app with React Native featuring event discovery with smart filters, real-time availability updates, secure payment integration, favorites management, and a calendar view for tracking upcoming events.",
    image: "/project-4.jpg",
    results: [
      { metric: "75K+", value: "75000", label: "Downloads" },
      { metric: "4.8★", value: "4.8", label: "App Rating" },
      { metric: "92%", value: "92", label: "Retention" },
    ],
    technologies: ["React Native", "Firebase", "Stripe", "Node.js"],
    clientName: "EventHub",
    duration: "14 weeks",
    year: "2024",
  },
  {
    id: "5",
    title: "Food Delivery Mobile App",
    category: "App Development",
    description:
      "Cross-platform mobile app for food ordering and delivery with real-time tracking.",
    fullDescription:
      "Developed a full-featured food delivery mobile application that helps users discover restaurants, browse menus, and order their favorite meals with real-time delivery tracking.",
    challenge:
      "Users needed a fast, reliable food ordering app with seamless payment integration and real-time order tracking across iOS and Android platforms.",
    solution:
      "Built a cross-platform app with React Native featuring restaurant discovery, smart search filters, easy cart management, secure payments, and live GPS tracking for deliveries.",
    image: "/project-5.jpg",
    results: [
      { metric: "45%", value: "45", label: "More Orders" },
      { metric: "4.9★", value: "4.9", label: "App Rating" },
      { metric: "70%", value: "70", label: "Reorder Rate" },
    ],
    technologies: ["React Native", "Firebase", "Stripe", "Google Maps API"],
    clientName: "FoodieHub",
    duration: "10 weeks",
    year: "2024",
  },
  {
    id: "6",
    title: "Travel Booking Mobile App",
    category: "App Development",
    description:
      "Cross-platform travel booking app for discovering destinations and booking trips.",
    fullDescription:
      "Developed a comprehensive travel booking mobile application that allows users to discover destinations, compare prices, book flights and hotels, and manage their itineraries all in one place.",
    challenge:
      "Travelers needed a unified app to search, compare, and book travel options without switching between multiple platforms.",
    solution:
      "Built a cross-platform mobile app with React Native featuring destination discovery, price comparison, secure booking, itinerary management, and offline access to travel documents.",
    image: "/project-6.jpg",
    results: [
      { metric: "100K+", value: "100000", label: "Downloads" },
      { metric: "3x", value: "3", label: "Bookings" },
      { metric: "4.9★", value: "4.9", label: "App Rating" },
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
    clientName: "TravelEase",
    duration: "12 weeks",
    year: "2024",
  },
  {
    id: "7",
    title: "Furniture E-commerce Website",
    category: "UI/UX Design",
    description:
      "Modern website design for a furniture brand with elegant product showcases and clean aesthetics.",
    fullDescription:
      "Designed a stunning e-commerce website for a premium furniture brand. The design focuses on showcasing products beautifully with a clean, minimalist aesthetic that lets the furniture speak for itself.",
    challenge:
      "The client needed a website that would elevate their brand perception and showcase their furniture collection in an elegant, inspiring way that drives sales.",
    solution:
      "Created a visually stunning design with large product imagery, warm orange accents, clean typography, and intuitive navigation. The layout guides users through the collection with strategic product highlighting.",
    image: "/project-7.jpg",
    results: [
      { metric: "80%", value: "80", label: "More Engagement" },
      { metric: "4.9★", value: "4.9", label: "Client Rating" },
      { metric: "2x", value: "2", label: "Conversions" },
    ],
    technologies: ["Figma", "Adobe XD", "Photoshop", "Prototyping"],
    clientName: "FurnitureCo",
    duration: "5 weeks",
    year: "2024",
  },
  {
    id: "8",
    title: "Furniture Shopping App UI",
    category: "UI/UX Design",
    description:
      "Elegant mobile app design for furniture shopping with modern green aesthetics and seamless browsing.",
    fullDescription:
      "Designed a beautiful furniture shopping mobile app with a sophisticated sage green color palette. The design features product browsing, category filters, deals showcase, and detailed product pages with an elegant, premium feel.",
    challenge:
      "The client needed a mobile shopping experience that felt luxurious and made browsing furniture as enjoyable as visiting a showroom.",
    solution:
      "Created an elegant app design with soft green tones, beautiful product photography integration, intuitive category navigation, and a seamless checkout flow that elevates the shopping experience.",
    image: "/project-8.jpg",
    results: [
      { metric: "85%", value: "85", label: "User Engagement" },
      { metric: "4.9★", value: "4.9", label: "Design Rating" },
      { metric: "60%", value: "60", label: "Add to Cart" },
    ],
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    clientName: "InteriorHub",
    duration: "5 weeks",
    year: "2024",
  },
  {
    id: "9",
    title: "Podcast Player App UI",
    category: "UI/UX Design",
    description:
      "Modern podcast app design with immersive audio player and sleek dark theme interface.",
    fullDescription:
      "Designed a stunning podcast player app featuring 'The Becoming Journey' - a personal growth podcast. The dark navy blue theme with vibrant yellow accents creates an immersive listening experience with beautiful audio visualization.",
    challenge:
      "The client needed a podcast app design that felt personal and engaging, with focus on the listening experience and easy episode navigation.",
    solution:
      "Created an immersive dark-themed interface with dynamic audio waveforms, intuitive playback controls, episode queuing, and a clean navigation structure that puts the content first.",
    image: "/project-9.jpg",
    results: [
      { metric: "90%", value: "90", label: "User Retention" },
      { metric: "4.9★", value: "4.9", label: "Design Rating" },
      { metric: "3x", value: "3", label: "Listen Time" },
    ],
    technologies: ["Figma", "Prototyping", "Animation", "User Testing"],
    clientName: "AudioWave",
    duration: "4 weeks",
    year: "2024",
  },
];

const categories = ["All", "Web Development", "UI/UX Design", "App Development"];

// Premium Case Study Modal
function CaseStudyModal({
  study,
  isOpen,
  onClose,
}: {
  study: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!study) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="flex min-h-full items-start justify-center p-4 pt-16 md:p-8 md:pt-20">
              <div className="relative w-full max-w-5xl">
                {/* Close Button - Fixed Position */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.2 }}
                  onClick={onClose}
                  className="fixed right-6 top-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 md:right-10 md:top-10"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Hero Image Section */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="relative aspect-[16/9] w-full overflow-hidden rounded-t-3xl bg-zinc-900"
                >
                  <ProjectImage
                    src={study.image}
                    alt={study.title}
                    priority={true}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  
                  {/* Category & Year */}
                  <div className="absolute left-6 top-6 flex gap-3">
                    <span className="rounded-full bg-yellow-400 px-4 py-1.5 text-sm font-bold text-zinc-900">
                      {study.category}
                    </span>
                    {study.year && (
                      <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
                        {study.year}
                      </span>
                    )}
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-3xl font-bold text-white md:text-4xl lg:text-5xl"
                    >
                      {study.title}
                    </motion.h2>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-3 flex flex-wrap items-center gap-4 text-sm text-zinc-300"
                    >
                      {study.clientName && (
                        <span className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-yellow-400" />
                          {study.clientName}
                        </span>
                      )}
                      {study.duration && (
                        <span className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-yellow-400" />
                          {study.duration}
                        </span>
                      )}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="rounded-b-3xl bg-zinc-900 p-6 md:p-10">
                  {/* Results Bar */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-10 grid grid-cols-3 gap-4 rounded-2xl bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-transparent p-6 md:gap-8 md:p-8"
                  >
                    {study.results.map((result, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-2xl font-black text-yellow-400 md:text-4xl">
                          {result.metric}
                        </div>
                        <div className="mt-1 text-xs font-medium text-zinc-400 md:text-sm">
                          {result.label}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Content Grid */}
                  <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                    {/* Left Column */}
                    <div className="space-y-8">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-white">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                          Overview
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">{study.fullDescription}</p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-white">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-400/10 text-red-400">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </span>
                          The Challenge
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">{study.challenge}</p>
                      </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h3 className="mb-3 flex items-center gap-3 text-lg font-bold text-white">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-400/10 text-green-400">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </span>
                          Our Solution
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">{study.solution}</p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <h3 className="mb-4 flex items-center gap-3 text-lg font-bold text-white">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-400/10 text-blue-400">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </span>
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.8 + i * 0.05 }}
                              className="rounded-full border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-sm font-medium text-zinc-300"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mt-10 flex flex-col gap-4 border-t border-zinc-800 pt-8 sm:flex-row"
                  >
                    <a
                      href="#contact"
                      onClick={onClose}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-4 font-bold text-zinc-900 transition-all hover:bg-yellow-300 hover:gap-4"
                    >
                      Start Your Project
                      <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <button
                      onClick={onClose}
                      className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 px-8 py-4 font-semibold text-white transition-all hover:bg-zinc-700"
                    >
                      Close
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Premium Case Study Card
function CaseStudyCard({
  study,
  index,
  onClick,
}: {
  study: CaseStudy;
  index: number;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="relative cursor-pointer overflow-hidden rounded-3xl bg-zinc-900 shadow-xl transition-shadow hover:shadow-2xl hover:shadow-yellow-400/5"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
            className="h-full w-full"
          >
            <ProjectImage src={study.image} alt={study.title} />
          </motion.div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-60" />
          
          {/* Category */}
          <div className="absolute left-4 top-4 z-10">
            <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-zinc-900">
              {study.category}
            </span>
          </div>

          {/* Hover Overlay */}
          <motion.div
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-zinc-950/80 backdrop-blur-sm"
          >
            <motion.div
              initial={false}
              animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-zinc-900">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">View Project</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative p-6">
          {/* Title */}
          <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-yellow-400">
            {study.title}
          </h3>
          
          {/* Description */}
          <p className="mb-5 text-sm text-zinc-400 line-clamp-2">
            {study.description}
          </p>

          {/* Results */}
          <div className="mb-5 flex items-center justify-between border-t border-zinc-800 pt-5">
            {study.results.slice(0, 3).map((result, i) => (
              <div key={i} className="text-center">
                <div className="text-lg font-bold text-yellow-400">{result.metric}</div>
                <div className="text-xs text-zinc-500">{result.label}</div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {study.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400"
              >
                {tech}
              </span>
            ))}
            {study.technologies.length > 3 && (
              <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-500">
                +{study.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-yellow-400 to-orange-500"
        />
      </motion.div>
    </motion.div>
  );
}

export function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredStudies =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeCategory);

  const handleOpenModal = (study: CaseStudy) => {
    setSelectedStudy(study);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section id="case-studies" className="relative overflow-hidden bg-zinc-950 py-20 md:py-32">
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black" />
          <div className="absolute right-0 top-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/2 rounded-full bg-yellow-400/5 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/2 -translate-x-1/2 rounded-full bg-yellow-400/5 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center md:mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-2 text-sm font-semibold text-yellow-400"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
              Case Studies
            </motion.span>

            <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Our Recent{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Work
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              Explore our portfolio of successful projects and discover how we've helped
              businesses transform their digital presence.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-yellow-400 text-zinc-900 shadow-lg shadow-yellow-400/25"
                    : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 rounded-full bg-yellow-400"
                    style={{ zIndex: -1 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Case Studies Grid */}
          <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredStudies.map((study, index) => (
                <CaseStudyCard
                  key={study.id}
                  study={study}
                  index={index}
                  onClick={() => handleOpenModal(study)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-20 text-center"
            >
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-zinc-800/50">
                <svg className="h-12 w-12 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <p className="text-xl font-semibold text-zinc-400">No projects in this category yet</p>
              <p className="mt-2 text-zinc-500">Check back soon for exciting new work!</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal */}
      <CaseStudyModal
        study={selectedStudy}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
