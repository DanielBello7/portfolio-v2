'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components';
import { usePortfolio } from '@/context/portfolio.context';
import { motion } from 'motion/react';

export function UserAvatar() {
  const { portfolio } = usePortfolio();
  return (
    <motion.div
      className="w-full flex justify-center my-10"
      initial={{
        scale: 0.95,
        opacity: 0.0,
      }}
      animate={{
        scale: 1.0,
        opacity: 1.0,
        transition: {
          scale: {
            duration: 0.1,
            ease: 'linear',
          },
          opacity: {
            duration: 1.0,
          },
        },
      }}
      transition={{ duration: 0.9, ease: 'easeIn' }}
    >
      <Avatar className="size-60 border-4 border-amber-900">
        <AvatarImage
          src={(portfolio.avatar as any).src}
          className="object-cover"
        />
        <AvatarFallback>
          <span className="uppercase">
            {portfolio.name.first[0]}
            {portfolio.name.last[0]}
          </span>
        </AvatarFallback>
      </Avatar>
    </motion.div>
  );
}
