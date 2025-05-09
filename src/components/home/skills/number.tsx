'use client';
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
} from 'motion/react';
import { useEffect } from 'react';

export function Number(props: { num: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, props.num, { duration: 5 });
    return () => controls.stop();
  }, [props.num, count]);

  return <motion.pre style={text}>{rounded}</motion.pre>;
}

const text = {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#4f39f6',
};
