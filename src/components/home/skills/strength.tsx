'use client';
import { motion, useInView } from 'framer-motion';
import React from 'react';

type Props = {
  number?: number;
};
export function Strength(props: Props) {
  const [progress, setProgress] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      setProgress(props.number ?? Math.floor(Math.random() * 100));
    }
  }, [isInView, props.number]);

  return (
    <div
      ref={ref}
      className="w-full bg-gray-200 rounded h-2 overflow-hidden"
    >
      <motion.div
        className="h-full bg-amber-900 rounded"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </div>
  );
}
