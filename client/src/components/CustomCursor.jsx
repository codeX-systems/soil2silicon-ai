import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  // Default to false so it shows on first load unless proven otherwise
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    // 1. Function to handle screen size changes
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
    };

    // Run once on mount
    handleResize();

    // 2. Mouse position tracking
    const updateMousePosition = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // 3. Hover listeners for interactive elements
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const refreshListeners = () => {
        const interactiveElements = document.querySelectorAll("a, button, input, [role='button']");
        interactiveElements.forEach((el) => {
          el.addEventListener("mouseenter", handleMouseEnter);
          el.addEventListener("mouseleave", handleMouseLeave);
        });
        return interactiveElements;
    };

    const elements = refreshListeners();

    // Attach global listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", updateMousePosition);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", updateMousePosition);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [mouseX, mouseY]);

  // 🔥 If it's mobile, we hide the leaf, but the listeners above 
  // stay active so it knows when you switch back to desktop!
  if (isMobile) return null;

  return (
    <>
      {/* 1. The Glow (Bottom Layer) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          width: 80,
          height: 80,
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.4,
        }}
      />

      {/* 2. The Leaf (Top Layer) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.2 : 1,
          rotate: isHovering ? 15 : -45, 
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]"
        >
          <path
            d="M32 2C18 12 10 24 10 36c0 12 10 22 22 22s22-10 22-22C54 24 46 12 32 2z"
            stroke="#10b981"
            strokeWidth="2.5"
            fill="rgba(16, 185, 129, 0.1)"
          />
          <path
            d="M32 8v44 M20 20l12 16 M44 20L32 36 M20 36l12 16 M44 36L32 52"
            stroke="#10b981"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </>
  );
};

export default CustomCursor;