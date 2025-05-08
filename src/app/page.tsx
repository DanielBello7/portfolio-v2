'use client';
import {
  Contact,
  Education,
  Hero,
  Projects,
  Experience,
  Services,
  Skills,
} from '@/components';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-grid">
      <Hero />
      <Services />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
