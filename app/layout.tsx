import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "장은재 | 개발자 포트폴리오",
  description:
    "사용자 경험과 안정적인 시스템을 함께 만드는 개발자 장은재의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var saved=localStorage.getItem('theme');var theme=(saved==='light'||saved==='dark')?saved:(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');var root=document.documentElement;root.dataset.theme=theme;root.classList.remove('light','dark');root.classList.add(theme);root.style.colorScheme=theme}catch(e){}})()`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
