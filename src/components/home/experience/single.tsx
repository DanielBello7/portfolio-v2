'use client';
import { EmploymentHistory } from '@/context/types';
import { Dot } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import React from 'react';

type Props = {
  experience: EmploymentHistory;
};
export function Single({ experience }: Props) {
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
    <div className="h-[250px] flex hover:scale-[104%] mb-3" ref={ref}>
      <div className="w-[45%] pt-16">
        <h1 className="capitalize font-bold text-2xl">
          {experience.position_held}
        </h1>
        <h1 className="text-gray-400 capitalize">
          {experience.company_name}
        </h1>
      </div>

      <div className="w-[150px] pr-14 pt-5">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <p className="text-indigo-600 mb-3 font-bold">
            {experience.end}
          </p>
          <motion.div
            className="w-1 h-full"
            style={{
              backgroundColor: lineColor,
            }}
          />
        </div>
      </div>

      <div className="w-[45%] pt-16">
        {experience.points.map((a, id) => (
          <div className="flex items-start mb-4 space-x-3" key={id}>
            <Dot className="size-8" />
            <p className="w-[90%] text-sm text-justify text-gray-500">
              {a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
