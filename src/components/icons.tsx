// 시술 아이콘 — tedy 스타일(핑크/보라 계열 심플 픽토그램)의 살롱 버전
export function HairIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M9 4c4 3 5 7 5 11s-1 8-5 13M14 4c5 3 7 7 7 11.5S19 24 15.5 28M20 5c4 3 6 6.5 6 10.5 0 4.5-2.5 8.5-6 12.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function NailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M16 3c3.6 0 6 2.6 6 6.5V19c0 5-2.7 9-6 9s-6-4-6-9V9.5C10 5.6 12.4 3 16 3Z"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <path d="M12.5 9.5c0-2.2 1.4-3.7 3.5-3.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function LashIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M4 16c3.5-5 7.5-7.5 12-7.5S24.5 11 28 16c-3.5 5-7.5 7.5-12 7.5S7.5 21 4 16Z"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <circle cx="16" cy="16" r="3.2" stroke="currentColor" strokeWidth="2.4" />
      <path d="M8 8.5 6.5 6.5M16 6.8V4.4M24 8.5l1.5-2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function DropIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M16 3s9 10.5 9 16.5a9 9 0 0 1-18 0C7 13.5 16 3 16 3Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PaletteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M16 4C9.4 4 4 8.9 4 15c0 5 4 8 8 8 1.7 0 2.5-1 2.5-2.2 0-.7-.4-1.2-.4-1.9 0-1 .9-1.9 2-1.9H19c4 0 7-2.8 7-7 0-3.9-4.4-6-10-6Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="10.5" cy="13" r="1.4" fill="currentColor" />
      <circle cx="16" cy="10" r="1.4" fill="currentColor" />
      <circle cx="21" cy="13.5" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function BrushIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path d="M22 4 28 10 14 24l-6 1 1-6L22 4Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M19 7l6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function PersonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <circle cx="16" cy="11" r="5" stroke="currentColor" strokeWidth="2.4" />
      <path d="M6 27c1.5-5 5.3-7.5 10-7.5S24.5 22 26 27" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function TagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M4 14V6a2 2 0 0 1 2-2h8l14 14-10 10L4 14Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="11" r="2" fill="currentColor" />
    </svg>
  );
}

export function CafeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M6 12h16v8a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-8ZM22 14h2.5a3.5 3.5 0 1 1 0 7H22"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M11 8V5.5M16 8V5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 3v-3H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M4.5 10.5 8.5 14 15.5 6.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 28" fill="currentColor" className={className} aria-hidden>
      <path d="M0 28V16.8C0 7.5 5.6 1.4 14.6 0l1.7 4.6c-5 1.6-7.6 4.6-8 8.4H16V28H0Zm24 0V16.8C24 7.5 29.6 1.4 38.6 0l1.4 4.6c-5 1.6-7.6 4.6-8 8.4H40V28H24Z" />
    </svg>
  );
}
