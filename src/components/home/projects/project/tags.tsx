'use client';
type Props = {
  tags: string[];
};
export function Tags(props: Props) {
  return (
    <div className="w-full flex flex-wrap space-x-2 space-y-2 mt-4">
      {props.tags.map((item, idx) => (
        <div
          className="text-[10px] px-2 py-1 rounded-full bg-muted"
          key={idx}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
