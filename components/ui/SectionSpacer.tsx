'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SectionDividerBig() {
  return (
    <motion.div
      className="hidden w-1 h-32 my-48 bg-gray-200 rounded-full sm:block dark:bg-opacity-0"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
    <div className="arrow">
        <span></span>
        <span></span>
        <span></span>
    </div>


    </motion.div>
  );
}

