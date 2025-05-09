'use client';
import { Avatar, AvatarImage, AvatarFallback } from '@/components';
import { usePortfolio } from '@/context/portfolio.context';

export function EducationAvatar() {
  const { portfolio } = usePortfolio();
  return (
    <Avatar className="mx-auto size-20">
      <AvatarImage
        src={(portfolio.imgs[portfolio.imgs.length - 1] as any).src}
        className="object-cover"
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
