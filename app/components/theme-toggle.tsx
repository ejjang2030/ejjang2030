"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const preferredTheme: Theme = window.matchMedia(
      "(prefers-color-scheme: light)",
    ).matches
      ? "light"
      : "dark";
    const initialTheme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : preferredTheme;

    applyTheme(initialTheme);
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.dataset.theme as
      | Theme
      | undefined;
    const nextTheme: Theme = currentTheme === "light" ? "dark" : "light";
    applyTheme(nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // Privacy settings can block storage; visual switching should still work.
    }
    setTheme(nextTheme);
  };

  return (
    <button
      className={classNames(
        "flex cursor-pointer items-center gap-[7px] border-0 bg-transparent py-2 text-foreground outline-offset-4",
        {
          "[&_.theme-icon]:rotate-0": theme === "dark",
          "[&_.theme-icon]:-rotate-12": theme === "light",
        },
      )}
      data-testid="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-pressed={theme === "light"}
      aria-label={`${theme === "dark" ? "라이트" : "다크"} 모드로 전환`}
    >
      <span
        className={classNames(
          "theme-icon",
          "grid size-[26px] place-items-center rounded-full border border-line text-sm text-accent transition-transform duration-200 hover:rotate-[18deg] hover:border-accent",
        )}
        aria-hidden="true"
      >
        {theme === "dark" ? "☀" : "☾"}
      </span>
      <span className="text-xs text-muted max-md:hidden">
        {theme === "dark" ? "라이트" : "다크"}
      </span>
    </button>
  );
}
