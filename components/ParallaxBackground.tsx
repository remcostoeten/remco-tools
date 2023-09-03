'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ParallaxDiv: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const updateScroll = () => {
      const scrollPosition = window.scrollY;
      controls.start({ y: scrollPosition / 2 });
    };

    window.addEventListener('scroll', updateScroll);

    return () => window.removeEventListener('scroll', updateScroll);
  }, [controls]);

  return (
    <motion.div
      className="bg-[#fbe2e3] fixed top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"
      animate={controls}
    ></motion.div>
  );
};

export default ParallaxDiv;
