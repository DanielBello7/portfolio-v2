'use client';
import { useState } from 'react';
import { Project } from './project';
import { ProjectTitle } from './title';
import { usePortfolio } from '@/context/portfolio.context';

export function Projects() {
  const { portfolio } = usePortfolio();
  const [selected, setSelected] = useState('All');

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ProjectTitle selected={selected} set={setSelected} />
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-10 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {portfolio.projects
            .filter((item) =>
              selected === 'All' ? item : item.tags.includes(selected)
            )
            .map((project, idx) => (
              <Project project={project} key={idx} />
            ))}
        </div>
      </div>
    </div>
  );
}
