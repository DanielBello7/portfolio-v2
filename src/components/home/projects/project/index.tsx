'use client';
import type { Project } from '@/context/types';
import { ProjectDescription } from './description';
import { motion } from 'motion/react';
import { ProjectPreview } from './preview';
import { ProjectHeader } from './header';
import * as assets from '@/constants/asset';
import { ProjectLinks } from './links';
import { Tags } from './tags';
import { Avatar, AvatarImage, AvatarFallback } from '@/components';

type Props = {
  project: Project;
};
export function Project({ project }: Props) {
  const itemVariants = {
    hidden: {
      opacity: 0,
    },
    visible: { opacity: 1 },
  };

  return (
    <motion.article
      className="flex max-w-xl flex-col items-start justify-between p-5 rounded-sm"
      variants={itemVariants}
    >
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
        <Avatar className="mx-auto size-10">
          <AvatarImage
            src={assets.user_img1.src}
            className="object-cover"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
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
