"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FloatingWhatsApp() {
  const fiverrUrl = "https://www.fiverr.com/romeokord?public_mode=true";

  return (
    <motion.a
      href={fiverrUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="glow-button-green fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full shadow-lg transition-all hover:shadow-xl md:h-16 md:w-16"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Hire me on Fiverr"
    >
      {/* Official Fiverr Logo */}
      <Image
        src="/fiverr-logo.png"
        alt="Fiverr"
        width={64}
        height={64}
        className="h-full w-full object-cover"
      />

      {/* Pulse animation */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#1dbf73] opacity-25" />
    </motion.a>
  );
}

