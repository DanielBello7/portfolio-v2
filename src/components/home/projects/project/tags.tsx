'use client';
type Props = {
  tags: string[];
};
export function Tags(props: Props) {
  return (
    <div className="w-full flex flex-wrap gap-2 mt-4">
      {props.tags.map((item, idx) => (
        <div
          className="text-[10px] px-2 py-1 rounded-full bg-white border"
          key={idx}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
