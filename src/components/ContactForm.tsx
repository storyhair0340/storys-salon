"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { CONTACT } from "@/lib/content";
import { cn } from "@/lib/utils";

// v1(story-s.html)과 동일한 Formspree AJAX 전송
const FORMSPREE_ID = "mjgqzpya";

const SERVICE_OPTIONS = [
  "헤어 (컷)",
  "헤어 (펌)",
  "헤어 (염색)",
  "헤어 (연장)",
  "네일아트",
  "속눈썹",
  "반영구 메이크업",
  "기타",
];

// 10:00 ~ 20:00, 30분 단위 (v1과 동일)
const TIME_OPTIONS = Array.from({ length: 21 }, (_, i) => {
  const h = 10 + Math.floor(i / 2);
  const m = i % 2 === 0 ? "00" : "30";
  return `${h}:${m}`;
});

const VIBE_OPTIONS = [
  { emoji: "🤫", label: "조용히 편안하게", sub: "시술에만 집중하고 싶어요" },
  { emoji: "🙂", label: "필요할 때만 대화", sub: "스타일 관련 이야기는 OK" },
  { emoji: "😊", label: "편하게 대화하며", sub: "수다도 힐링이니까요" },
];

const inputCls =
  "w-full rounded-2xl border border-line bg-white px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-ink/30 focus:border-ink/40";

export function ContactForm() {
  const [vibe, setVibe] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const service = String(fd.get("service") ?? "");
    const message = String(fd.get("message") ?? "").trim();

    // v1과 동일한 검증 규칙
    const errs = {
      name: name.length < 2,
      phone: !/^[\d\s\-+()]{9,}$/.test(phone),
      service: !service,
      message: message.length <= 3,
    };
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;

    setStatus("sending");
    const data = {
      name,
      phone,
      service,
      date: [fd.get("date"), fd.get("time")].filter(Boolean).join(" "),
      vibe: vibe || "미선택",
      message,
    };

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("서버 오류");
      setStatus("done");
    } catch {
      setStatus("idle");
      alert(`전송 중 오류가 발생했습니다. 전화(${CONTACT.phone})로 문의해 주세요.`);
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-white px-6 pb-24">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <p className="type-eyebrow">Booking &amp; Contact</p>
          <h2 className="type-display-md mt-3">
            예약 &amp;
            <br />
            상담 문의
          </h2>
          <p className="mt-5 max-w-sm text-[17px] leading-relaxed text-ink/72">
            아래 폼을 남겨주시면 확인 후 연락드립니다. 네이버 예약이 어려우시면
            전화로 문의해 주세요.
          </p>
          <a
            href={CONTACT.phoneHref}
            className="mt-6 inline-block rounded-full border border-line bg-white px-5 py-3 text-[15px] font-medium transition-all hover:-translate-y-px hover:bg-ink/[0.04]"
          >
            ☎ {CONTACT.phone}
          </a>
        </Reveal>

        <Reveal>
          <div className="rounded-[2.2rem] border border-line/60 bg-white p-6 shadow-[0_30px_70px_-45px_rgba(3,7,18,0.35)] sm:p-10">
            {status === "done" ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <span className="flex size-16 items-center justify-center rounded-full bg-chip-green text-3xl">✓</span>
                <p className="mt-6 text-2xl font-medium tracking-tight">문의가 접수되었습니다!</p>
                <p className="mt-3 text-[15px] text-ink/60">
                  확인 후 빠르게 연락드릴게요. 급하신 경우 {CONTACT.phone}로 전화 주세요.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fName" className="mb-2 block text-sm font-semibold">이름 *</label>
                    <input id="fName" name="name" type="text" placeholder="홍길동" className={inputCls} />
                    {errors.name && <p className="mt-1.5 text-[13px] text-pink">이름을 입력해주세요.</p>}
                  </div>
                  <div>
                    <label htmlFor="fPhone" className="mb-2 block text-sm font-semibold">연락처 *</label>
                    <input id="fPhone" name="phone" type="tel" placeholder="010-0000-0000" className={inputCls} />
                    {errors.phone && <p className="mt-1.5 text-[13px] text-pink">연락처를 입력해주세요.</p>}
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="fType" className="mb-2 block text-sm font-semibold">시술 종류 *</label>
                  <select id="fType" name="service" defaultValue="" className={inputCls}>
                    <option value="" disabled>선택해주세요</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="mt-1.5 text-[13px] text-pink">시술 종류를 선택해주세요.</p>}
                </div>

                <div className="mt-5">
                  <span className="mb-2 block text-sm font-semibold">
                    희망 방문일 <span className="font-normal text-ink/40">(선택)</span>
                  </span>
                  <div className="grid grid-cols-[1.5fr_1fr] gap-3">
                    <input name="date" type="date" aria-label="희망 방문일" className={inputCls} />
                    <select name="time" defaultValue="" aria-label="시간 선택" className={inputCls}>
                      <option value="">시간 선택</option>
                      {TIME_OPTIONS.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <span className="mb-2 block text-sm font-semibold">
                    시술 중 편하신 분위기 <span className="font-normal text-ink/40">(선택 안 해도 됩니다)</span>
                  </span>
                  <div className="grid gap-2.5 sm:grid-cols-3">
                    {VIBE_OPTIONS.map((v) => (
                      <button
                        key={v.label}
                        type="button"
                        onClick={() => setVibe(vibe === v.label ? "" : v.label)}
                        className={cn(
                          "rounded-2xl border px-3 py-3.5 text-left transition-all",
                          vibe === v.label
                            ? "border-ink bg-ink text-white"
                            : "border-line bg-white hover:border-ink/40",
                        )}
                      >
                        <span className="block text-lg">{v.emoji}</span>
                        <span className="mt-1 block text-[13.5px] font-semibold">{v.label}</span>
                        <span className={cn("mt-0.5 block text-[12px]", vibe === v.label ? "text-white/60" : "text-ink/45")}>
                          {v.sub}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="fMsg" className="mb-2 block text-sm font-semibold">문의 내용 *</label>
                  <textarea
                    id="fMsg"
                    name="message"
                    rows={4}
                    placeholder="현재 모발/손톱 상태, 원하는 스타일 등 자유롭게 적어주세요."
                    className={cn(inputCls, "resize-none")}
                  />
                  {errors.message && <p className="mt-1.5 text-[13px] text-pink">문의 내용을 입력해주세요.</p>}
                </div>

                {/* 참고 사진 안내 — 카카오톡 채널 개설 후(kakaoChannel 설정 시) 블록 전체가 노출됨 */}
                {CONTACT.kakaoChannel && (
                  <div className="mt-5 rounded-2xl bg-chip-green/50 p-5">
                    <p className="flex items-center gap-2 text-sm font-semibold">
                      <span aria-hidden>📷</span> 원하는 스타일 사진이 있으신가요?
                    </p>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/70">
                      원하시는 헤어·네일 스타일 사진을 보내주시면 원장님이 미리 확인하고
                      시술을 준비합니다. 예약 후 카카오톡으로 편하게 보내주세요.
                    </p>
                    <a
                      href={CONTACT.kakaoChannel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3.5 inline-flex items-center gap-2 rounded-full bg-[#FEE500] px-5 py-2.5 text-[14px] font-semibold text-[#3C1E1E] transition-all hover:-translate-y-px hover:brightness-95"
                    >
                      <span aria-hidden>💬</span> 카카오톡으로 사진 보내기
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-7 w-full rounded-full bg-ink py-4 text-[15px] font-medium text-white transition-all hover:-translate-y-px hover:bg-ink/85 disabled:opacity-60"
                >
                  {status === "sending" ? "전송 중..." : "문의 보내기 →"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
