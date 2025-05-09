'use client';
import { Background } from './background';
import { Form } from './form';
import { ContactHeader } from './header';

export function Contact() {
  return (
    <div
      className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8"
      id="contact"
    >
      <Background />
      <ContactHeader />
      <Form />
    </div>
  );
}
