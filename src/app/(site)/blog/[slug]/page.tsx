
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/content";

type BlogDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({
  params,
}: BlogDetailProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16">
      <Link
        href="/blog"
        className="text-blue-700 underline dark:text-blue-400"
      >
        ← Back to Blog
      </Link>

      <article className="mt-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
          {post.title}
        </h1>

        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          {post.excerpt}
        </p>

        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          Tags: {post.tags.join(", ")}
        </p>

        <div className="mt-8 space-y-5 leading-8 text-slate-700 dark:text-slate-200">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
