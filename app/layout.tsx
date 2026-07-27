import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eunjae Jang | Developer Portfolio",
  description: "사용자 경험과 안정적인 시스템을 함께 만드는 개발자 장은재의 포트폴리오입니다.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var saved=localStorage.getItem('theme');var theme=saved||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme}catch(e){}})()` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
