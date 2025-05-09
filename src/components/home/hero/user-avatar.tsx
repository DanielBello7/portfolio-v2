'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components';
import { usePortfolio } from '@/context/portfolio.context';
import { motion } from 'motion/react';

export function UserAvatar() {
  const { portfolio } = usePortfolio();
  return (
    <motion.div
      className="w-full flex justify-center my-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <Avatar className="size-60 border-4 border-indigo-600">
        <AvatarImage
          src={(portfolio.avatar as any).src}
          className="object-cover"
        />
        <AvatarFallback>DB</AvatarFallback>
      </Avatar>
    </motion.div>
  );
}
