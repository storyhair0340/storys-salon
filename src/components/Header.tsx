import { CONTACT } from "@/lib/content";

const NAV_LINKS = [
  { label: "서비스", href: "#services" },
  { label: "카테고리", href: "#categories" },
  { label: "원장 소개", href: "#directors" },
  { label: "후기", href: "#reviews" },
  { label: "문의", href: "#contact" },
  { label: "오시는 길", href: "#visit" },
];

export function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-6">
        <a href="#top" className="flex items-baseline gap-1 text-xl font-semibold tracking-[0.1em]">
          STORY
          <span
            className="text-[2.2em] leading-[0.6] text-[#e03030] [font-family:var(--font-script)]"
            style={{
              WebkitTextStroke: "0.8px #c02020",
              textShadow: "1px 1px 0 #b01010, 2px 2px 4px rgba(0,0,0,0.18)",
            }}
          >
            S
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[16px] text-ink transition-colors hover:text-ink/60"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CONTACT.phoneHref}
            className="hidden rounded-full border border-line bg-white px-[14px] py-2 text-[15px] text-ink transition-all hover:-translate-y-px hover:bg-ink/[0.04] sm:block"
          >
            ☎ {CONTACT.phone}
          </a>
          <a
            href={CONTACT.naverBooking}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#03c75a] px-[18px] py-2.5 text-sm text-white transition-all hover:-translate-y-px hover:bg-[#02b350]"
          >
            네이버 예약
          </a>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="인스타그램"
            className="hidden rounded-full bg-black px-[18px] py-2.5 text-sm text-white transition-all hover:-translate-y-px hover:bg-ink/80 md:block"
          >
            Instagram
          </a>
        </div>
      </div>
    </header>
  );
}
