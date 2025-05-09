type Props = {
  date: string;
  category: string;
};
export function ProjectHeader(props: Props) {
  return (
    <div className="flex items-center gap-x-4 text-xs">
      <time dateTime={props.date} className="text-gray-500">
        {props.date}
      </time>
      <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
        {props.category}
      </p>
    </div>
  );
}
