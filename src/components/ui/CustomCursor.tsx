"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface CursorState {
  isHovering: boolean;
  isPointer: boolean;
  isHidden: boolean;
}

export function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>({
    isHovering: false,
    isPointer: false,
    isHidden: true,
  });
  const [isMobile, setIsMobile] = useState(true);

  // Motion values for smooth cursor movement
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Spring configuration for fast, responsive following
  const springConfig = { damping: 50, stiffness: 1000, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Check if device is mobile/touch
  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mouse move handler
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (cursorState.isHidden) {
        setCursorState((prev) => ({ ...prev, isHidden: false }));
      }
    },
    [cursorX, cursorY, cursorState.isHidden]
  );

  // Mouse enter/leave document
  const handleMouseEnter = useCallback(() => {
    setCursorState((prev) => ({ ...prev, isHidden: false }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setCursorState((prev) => ({ ...prev, isHidden: true }));
  }, []);

  // Check if element should trigger hover state
  const isInteractiveElement = (element: Element): boolean => {
    const interactiveTags = ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT"];
    const interactiveRoles = ["button", "link", "menuitem", "tab"];

    // Check tag name
    if (interactiveTags.includes(element.tagName)) return true;

    // Check role attribute
    const role = element.getAttribute("role");
    if (role && interactiveRoles.includes(role)) return true;

    // Check for cursor pointer in computed styles
    const computedStyle = window.getComputedStyle(element);
    if (computedStyle.cursor === "pointer") return true;

    // Check for common interactive classes
    const classList = element.classList;
    if (
      classList.contains("cursor-pointer") ||
      classList.contains("clickable")
    )
      return true;

    // Check data attribute for custom cursor behavior
    if (element.hasAttribute("data-cursor-hover")) return true;

    return false;
  };

  // Mouse over handler for detecting interactive elements
  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as Element;

    // Check the target and its parents for interactive elements
    let element: Element | null = target;
    let isHovering = false;

    while (element && element !== document.body) {
      if (isInteractiveElement(element)) {
        isHovering = true;
        break;
      }
      element = element.parentElement;
    }

    setCursorState((prev) => ({
      ...prev,
      isHovering,
      isPointer: isHovering,
    }));
  }, []);

  // Set up event listeners
  useEffect(() => {
    if (isMobile) return;

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, [
    isMobile,
    handleMouseMove,
    handleMouseOver,
    handleMouseEnter,
    handleMouseLeave,
  ]);

  // Don't render on mobile devices
  if (isMobile) return null;

  return (
    <>
      {/* Hide default cursor globally */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Main cursor dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          animate={{
            scale: cursorState.isHovering ? 2.5 : 1,
            opacity: cursorState.isHidden ? 0 : 1,
          }}
          transition={{
            scale: { type: "spring", stiffness: 300, damping: 20 },
            opacity: { duration: 0.2 },
          }}
        >
          {/* Inner dot */}
          <motion.div
            className="h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
            animate={{
              scale: cursorState.isHovering ? 0.5 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>
      </motion.div>

      {/* Outer ring (appears on hover) */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/50"
          animate={{
            scale: cursorState.isHovering ? 1 : 0,
            opacity: cursorState.isHovering ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        />
      </motion.div>
    </>
  );
}

