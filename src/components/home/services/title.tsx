'use client';
import { usePortfolio } from '@/context/portfolio.context';
import { motion } from 'motion/react';

export function ServiceTitle() {
  const { portfolio } = usePortfolio();
  return (
    <div className="mx-auto max-w-2xl lg:text-center">
      <motion.h2
        className="text-base/7 font-semibold text-amber-900 capitalize"
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          transition: {
            opacity: {
              duration: 0.9,
            },
          },
        }}
      >
        {portfolio.role}
      </motion.h2>
      <motion.p
        className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance"
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          transition: {
            opacity: {
              delay: 0.2,
              duration: 0.9,
            },
          },
        }}
      >
        My Services
      </motion.p>
      <motion.p
        className="mt-6 text-gray-600 text-md"
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          transition: {
            opacity: {
              delay: 0.3,
              duration: 0.9,
            },
          },
        }}
      >
        Having worked in this engineering field for a while, i've been able
        to consolidate my skills into the following services
      </motion.p>
    </div>
  );
}
