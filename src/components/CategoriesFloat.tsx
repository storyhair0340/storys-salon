import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CATEGORY_CHIPS, CONTACT } from "@/lib/content";

export function CategoriesFloat() {
  return (
    <section id="categories" className="scroll-mt-20 bg-white px-4 py-10 sm:px-6 sm:py-14">
      <div className="relative mx-auto max-w-[1440px]">
        {/* 데스크톱: 흩어진 플로팅 칩 — tedy "25 flexible spending categories" */}
        <div className="relative hidden min-h-[820px] items-center justify-center lg:flex">
          {CATEGORY_CHIPS.map((chip) => (
            <div
              key={chip.label}
              className={`chip-float absolute ${chip.position}`}
              style={{ animationDelay: chip.delay }}
            >
              <div className="relative">
                <div className="relative h-44 w-36 overflow-hidden rounded-[1.5rem] shadow-[0_24px_50px_-30px_rgba(3,7,18,0.4)]">
                  <Image src={chip.image} alt={chip.label} fill sizes="144px" className="object-cover" />
                </div>
                <span
                  className={`absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] font-medium shadow-sm ${chip.chipColor}`}
                >
                  {chip.label}
                </span>
              </div>
            </div>
          ))}

          <Reveal className="relative z-10 max-w-xl text-center">
            <CenterCopy />
          </Reveal>
        </div>

        {/* 모바일/태블릿: 중앙 카피 + 2열 그리드 */}
        <div className="lg:hidden">
          <Reveal className="mx-auto max-w-xl text-center">
            <CenterCopy />
          </Reveal>
          <Reveal stagger className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
            {CATEGORY_CHIPS.map((chip) => (
              <div key={chip.label} className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-[0_24px_50px_-30px_rgba(3,7,18,0.4)]">
                  <Image src={chip.image} alt={chip.label} fill sizes="50vw" className="object-cover" />
                </div>
                <span
                  className={`absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] font-medium shadow-sm ${chip.chipColor}`}
                >
                  {chip.label}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CenterCopy() {
  return (
    <>
      <h2 className="type-display">
        모든 뷰티를
        <br />한 공간에서.
      </h2>
      <p className="mx-auto mt-6 max-w-md text-[17px] leading-relaxed text-ink/72">
        컷·펌·염색부터 젤네일, 속눈썹, 반영구까지. 스토리 에스에서는 옮겨
        다닐 필요가 없어요. 놀랍지 않나요? 😲
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href={CONTACT.naverHairStyles}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-pink px-6 py-3.5 text-[15px] text-white shadow-[0_14px_35px_-18px_rgba(253,23,116,0.6)] transition-all hover:-translate-y-px hover:brightness-95"
        >
          헤어 스타일 보기
        </a>
        <a
          href={CONTACT.naverNailStyles}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-medium text-ink transition-all hover:-translate-y-px hover:bg-ink/[0.04]"
        >
          네일 스타일 보기
        </a>
      </div>
    </>
  );
}
