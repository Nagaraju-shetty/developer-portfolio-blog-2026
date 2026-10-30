
"use client";

import { useEffect } from "react";

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Blog error:", error);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold text-red-600">
        Something went wrong!
      </h1>

      <p className="mt-4 text-gray-600">
        We couldn&apos;t load the blog. Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 rounded-lg bg-blue-700 px-6 py-3 text-white hover:bg-blue-800"
      >
        Try Again
      </button>
    </main>
  );
}
