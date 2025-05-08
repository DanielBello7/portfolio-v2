'use client';

import { useState } from 'react';
import classnames from 'classnames';
import { Project } from './project';
import { posts } from './items';

export function Projects() {
  const item = ['girl', 'boy', 'man', 'woman'];
  const [selected, setSelected] = useState(item[0]);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Projects
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
          <div className="w-full flex space-x-2 mt-3">
            {item.map((item, idx) => (
              <div
                onClick={() => setSelected(item)}
                key={idx}
                className={classnames(
                  'capitalize rounded-full px-3 py-1 cursor-pointer hover:scale-[105%] text-sm',
                  {
                    'bg-indigo-600 text-white': selected === item,
                    'bg-muted hover:bg-gray-200': selected !== item,
                  }
                )}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, idx) => (
            <Project post={post} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
