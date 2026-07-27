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
    <button className="themeToggle" type="button" onClick={toggleTheme}
      aria-label={`${theme === "dark" ? "라이트" : "다크"} 모드로 전환`}>
      <span className="themeIcon" aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
      <span className="themeText">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
