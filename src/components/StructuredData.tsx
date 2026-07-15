import { CONTACT, REVIEWS, SITE_URL } from "@/lib/content";

// schema.org BeautySalon 구조화 데이터 — 네이버/구글 지역 검색 노출용 (v1과 동일 구조)
const schema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "STORY S",
  description:
    "세종 종촌동 토탈뷰티살롱. 헤어·네일·아트메이크업·속눈썹 전문. 30년 경력 원장 1:1 맞춤 시술.",
  url: SITE_URL,
  telephone: CONTACT.phone,
  priceRange: "₩₩",
  image: `${SITE_URL}/images/2.jpeg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "도움3로 105-2 2층 203호",
    addressLocality: "세종특별자치시",
    addressRegion: "세종특별자치시",
    postalCode: "30130",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.4895,
    longitude: 127.2474,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  hasMap: CONTACT.naverMap,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: String(REVIEWS.length),
    bestRating: "5",
  },
  sameAs: [CONTACT.instagram, CONTACT.naverMap],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
