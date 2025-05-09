'use client';
import Image, { StaticImageData } from 'next/image';

type Props = {
  url: string | StaticImageData;
};
export function ProjectPreview(props: Props) {
  return (
    <div className="w-full h-[200px] border-1 rounded-lg mt-5 bg-muted relative">
      <Image
        className="w-full h-full object-cover rounded-lg"
        src={props.url}
        alt="preview"
        fill
      />
    </div>
  );
}
