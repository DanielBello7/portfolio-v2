'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components';
import { usePortfolio } from '@/context/portfolio.context';

export function UserAvatar() {
  const { portfolio } = usePortfolio();
  return (
    <div className="w-full flex justify-center my-10">
      <Avatar className="size-60 border-4 border-indigo-600">
        <AvatarImage src={portfolio.avatar.src} className="object-cover" />
        <AvatarFallback>DB</AvatarFallback>
      </Avatar>
    </div>
  );
}
