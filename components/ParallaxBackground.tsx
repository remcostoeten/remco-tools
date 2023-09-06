'use client';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ParallaxDiv: React.FC = () => {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const updateScroll = () => {
      const scrollPosition = window.scrollY;
      controls.start({ y: scrollPosition / 25 });
    };

    window.addEventListener('scroll', updateScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [controls]);

  const gradientStyle = {
    backgroundImage: `linear-gradient(at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.4), transparent)`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  };

  return (
    <motion.div
      className="motion-div bg-[#fbe2e3] fixed top-[-6rem] -z-10 right-[11rem] h-screen w-screen rounded-full blur-[10rem]  dark:bg-[#644343]"
      style={gradientStyle}
      animate={controls}
    ></motion.div>
  );
};

export default ParallaxDiv;
