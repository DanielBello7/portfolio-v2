'use client';
import { usePortfolio } from '@/context/portfolio.context';

export function ServiceTitle() {
  const { portfolio } = usePortfolio();
  return (
    <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-base/7 font-semibold text-indigo-600 capitalize">
        {portfolio.role}
      </h2>
      <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
        My Services
      </p>
      <p className="mt-6 text-gray-600 text-md">
        Having worked in this engineering field for a while, i've been able
        to consolidate my skills into the following services
      </p>
    </div>
  );
}
