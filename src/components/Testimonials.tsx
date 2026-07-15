import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { QuoteIcon } from "@/components/icons";
import { REVIEWS } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-20 rounded-t-[3.6rem] bg-white px-4 pb-28 pt-24 sm:px-8">
      <div className="mx-auto max-w-[1100px]">
        <Reveal className="text-center">
          <h2 className="type-display">
            고객님들의
            <br />
            진짜 이야기.
          </h2>
          <p className="mt-5 text-[17px] text-ink/60">네이버 리뷰로 남겨주신 실제 후기입니다.</p>
        </Reveal>

        {/* 스택 스티키 카드 — tedy testimonials: 각 카드가 이전 카드를 덮으며 쌓임 */}
        <div className="mt-16 flex flex-col gap-10">
          {REVIEWS.map((review, i) => (
            <div
              key={review.author}
              className="sticky"
              style={{ top: `${96 + i * 28}px` }}
            >
              <div
                className={`grid overflow-hidden rounded-[1.9rem] ${review.cardColor} md:min-h-[420px] md:grid-cols-[1.15fr_1fr]`}
              >
                <div className="flex flex-col items-center justify-center px-8 py-12 text-center sm:px-14">
                  <QuoteIcon className="size-8 text-ink" />
                  <p className="mt-7 max-w-md text-[21px] font-medium leading-snug tracking-tight sm:text-[24px]">
                    {review.quote}
                  </p>
                  <p className="mt-6 text-sm text-ink/50">
                    {review.author} · {review.service} · 네이버 리뷰
                  </p>
                </div>
                <div className="relative min-h-[260px]">
                  <Image
                    src={review.image}
                    alt={`${review.service} 후기 관련 매장 사진`}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                  />
                  {/* 우상단 노치 라벨 — tedy 로고 노치의 시술종류 버전 */}
                  <span className="absolute right-0 top-0 rounded-bl-[1.4rem] bg-white/95 px-5 py-3 text-sm font-semibold">
                    {review.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
