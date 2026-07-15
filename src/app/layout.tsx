import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Great_Vibes } from "next/font/google";
import { BING_SITE_VERIFICATION, NAVER_SITE_VERIFICATION, SITE_URL } from "@/lib/content";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

// STORY S 브랜드 마크(빨간 필기체 S)용 스크립트 폰트 — v1과 동일한 느낌
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "STORY S — 세종시 토탈뷰티살롱 스토리 에스",
  description:
    "세종 종촌동 토탈뷰티살롱 STORY S. 헤어 30년 경력 원장, 11년+ 네일아트·속눈썹·반영구 전문 원장이 1:1 맞춤 시술. 정찰제 운영. 세종특별자치시 도움3로 105-2 2층 203호. 종촌동 미용실 추천.",
  keywords: [
    "세종미용실", "세종시미용실", "종촌동미용실", "세종종촌동미용실", "세종헤어",
    "세종네일", "세종네일아트", "종촌동네일아트", "세종반영구", "세종속눈썹",
    "종촌동헤어샵", "세종토탈뷰티", "STORY S", "스토리에스", "스토리S",
    "세종펌", "세종염색",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    siteName: "STORY S",
    title: "STORY S — 세종시 토탈뷰티살롱",
    description: "헤어·네일·아트메이크업·속눈썹 전문. 30년 경력 원장 1:1 맞춤 시술. 정찰제 운영.",
    url: "/",
    locale: "ko_KR",
    images: [
      {
        url: "/images/2.jpeg",
        width: 1280,
        height: 960,
        alt: "세종 종촌동 토탈뷰티살롱 STORY S 매장 내부",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STORY S — 세종시 토탈뷰티살롱",
    description: "헤어·네일·아트메이크업·속눈썹 전문. 30년 경력 원장 1:1 맞춤 시술.",
    images: ["/images/2.jpeg"],
  },
  verification: (() => {
    const other: Record<string, string> = {};
    if (NAVER_SITE_VERIFICATION) other["naver-site-verification"] = NAVER_SITE_VERIFICATION;
    if (BING_SITE_VERIFICATION) other["msvalidate.01"] = BING_SITE_VERIFICATION;
    return Object.keys(other).length ? { other } : undefined;
  })(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${greatVibes.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <StructuredData />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
