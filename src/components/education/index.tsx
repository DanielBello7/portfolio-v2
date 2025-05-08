import { Book } from 'lucide-react';
import { Courses } from './courses';

export function Education() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="flex space-x-2 items-center justify-center">
          <Book className="text-indigo-600 size-7" />
          <h1 className="text-indigo-600 text-2xl font-black">
            Education
          </h1>
        </div>
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>B.Eng Computer Engineering</p>
            {/* <p className="text-muted-foreground text-sm">
              Ekiti State University Ado-Ekiti, Ekiti State Nigeria.
            </p> */}
            <p>2014 - 2019</p>
            <p className="text-muted-foreground text-sm">Nigeria.</p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="mx-auto size-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Awards</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">
                Graduated with honors for best final project design
              </div>
            </div>
          </figcaption>
        </figure>
      </div>

      <div className="h-[100px]" />

      <div className="mx-auto max-w-2xl lg:max-w-4xl border">
        <Courses />
      </div>
    </section>
  );
}
