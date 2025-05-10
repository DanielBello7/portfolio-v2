'use client';
import { usePortfolio } from '@/context/portfolio.context';
import { motion } from 'motion/react';
import Link from 'next/link';

export function HeroMiddle() {
  const { portfolio } = usePortfolio();
  return (
    <div className="text-center">
      <motion.h1
        className="capitalize text-5xl font-bold tracking-tighter text-balance text-gray-900 sm:text-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {portfolio.name.complete}
      </motion.h1>
      <motion.p
        className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-lg/8"
        initial={{ opacity: 0, y: '30%' }}
        animate={{
          opacity: 1,
          y: '0%',
          transition: {
            opacity: {
              ease: 'linear',
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        transition={{ duration: 1 }}
      >
        {portfolio.professional_summary}
      </motion.p>
      <motion.div
        className="mt-10 flex items-center justify-center gap-x-6"
        initial={{
          opacity: 0,
          y: '20%',
        }}
        animate={{
          opacity: 1,
          y: '0%',
          transition: {
            opacity: {
              ease: 'linear',
              delay: 0.5,
            },
            y: {
              delay: 0.4,
            },
          },
        }}
        transition={{ duration: 1.5 }}
      >
        <Link
          href="#contact"
          className="rounded-md bg-amber-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-amber-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-900"
        >
          Contact Me
        </Link>
        <Link
          href="#projects"
          className="text-sm/6 font-semibold text-gray-900 hover:underline"
        >
          Check My Work <span aria-hidden="true">→</span>
        </Link>
      </motion.div>
    </div>
  );
}
