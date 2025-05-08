'use client';

import { Dot } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import React from 'react';

type Props = {
  item: any;
  idx: number;
};
export function Single({ idx, item }: Props) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  const lineColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['#e5e7eb', '#4f39f6']
  );

  return (
    <div className="flex h-full hover:scale-[104%]" key={idx} ref={ref}>
      <div className="w-[45%] pt-10">
        <h1 className="font-bold text-2xl">{item.position}</h1>
        <h1 className="text-gray-400">{item.company}</h1>
      </div>

      <div className="w-[150px] pr-14 pt-5">
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-indigo-600 mb-3 font-bold">{item.year}</p>
          <motion.div
            className="w-1 h-full"
            style={{
              backgroundColor: lineColor,
            }}
          />
        </div>
      </div>

      <div className="w-[45%] pt-10">
        {item.points.map((a: any, id: number) => (
          <div className="flex items-start mb-4 space-x-3" key={id}>
            <Dot className="size-8" />
            <p className="w-[90%] text-sm">{a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
