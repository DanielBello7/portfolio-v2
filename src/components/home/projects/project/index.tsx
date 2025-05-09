'use client';
import type { Project } from '@/context/types';
import { ProjectDescription } from './description';
import { motion } from 'motion/react';
import { ProjectPreview } from './preview';
import { ProjectHeader } from './header';
import * as assets from '@/constants/asset';
import { ProjectLinks } from './links';
import { Tags } from './tags';

type Props = {
  project: Project;
};
export function Project({ project }: Props) {
  return (
    <motion.article className="flex max-w-xl flex-col items-start justify-between bg-gray-50 p-5 rounded-sm">
      <ProjectHeader
        category={project.isCompleted ? 'Completed' : 'Ongoing'}
        date="10/10/2025"
      />
      <ProjectPreview url={project.img} />
      <ProjectDescription
        description={project.description}
        title={project.title}
      />
      <Tags tags={project.tags} />
      <div className="relative mt-8 flex items-center gap-x-4">
        <img
          alt=""
          src={assets.user_img1.src}
          className="size-10 rounded-full bg-gray-50 object-cover"
        />
        <div className="text-sm/6">
          <div className="font-semibold text-gray-900">
            <p>
              <span className="absolute inset-0" />
              Daniel Bello
            </p>
          </div>
          <p className="text-gray-600 capitalize text-xs">
            {project.role}
          </p>
        </div>
      </div>
      <ProjectLinks github={project.github} url={project.url} />
    </motion.article>
  );
}
