'use client';

import { usePortfolio } from '@/context/portfolio.context';
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  WrenchIcon,
} from '@heroicons/react/24/outline';

export function Services() {
  const { portfolio } = usePortfolio();
  return (
    <div className="bg-white py-1 sm:py-3">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600 capitalize">
            {portfolio.role}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            My Services
          </p>
          <p className="mt-6 text-gray-600">
            Having worked in the computing field for a long time, i've been
            able to consolidate my skills into groups, which are;
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {portfolio.services.map((service) => (
              <div key={service.id} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    {service.id === '1' && (
                      <GlobeAltIcon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    )}
                    {service.id === '2' && (
                      <DevicePhoneMobileIcon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    )}
                    {service.id === '3' && (
                      <WrenchIcon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    )}
                  </div>
                  {service.title}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {service.summary}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
