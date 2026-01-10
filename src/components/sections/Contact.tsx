"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "@/components/layout";
import { MotionWrapper } from "@/components/animations";
import { staggerContainer, staggerItem } from "@/lib/animations";

// Icons
function MailIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
    console.log("Contact form submitted:", formData);
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", newsletterEmail);
    alert("Thanks for subscribing!");
    setNewsletterEmail("");
  };

  return (
    <Section id="contact" className="bg-zinc-950">
      <MotionWrapper variants={staggerContainer}>
        {/* Section Header */}
        <motion.div variants={staggerItem} className="mb-12 text-center md:mb-16">
          {/* Badge */}
          <span className="mb-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800 px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-lg">
            Contact Us
          </span>

          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-2xl text-base text-zinc-400 md:text-lg">
            We are here to help you with any questions or concerns you may have.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Contact Info & Newsletter */}
          <motion.div variants={staggerItem} className="space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Contact Information
              </h3>
              <p className="mb-6 text-zinc-400">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-colors hover:border-zinc-700">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 text-white">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-sm text-zinc-400">
                      taiworajiiyanuoluwa@gmail.com
                    </p>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-colors hover:border-zinc-700">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 text-white">
                    <FacebookIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Facebook</p>
                    <p className="text-sm text-zinc-400">Raji Dewebs</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-colors hover:border-zinc-700">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 text-white">
                    <WhatsAppIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-white">WhatsApp</p>
                    <p className="text-sm text-zinc-400">+44 7782 294510</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="mb-2 text-xl font-bold text-white">
                Subscribe to our Newsletter
              </h3>
              <p className="mb-4 text-sm text-zinc-400">
                Get the latest updates, tips, and exclusive offers directly in
                your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  name="newsletter-email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 rounded-full border border-zinc-700 bg-zinc-800 px-5 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-yellow-300"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div variants={staggerItem}>
            <form
              onSubmit={handleContactSubmit}
              className="space-y-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-8"
            >
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-white"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-white"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-white"
                >
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full rounded-full bg-white py-4 text-base font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </MotionWrapper>
    </Section>
  );
}

