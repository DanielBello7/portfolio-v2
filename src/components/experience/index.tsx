'use client';

import { usePortfolio } from '@/context/portfolio.context';
import { Single } from './single';
import React from 'react';

export function Experience() {
  const { portfolio } = usePortfolio();
  return (
    <div className="bg-white py-1 sm:py-3">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative">
        {portfolio.work_experience.map((item, idx) => (
          <Single experience={item} key={idx} />
        ))}
      </div>
    </div>
  );
}
