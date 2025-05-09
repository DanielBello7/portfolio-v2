'use client';

type Props = {
  title: string;
  description: string;
};
export function ProjectDescription(props: Props) {
  return (
    <div className="group relative">
      <h3 className="mt-3 text-md font-semibold text-gray-900 group-hover:text-gray-600">
        <p>
          <span className="absolute inset-0" />
          {props.title}
        </p>
      </h3>
      <p className="mt-5 line-clamp-3 text-sm text-gray-600">
        {props.description}
      </p>
    </div>
  );
}
