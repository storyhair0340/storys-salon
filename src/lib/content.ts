import type { CategoryChip, Director, Review, ServiceCard, WhyCard } from "@/types/content";

// 사이트 정식 URL — 새 커스텀 도메인이 생기면 이 한 줄만 교체하면 SEO 메타·robots·sitemap·JSON-LD에 일괄 반영됩니다.
export const SITE_URL = "https://www.storys-salon.com";

// 네이버 서치어드바이저 소유확인 코드 — searchadvisor.naver.com에서 "HTML 태그" 방식으로 받은
// content 값만 넣으면 <meta name="naver-site-verification" ...> 태그가 자동으로 생성됩니다.
// 예: "abcdef1234567890abcdef1234567890abcdef12"
export const NAVER_SITE_VERIFICATION = "";

export const CONTACT = {
  phone: "044-417-6200",
  phoneHref: "tel:0444176200",
  naverBooking: "https://naver.me/FwGGMfN0",
  naverMap: "https://map.naver.com/p/entry/place/1584649819",
  // 네이버 '스타일' 탭 — 매장이 헤어(1584649819)·네일(1807431761) 별도 플레이스로 등록됨
  naverHairStyles:
    "https://map.naver.com/p/search/%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%97%90%EC%8A%A4/place/1584649819?c=15.00,0,0,0,dh&placePath=%2FstyleInfo",
  naverNailStyles:
    "https://map.naver.com/p/search/%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%97%90%EC%8A%A4/place/1807431761?c=15.00,0,0,0,dh&placePath=%2FstyleInfo",
  instagram: "https://www.instagram.com/hairpark0340",
  // 카카오톡 채널 채팅 URL — 채널 개설 후 입력하면 폼에 "사진 보내기" 버튼이 켜집니다.
  // 예: "https://pf.kakao.com/_xxxxxxx/chat"
  kakaoChannel: "",
  // 구글 비즈니스 프로필 URL — 개설 후 입력하면 구조화 데이터(sameAs)·오시는 길에 자동 반영됩니다.
  // 예: "https://g.page/r/xxxxxxxxxxxxx" 또는 "https://maps.app.goo.gl/xxxxxxxx"
  googleBusiness: "",
  address: "세종특별자치시 도움3로 105-2 2층 203호",
  addressNote: "종촌동 가재마을 7단지 건너편 새마을금고 2층",
  hours: "월–토 10:00 – 20:00",
  hoursNote: "일요일 정기 휴무 (사전예약 시 가능, 할증 10%)",
  transit: ["1000번 버스 → 가재마을 7단지 하차", "1004번 버스 → 가재마을 11단지 하차 후 신호 건너편"],
} as const;

export const MARQUEE_ITEMS = [
  "30년+ 헤어 경력",
  "11년+ 네일 경력",
  "정찰제 투명 가격",
  "네이버 예약 가능",
  "1:1 전담 시술",
  "세종 종촌동",
  "토탈 뷰티 케어",
];

export const SERVICES: ServiceCard[] = [
  {
    title: "헤어",
    description: "30년 경력 원장이 상담부터 시술까지 직접. 컷·펌·염색·기장연장 맞춤 케어.",
    prices: ["컷(남성) 18,000원~", "컷(여성) 20,000원~"],
    icon: "hair",
  },
  {
    title: "네일아트",
    description: "젤네일·네일아트·페디아트까지 수백 가지 컬러로 개성을 표현합니다.",
    prices: ["손 케어 20,000원~", "기본 손 젤 40,000원~"],
    icon: "nail",
  },
  {
    title: "속눈썹 · 반영구",
    description: "속눈썹 연장·펌과 자연눈썹·아이라인 등 섬세한 반영구 시술.",
    prices: ["속눈썹 펌 35,000원~"],
    icon: "lash",
  },
];

export const CATEGORY_CHIPS: CategoryChip[] = [
  { label: "컷 · 스타일", image: "/images/cut.jpg", chipColor: "bg-quote-blue", position: "left-[4%] top-[8%]", delay: "0s" },
  { label: "카페 같은 공간", image: "/images/2.jpeg", chipColor: "bg-quote-cream", position: "left-[16%] top-[58%]", delay: "0.8s" },
  { label: "젤네일", image: "/images/gelnail.jpg", chipColor: "bg-quote-pink", position: "left-[28%] top-[2%]", delay: "1.6s" },
  { label: "네일아트", image: "/images/7.jpeg", chipColor: "bg-quote-purple", position: "left-[30%] top-[70%]", delay: "2.4s" },
  { label: "속눈썹", image: "/images/eyelash.jpg", chipColor: "bg-quote-blue", position: "left-[2%] top-[38%]", delay: "1s" },
  { label: "염색 · 클리닉", image: "/images/styling1.png", chipColor: "bg-chip-green", position: "right-[28%] top-[4%]", delay: "1.2s" },
  { label: "펌 · 스타일링", image: "/images/perm.jpg", chipColor: "bg-quote-pink", position: "right-[30%] top-[66%]", delay: "0.4s" },
  { label: "홈케어 제품", image: "/images/8.jpeg", chipColor: "bg-quote-blue", position: "right-[4%] top-[12%]", delay: "2s" },
  { label: "프리미엄 제품", image: "/images/5.jpeg", chipColor: "bg-quote-cream", position: "right-[8%] top-[60%]", delay: "2.8s" },
];

export const WHY_CARDS: WhyCard[] = [
  {
    title: "1:1 전담 시술",
    description: "예약제로 운영되어 대기 없이, 각 분야 전문 원장이 처음부터 끝까지 직접 시술합니다.",
    icon: "person",
  },
  {
    title: "정찰제 투명 가격",
    description: "모든 시술은 정찰제. 상담 후 가격이 달라지는 일 없이 투명하게 안내해 드립니다.",
    icon: "tag",
  },
  {
    title: "카페 같은 공간",
    description: "편안한 분위기의 공간에서 조용히, 혹은 도란도란 — 원하시는 분위기로 모십니다.",
    icon: "cafe",
  },
];

export const DIRECTORS: Director[] = [
  {
    name: "석이 원장",
    role: "Hair Director",
    tagline: "30년 이상의 헤어 경력으로 고객 한 분 한 분의 이야기를 담은 스타일을 완성합니다.",
    image: "/images/hair-director.png",
    accent: "green",
    reverse: false,
    checklist: [
      "얼굴형·모질·라이프스타일을 깊이 이해하는 1:1 상담",
      "컷·펌·염색·기장연장 등 모든 헤어 시술 직접 담당",
      "모발 손상을 최소화하는 시술 설계",
      "두피케어 클리닉으로 건강한 머릿결 관리",
    ],
    specialties: ["컷", "펌", "염색", "기장연장", "두피케어"],
  },
  {
    name: "모모 원장",
    role: "Nail · Lash · Art Make Up Director",
    tagline: "11년간 쌓아온 섬세한 감각으로 네일아트·속눈썹·반영구 메이크업을 전담합니다.",
    image: "/images/nail-director.png",
    accent: "blue",
    reverse: true,
    checklist: [
      "최신 트렌드를 반영한 개인 맞춤 디자인",
      "젤네일·네일아트·페디아트 수백 가지 컬러",
      "속눈썹 연장·펌으로 편안해지는 아침",
      "자연눈썹·아이라인 등 섬세한 반영구 시술",
    ],
    specialties: ["젤네일", "네일아트", "속눈썹연장", "속눈썹펌", "반영구눈썹", "아이라인"],
  },
];

// AEO/SEO용 자주 묻는 질문 — 사실 기반, AI 답변엔진이 인용하기 좋은 Q&A 형식
export const FAQ_ITEMS: {
  q: string;
  a: string;
  notes?: string[];
  link?: { label: string; href: string };
}[] = [
  {
    q: "스토리 에스는 어디에 있나요?",
    a: "세종특별자치시 도움3로 105-2 2층 203호에 있습니다. 종촌동 가재마을 7단지 건너편 새마을금고 2층이며, 1000번 버스 가재마을 7단지 하차 또는 1004번 버스 가재마을 11단지 하차 후 신호 건너편입니다.",
  },
  {
    q: "영업시간과 휴무일은 어떻게 되나요?",
    a: "월요일부터 토요일까지 오전 10시~오후 8시에 운영합니다. 일요일은 정기 휴무이며, 사전예약 시 방문 가능하고 이 경우 10% 할증이 적용됩니다.",
  },
  {
    q: "어떤 시술을 받을 수 있나요?",
    a: "헤어(컷·펌·염색·기장연장), 네일아트·페디아트, 속눈썹 연장·펌, 반영구 메이크업(자연눈썹·아이라인)까지 한 공간에서 받는 토탈 뷰티 살롱입니다.",
  },
  {
    q: "예약은 어떻게 하나요?",
    a: "네이버 예약 또는 전화(044-417-6200)로 예약할 수 있습니다. 30분 단위로 원하는 시간을 선택할 수 있으며, 예약제로 운영되어 대기 없이 1:1 전담 시술을 받습니다.",
  },
  {
    q: "주요 시술 가격은 얼마인가요?",
    a: "컷은 남성 18,000원~, 여성 20,000원~, 기본 손 젤네일 40,000원~, 손 케어 20,000원~, 속눈썹 펌 35,000원~입니다. 모든 시술은 정찰제로 투명하게 운영됩니다.",
    notes: [
      "직급별·디자이너별 차등 요금제입니다",
      "디자인과 기장에 따라 가격이 변동될 수 있습니다",
    ],
    link: { label: "네이버에서 전체 가격표 보기", href: CONTACT.naverMap },
  },
  {
    q: "원장님 경력은 어떻게 되나요?",
    a: "헤어는 30년 경력의 원장(석이 원장)이, 네일아트·속눈썹·반영구 메이크업은 11년 이상 경력의 원장(모모 원장)이 각 분야를 전담해 시술합니다.",
  },
];

export const REVIEWS: Review[] = [
  {
    quote: "윗머리는 차분하게 눌러주고 아래는 자연스러운 C컬로 딱 원하던 스타일 나왔어요. 파마 후에 드라이를 대충 해도 예쁘게 스타일이 나온다는 거!",
    author: "알프스2105님",
    service: "펌 시술",
    image: "/images/3.jpeg",
    cardColor: "bg-quote-purple",
  },
  {
    quote: "역시나 믿고 맡기는 스토리에스. 길이에 따라 컬감 좋게 잘해주셔서 손질도 딱히 없이 자연스럽게 연출 가능하게 해주시네요.",
    author: "Mie83님",
    service: "헤어 시술",
    image: "/images/2.jpeg",
    cardColor: "bg-quote-cream",
  },
  {
    quote: "손, 발, 속눈썹은 모모 원장님께 믿고 맡겨요. 속눈썹펌 예쁘게 컬을 잘 잡아주시고 눈썹 정리도 잘해주셔서 아침 메이크업이 즐거워졌어요.",
    author: "ya***님",
    service: "속눈썹펌",
    image: "/images/7.jpeg",
    cardColor: "bg-quote-green",
  },
  {
    quote: "크리스마스 분위기로 네일받았어요. 트리도 있고 눈도 오네요. 모임에 나가서 자랑할 거예요, 기분이 너무 좋아요!",
    author: "최은영9539님",
    service: "네일아트",
    image: "/images/6.jpeg",
    cardColor: "bg-quote-pink",
  },
];
