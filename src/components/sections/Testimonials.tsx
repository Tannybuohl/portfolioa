"use client";

import { motion } from "framer-motion";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Raji Dewebs designed our entire dashboard from scratch and it's a masterpiece. Our users went from complaining about the old interface to actually enjoying using our platform. The UX flow is so intuitive.",
    name: "Sofia Rodriguez",
    role: "Product Manager",
    company: "Spain",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "2",
    quote:
      "Raji Dewebs transformed our outdated agency website into something that actually wins us clients. The portfolio showcase and case study layouts are designed so well that our lead quality improved dramatically.",
    name: "Lucas Silva",
    role: "Agency Owner",
    company: "Brazil",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "3",
    quote:
      "The mobile app design Raji Dewebs created is absolutely gorgeous. Every screen, every micro-interaction, every color choice feels intentional. Our app store ratings went from 3.2 to 4.7 stars.",
    name: "Ingrid Larsson",
    role: "Product Lead",
    company: "Sweden",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: "4",
    quote:
      "Raji Dewebs designed our corporate website with such elegance and professionalism. The Arabic and English versions look flawless, and the way they handled our complex navigation is brilliant.",
    name: "Ahmed Hassan",
    role: "Business Owner",
    company: "UAE",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: "5",
    quote:
      "The UI/UX expertise at Raji Dewebs is world-class. They redesigned our entire platform and made it accessible, beautiful, and incredibly user-friendly. Our user retention improved by 45% in just two months.",
    name: "Oliver Schmidt",
    role: "VP Product",
    company: "Germany",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: "6",
    quote:
      "The SaaS dashboard design from Raji Dewebs exceeded all our expectations. Complex data visualization made simple and beautiful. Our enterprise clients love the clean interface, and we've seen a 35% increase in user engagement.",
    name: "Michael Roberts",
    role: "VP Product",
    company: "USA",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
  },
  {
    id: "7",
    quote:
      "The e-commerce design Raji Dewebs created for us is pure art. Every product page, checkout flow, and user journey was crafted with such precision. Our conversion rate doubled within weeks.",
    name: "Emma Chen",
    role: "E-commerce Director",
    company: "Singapore",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    id: "8",
    quote:
      "The landing page design from Raji Dewebs has tripled our conversion rates. Beautiful animations, clear messaging, and a user flow that just works. Best investment we've made.",
    name: "David Park",
    role: "Marketing Lead",
    company: "South Korea",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    id: "9",
    quote:
      "Working with Raji Dewebs was seamless. They understood our vision immediately and delivered a website that perfectly represents our brand. The attention to detail is incredible.",
    name: "Kai Nakamura",
    role: "Founder",
    company: "Japan",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="mb-4 break-inside-avoid rounded-2xl bg-zinc-900/80 p-6">
      {/* Quote */}
      <p className="mb-6 text-sm leading-relaxed text-zinc-300">
        {testimonial.quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        {/* Profile Picture */}
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
        />

        {/* Name & Role */}
        <div>
          <p className="text-sm font-semibold text-white">{testimonial.name}</p>
          <p className="text-xs text-zinc-500">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

function ScrollingColumn({
  testimonials,
  direction = "down",
  duration = 25,
}: {
  testimonials: Testimonial[];
  direction?: "up" | "down";
  duration?: number;
}) {
  // Double the testimonials for seamless loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Fade overlay top */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-24 bg-gradient-to-b from-zinc-950 to-transparent" />

      {/* Fade overlay bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-zinc-950 to-transparent" />

      {/* Scrolling content */}
      <motion.div
        animate={{
          y: direction === "down" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col"
      >
        {doubled.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </motion.div>
    </div>
  );
}

export function Testimonials() {
  // Split testimonials into 3 columns
  const col1 = testimonials.filter((_, i) => i % 3 === 0);
  const col2 = testimonials.filter((_, i) => i % 3 === 1);
  const col3 = testimonials.filter((_, i) => i % 3 === 2);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-zinc-950 py-16 md:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black" />
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
            Testimonials
          </span>

          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Our Clients Reviews
          </h2>
          <p className="mx-auto max-w-2xl text-base text-zinc-400 md:text-lg">
            Check out what our clients have to say about our work. We are proud
            to have worked with some of the best clients in the industry.
          </p>
        </motion.div>

        {/* Testimonials Grid - 3 scrolling columns */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Column 1 - Scrolls down */}
          <ScrollingColumn testimonials={col1} direction="down" duration={30} />

          {/* Column 2 - Scrolls down (slower) */}
          <ScrollingColumn testimonials={col2} direction="down" duration={25} />

          {/* Column 3 - Scrolls down */}
          <ScrollingColumn testimonials={col3} direction="down" duration={35} />
        </div>
      </div>
    </section>
  );
}

