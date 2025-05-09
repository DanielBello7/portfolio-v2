'use client';

import * as React from 'react';
import { motion, useInView } from 'framer-motion';

export function Strength() {
  const [progress, setProgress] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      setProgress(Math.floor(Math.random() * 100));
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="w-full bg-gray-200 rounded h-2 overflow-hidden"
    >
      <motion.div
        className="h-full bg-indigo-600 rounded"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </div>
  );
}
