import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-gray-400 mb-6">
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
