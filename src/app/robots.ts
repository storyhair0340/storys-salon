import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";

// 검색·소셜 봇 + AI "답변엔진" 봇은 허용(AEO), 대량 "학습" 수집봇과 SEO 스크래퍼는 차단
const ALLOWED_BOTS = [
  // 검색엔진
  "Googlebot",
  "Googlebot-Image",
  "Yeti", // 네이버
  "Naverbot",
  "Bingbot",
  // 소셜 미리보기
  "kakaotalk-scrap",
  "facebookexternalhit",
  "Twitterbot",
  "Applebot",
  // AI 답변엔진 (실시간 인용·추천 — AEO 핵심)
  "OAI-SearchBot", // ChatGPT 검색
  "ChatGPT-User", // ChatGPT 사용자 요청 실시간 조회
  "PerplexityBot", // Perplexity 색인
  "Perplexity-User", // Perplexity 실시간 조회
  "ClaudeBot", // Claude 웹 인용
];

const BLOCKED_BOTS = [
  // SEO 분석/수집 도구
  "AhrefsBot", "SemrushBot", "DotBot", "MJ12bot", "DataForSeoBot",
  "PetalBot", "BLEXBot", "SeekportBot",
  // AI "학습" 데이터 수집 봇 (답변용 아님 — 무단 학습 차단 유지)
  "GPTBot", "CCBot", "anthropic-ai", "Google-Extended",
  "cohere-ai", "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...ALLOWED_BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
      ...BLOCKED_BOTS.map((userAgent) => ({ userAgent, disallow: "/" })),
      { userAgent: "*", allow: "/", crawlDelay: 10 },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
