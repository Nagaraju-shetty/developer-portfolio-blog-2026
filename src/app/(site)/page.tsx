
import Link from "next/link";
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Django",
];

export default function PortfolioHomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-16">
      <section className="rounded-2xl bg-blue-50 px-6 py-12 dark:bg-slate-900 sm:px-12">
        <p className="font-medium text-blue-700 dark:text-blue-400">
          Developer Portfolio
        </p>

        <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-slate-100 sm:text-5xl">
          Hi, I&apos;m a Developer.
        </h1>

        <p className="mt-5 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
          I enjoy building web applications and learning modern
          technologies. This portfolio showcases my projects,
          technical skills and blog articles.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/projects/">View Projects</Link>

          <Link href="/blog/" className="your-existing-classes">
  Read Blog
</Link>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Technical Skills
        </h2>

        <ul className="mt-5 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
