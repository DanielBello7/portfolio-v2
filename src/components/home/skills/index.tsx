'use client';
import { SkillsHeader } from './header';
import { Languages } from './languages';
import { Detailed } from './detailed';

export function Skills() {
  return (
    <div className="bg-white py-1 sm:py-3" id="skills">
      <SkillsHeader />
      <div className="mx-auto max-w-3xl px-6 lg:px-8 flex flex-col md:flex-row gap-20">
        <Detailed />
        <Languages />
      </div>
    </div>
  );
}
