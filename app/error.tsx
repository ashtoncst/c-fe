"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("[Error Boundary]", error.message);
  }, [error]);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6">
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
      <p className="text-lg leading-relaxed text-gray-600 max-w-md mb-8">
        We&apos;re experiencing a temporary issue. Please try again, and if the
        problem persists, our team is here to help.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => reset()}
          className="bg-[#038F8D] hover:bg-[#027573] text-white text-[14px] font-normal font-dm-sans py-3 px-8 rounded-full transition-colors duration-200 focus:ring-2 focus:ring-[#038F8D] focus:ring-offset-2 outline-none cursor-pointer"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="border-2 border-[#038F8D] text-[#038F8D] hover:bg-[#038F8D] hover:text-white text-[14px] font-normal font-dm-sans py-3 px-8 rounded-full transition-all duration-200 focus:ring-2 focus:ring-[#038F8D] focus:ring-offset-2 outline-none cursor-pointer"
        >
          Back to Homepage
        </Link>
      </div>
    </main>
  );
}
