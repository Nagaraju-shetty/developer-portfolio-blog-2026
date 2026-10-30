
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        Error 404
      </p>

      <h1 className="mt-4 text-4xl font-bold text-slate-900">
        Page Not Found
      </h1>

      <p className="mt-4 max-w-md text-slate-600">
        Sorry, the page you are looking for does not exist
        or may have been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-blue-700 px-6 py-3 font-medium text-white hover:bg-blue-800"
      >
        Back to Home
      </Link>
    </main>
  );
}
