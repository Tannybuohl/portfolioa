"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MagneticButton } from "@/components/ui";

interface Option {
  id: string;
  label: string;
  price: number;
  description?: string;
}

interface Category {
  id: string;
  title: string;
  description: string;
  type: "single" | "multiple";
  options: Option[];
}

const categories: Category[] = [
  {
    id: "project-type",
    title: "Project Type",
    description: "What type of project do you need?",
    type: "single",
    options: [
      { id: "landing", label: "Landing Page", price: 200, description: "Single page website" },
      { id: "website", label: "Multi-Page Website", price: 500, description: "Up to 5 pages" },
      { id: "ecommerce", label: "E-Commerce Store", price: 1200, description: "Full online store" },
      { id: "webapp", label: "Web Application", price: 2000, description: "Custom web app" },
    ],
  },
  {
    id: "design",
    title: "Design Requirements",
    description: "What level of design do you need?",
    type: "single",
    options: [
      { id: "template", label: "Template Based", price: 0, description: "Pre-made templates" },
      { id: "custom", label: "Custom Design", price: 300, description: "Unique Figma design" },
      { id: "premium", label: "Premium Design", price: 600, description: "High-end custom design" },
    ],
  },
  {
    id: "features",
    title: "Additional Features",
    description: "Select all features you need",
    type: "multiple",
    options: [
      { id: "cms", label: "Content Management System", price: 200 },
      { id: "seo", label: "SEO Optimization", price: 150 },
      { id: "animations", label: "Advanced Animations", price: 250 },
      { id: "forms", label: "Contact Forms", price: 100 },
      { id: "payments", label: "Payment Integration", price: 300 },
      { id: "auth", label: "User Authentication", price: 350 },
      { id: "analytics", label: "Analytics Setup", price: 100 },
      { id: "hosting", label: "1 Year Hosting", price: 200 },
    ],
  },
  {
    id: "timeline",
    title: "Timeline",
    description: "How soon do you need it?",
    type: "single",
    options: [
      { id: "standard", label: "Standard (4-6 weeks)", price: 0 },
      { id: "fast", label: "Fast (2-3 weeks)", price: 300 },
      { id: "rush", label: "Rush (1 week)", price: 600 },
    ],
  },
];

export function QuoteCalculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string[]>>({
    "project-type": [],
    design: [],
    features: [],
    timeline: [],
  });

  const handleSelect = (categoryId: string, optionId: string, type: "single" | "multiple") => {
    setSelections((prev) => {
      if (type === "single") {
        return { ...prev, [categoryId]: [optionId] };
      } else {
        const current = prev[categoryId] || [];
        if (current.includes(optionId)) {
          return { ...prev, [categoryId]: current.filter((id) => id !== optionId) };
        } else {
          return { ...prev, [categoryId]: [...current, optionId] };
        }
      }
    });
  };

  const isSelected = (categoryId: string, optionId: string) => {
    return selections[categoryId]?.includes(optionId) || false;
  };

  const totalPrice = useMemo(() => {
    let total = 0;
    categories.forEach((category) => {
      category.options.forEach((option) => {
        if (selections[category.id]?.includes(option.id)) {
          total += option.price;
        }
      });
    });
    return total;
  }, [selections]);

  const canProceed = selections[categories[currentStep].id]?.length > 0;
  const isLastStep = currentStep === categories.length - 1;

  return (
    <section id="quote" className="relative overflow-hidden bg-black py-16 md:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />
        {/* Accent glows */}
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-yellow-400/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          {/* Badge */}
          <span className="mb-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800 px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-lg">
            Instant Quote
          </span>

          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Calculate Your Project Cost
          </h2>
          <p className="mx-auto max-w-2xl text-base text-zinc-400 md:text-lg">
            Get an instant estimate for your project. Select your requirements
            and see the price update in real-time.
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur-sm md:p-8"
        >
          {/* Progress Steps */}
          <div className="mb-8 flex items-center justify-between">
            {categories.map((category, index) => (
              <div key={category.id} className="flex items-center">
                <button
                  onClick={() => setCurrentStep(index)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                    index === currentStep
                      ? "bg-yellow-400 text-zinc-900"
                      : index < currentStep
                      ? "bg-green-500 text-white"
                      : "bg-zinc-800 text-zinc-500"
                  }`}
                >
                  {index < currentStep ? (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </button>
                {index < categories.length - 1 && (
                  <div
                    className={`mx-2 h-1 w-8 rounded-full transition-all duration-300 md:w-16 ${
                      index < currentStep ? "bg-green-500" : "bg-zinc-800"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Current Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">
                  {categories[currentStep].title}
                </h3>
                <p className="text-zinc-400">{categories[currentStep].description}</p>
              </div>

              {/* Options Grid */}
              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                {categories[currentStep].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() =>
                      handleSelect(
                        categories[currentStep].id,
                        option.id,
                        categories[currentStep].type
                      )
                    }
                    className={`group relative rounded-xl border-2 p-4 text-left transition-all duration-300 ${
                      isSelected(categories[currentStep].id, option.id)
                        ? "border-yellow-400 bg-yellow-400/10"
                        : "border-zinc-700 bg-zinc-800/50 hover:border-zinc-600"
                    }`}
                  >
                    {/* Checkbox/Radio indicator */}
                    <div
                      className={`absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        isSelected(categories[currentStep].id, option.id)
                          ? "border-yellow-400 bg-yellow-400"
                          : "border-zinc-600"
                      }`}
                    >
                      {isSelected(categories[currentStep].id, option.id) && (
                        <svg className="h-3 w-3 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>

                    <div className="pr-8">
                      <div className="mb-1 text-base font-semibold text-white">
                        {option.label}
                      </div>
                      {option.description && (
                        <div className="mb-2 text-sm text-zinc-400">{option.description}</div>
                      )}
                      <div className="text-lg font-bold text-yellow-400">
                        {option.price === 0 ? "Included" : `+$${option.price}`}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation & Total */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <div className="text-sm text-zinc-400">Estimated Total</div>
              <div className="text-3xl font-bold text-white">
                ${totalPrice.toLocaleString()}
                <span className="ml-1 text-base font-normal text-zinc-500">USD</span>
              </div>
            </div>

            <div className="flex gap-3">
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="rounded-full border border-zinc-700 bg-zinc-800 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700"
                >
                  Previous
                </button>
              )}
              {isLastStep ? (
                <MagneticButton
                  href="#contact"
                  className="rounded-full bg-yellow-400 px-8 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-yellow-300"
                >
                  Get Started — ${totalPrice.toLocaleString()}
                </MagneticButton>
              ) : (
                <button
                  onClick={() => setCurrentStep((prev) => prev + 1)}
                  disabled={!canProceed}
                  className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    canProceed
                      ? "bg-yellow-400 text-zinc-900 hover:bg-yellow-300"
                      : "cursor-not-allowed bg-zinc-700 text-zinc-500"
                  }`}
                >
                  Next Step
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center text-sm text-zinc-500"
        >
          * This is an estimate. Final pricing may vary based on project complexity and requirements.
        </motion.p>
      </div>
    </section>
  );
}

