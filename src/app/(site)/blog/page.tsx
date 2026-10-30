
import Link from "next/link";
import { getPosts } from "@/lib/content";

type BlogPageProps = {
  searchParams: Promise<{ q?: string | string[] }>;
};

export default async function BlogPage({
  searchParams,
}: BlogPageProps) {
  const params = await searchParams;
  const rawQuery = Array.isArray(params.q)
    ? params.q[0]
    : params.q;

  const query = (rawQuery ?? "").trim().slice(0, 100);
  const normalizedQuery = query.toLowerCase();
  const posts = getPosts().filter((post) => {
    const searchableText = [
      post.title,
      post.excerpt,
      ...post.tags,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
        Developer Blog
      </h1>

      <p className="mt-4 text-slate-600 dark:text-slate-300">
        Articles about programming, React and Next.js.
      </p>

      <form action="/blog" method="GET" className="mt-8 flex gap-3">
        <input
          type="search"
          name="q"
          defaultValue={query}
          maxLength={100}
          placeholder="Search articles..."
          className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        />

        <button
          type="submit"
          className="rounded-lg bg-blue-700 px-5 py-3 text-white hover:bg-blue-800"
        >
          Search
        </button>
      </form>

      <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
        {posts.length} article(s) found
      </p>

      <div className="mt-6 space-y-5">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
          >
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              {post.title}
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300">
              {post.excerpt}
            </p>

            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              {post.tags.join(" · ")}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-blue-700 underline dark:text-blue-400"
            >
              Read article
            </Link>
          </article>
        ))}

        {posts.length === 0 && (
          <p className="rounded-lg bg-slate-100 p-5 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            No articles found. Try another search.
          </p>
        )}
      </div>
    </main>
  );
}
