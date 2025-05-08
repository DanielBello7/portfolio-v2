'use client';

import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  WrenchIcon,
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Full Stack Web Development',
    // description: 'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    description:
      '8+ years professional skills in both frontend and backend web development, using tools like React, ASP.NET-CORE, NodeJS etc as well as DevOps developments.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Mobile Development',
    // description: 'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    description:
      'Advanced level development skills with over 6+ years experience in development for mobile platforms using libraries like React Native and native development tools like Xcode and Android Studio ',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Embedded Systems Development',
    // description: 'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    description:
      'In-depth knowledge and experience in the design and development embedded systems hardware and software',
    icon: WrenchIcon,
  },
];

export function Services() {
  return (
    <div className="bg-white py-1 sm:py-3">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            Computer Engineer
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            My Services
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet
            quis. Suspendisse eget egestas a elementum pulvinar et feugiat
            blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
