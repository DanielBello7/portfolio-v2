import { Book } from 'lucide-react';
import { Courses } from './courses';
import { Bg } from './background';
import { usePortfolio } from '@/context/portfolio.context';
import { Avatar, AvatarImage, AvatarFallback } from '@/components';

export function Education() {
  const { portfolio } = usePortfolio();
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <Bg />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="flex space-x-2 items-center justify-center">
          <Book className="text-indigo-600 size-7" />
          <h1 className="text-indigo-600 text-2xl font-black">
            Education
          </h1>
        </div>
        <figure className="mt-10">
          {portfolio.education.map((school) => (
            <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              <p className="capitalize">{school.certificate}</p>
              <p>
                {school.start} - {school.end}
              </p>
              <p className="text-muted-foreground text-sm capitalize">
                {school.country}
              </p>
            </blockquote>
          ))}

          {portfolio.education.map((item) => (
            <figcaption className="mt-10">
              <Avatar className="mx-auto size-20">
                <AvatarImage
                  src={portfolio.imgs[portfolio.imgs.length - 1].src}
                  className="object-cover"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="text-gray-600">{item.notes}</div>
              </div>
            </figcaption>
          ))}
        </figure>
      </div>

      <div className="h-[100px]" />

      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Courses />
      </div>
    </section>
  );
}
