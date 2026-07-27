import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "장은재 · AI 제품 개발자",
    short_name: "장은재",
    description:
      "AI 모델부터 웹서비스와 시스템까지 연결하는 제품 개발자 장은재의 포트폴리오입니다.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#081322",
    lang: "ko",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
