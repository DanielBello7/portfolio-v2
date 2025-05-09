'use client';
import { usePortfolio } from '@/context/portfolio.context';
import Link from 'next/link';

export function HeroMiddle() {
  const { portfolio } = usePortfolio();
  return (
    <div className="text-center">
      <h1 className="capitalize text-5xl font-bold tracking-tighter text-balance text-gray-900 sm:text-5xl">
        {portfolio.name.complete}
      </h1>
      <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-lg/8">
        {portfolio.professional_summary}
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="#contact"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Contact Me
        </Link>
        <Link
          href="#projects"
          className="text-sm/6 font-semibold text-gray-900 hover:underline"
        >
          Check My Work <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
