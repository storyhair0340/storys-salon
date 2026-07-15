import { Reveal } from "@/components/Reveal";
import { CafeIcon, PersonIcon, TagIcon } from "@/components/icons";
import { WHY_CARDS } from "@/lib/content";
import type { WhyCard } from "@/types/content";

const ICONS: Record<WhyCard["icon"], typeof PersonIcon> = {
  person: PersonIcon,
  tag: TagIcon,
  cafe: CafeIcon,
};

export function WhyBand() {
  return (
    <section className="rounded-t-[3rem] bg-band-purple px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="type-display-md">
            시술을 넘어,
            <br />
            경험이 됩니다.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ink/72">
            스토리 에스는 단순한 미용실이 아닙니다. 한 분 한 분을 소중히 모시는
            방식으로, 모든 순간이 특별해지도록 준비했습니다.
          </p>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {WHY_CARDS.map((card) => {
            const Icon = ICONS[card.icon];
            return (
              <div
                key={card.title}
                className="rounded-[2rem] bg-white px-8 py-12 text-center shadow-[0_30px_60px_-40px_rgba(3,7,18,0.35)]"
              >
                <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-quote-purple/60">
                  <Icon className="size-8 text-[#7C3AED]" />
                </div>
                <p className="mt-6 text-[22px] font-medium tracking-tight">{card.title}</p>
                <p className="mx-auto mt-3 max-w-xs text-[15px] leading-relaxed text-[#6B7280]">
                  {card.description}
                </p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
