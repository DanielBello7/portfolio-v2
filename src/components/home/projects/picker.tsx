'use client';
import { usePortfolio } from '@/context/portfolio.context';
import { motion } from 'motion/react';
import classnames from 'classnames';

type Props = {
  selected: string;
  set: (val: string) => void;
};

export function Picker(props: Props) {
  const { portfolio } = usePortfolio();
  const options = [
    'All',
    ...new Set(portfolio.projects.flatMap((item) => item.tags)),
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
    },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="w-full flex gap-2 mt-3 flex-wrap"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {options.map((item, idx) => (
        <motion.div
          onClick={() => props.set(item)}
          key={idx}
          variants={itemVariants}
          className={classnames(
            'capitalize rounded-full px-3 py-1 cursor-pointer hover:scale-[105%] text-sm',
            {
              'bg-amber-900 text-white': props.selected === item,
              'bg-muted hover:bg-gray-200': props.selected !== item,
            }
          )}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
}
