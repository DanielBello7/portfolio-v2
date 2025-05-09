'use client';
import { usePortfolio } from '@/context/portfolio.context';
import { Single } from './single';
import React from 'react';

export function Experience() {
  const { portfolio } = usePortfolio();
  return (
    <div className="bg-white py-1 sm:py-3" id="experience">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
          Experience
        </p>
        <p></p>
      </div>
      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative mt-20">
        {portfolio.work_experience.map((item, idx) => (
          <Single experience={item} key={idx} />
        ))}
      </div>
    </div>
  );
}
