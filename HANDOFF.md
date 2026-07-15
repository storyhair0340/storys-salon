# STORY S 웹사이트 — 인계 문서 (v2)

세종 종촌동 토탈뷰티살롱 **STORY S** 공식 웹사이트. 이 문서는 사이트를 이어받아 운영·수정하기 위해 필요한 모든 것을 정리합니다.

---

## 1. 이게 전부가 아닙니다 — "파일 + 온라인 서비스"

웹사이트는 **① 소스 파일**(이 폴더)과 **② 온라인 서비스 계정**의 조합입니다. 파일만 넘기면 사이트를 새로 만들 수는 있지만, 지금 살아있는 사이트·문의 폼·도메인은 아래 계정들에 묶여 있습니다.

| 항목 | 현재 위치 | 상태 |
|---|---|---|
| **소스 코드** | GitHub: https://github.com/storyhair0340/storys-salon (공개 저장소) | ✅ 클라이언트 계정 완료 |
| **호스팅(배포)** | Vercel, 클라이언트 계정(storyhair0340) `storys-salon` 프로젝트 | ✅ 클라이언트 계정 완료 |
| **도메인** | Cloudflare, 클라이언트 계정 — `storys-salon.com` | ✅ 구매·연결 완료 |
| **문의 폼 수신** | Formspree 폼 `mjgqzpya` | ✅ 클라이언트 계정 |
| **네이버 플레이스 / 인스타** | 매장 소유 (헤어 1584649819, 네일 1807431761, @hairpark0340) | ✅ 매장 소유 |
| **Google Search Console** | 클라이언트 계정, `storys-salon.com` 도메인 속성 등록·인증·사이트맵 제출 완료 | ✅ 완료 |
| **Google 비즈니스 프로필** | 클라이언트 계정으로 생성, 인증 진행 중 | ⏳ 진행 중 (아래 6-1 참고) |

> **완전 독립 운영 체계 완성.** 개발자(zukunft21) 계정 없이도 클라이언트 스스로 사이트가 계속 운영됩니다. 코드 수정이 필요하면 개발자가 `storyhair0340/storys-salon` 저장소에 push → Vercel 자동 배포.

---

## 2. 소스 파일로 사이트 실행/배포

**요구 환경:** Node.js 20+ (권장 24)

```bash
npm install        # 의존성 설치
npm run dev        # 개발 서버 (localhost:3000)
npm run build      # 프로덕션 빌드
```

**배포 (Vercel):**
```bash
npm i -g vercel
vercel deploy --prod
```

- 프레임워크: **Next.js 16** (App Router, React 19, TypeScript, Tailwind CSS v4)
- `vercel.json`에 `{"framework":"nextjs"}` 필수 (빠지면 빌드 결과 대신 public 폴더만 서빙됨)

---

## 3. GitHub 저장소 & 자동 배포

- **저장소**: https://github.com/zukunft21/storys-salon (main 브랜치)
- 소스 코드는 GitHub에 올라가 있어 버전 관리·백업이 됩니다.
- **Vercel과 연동하면 `git push`만으로 자동 배포**됩니다 (지금은 CLI로 수동 배포 중):
  1. Vercel 대시보드 → 해당 프로젝트 → Settings → Git → **Connect Git Repository**
  2. `zukunft21/storys-salon` 선택
  3. 이후로는 이 저장소의 main 브랜치에 push하면 Vercel이 자동으로 빌드·배포함
- Git 계정이 없어도(코드를 직접 안 건드려도) 사이트는 그대로 작동합니다 — GitHub는 "수정할 때" 필요한 창구입니다.

### Vercel 계정, 고객이 꼭 필요한가?
운영을 **누가 계속 맡느냐**에 따라 다릅니다.

| 상황 | 고객 Vercel 계정 필요? |
|---|---|
| 개발자(현재 관리자)가 계속 배포·유지보수 | ❌ 불필요 — 고객은 사이트 URL만 사용 |
| 고객이 직접 도메인 연결·수정 요청을 하고 싶음 | ✅ 필요 — Vercel 프로젝트를 고객 계정(팀)으로 이전(Transfer) 필요 |

프로젝트 이전은 Vercel 대시보드 → Settings → **Transfer Project**에서 진행하며, 받는 쪽도 Vercel 계정(무료 플랜 가능)이 있어야 합니다.

---

## 4. 내용(텍스트·가격·링크) 수정하는 법

거의 모든 문구·가격·연락처·링크는 **한 파일**에 모여 있습니다:

### `src/lib/content.ts`
- `CONTACT` — 전화, 네이버 예약/지도, 인스타, 카카오 채널, 주소, 영업시간, 스타일 링크
- `SITE_URL` — 사이트 정식 주소 (**새 도메인 생기면 이 한 줄만 교체** → 메타·robots·sitemap·구조화데이터에 일괄 반영)
- `SERVICES` — 서비스 카드(헤어/네일/속눈썹) 제목·설명·가격
- `CATEGORY_CHIPS` — "모든 뷰티를 한 공간에서" 섹션의 떠다니는 사진 칩
- `WHY_CARDS`, `DIRECTORS`, `REVIEWS`, `FAQ_ITEMS` — 각 섹션 내용

### 사진
- 모두 `public/images/` 에 있음. 파일명으로 교체하면 됩니다.
- 예: 젤네일 = `gelnail.jpg`, 속눈썹 = `eyelash.jpg`, 컷 = `cut.jpg`, 펌 = `perm.jpg`

---

## 5. 문의 폼 (중요)

- 위치: `src/components/ContactForm.tsx`
- 방식: **Formspree** (무료, 월 50건), 폼 ID **`mjgqzpya`**
- 제출 내용이 Formspree에 등록된 **이메일로 전송**됩니다.
- ⚠️ 이 폼은 현재 **개발자 Formspree 계정**에 있습니다. 클라이언트가 직접 문의를 받으려면:
  - Formspree에서 폼 소유권을 클라이언트 이메일로 이전, 또는
  - 클라이언트가 새 폼을 만들고 새 ID를 `ContactForm.tsx`의 `FORMSPREE_ID`에 교체

---

## 6. 아직 안 된 것 (준비되면 연결)

- **카카오톡 채널** — 개설 후 URL을 `CONTACT.kakaoChannel`에 넣으면 폼의 사진 안내 + 우측 카카오 버튼이 자동으로 켜짐 (현재는 숨김)

### 6-1. Google 비즈니스 프로필 — 소유권 이전 대기 중 (2026-07-15 시작)

- 클라이언트 Google 계정(story.hair0340@gmail.com)으로 프로필 생성, 인증(우편엽서/영상통화) 진행 중
- **Google 정책상 신규 프로필은 생성 후 7일이 지나야 "기본 소유자" 지정(소유권 이전)이 가능** — 그전엔 이전 시도 시 에러 발생
- 개발자(zukunft21) 계정이 임시로 이 프로필에 접근 권한을 갖고 있음
- **7일 경과 후 할 일**:
  1. business.google.com → 프로필 → **사용자 및 액세스 권한**
  2. 클라이언트 계정(story.hair0340@gmail.com) 행 → **"기본 소유자로 지정"**
  3. 개발자 본인 행 → **"액세스 삭제"** (⚠️ "비즈니스 프로필 삭제"와 다른 메뉴이니 절대 혼동 금지 — 그건 전체 삭제됨)
- 완료되면 사이트 `CONTACT.googleBusiness`에 프로필 링크(`https://maps.app.goo.gl/...` 또는 `https://g.page/...` 형태)를 넣으면 구조화 데이터(sameAs)·오시는 길 링크에 자동 반영됨 (현재는 빈 값, `src/lib/content.ts`)
- 업체 설명(750자 이내, URL·전화번호 금지)은 이미 작성해 등록함: 헤어·네일·속눈썹·반영구 서비스, 분야별 전담 원장(헤어 30년+, 네일/속눈썹 11년+), 정찰제·예약제, 영업시간 포함

### 6-2. Google Search Console — 완료 (2026-07-15)

- `storys-salon.com` 도메인 속성 등록, Cloudflare-Google 연동 기능으로 DNS TXT 레코드 자동 인증 완료
- 사이트맵 제출 완료 (`https://www.storys-salon.com/sitemap.xml` — 전체 URL로 제출해야 함, 상대경로 `sitemap.xml`만 넣으면 apex 리다이렉트 때문에 인식 안 될 수 있음)
- 홈페이지 URL 검사 → 색인 생성 요청 진행
- 실제 키워드 검색 노출까지는 새 도메인 특성상 몇 주 소요 예상 (정상)

---

## 7. 도메인 연결 (완료됨 — 참고용 기록)

Cloudflare에서 `storys-salon.com` 구매 후 아래로 연결 완료:
- A 레코드(`@`) → `76.76.21.21`, DNS 전용(회색 구름)
- CNAME(`www`) → `cname.vercel-dns.com`, DNS 전용(회색 구름)
- Vercel 프로젝트에 도메인 추가 → apex는 www로 308 리다이렉트
- `SITE_URL`(`src/lib/content.ts`)을 `https://www.storys-salon.com`으로 교체 반영 완료

같은 방식으로 향후 도메인을 또 바꾸게 되면: Vercel Domains에 추가 → Cloudflare DNS 레코드 등록(DNS 전용 권장) → `SITE_URL` 교체 후 재배포.

---

## 8. 현재 라이브 주소

- **정식 사이트: https://www.storys-salon.com**
- Vercel 기본 주소(백업용): https://storys-salon.vercel.app
- 참고— 예전 데모 버전(더 이상 사용 안 함): https://story-s-salon-v2.vercel.app, https://story-s-salon.vercel.app
