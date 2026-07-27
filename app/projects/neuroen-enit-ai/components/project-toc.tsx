"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";

const items = [
  ["01", "시작 배경", "background"],
  ["02", "프로젝트 개요", "overview"],
  ["03", "서비스 흐름", "service-flow"],
  ["04", "담당 업무", "responsibilities"],
  ["05", "모델 개발", "model-evolution"],
  ["06", "시스템 발전", "system-evolution"],
  ["07", "결정의 이유", "decisions"],
];

export function ProjectTableOfContents() {
  const [activeId, setActiveId] = useState(items[0][2]);

  useEffect(() => {
    const sections = items
      .map(([, , id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveId(visible.target.id);
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed right-5 top-1/2 z-50 w-[190px] -translate-y-1/2 rounded-2xl border border-line bg-background/95 p-3 shadow-xl backdrop-blur-md max-lg:bottom-4 max-lg:left-4 max-lg:right-4 max-lg:top-auto max-lg:w-auto max-lg:translate-y-0"
      aria-label="프로젝트 목차"
    >
      <div className="max-lg:flex max-lg:items-center max-lg:gap-4 max-lg:overflow-x-auto max-lg:[scrollbar-width:none] max-lg:[&::-webkit-scrollbar]:hidden">
        <span className="block px-3 pb-3 pt-1 text-xs font-black tracking-[.16em] text-muted max-lg:shrink-0 max-lg:p-0">
          목차
        </span>
        <div className="flex flex-col gap-1 max-lg:min-w-max max-lg:flex-row max-lg:gap-2">
          {items.map(([number, label, id]) => {
            const isActive = activeId === id;
            return (
              <a
                href={`#${id}`}
                key={id}
                aria-current={isActive ? "location" : undefined}
                className={classNames(
                  "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition-colors max-lg:rounded-full max-lg:border max-lg:px-4 max-lg:py-2",
                  isActive
                    ? "bg-accent text-button-text max-lg:border-accent"
                    : "text-muted hover:bg-accent/10 hover:text-accent max-lg:border-line",
                )}
              >
                <span
                  className={classNames(
                    "font-mono text-xs",
                    isActive ? "text-button-text/75" : "text-accent",
                  )}
                >
                  {number}
                </span>
                <span>{label}</span>
                {isActive && (
                  <span className="ml-auto size-1.5 rounded-full bg-button-text max-lg:hidden" aria-hidden="true" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
