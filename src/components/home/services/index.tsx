'use client';
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  WrenchIcon,
} from '@heroicons/react/24/outline';
import { usePortfolio } from '@/context/portfolio.context';
import { Service } from './service';
import { ServiceTitle } from './title';

export function Services() {
  const { portfolio } = usePortfolio();
  const icons = {
    '1': GlobeAltIcon,
    '2': DevicePhoneMobileIcon,
    '3': WrenchIcon,
  };
  const services = portfolio.services.map((item) => ({
    ...item,
    icon: icons[item.id as keyof typeof icons],
  }));

  return (
    <div className="bg-white py-1 sm:py-3" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ServiceTitle />
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {services.map((item) => {
              return <Service service={item} key={item.id} />;
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
