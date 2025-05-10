'use client';
import React from 'react';
import { socials_items } from './data';
import { container, item } from './animation';
import { motion } from 'framer-motion';

export function Socials() {
  return (
    <motion.div
      className="flex"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {socials_items.map((social, idx) => (
        <motion.a
          href={social.href}
          rel="noreferrer"
          target="_blank"
          key={idx}
          variants={item}
          whileHover={{
            scale: 1.1,
            className: 'bg-amber-900',
          }}
          transition={{
            duration: 0.1,
          }}
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}
