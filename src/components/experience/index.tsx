'use client';

import { Dot } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import React from 'react';
import { Single } from './single';

export function Experience() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const lineColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['#e5e7eb', '#ff0088']
  ); // From black to pink

  const data = [
    {
      position: 'Developer',
      company: 'Defence Space Administration',
      year: '2019',
      points: [
        '8+ years professional skills in both frontend and backend web development, using tools like React, ASP.NET-CORE, NodeJS etc as well as DevOps developments.',
        'Advanced level development skills with over 6+ years experience in development for mobile platforms using libraries like React Native and native development tools like Xcode and Android Studio',
        'In-depth knowledge and experience in the design and development embedded systems hardware and software',
      ],
    },
    {
      position: 'Senior Developer',
      company: 'Defence Space Administration',
      year: '2018',
      points: [
        '8+ years professional skills in both frontend and backend web development, using tools like React, ASP.NET-CORE, NodeJS etc as well as DevOps developments.',
        'Advanced level development skills with over 6+ years experience in development for mobile platforms using libraries like React Native and native development tools like Xcode and Android Studio',
        'In-depth knowledge and experience in the design and development embedded systems hardware and software',
      ],
    },
    {
      position: 'Senior Developer',
      company: 'Defence Space Administration',
      year: '2018',
      points: [
        '8+ years professional skills in both frontend and backend web development, using tools like React, ASP.NET-CORE, NodeJS etc as well as DevOps developments.',
        'Advanced level development skills with over 6+ years experience in development for mobile platforms using libraries like React Native and native development tools like Xcode and Android Studio',
        'In-depth knowledge and experience in the design and development embedded systems hardware and software',
      ],
    },
    {
      position: 'Senior Developer',
      company: 'Defence Space Administration',
      year: '2018',
      points: [
        '8+ years professional skills in both frontend and backend web development, using tools like React, ASP.NET-CORE, NodeJS etc as well as DevOps developments.',
        'Advanced level development skills with over 6+ years experience in development for mobile platforms using libraries like React Native and native development tools like Xcode and Android Studio',
        'In-depth knowledge and experience in the design and development embedded systems hardware and software',
      ],
    },
    {
      position: 'Senior Developer',
      company: 'Defence Space Administration',
      year: '2018',
      points: [
        '8+ years professional skills in both frontend and backend web development, using tools like React, ASP.NET-CORE, NodeJS etc as well as DevOps developments.',
        'Advanced level development skills with over 6+ years experience in development for mobile platforms using libraries like React Native and native development tools like Xcode and Android Studio',
        'In-depth knowledge and experience in the design and development embedded systems hardware and software',
      ],
    },
  ];
  return (
    <div className="bg-white py-1 sm:py-3">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative" ref={ref}>
        {data.map((item, idx) => (
          <Single idx={idx} item={item} key={idx} />
        ))}
      </div>
    </div>
  );
}
