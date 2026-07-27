import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "장은재 | 개발자 포트폴리오",
  description:
    "사용자 경험과 안정적인 시스템을 함께 만드는 개발자 장은재의 포트폴리오입니다.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "장은재 | AI 제품 개발자",
    description:
      "AI 모델부터 API와 웹서비스까지 연결해 실제로 쓰이는 제품을 만듭니다.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "장은재 | AI 제품 개발자",
    description:
      "AI 모델부터 API와 웹서비스까지 연결해 실제로 쓰이는 제품을 만듭니다.",
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
