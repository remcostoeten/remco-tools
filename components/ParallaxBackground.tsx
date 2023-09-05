'use client';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ParallaxDiv: React.FC = () => {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [delayed, setDelayed] = useState(false); // State to control the delay

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

    // Set a delay after 250ms
    const delayTimeout = setTimeout(() => {
      setDelayed(true);
    }, 250);

    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(delayTimeout); // Clear the timeout on cleanup
    };
  }, [controls]);

  const gradientStyle = {
    // backgroundImage: `radial-gradient(at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.4), transparent)`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  };

  const skewStyle = {
    transform: `skewX(${(mousePosition.x - window.innerWidth / 2) * 0.01}deg)`,
    left: `${(mousePosition.x - window.innerWidth / 2) * 0.1}px`,
    transitionDelay: delayed ? '250ms ease-in-out' : '0ms', // Apply delay when delayed is true
  };

  return (
    <motion.div
      className="motion-div bg-[#fbe2e3] fixed top-[-6rem] -z-10 right-[11rem] h-screen w-screen rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#1e0d26]"
      style={{ ...gradientStyle, ...skewStyle }}
      animate={controls}
    ></motion.div>
  );
};

export default ParallaxDiv;
