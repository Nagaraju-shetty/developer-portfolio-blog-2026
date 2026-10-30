
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({
  href,
  children,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`rounded-md px-2 py-1 transition-colors ${
        isActive
          ? "bg-blue-100 font-semibold text-blue-800 dark:bg-blue-950 dark:text-blue-300"
          : "text-slate-700 hover:text-blue-700 dark:text-slate-200 dark:hover:text-blue-400"
      }`}
    >
      {children}
    </Link>
  );
}
