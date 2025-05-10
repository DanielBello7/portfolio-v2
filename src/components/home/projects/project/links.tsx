'use client';
import { Github, Globe } from 'lucide-react';

type Props = {
  url: string | null;
  github: string | null;
};
export function ProjectLinks(props: Props) {
  return (
    <div className="w-full flex items-center space-x-3 mt-4 text-xs">
      {props.url && (
        <a
          target="_blank"
          rel="noreferrer"
          href={props.url}
          className="text-amber-900 hover:underline bg-indigo-50 rounded-full px-2 py-1 flex items-center gap-1"
        >
          <Globe className="size-3" />
          <span>Preview</span>
        </a>
      )}
      {props.github && (
        <a
          target="_blank"
          rel="noreferrer"
          href={props.github}
          className="text-amber-900 hover:underline flex items-center gap-1"
        >
          <Github className="size-3" />
          <span>GitHub</span>
        </a>
      )}
    </div>
  );
}
