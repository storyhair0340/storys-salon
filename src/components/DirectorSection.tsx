import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import type { Director } from "@/types/content";

const ACCENT = {
  green: { chip: "bg-chip-green", check: "text-[#4C9B1F]" },
  blue: { chip: "bg-quote-blue", check: "text-[#2596AE]" },
} as const;

export function DirectorSection({ director }: { director: Director }) {
  const accent = ACCENT[director.accent];
  return (
    <section className="bg-white px-6 pb-24">
      <div
        className={cn(
          "mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2",
          director.reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        {/* 텍스트 + 체크리스트 */}
        <Reveal>
          <p className="type-eyebrow">{director.role}</p>
          <h2 className="type-display-md mt-3">{director.name}</h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-ink/72">{director.tagline}</p>
          <ul className="mt-8 divide-y divide-line/70 border-y border-line/70">
            {director.checklist.map((item) => (
              <li key={item} className="flex items-center gap-4 py-5">
                <span className={cn("flex size-10 shrink-0 items-center justify-center rounded-full", accent.chip)}>
                  <CheckIcon className={cn("size-4", accent.check)} />
                </span>
                <span className="text-[15.5px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* 사진 + 플로팅 전문분야 카드 — tedy "Your Categories" 플로팅 카드 */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] max-h-[600px] w-full overflow-hidden rounded-[2.2rem]">
            <Image
              src={director.image}
              alt={`${director.name} — ${director.role}`}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div
            className={cn(
              "mt-4 rounded-3xl bg-white p-5 shadow-[0_30px_60px_-30px_rgba(3,7,18,0.4)]",
              "lg:absolute lg:bottom-8 lg:mt-0 lg:w-56",
              director.reverse ? "lg:-left-10" : "lg:right-8",
            )}
          >
            <p className="text-[15px] font-semibold">전문 분야</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {director.specialties.map((s) => (
                <span key={s} className={cn("rounded-full px-3 py-1.5 text-[12.5px] font-medium", accent.chip)}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
