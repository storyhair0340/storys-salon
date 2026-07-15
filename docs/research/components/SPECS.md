# Story S v2 — Component Specs (Tedy layout × Story S content)

Interaction model: 전체 스크롤-리빌 (IntersectionObserver fade-up). 탭/클릭 전환 없음.
공통: 콘텐츠 max-w-[1200px], px-6, 섹션 pb-20~24. 폰트 Pretendard Variable.

## 1. Header — `src/components/Header.tsx`
- 흰 배경, 높이 80px, static (스크롤 시 사라짐)
- 좌: 로고 "STORY <S빨강>" (빨간 S = 간판 컬러 #FD1774 근사)
- 중: nav 링크(서비스, 카테고리, 원장 소개, 후기, 오시는길) 16px ink
- 우: ☎ 044-417-6200 흰 pill(border #E5E7EB) + "네이버 예약" 핑크 pill + 인스타 아이콘 pill
- 모바일: nav 숨김, 전화+예약만

## 2. Hero — `src/components/Hero.tsx`
- 그리드 2열 (lg): 좌 카드 55% / 우 벤토 45%, gap 16px, 높이 ~628px
- 좌 카드: bg #FFF4D9, radius 2.8rem, padding 64px
  - H1 "스토리 S에 오시면,\n아름다워집니다." clamp(2.6rem→5.3rem)/1.02, w500, ls-0.02em
  - sub 20px ink/72: "헤어·네일·속눈썹·반영구까지 — 30년 경력 원장의 1:1 맞춤 시술, 세종 종촌동 토탈뷰티살롱."
  - CTA행: 핑크 pill "네이버 예약" (glow shadow) + 흰 pill "전화 문의"
- 우 벤토: 1 큰 세로 이미지(3.jpeg 헤어존) + 우측 열 2개(1.jpeg 입구, 7.jpeg 네일존), radius 1.75rem

## 3. TrustMarquee — `src/components/TrustMarquee.tsx`
- "세종시가 신뢰하는 토탈뷰티살롱" 라벨 좌측 고정 + 우측 무한 마퀴
- 아이템(텍스트 배지): 네이버 예약 가능 · 30년+ 헤어 경력 · 정찰제 운영 · 종촌동 가재마을 · 토탈 뷰티 케어 · 1:1 전담 시술 — grayscale 로고 대신 ink/40 텍스트
- CSS keyframes translateX(-50%) 무한 루프 30s

## 4. Statement — `src/components/Statement.tsx`
- 좌: 디스플레이 텍스트(최대 64px) "스토리 에스는 머리부터 손끝까지,\n당신의 하루를 빛나게 하는 공간입니다."
- 우: 핑크 그라데이션 카드(#FFDCEA→투명, radius 2.8rem) 안에 미니 대시보드 목업: "안녕하세요 👋" + 통계 칩(30년+ 경력 / 예약제 운영 / ★ 네이버 후기) — Tedy 대시보드 목업의 살롱 버전

## 5. Services — `src/components/Services.tsx`  (Tedy "Works like a charm")
- 좌: 보라 카드 #E7D6FF radius 2.8rem, 내부 흰 미니카드 "원하시는 시술을 선택하세요" + 2×3 아이콘 타일(💇✂️🎨💅👁️✨) + 하단 핑크 pill "전문가와 상담하기"
- 우: h2 "원하는 스타일,\n그대로." + sub + 3개 흰 카드(radius 1.75rem, shadow): 헤어(컷 18,000원~), 네일아트(기본손젤 40,000원~), 속눈썹·반영구(속눈썹펌 35,000원~) — 아이콘은 핑크 계열 SVG

## 6. CategoriesFloat — `src/components/CategoriesFloat.tsx` (Tedy "25 categories")
- 중앙: h2 "모든 뷰티를\n한 공간에서." + sub + 핑크 pill "가격표 보기" (전화 안내)
- 주변 흩어진 사진 칩 8개 (absolute, radius 1.5rem, 지그재그): 컷·스타일(3.jpeg), 펌·염색(2.jpeg), 젤네일(6.jpeg), 네일아트(7.jpeg), 속눈썹(styling1.png), 반영구(styling1-1.png), 케어존(8.jpeg), 제품(5.jpeg) — 파스텔 라벨 pill 부착
- 모바일: 2열 그리드로 정렬

## 7. WhyBand — `src/components/WhyBand.tsx` (Tedy 보라 밴드)
- full-width bg #E5D6FF rounded-t-[3rem], py 96px
- 중앙 h2 "시술을 넘어,\n경험이 됩니다." + sub
- 3개 흰 카드(radius 2rem): 1:1 전담 시술 / 정찰제 투명 가격 / 카페 같은 공간 — 보라 아이콘, 본문 ink/60

## 8. DirectorSection — `src/components/DirectorSection.tsx` (Employers/Employees 미러 재사용)
- props: reverse, accent(green|blue), 사진, 이름, 태그라인, 체크리스트, 전문분야 칩
- 석이 원장(hair-director.png, green check): 30년+ 헤어 전문 — 체크 4개(얼굴형·모질·라이프스타일 분석 / 컷·펌·염색·기장연장 직접 시술 / 두피케어 클리닉 / 정찰제 상담)
- 모모 원장(nail-director.png, blue check, reverse): 11년+ 네일·속눈썹·반영구 — 체크 4개
- 사진 위 플로팅 칩 카드: "전문 분야" + 칩 리스트 (Tedy "Your Categories" 카드)

## 9. Testimonials — `src/components/Testimonials.tsx`
- shell: 흰 rounded-t-[3.6rem], 중앙 h2 "고객님들의\n진짜 이야기."
- 스택 sticky 카드 4장 (radius 1.9rem, 각 top 오프셋 +24px씩, 다음 카드가 이전을 덮음):
  1. #EBD8FF 알프스2105 (펌) — 사진 3.jpeg
  2. #FFF1CD Mie83 (헤어) — 사진 2.jpeg
  3. #E3F7D6 ya*** (속눈썹펌) — 사진 7.jpeg
  4. #FFDCEA 최은영9539 (네일) — 사진 6.jpeg
- 카드 구조: 좌 인용부호+후기+작성자, 우 사진(라운드, 우상단 노치에 시술종류 pill)

## 10. FooterCta — `src/components/FooterCta.tsx`
- 검정 스테이지 #020202 radius 2rem (inset 24px), 내부 blur 글래스 카드 radius 2.5rem
- 중앙: 흰 디스플레이 "지금, 예약하세요." + sub + 핑크 pill "네이버 예약" + 흰 pill "044-417-6200"
- 하단 구분선 + info 그리드(주소/운영시간/교통/링크): 세종특별자치시 도움3로 105-2 2층 203호 · 월–토 10:00–20:00, 일 정기휴무(사전3일 예약, 할증10%) · 1000번 가재마을7단지, 1004번 가재마을11단지 · 네이버지도/인스타그램
- ©2026 STORY S + 우측 링크
- 장식: 모서리에 파스텔 도형(핑크 원, 노랑 사각, 시안 삼각) 일부 잘려 보이게
