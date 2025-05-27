'use client';
export function ContactHeader() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
        Contact
      </h2>
      <p className="mt-2 text-sm text-gray-600 px-20">
        Reach out to me. Let me know if you are interested in my services
        or collaboration.
      </p>
      <div className="mt-8">
        <a
          className="text-lg font-bold underline hover:text-red-400 text-amber-900 hover:underline"
          href="/Adegoke Adeyinka Daniel-Bello-Full Stack Developer(readable).pdf"
          download="Resume.pdf"
        >
          Download C.V
        </a>
      </div>
    </div>
  );
}
