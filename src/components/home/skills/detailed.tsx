'use client';
import { Wrench } from 'lucide-react';
import { Number } from './number';
import { Strength } from './strength';
import { usePortfolio } from '@/context/portfolio.context';

export function Detailed() {
  const { portfolio } = usePortfolio();

  return (
    <div className="w-1/2">
      <div className="flex items-center space-x-2">
        <div className="p-2 rounded-md text-white bg-indigo-600">
          <Wrench className="size-6" />
        </div>
        <p className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-2xl lg:text-balance">
          Skills
        </p>
      </div>
      <p className="mt-6 text-sm text-gray-600">
        Some of the few skills i possess
      </p>
      <div className="my-16">
        {portfolio.skills.map((item, idx) => (
          <div className="mb-5" key={idx}>
            <div className="flex items-center justify-between">
              <p className="text-sm mb-2 capitalize">{item.title}</p>
              <Number num={item.percent} />
            </div>
            <Strength number={item.percent} />
          </div>
        ))}
      </div>
    </div>
  );
}
