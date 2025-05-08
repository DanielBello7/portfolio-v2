import Image from 'next/image';
import {
  Contact,
  Education,
  Hero,
  Projects,
  Services,
} from '@/components';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-grid">
      <Hero />
      <Services />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}
