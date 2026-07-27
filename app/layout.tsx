import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "장은재 | 개발자 포트폴리오",
  description:
    "사용자 경험과 안정적인 시스템을 함께 만드는 개발자 장은재의 포트폴리오입니다.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
