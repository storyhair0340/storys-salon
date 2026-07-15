import { MARQUEE_ITEMS } from "@/lib/content";

export function TrustMarquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <section className="overflow-hidden bg-white px-6 py-8">
      <div className="mx-auto flex max-w-[1440px] items-center gap-10">
        <p className="shrink-0 text-[17px] font-semibold">
          세종시가 신뢰하는 <span className="whitespace-nowrap">토탈뷰티살롱</span>
        </p>
        <div
          className="relative flex-1 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="marquee-track flex w-max items-center gap-14">
            {doubled.map((item, i) => (
              <span key={i} className="whitespace-nowrap text-lg font-medium text-ink/40">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
