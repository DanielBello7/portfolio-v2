'use client';
import { usePortfolio } from '@/context/portfolio.context';
import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroHeader() {
  const { portfolio } = usePortfolio();
  return (
    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      <motion.div
        className="flex items-center bg-white relative rounded-full px-3 py-1 text-xs text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
        initial={{
          scale: 0.9,
          opacity: 0.0,
        }}
        animate={{
          scale: 1.0,
          opacity: 1.0,
          transition: {
            scale: {
              delay: 0.4,
              duration: 0.1,
              ease: 'linear',
            },
            opacity: {
              delay: 0.4,
              duration: 1.0,
            },
          },
        }}
        transition={{
          duration: 0.9,
          ease: 'easeIn',
        }}
      >
        <MapPin className="size-4 me-1" />
        <p className="me-1">{portfolio.address.city},</p>
        <p className="font-semibold text-amber-900 capitalize">
          {portfolio.address.country}
        </p>
      </motion.div>
    </div>
  );
}
