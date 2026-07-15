import { Reveal } from "@/components/Reveal";

const STATS = [
  { dot: "bg-pink", label: "헤어 원장 경력", value: "30년+" },
  { dot: "bg-[#64D71E]", label: "네일·속눈썹 원장 경력", value: "11년+" },
  { dot: "bg-[#4BB7CF]", label: "가격 운영", value: "정찰제" },
  { dot: "bg-[#D8B9FF]", label: "시술 방식", value: "1:1 전담" },
];

export function Statement() {
  return (
    <section className="bg-white px-6 pb-20">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <h2 className="type-display-md max-w-2xl">
            스토리 에스는 머리부터 손끝까지, 당신의 하루를 빛나게 하는
            공간입니다.
          </h2>
        </Reveal>

        {/* 미니 대시보드 목업 — tedy 핑크 그라데이션 카드 */}
        <Reveal>
          <div className="rounded-[2.8rem] bg-gradient-to-b from-quote-pink to-white p-6 sm:p-10">
            <div className="rounded-3xl bg-white p-6 shadow-[0_20px_50px_-30px_rgba(3,7,18,0.25)] sm:p-8">
              <p className="text-lg font-semibold">안녕하세요, 반가워요 👋</p>
              <p className="mt-1 text-sm text-ink/60">
                오늘도 예쁜 하루 보내세요 — STORY S
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {STATS.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-line bg-white p-4">
                    <div className="flex items-center gap-2">
                      <span className={`size-2 rounded-full ${stat.dot}`} />
                      <span className="text-xs text-ink/60">{stat.label}</span>
                    </div>
                    <p className="mt-2 text-xl font-semibold tracking-tight">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
