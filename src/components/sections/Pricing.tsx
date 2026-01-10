"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { TiltCard, MagneticButton } from "@/components/ui";

interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  whiteTheme?: boolean;
}

const plans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter plan",
    price: "$205",
    description:
      "Perfect for small businesses and freelancers who want to build a website for their business.",
    features: [
      "Complete Landing Page Design",
      "Landing Page Development",
      "Basic SEO Setup",
      "Hover Animations",
      "Button Interactions",
      "Smooth Scrolling",
      "Mobile Responsive Design",
      "Up to 10 Design Revisions",
    ],
  },
  {
    id: "growth",
    name: "Pro Plan",
    badge: "Pro Plan",
    price: "$555",
    description:
      "Perfect for small businesses and freelancers who want to build a website for their business.",
    features: [
      "Complete Website (Up to 2 Pages)",
      "Website Development (React / Next.js)",
      "Pixel-Perfect Design",
      "Lightning-Fast Performance",
      "Scroll Animations",
      "Hover & Micro Interactions",
      "Form Integration (Contact / Inquiry)",
      "Responsive on All Devices",
      "Up to 20 Design Revisions",
    ],
    highlighted: true,
  },
  {
    id: "premium",
    name: "Ultimate",
    badge: "Ultimate",
    price: "$1485",
    description:
      "Perfect for businesses seeking a premium web solution with advanced features.",
    features: [
      "Multi-Page Website (Up to 8 Pages)",
      "Pixel-Perfect Design & Development",
      "Lightning-Fast Performance",
      "Scroll, Hover & Parallax Animations",
      "Website Form Integration",
      "Payment Integration (Stripe, PayPal, etc.)",
      "Contact Us Integration",
      "Any 3rd-Party Integration (CRM, API, etc.)",
      "Unlimited Revisions",
    ],
    whiteTheme: true,
  },
];

function CheckIcon({ highlighted = false }: { highlighted?: boolean }) {
  return (
    <div
      className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
        highlighted ? "bg-zinc-900 text-yellow-400" : "bg-zinc-800 text-white"
      }`}
    >
      <svg
        className="h-3 w-3"
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

function PricingCard({ plan }: { plan: PricingPlan }) {
  const isHighlighted = plan.highlighted;
  const isWhite = plan.whiteTheme;

  // Determine background and text colors
  const getBgClass = () => {
    if (isHighlighted) return "bg-yellow-400";
    if (isWhite) return "bg-white";
    return "bg-zinc-900/80";
  };

  const getGlowClass = () => {
    if (isHighlighted) return "group-hover:shadow-[0_0_60px_-15px_rgba(250,204,21,0.5)]";
    if (isWhite) return "group-hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.3)]";
    return "group-hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.1)]";
  };

  const getTextClass = () => {
    if (isHighlighted || isWhite) return "text-zinc-900";
    return "text-white";
  };

  const getSubTextClass = () => {
    if (isHighlighted || isWhite) return "text-zinc-700";
    return "text-zinc-400";
  };

  return (
    <motion.div variants={staggerItem} className="group h-full">
      <TiltCard className="h-full" tiltAmount={5} glareEnabled>
        <div
          className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 md:p-10 ${getBgClass()} ${getGlowClass()}`}
        >
          {/* Badge */}
          {plan.badge && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`mb-4 inline-flex w-fit items-center rounded-full px-4 py-1.5 text-xs font-semibold ${
                isHighlighted || isWhite
                  ? "bg-zinc-900 text-white"
                  : "bg-zinc-800 text-zinc-300"
              }`}
            >
              {plan.badge}
            </motion.span>
          )}

          {/* Plan Name (for non-badge plans) */}
          {!plan.badge && (
            <p className="mb-4 text-sm font-medium text-zinc-400">{plan.name}</p>
          )}

          {/* Price with animation */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`mb-4 text-5xl font-bold md:text-6xl ${getTextClass()}`}
          >
            {plan.price}
          </motion.h3>

          {/* Description */}
          <p className={`mb-6 text-sm leading-relaxed ${getSubTextClass()}`}>
            {plan.description}
          </p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={`mb-6 h-px origin-left ${
              isHighlighted || isWhite ? "bg-zinc-300" : "bg-zinc-800"
            }`}
          />

          {/* Features */}
          <ul className="mb-8 flex-1 space-y-3">
            {plan.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="flex items-start gap-3"
              >
                <CheckIcon highlighted={isHighlighted || isWhite} />
                <span className={`text-sm ${getTextClass()}`}>
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button with magnetic effect */}
          <MagneticButton strength={0.15} className="w-full">
            <Link
              href="#contact"
              className={`block w-full rounded-full py-4 text-center text-base font-semibold transition-all duration-300 ${
                isHighlighted || isWhite
                  ? "bg-zinc-900 text-white hover:bg-zinc-800"
                  : "border border-zinc-700 bg-transparent text-white hover:border-zinc-500 hover:bg-zinc-800"
              }`}
            >
              Get Started Now
            </Link>
          </MagneticButton>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-zinc-950 py-16 md:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-zinc-950" />
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
            Our Pricings
          </span>

          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Transparent Pricings
          </h2>
          <p className="mx-auto max-w-2xl text-base text-zinc-400 md:text-lg">
            Your go-to solution for web and mobile apps, like many founders,
            startups, and agencies do.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

