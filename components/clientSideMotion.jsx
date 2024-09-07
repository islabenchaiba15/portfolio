'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function ClientSideMotion({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-64 h-64 md:w-80 md:h-80 bg-cyan-400 dark:bg-cyan-600 rounded-full relative overflow-hidden"
    >
      {children}
    </motion.div>
  );
}


export function ClientSideMotion3({ children }) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  }

export function ClientSideMotion2({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}


