"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("[Global Error Boundary]", error.message);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex flex-col items-center justify-center px-6 font-sans antialiased text-center">
        {/* Large 500 display */}
        <p
          className="text-[100px] sm:text-[140px] md:text-[180px] font-bold leading-none text-gray-100 select-none"
          aria-hidden="true"
        >
          500
        </p>

        {/* Heading */}
        <h1 className="text-[24px] sm:text-[28px] md:text-[35px] font-bold text-gray-900 mb-4 -mt-4">
          Something Went Wrong
        </h1>

        {/* Body */}
        <p className="text-lg leading-relaxed text-gray-600 max-w-md mb-2">
          We&apos;re experiencing a temporary issue. Please try again, and if
          the problem persists, contact us at
        </p>
        <a
          href="mailto:globalbusiness@convergeict.com"
          className="text-[#038F8D] hover:text-[#027573] font-semibold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#038F8D] focus:ring-offset-2 rounded mb-8"
        >
          globalbusiness@convergeict.com
        </a>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => reset()}
            className="bg-[#038F8D] hover:bg-[#027573] text-white text-[14px] font-normal font-dm-sans py-3 px-8 rounded-full transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#038F8D] focus:ring-offset-2"
          >
            Try Again
          </button>
          <button
            onClick={() => { window.location.href = "/"; }}
            className="border-2 border-[#038F8D] text-[#038F8D] hover:bg-[#038F8D] hover:text-white text-[14px] font-normal font-dm-sans py-3 px-8 rounded-full transition-all duration-200 text-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#038F8D] focus:ring-offset-2"
          >
            Back to Homepage
          </button>
        </div>
      </body>
    </html>
  );
}
