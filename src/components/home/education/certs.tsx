'use client';
import { usePortfolio } from '@/context/portfolio.context';
import { EducationAvatar } from './education-avatar';

export function EducationCerts() {
  const { portfolio } = usePortfolio();
  return (
    <figure className="mt-10">
      {portfolio.education.map((school, idx) => (
        <blockquote
          className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9"
          key={idx}
        >
          <p className="capitalize">{school.certificate}</p>
          <p>
            {school.start} - {school.end}
          </p>
          <p className="text-muted-foreground text-sm capitalize">
            {school.country}
          </p>
        </blockquote>
      ))}

      {portfolio.education.map((item, idx) => (
        <figcaption className="mt-10" key={idx}>
          <EducationAvatar />
          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
            <div className="text-gray-600 text-sm">{item.notes}</div>
          </div>
        </figcaption>
      ))}
    </figure>
  );
}
