
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/lib/content";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
        My Projects
      </h1>

      <p className="mt-3 text-slate-600 dark:text-slate-300">
        Here are some of the projects I have built.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => {
          
const image =
  project.slug === "farmer-market"
    ? "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80"
    : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80";

          return (
            <article
              key={project.slug}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
            >
              <Image
  src={image}
  alt={project.title}
  width={900}
  height={400}
  className="h-48 w-full object-cover"
/>

              <div className="p-5">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h2>

                <p className="mt-2 leading-6 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-800 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-5 inline-block font-semibold text-blue-700 hover:underline dark:text-sky-400"
                >
                  View Project →
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
