'use client';
import { Courses } from './courses';
import { EducationBackground } from './background';
import { EducationTitle } from './title';
import { EducationCerts } from './certs';
import { motion } from 'motion/react';

export function Education() {
  return (
    <motion.section
      className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8"
      id="education"
      initial={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          opacity: {
            ease: 'linear',
            duration: 1.4,
          },
          scale: {
            delay: 0.5,
            ease: 'linear',
            duration: 1.0,
          },
        },
      }}
    >
      <EducationBackground />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <EducationTitle />
        <EducationCerts />
      </div>
      <div className="h-[100px]" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Courses />
      </div>
    </motion.section>
  );
}
