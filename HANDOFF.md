# STORY S 웹사이트 — 인계 문서 (v2)

세종 종촌동 토탈뷰티살롱 **STORY S** 공식 웹사이트. 이 문서는 사이트를 이어받아 운영·수정하기 위해 필요한 모든 것을 정리합니다.

---

## 1. 이게 전부가 아닙니다 — "파일 + 온라인 서비스"

웹사이트는 **① 소스 파일**(이 폴더)과 **② 온라인 서비스 계정**의 조합입니다. 파일만 넘기면 사이트를 새로 만들 수는 있지만, 지금 살아있는 사이트·문의 폼·도메인은 아래 계정들에 묶여 있습니다.

| 항목 | 현재 위치 | 인계 시 필요한 조치 |
|---|---|---|
| **소스 코드** | 이 폴더 (`story-s-v2`) | zip 또는 GitHub로 전달 |
| **호스팅(배포)** | Vercel 프로젝트 `story-s-salon-v2` | 클라이언트 Vercel 계정으로 **이전**하거나, 코드로 재배포 |
| **문의 폼 수신** | Formspree 폼 `mjgqzpya` | 클라이언트 이메일 계정으로 소유권 이전(또는 신규 폼 발급) |
| **도메인** | (구매 예정 — Cloudflare) | 클라이언트 Cloudflare 계정으로 구매 |
| **네이버 플레이스 / 인스타** | 매장 소유 (헤어 1584649819, 네일 1807431761, @hairpark0340) | 이미 매장 소유 — 조치 불필요 |

> **핵심:** 진짜 "넘겨주기"라면 위 ②·③·④를 **클라이언트 계정으로 옮겨야** 나중에 개발자 도움 없이도 운영됩니다. 계속 대신 운영해 줄 거라면 파일 + 결과물만 전달해도 됩니다.

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

## 3. 내용(텍스트·가격·링크) 수정하는 법

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

## 4. 문의 폼 (중요)

- 위치: `src/components/ContactForm.tsx`
- 방식: **Formspree** (무료, 월 50건), 폼 ID **`mjgqzpya`**
- 제출 내용이 Formspree에 등록된 **이메일로 전송**됩니다.
- ⚠️ 이 폼은 현재 **개발자 Formspree 계정**에 있습니다. 클라이언트가 직접 문의를 받으려면:
  - Formspree에서 폼 소유권을 클라이언트 이메일로 이전, 또는
  - 클라이언트가 새 폼을 만들고 새 ID를 `ContactForm.tsx`의 `FORMSPREE_ID`에 교체

---

## 5. 아직 안 된 것 (준비되면 연결)

- **카카오톡 채널** — 개설 후 URL을 `CONTACT.kakaoChannel`에 넣으면 폼의 사진 안내 + 우측 카카오 버튼이 자동으로 켜짐 (현재는 숨김)
- **새 도메인** — 아래 6번 참고
- **구글/네이버 서치콘솔 등록** — 소유확인 메타태그를 `src/app/layout.tsx`의 `metadata`에 추가하면 검색 색인·통계 가능

---

## 6. 도메인 연결 (Cloudflare)

1. 클라이언트 Cloudflare 계정에서 도메인 구매 (`.com` 등 — Cloudflare는 `.kr`은 취급 안 함)
2. Vercel 프로젝트 → Settings → Domains 에서 도메인 추가
3. Vercel이 알려주는 DNS 레코드를 Cloudflare DNS에 등록:
   - apex(예: `example.com`) → A 레코드 `76.76.21.21`
   - `www` → CNAME `cname.vercel-dns.com`
   - Cloudflare 프록시(주황 구름)는 **끄고 DNS-only(회색)** 권장
4. `src/lib/content.ts`의 `SITE_URL`을 새 도메인으로 교체 후 재배포

---

## 7. 현재 라이브 주소

- 사이트: https://story-s-salon-v2.vercel.app
- 이전 버전(참고용): https://story-s-salon.vercel.app
