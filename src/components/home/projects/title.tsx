'use client';
import { Picker } from './picker';

type Props = {
  selected: string;
  set: (val: string) => void;
};
export function ProjectTitle(props: Props) {
  return (
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
        Projects
      </h2>
      <p className="mt-2 text-md/8 text-gray-500">
        Check some of my personal projects
      </p>
      <Picker selected={props.selected} set={props.set} />
    </div>
  );
}
