"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-3xl font-bold mb-4">Something went wrong 😢</h2>
      <p className="text-gray-400 mb-6">
        An unexpected error occurred. Please try again.
      </p>

      <button
        onClick={reset}
        className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
      >
        Try Again
      </button>
    </div>
  );
}
