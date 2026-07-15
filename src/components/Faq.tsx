import { Reveal } from "@/components/Reveal";
import { FAQ_ITEMS } from "@/lib/content";

// FAQPage 구조화 데이터 — AI 답변엔진/구글이 Q&A를 그대로 인용
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => {
    const parts = [item.a];
    if (item.notes) parts.push(...item.notes.map((n) => `※ ${n}`));
    if (item.link) parts.push(`${item.link.label}: ${item.link.href}`);
    return {
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: parts.join(" ") },
    };
  }),
};

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-white px-6 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-[820px]">
        <Reveal className="text-center">
          <p className="type-eyebrow">FAQ</p>
          <h2 className="type-display-md mt-3">자주 묻는 질문</h2>
        </Reveal>

        <Reveal stagger className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="group rounded-3xl border border-line/70 bg-white px-6 py-5 transition-colors open:bg-ink/[0.02]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-medium">
                {item.q}
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-quote-purple/60 text-ink transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{item.a}</p>
              {item.notes && (
                <ul className="mt-2.5 space-y-1">
                  {item.notes.map((note) => (
                    <li key={note} className="text-[13px] leading-relaxed text-ink/50">
                      ※ {note}
                    </li>
                  ))}
                </ul>
              )}
              {item.link && (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-[14px] font-semibold text-pink transition-colors hover:text-pink/80"
                >
                  {item.link.label} ↗
                </a>
              )}
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
