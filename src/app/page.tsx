'use client';
import {
  Contact,
  Education,
  Hero,
  Projects,
  Experience,
  Services,
  Skills,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <Services />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
