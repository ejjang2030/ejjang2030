"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.dataset.theme as Theme | undefined;
    setTheme(current ?? "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      className="flex cursor-pointer items-center gap-[7px] border-0 bg-transparent py-2 text-foreground outline-offset-4"
      type="button"
      onClick={toggleTheme}
      aria-label={`${theme === "dark" ? "라이트" : "다크"} 모드로 전환`}
    >
      <span
        className="grid size-[26px] place-items-center rounded-full border border-line text-sm text-accent transition-transform duration-200 hover:rotate-[18deg] hover:border-accent"
        aria-hidden="true"
      >
        {theme === "dark" ? "☀" : "☾"}
      </span>
      <span className="text-xs text-muted max-md:hidden">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
