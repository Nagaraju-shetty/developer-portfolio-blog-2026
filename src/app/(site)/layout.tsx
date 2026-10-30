
import NavLink from "@/components/NavLink";
import ThemeToggle from "@/components/ThemeToggle";
import type { ReactNode } from "react";
import Link from "next/link";

export default function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <Link
            href="/"
            className="text-xl font-bold text-blue-700 dark:text-blue-400"
          >
            My Portfolio
          </Link>

          
<div className="flex flex-wrap items-center gap-3">
  <NavLink href="/">Home</NavLink>
  <NavLink href="/projects">Projects</NavLink>
  <NavLink href="/blog">Blog</NavLink>
  <ThemeToggle />
</div>

        </nav>
      </header>

      {children}

      <footer className="mt-16 border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        Built with Next.js, TypeScript and Tailwind CSS.
      </footer>
    </div>
  );
}
