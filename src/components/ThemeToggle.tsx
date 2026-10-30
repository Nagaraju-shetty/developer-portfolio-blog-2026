
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const useDark =
      savedTheme === "dark" ||
      (savedTheme === null && prefersDark);

    document.documentElement.classList.toggle("dark", useDark);

    // Keep the saved theme available to the button without
    // updating React state inside this effect.
    localStorage.setItem("theme", useDark ? "dark" : "light");
  }, []);

  function toggleTheme() {
    const nextDark = !dark;

    setDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-lg border border-slate-300 px-3 py-2 text-sm hover:bg-slate-100"
    >
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
