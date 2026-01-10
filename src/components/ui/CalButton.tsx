"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

interface CalButtonProps {
  calLink: string; // Your Cal.com username/event-type, e.g., "john-doe/30min"
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "navbar";
}

export function CalButton({
  calLink,
  children,
  className = "",
  variant = "primary",
}: CalButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#facc15" }, // Yellow accent
        },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer";
  
  const variantStyles = {
    primary: "rounded-full bg-yellow-400 px-8 py-4 text-zinc-900 hover:bg-yellow-300 hover:shadow-[0_0_30px_-5px_rgba(250,204,21,0.5)]",
    secondary: "rounded-full border border-zinc-700 bg-zinc-800/50 px-8 py-4 text-white hover:bg-zinc-700",
    navbar: "rounded-full bg-yellow-400 px-5 py-2 text-sm text-zinc-900 hover:bg-yellow-300",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}

