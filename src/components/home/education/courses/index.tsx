import { usePortfolio } from '@/context/portfolio.context';
import { Course } from './course';

export function Courses() {
  const { portfolio } = usePortfolio();
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl lg:text-balance">
        Courses & Certifications
      </p>
      <div className="text-gray-400 text-sm px-20">
        Some of the courses and certifications I’ve completed include
      </div>
      <div className="w-full mt-15 grid grid-cols-1 mg:grid-cols-2 gap-4 grid-rows-1">
        {portfolio.courses.map((course, idx) => (
          <Course course={course} key={idx} />
        ))}
      </div>
    </div>
  );
}
