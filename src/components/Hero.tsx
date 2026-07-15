import Image from "next/image";
import { CONTACT } from "@/lib/content";

export function Hero() {
  return (
    <section className="bg-white px-4 pt-2 pb-10 sm:px-6 sm:pt-4">
      <div className="mx-auto grid max-w-[1440px] gap-4 lg:grid-cols-[1.2fr_1fr]">
        {/* 좌측 옐로 카드 — tedy hero: #FFF4D9, radius 2.8rem */}
        <div className="flex flex-col justify-center rounded-[2.8rem] bg-hero-yellow px-8 py-14 sm:px-14 sm:py-20 lg:px-16">
          <h1 className="type-display">
            스토리 S에 오시면,
            <br />
            아름다워집니다.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/72 sm:text-xl">
            헤어·네일·속눈썹·반영구까지 — 30년 경력 원장의 1:1 맞춤 시술, 세종
            종촌동 토탈뷰티살롱.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={CONTACT.naverBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#03c75a] px-5 py-3.5 text-[15px] text-white shadow-[0_14px_35px_-18px_rgba(3,199,90,0.6)] transition-all hover:-translate-y-px hover:bg-[#02b350]"
            >
              네이버 예약
            </a>
            <a
              href={CONTACT.phoneHref}
              className="rounded-full border border-line bg-white px-5 py-3.5 text-[15px] font-medium text-ink transition-all hover:-translate-y-px hover:bg-ink/[0.04]"
            >
              ☎ 전화 문의
            </a>
          </div>
        </div>

        {/* 우측 벤토 포토 그리드 */}
        <div className="grid h-[420px] grid-cols-[1.6fr_1fr] gap-4 sm:h-[520px] lg:h-auto">
          <div className="relative overflow-hidden rounded-[1.75rem]">
            <Image
              src="/images/3.jpeg"
              alt="스토리 에스 헤어 시술 공간"
              fill
              sizes="(max-width: 1024px) 60vw, 25vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <Image
                src="/images/1.jpeg"
                alt="스토리 에스 매장 입구"
                fill
                sizes="(max-width: 1024px) 40vw, 15vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <Image
                src="/images/7.jpeg"
                alt="네일 시술 공간"
                fill
                sizes="(max-width: 1024px) 40vw, 15vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
