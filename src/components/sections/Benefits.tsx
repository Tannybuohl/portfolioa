"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { TiltCard } from "@/components/ui";

interface Benefit {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    id: "1",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
    ),
    title: "Unlimited Revisions",
    description:
      "At Raji Dewebs, we offer unlimited revisions to ensure that you are satisfied with the final product. We don't proceed without your approval.",
  },
  {
    id: "2",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
    ),
    title: "Easy Communication",
    description:
      "You can communicate with us on any platform at any time and we will respond to your queries as soon as possible. We are available 24/7 to assist you.",
  },
  {
    id: "3",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    title: "Fast Turnaround",
    description:
      "You can expect a quick turnaround time from us. We understand that time is of the essence and we make sure to deliver your project on time.",
  },
  {
    id: "4",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
    title: "Top-notch Quality",
    description:
      "We ensure that your project is of the highest quality. We use the best tools and technologies to deliver the best results.",
  },
  {
    id: "5",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ),
    title: "No Contracts",
    description:
      "We don't require any contracts from our clients. We believe in transparency and honesty and we don't want to bind our clients to any contracts.",
  },
  {
    id: "6",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
    title: "Your Entire Team",
    description:
      "We can work with your entire team to deliver the best results. We understand that every project is unique and we make sure to deliver the best results.",
  },
];

function BenefitCard({ benefit }: { benefit: Benefit }) {
  return (
    <motion.div variants={staggerItem} className="group h-full">
      <TiltCard className="h-full" tiltAmount={8} glareEnabled>
        <div className="relative h-full cursor-pointer rounded-2xl bg-zinc-900/80 p-6 transition-all duration-300 hover:bg-yellow-400 hover:shadow-[0_0_40px_-10px_rgba(250,204,21,0.4)] md:p-8">
          {/* Icon with animation */}
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-800 text-white transition-colors duration-300 group-hover:bg-zinc-900 group-hover:text-yellow-400"
          >
            {benefit.icon}
          </motion.div>

          {/* Title */}
          <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-zinc-900">
            {benefit.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-700">
            {benefit.description}
          </p>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function Benefits() {
  return (
    <section className="relative bg-zinc-950 py-16 md:py-20">
      {/* Background */}
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
          className="mb-14 text-center"
        >
          {/* Badge */}
          <span className="mb-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800 px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-lg">
            Why Choose Me
          </span>

          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            What Sets Us Apart
          </h2>
          <p className="mx-auto max-w-2xl text-base text-zinc-400 md:text-lg">
            I deliver exceptional results through attention to detail, modern
            technology, and a commitment to your success.
          </p>
        </motion.div>

        {/* Benefits Grid - 3 columns, 2 rows = 6 cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
