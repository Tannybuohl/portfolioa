"use client";

import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { forwardRef, ReactNode } from "react";
import { fadeInUp } from "@/lib/animations";

interface MotionWrapperProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * A reusable motion wrapper component for applying animations to children
 */
const MotionWrapper = forwardRef<HTMLDivElement, MotionWrapperProps>(
  (
    {
      children,
      variants = fadeInUp,
      delay = 0,
      duration,
      className,
      ...props
    },
    ref
  ) => {
    const customVariants: Variants = duration
      ? {
          hidden: variants.hidden,
          visible: {
            ...(typeof variants.visible === "object" ? variants.visible : {}),
            transition: {
              duration,
              delay,
            },
          },
        }
      : {
          hidden: variants.hidden,
          visible: {
            ...(typeof variants.visible === "object" ? variants.visible : {}),
            transition: {
              ...(typeof variants.visible === "object" &&
              variants.visible &&
              "transition" in variants.visible
                ? (variants.visible.transition as object)
                : {}),
              delay,
            },
          },
        };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={customVariants}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

MotionWrapper.displayName = "MotionWrapper";

export { MotionWrapper };

