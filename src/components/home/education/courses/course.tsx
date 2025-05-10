'use client';
import { ArrowRight } from 'lucide-react';
import { Course as CourseItem } from '@/context/types';
import * as motion from 'motion/react-client';

type Props = {
  course: CourseItem;
};
export function Course({ course }: Props) {
  return (
    <motion.article
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      transition={{ duration: 0.01 }}
      key={course.id}
      className="border cursor-pointer flex max-w-xl flex-col items-start justify-between p-4 bg-gray-50 rounded-sm"
    >
      <div className="flex items-center gap-x-4 text-xs justify-center w-full">
        <time dateTime={course.end} className="text-gray-500">
          {course.end}
        </time>
      </div>
      <div className="group relative text-center w-full">
        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
          <p>
            <span className="absolute inset-0 capitalize" />
            {course.title}
          </p>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600 capitalize">
          {course.organization}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4 w-full justify-center">
        <p className="flex items-center space-x-2 text-amber-900 hover:underline">
          <a href={course.url} className="text-xs" target="_blank">
            See More
          </a>
          <ArrowRight className="size-3" />
        </p>
      </div>
    </motion.article>
  );
}
