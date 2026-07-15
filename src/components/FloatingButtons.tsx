"use client";

import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/content";
import { cn } from "@/lib/utils";

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-center gap-2.5 sm:right-6">
      {/* 카카오톡 상담 — 채널 URL이 설정되면 노출 */}
      {CONTACT.kakaoChannel && (
        <div className="flex flex-col items-center gap-1">
          <a
            href={CONTACT.kakaoChannel}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="카카오톡 상담"
            className="flex size-12 items-center justify-center rounded-full bg-[#FEE500] shadow-[0_4px_16px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.22)]"
          >
            <svg viewBox="0 0 24 24" className="size-6" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path
                d="M12 3C6.477 3 2 6.925 2 11.75c0 2.91 1.555 5.494 3.965 7.16L4.9 22l3.638-1.94C9.6 20.34 10.777 20.5 12 20.5c5.523 0 10-3.925 10-8.75S17.523 3 12 3z"
                fill="#391B1B"
              />
            </svg>
          </a>
          <span className="text-center text-[10px] leading-tight tracking-wide text-ink/50">
            카카오
            <br />
            상담
          </span>
        </div>
      )}

      {/* 맨 위로 */}
      <button
        type="button"
        aria-label="맨 위로"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "flex size-12 items-center justify-center rounded-full bg-pink text-white shadow-[0_4px_20px_rgba(253,23,116,0.35),0_2px_8px_rgba(0,0,0,0.12)] transition-all duration-300 hover:brightness-95",
          showTop
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-90 opacity-0",
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-[18px]"
          aria-hidden
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  );
}
