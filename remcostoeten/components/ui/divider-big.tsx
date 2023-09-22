'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SectionDividerBig() {
  return (
    <motion.div
      className="bg-gray-200 my-48 h-32 w-1 rounded-full hidden sm:block dark:bg-opacity-10"
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

