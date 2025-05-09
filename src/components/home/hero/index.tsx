'use client';
import { Header } from '../../header';
import { Background } from './background';
import { Polygon } from './polygon';
import { UserAvatar } from './user-avatar';
import { HeroMiddle } from './summary';
import { HeroHeader } from './title';

export function Hero() {
  return (
    <div className="bg-white bg-grid">
      <Header />
      <div className="relative isolate px-6 lg:px-8">
        <Background />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-20">
          <UserAvatar />
          <HeroHeader />
          <HeroMiddle />
        </div>
        <Polygon />
      </div>
      <div className="w-full h-[150px] bg-gradient-to-t from-white from-50%" />
    </div>
  );
}
