'use client';
import type { Service } from '@/context/types';
import { ComponentType } from 'react';
import { motion } from 'motion/react';

type Props = {
  service: Service & {
    icon: ComponentType<any>;
  };
};
export function Service(props: Props) {
  const { service } = props;
  return (
    <motion.div
      key={service.id}
      className="relative pl-16"
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        transition: {
          opacity: {
            delay: 0.4,
            duration: 0.9,
          },
        },
      }}
    >
      <dt className="text-base/7 font-semibold text-gray-900">
        <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-amber-900">
          <service.icon aria-hidden="true" className="size-5 text-white" />
        </div>
        {service.title}
      </dt>
      <dd className="mt-2 text-sm/7 text-gray-400">{service.summary}</dd>
    </motion.div>
  );
}
