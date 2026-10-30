
import Link from "next/link";

export default async function DocsPage({
  params,
}: {
  params: Promise<{ path?: string[] }>;
}) {
  const { path = [] } = await params;

  const currentPath = path.length
    ? path.join(" / ")
    : "Documentation Home";

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-16">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-blue-700">
          Documentation
        </h1>

        <p className="mt-6 text-lg text-gray-700">
          Current path: {currentPath}
        </p>

        <div className="mt-8 space-y-3">
          <p>Try these documentation routes:</p>

          <p>
            <Link
              href="/docs/getting-started"
              className="text-blue-600 underline"
            >
              Getting Started
            </Link>
          </p>

          <p>
            <Link
              href="/docs/getting-started/install"
              className="text-blue-600 underline"
            >
              Installation Guide
            </Link>
          </p>
        </div>

        <Link
          href="/"
          className="mt-8 inline-block text-blue-600 underline"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
