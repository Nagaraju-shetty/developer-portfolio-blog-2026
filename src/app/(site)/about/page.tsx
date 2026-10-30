
import Link from "next/link";
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-blue-700">
          About Us
        </h1>

        <p className="mt-6 text-lg text-gray-700">
          Welcome to my Next.js project!
        </p>

        <p className="mt-3 text-gray-600">
          This project demonstrates the Next.js App Router,
          file conventions, and routing.
        </p>

        <Link
  href="/"
  className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
>
  Back to Home
</Link>
      </div>
    </main>
  );
}
