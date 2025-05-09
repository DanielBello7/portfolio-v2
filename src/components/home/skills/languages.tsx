'use client';
import { Strength } from './strength';
import { Number } from './number';
import { Code } from 'lucide-react';
import { usePortfolio } from '@/context/portfolio.context';

export function Languages() {
  const { portfolio } = usePortfolio();
  return (
    <div className="w-full md:w-1/2">
      <div className="flex items-start space-x-2">
        <div className="p-2 rounded-md text-white bg-indigo-600">
          <Code className="size-6" />
        </div>
        <p className="text-xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-2xl lg:text-balance">
          Programming Languages
        </p>
      </div>
      <p className="mt-6 text-sm text-gray-600">
        Programming languages i use everyday
      </p>
      <div className="my-10">
        {portfolio.programming_languages.map((item, idx) => (
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
