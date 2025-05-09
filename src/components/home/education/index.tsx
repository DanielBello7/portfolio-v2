'use client';
import { Courses } from './courses';
import { EducationBackground } from './background';
import { EducationTitle } from './title';
import { EducationCerts } from './certs';

export function Education() {
  return (
    <section
      className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8"
      id="education"
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
    </section>
  );
}
