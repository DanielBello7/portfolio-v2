'use client';
import { Code, Wrench } from 'lucide-react';
import { Number } from './number';
import { Strength } from './strength';

export function Skills() {
  const languages = [
    'Python',
    'Typescript',
    'Javascript',
    'Swift',
    'Kotlin',
    'C#',
  ];

  const skills = [
    'Fontend Development',
    'ReactJS',
    'NodeJS',
    'Flask',
    'Mobile Development',
    'ASP.NET-CORE',
    'DevOps',
    'PCB Design',
    'MongoDB',
    'Backend Development',
  ];
  return (
    <div className="bg-white py-1 sm:py-3">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 flex gap-20">
        <div className="w-1/2">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-md text-white bg-indigo-600">
              <Wrench className="size-6" />
            </div>
            <p className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-2xl lg:text-balance">
              Skills
            </p>
          </div>
          <p className="mt-6 text-lg/8 text-gray-600">
            Some of the few skills i possess
          </p>
          <div className="my-13">
            {skills.map((item, idx) => (
              <div className="mb-5" key={idx}>
                <div className="flex items-center justify-between">
                  <p className="text-sm mb-2">{item}</p>
                  <Number num={Math.floor(Math.random() * 100)} />
                </div>
                <Strength />
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2">
          <div className="flex items-start space-x-2">
            <div className="p-2 rounded-md text-white bg-indigo-600">
              <Code className="size-6" />
            </div>
            <p className="text-xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-2xl lg:text-balance">
              Programming Languages
            </p>
          </div>
          <p className="mt-6 text-md text-gray-600">
            Programming languages i use often
          </p>
          <div className="my-10">
            {languages.map((item, idx) => (
              <div className="mb-5" key={idx}>
                <div className="flex items-center justify-between">
                  <p className="text-sm mb-2">{item}</p>
                  <Number num={Math.floor(Math.random() * 100)} />
                </div>
                <Strength />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
