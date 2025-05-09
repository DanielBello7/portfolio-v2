'use client';
import { usePortfolio } from '@/context/portfolio.context';
import { MapPin } from 'lucide-react';

export function HeroHeader() {
  const { portfolio } = usePortfolio();
  return (
    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      <div className="flex items-center bg-white relative rounded-full px-3 py-1 text-xs text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        <MapPin className="size-4 me-1" />
        <p className="me-1">{portfolio.address.city},</p>
        <p className="font-semibold text-indigo-600 capitalize">
          {portfolio.address.country}
        </p>
      </div>
    </div>
  );
}
