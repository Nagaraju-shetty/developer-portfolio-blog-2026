
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/content";

export function generateStaticParams() {
  return getProjects().map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-16">
      <Link
        href="/projects"
        className="text-blue-700 underline hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
      >
        ← Back to Projects
      </Link>

      <article className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
          {project.title}
        </h1>

        <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900 dark:text-slate-100">
          Technologies Used
        </h2>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full bg-blue-50 px-3 py-2 text-sm text-blue-700 dark:bg-blue-950 dark:text-blue-300"
            >
              {technology}
            </li>
          ))}
        </ul>

        <h2 className="mt-8 text-xl font-semibold text-slate-900 dark:text-slate-100">
          Key Features
        </h2>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 dark:text-slate-300">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </article>
    </main>
  );
}
