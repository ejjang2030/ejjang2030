import type { Metadata } from "next";
import { headers } from "next/headers";
import { introContent } from "./content/intro";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL;
  const siteUrl = configuredUrl
    ? configuredUrl.startsWith("http")
      ? configuredUrl
      : `https://${configuredUrl}`
    : `${protocol}://${host}`;
  const description = introContent.description.join(" ");

  return {
    metadataBase: new URL(siteUrl),
    title: `${introContent.profile.name} | ${introContent.profile.role}`,
    description,
    manifest: "/manifest.webmanifest",
    icons: { icon: "/icon.svg" },
    openGraph: {
      title: `${introContent.profile.name} | ${introContent.profile.role}`,
      description,
      type: "website",
      locale: "ko_KR",
    },
    twitter: {
      card: "summary_large_image",
      title: `${introContent.profile.name} | ${introContent.profile.role}`,
      description,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
