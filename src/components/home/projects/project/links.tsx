'use client';

type Props = {
  url: string | null;
  github: string | null;
};
export function ProjectLinks(props: Props) {
  return (
    <div className="w-full flex items-center space-x-3 mt-4 text-xs">
      {props.url && (
        <a
          href={props.url}
          className="text-indigo-600 hover:underline bg-indigo-50 rounded-full px-2 py-1"
        >
          Preview
        </a>
      )}
      {props.github && (
        <a href={props.github} className="text-indigo-600 hover:underline">
          GitHub
        </a>
      )}
    </div>
  );
}
