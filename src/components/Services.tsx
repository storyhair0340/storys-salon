import { Reveal } from "@/components/Reveal";
import { BrushIcon, ChatIcon, DropIcon, HairIcon, LashIcon, NailIcon, PaletteIcon } from "@/components/icons";
import { SERVICES } from "@/lib/content";
import type { ServiceCard } from "@/types/content";

const TILES = [
  { label: "헤어", Icon: HairIcon, bg: "bg-quote-blue" },
  { label: "펌·염색", Icon: DropIcon, bg: "bg-quote-purple" },
  { label: "네일", Icon: NailIcon, bg: "bg-quote-pink" },
  { label: "네일아트", Icon: PaletteIcon, bg: "bg-chip-green" },
  { label: "속눈썹", Icon: LashIcon, bg: "bg-quote-cream" },
  { label: "반영구", Icon: BrushIcon, bg: "bg-quote-blue" },
];

const ICONS: Record<ServiceCard["icon"], typeof HairIcon> = {
  hair: HairIcon,
  nail: NailIcon,
  lash: LashIcon,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-white px-6 pb-20">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2">
        {/* 좌: 보라 카드 목업 — tedy "Choose the categories" 카드 */}
        <Reveal>
          <div className="relative mx-auto flex aspect-square w-full max-w-[544px] flex-col items-center justify-center rounded-[2.8rem] bg-card-purple p-8">
            <div className="w-full max-w-[420px] rounded-3xl bg-gradient-to-b from-white to-white/60 p-7 text-center shadow-[0_24px_60px_-30px_rgba(3,7,18,0.3)]">
              <p className="text-[17px] font-medium leading-snug">
                원하시는 시술을
                <br />
                선택해 보세요
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {TILES.map(({ label, Icon, bg }) => (
                  <div key={label} className="rounded-2xl border border-line bg-white p-3 text-center">
                    <div className={`mx-auto flex size-10 items-center justify-center rounded-xl ${bg}`}>
                      <Icon className="size-5 text-ink/75" />
                    </div>
                    <p className="mt-2 text-[12px] font-medium text-ink/80">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="#contact"
              className="absolute bottom-10 flex w-[calc(100%-5rem)] max-w-[420px] items-center justify-center gap-2 rounded-full bg-pink py-4 text-[15px] text-white shadow-[0_14px_35px_-18px_rgba(253,23,116,0.8)] transition-all hover:-translate-y-px hover:brightness-95"
            >
              <span className="flex size-7 items-center justify-center rounded-full bg-white/20">
                <ChatIcon className="size-4 text-white" />
              </span>
              전문가와 상담하기
            </a>
          </div>
        </Reveal>

        {/* 우: 타이틀 + 3 카드 */}
        <div>
          <Reveal>
            <h2 className="type-display-md">
              원하는 스타일,
              <br />
              그대로.
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-ink/72">
              각 분야 전문 원장이 한 공간에서 헤어부터 네일, 속눈썹,
              아트메이크업까지 — 토탈 뷰티를 완성합니다.
            </p>
          </Reveal>
          <Reveal stagger className="mt-9 grid gap-4 sm:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = ICONS[service.icon];
              return (
                <div
                  key={service.title}
                  className="rounded-[1.75rem] border border-line/60 bg-white p-5 shadow-[0_18px_40px_-28px_rgba(3,7,18,0.25)] transition-transform hover:-translate-y-1"
                >
                  <Icon className="size-9 text-pink" />
                  <p className="mt-4 text-lg font-medium leading-tight tracking-tight">{service.title}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink/60">{service.description}</p>
                  <div className="mt-3 space-y-0.5">
                    {service.prices.map((price) => (
                      <p key={price} className="text-[13px] font-semibold text-pink">{price}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
