import { CONTACT } from "@/lib/content";

export function FooterCta() {
  return (
    <section id="visit" className="scroll-mt-20 bg-white px-4 pb-6 sm:px-6">
      {/* 검정 스테이지 — tedy footer: #020202, radius 2rem, 파스텔 도형 장식 */}
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] bg-[#020202] px-4 py-10 sm:px-10 sm:py-12">
        {/* 장식 도형 */}
        <div className="pointer-events-none absolute -left-10 top-1/2 size-40 rounded-full bg-pink" />
        <div className="pointer-events-none absolute -right-6 -top-8 size-32 rotate-12 rounded-2xl bg-[#F5B301]" />
        <div
          className="pointer-events-none absolute -bottom-10 left-2/3 size-36 bg-[#00B8C4]"
          style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
        />

        {/* 글래스 카드 */}
        <div className="relative rounded-[2.5rem] bg-white/[0.06] px-6 py-14 backdrop-blur-2xl sm:px-14">
          <div className="text-center text-white">
            <h2 className="type-display">지금, 예약하세요.</h2>
            <p className="mx-auto mt-5 max-w-lg text-[16px] leading-relaxed text-white/70">
              온라인 예약 또는 전화 문의 — 언제든지 환영합니다. 30분 단위로
              원하시는 시간을 선택하실 수 있어요.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={CONTACT.naverBooking}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#03c75a] px-6 py-3.5 text-[15px] text-white transition-all hover:-translate-y-px hover:bg-[#02b350]"
              >
                네이버 예약
              </a>
              <a
                href={CONTACT.phoneHref}
                className="rounded-full bg-white px-6 py-3.5 text-[15px] font-medium text-ink transition-all hover:-translate-y-px hover:bg-white/90"
              >
                ☎ {CONTACT.phone}
              </a>
            </div>
          </div>

          {/* info 그리드 */}
          <div className="mt-14 grid gap-8 border-t border-white/15 pt-10 text-white sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="type-eyebrow !text-white/40">주소</p>
              <p className="mt-3 text-[15px] leading-relaxed text-white/85">{CONTACT.address}</p>
              <p className="mt-1 text-[13.5px] text-white/50">{CONTACT.addressNote}</p>
            </div>
            <div>
              <p className="type-eyebrow !text-white/40">운영시간</p>
              <p className="mt-3 text-[15px] leading-relaxed text-white/85">{CONTACT.hours}</p>
              <p className="mt-1 text-[13.5px] text-white/50">{CONTACT.hoursNote}</p>
            </div>
            <div>
              <p className="type-eyebrow !text-white/40">교통</p>
              {CONTACT.transit.map((t) => (
                <p key={t} className="mt-3 text-[14px] leading-relaxed text-white/85 first-of-type:mt-3">
                  {t}
                </p>
              ))}
            </div>
            <div>
              <p className="type-eyebrow !text-white/40">링크</p>
              <div className="mt-3 flex flex-col gap-2 text-[15px]">
                <a href={CONTACT.naverMap} target="_blank" rel="noopener noreferrer" className="text-white/85 transition-colors hover:text-white">
                  네이버 지도 ↗
                </a>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="text-white/85 transition-colors hover:text-white">
                  인스타그램 ↗
                </a>
                <a href={CONTACT.naverBooking} target="_blank" rel="noopener noreferrer" className="text-white/85 transition-colors hover:text-white">
                  네이버 예약 ↗
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-[13.5px] text-white/45 sm:flex-row">
            <p>©2026 STORY S — 세종시 토탈뷰티살롱 스토리 에스</p>
            <p>
              STORY <span className="font-bold text-pink">S</span> · Hair, Nail, Art Make Up
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
