"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import GreenCursor from "../icons/Cursor/GreenCursor";
import PinkCursor from "../icons/Cursor/PinkCursor";

// ... (import statements and other code)

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isAlternative, setIsAlternative] = useState(false);

  const hoverDataOne = "[data-cursor-hover]";
  const hoverDataTwo = "[data-cursor-hover-alternative]";

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });

      const target = event.target as HTMLElement;
      if (target && target.closest(hoverDataTwo)) {
        setIsAlternative(true);
      } else {
        setIsAlternative(false);
      }
    };

    const handleMouseEnter = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target && (target.closest(hoverDataOne) || target.closest(hoverDataTwo))) {
        setIsHovered(true);
      }
    };

    const handleMouseLeave = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target && !target.closest(hoverDataOne) && !target.closest(hoverDataTwo)) {
        setIsHovered(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      initial={{ x: -100, y: 0, scale: 1 }}
      animate={{
        x: position.x - 0,
        y: position.y  -30,
        scale: isHovered ? 1.5 : 1,
      }}
      transition={{ type: "tween",  duration: 0  }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      {isAlternative ? <PinkCursor /> : <GreenCursor />}
    </motion.div>
  );
};

export default CustomCursor;
