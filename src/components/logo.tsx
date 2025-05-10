'use client';
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      exit={{ opacity: 0 }}
    >
      <Link href="/">
        <h3
          id="logo"
          className="p-0 m-0 text-2xl font-black tracking-[-1.4px]"
        >
          DanielBello
        </h3>
      </Link>
    </motion.div>
  );
}
