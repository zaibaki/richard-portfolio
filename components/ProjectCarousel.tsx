"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export interface CarouselSlide {
  src:         string;
  alt:         string;
  label:       string;
  description: string;
}

interface Props {
  slides:      CarouselSlide[];
  interval?:   number;
  screenMode?: boolean;
  /** stretch stage to fill parent flex column instead of using fixed height */
  fill?:       boolean;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ProjectCarousel({
  slides,
  interval   = 3500,
  screenMode = false,
  fill       = false,
}: Props) {
  /* Fair random: shuffle once on mount, reshuffle each full cycle */
  const [deck,     setDeck]     = useState<CarouselSlide[]>(() => shuffle(slides));
  const [index,    setIndex]    = useState(0);
  const [paused,   setPaused]   = useState(false);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => { setDeck(shuffle(slides)); }, []);   // shuffle on hydration

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => {
        const next = i + 1;
        if (next >= deck.length) {
          setDeck(shuffle(slides));   // reshuffle at end of each cycle
          return 0;
        }
        return next;
      });
    }, interval);
    return () => clearInterval(t);
  }, [paused, deck.length, interval, resetKey]);

  const goTo = (i: number) => {
    setIndex(i);
    setResetKey((k) => k + 1);
  };
  const prev = () => goTo((index - 1 + deck.length) % deck.length);
  const next = () => goTo((index + 1) % deck.length);

  if (!deck.length) return null;

  const current = deck[index];

  return (
    <div
      className={`flex flex-col select-none${fill ? " flex-1 min-h-0" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Stage ─────────────────────────────── */}
      <div
        className={`relative bg-ink overflow-hidden flex items-center justify-center py-8${fill ? " flex-1 min-h-0" : ""}`}
        style={fill ? undefined : { height: screenMode ? "460px" : "620px" }}
      >
        {/* Ambient colour bleed */}
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-700" aria-hidden="true">
          <img
            src={current.src}
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: "blur(60px)", transform: "scale(1.4)", opacity: 0.14 }}
          />
        </div>

        {/* ── Desktop browser chrome ── */}
        {screenMode && (
          <div
            className="relative z-10 w-full mx-4 md:mx-6 overflow-hidden"
            style={{
              maxHeight:    "94%",
              borderRadius: "0.6rem",
              boxShadow:    "0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#1c1c1c] border-b border-[#333]">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <div className="ml-3 flex-1 bg-[#2a2a2a] px-3 py-1 max-w-[200px]" style={{ borderRadius: "0.15rem" }}>
                <span className="font-mono text-[0.55rem] text-smoke-3 tracking-wider">Store POS</span>
              </div>
            </div>
            <div className="relative" style={{ height: "390px" }}>
              {deck.map((s, i) => (
                <div
                  key={s.src}
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: i === index ? 1 : 0 }}
                >
                  <Image
                    src={s.src}
                    fill
                    alt={s.alt}
                    className="object-contain"
                    style={{ background: "#0a0a0a" }}
                    sizes="(max-width: 768px) 100vw, 560px"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Mobile phone frames ── */}
        {!screenMode && (
          <div
            className="relative z-10 w-[286px] h-[520px]"
            style={{
              boxShadow: "0 32px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
            }}
          >
            {deck.map((s, i) => (
              <div
                key={s.src}
                className="absolute inset-0 transition-all duration-500 ease-in-out overflow-hidden"
                style={{
                  opacity:       i === index ? 1    : 0,
                  transform:     i === index ? "scale(1)" : "scale(0.96)",
                  pointerEvents: i === index ? "auto" : "none",
                  borderRadius:  "0.3rem",
                }}
              >
                <Image
                  src={s.src}
                  fill
                  alt={s.alt}
                  className="object-cover"
                  sizes="286px"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Info strip ───────────────────────── */}
      <div className="bg-ink-3 border-t border-ink-5 px-5 pt-4 pb-4 flex flex-col gap-3">
        <div key={index} className="slide-info-enter flex items-start justify-between gap-3">
          <div className="min-w-0 flex flex-col gap-1">
            <p className="font-sans text-sm font-semibold text-paper leading-snug line-clamp-1">
              {current.label}
            </p>
            <p className="font-sans text-xs text-smoke leading-relaxed line-clamp-2">
              {current.description}
            </p>
          </div>
          <span className="font-mono text-[0.58rem] tracking-widest text-smoke-3 tabular-nums shrink-0 pt-0.5">
            {String(index + 1).padStart(2, "0")}&thinsp;/&thinsp;{String(deck.length).padStart(2, "0")}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="flex items-center justify-center bg-ink-4 border border-ink-6 hover:border-smoke hover:text-paper text-smoke-2 transition-all"
            style={{ width: 36, height: 36, borderRadius: "0.2rem", fontSize: "16px" }}
          >
            ←
          </button>
          <div className="flex-1 flex items-center justify-center gap-1.5">
            {deck.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className="h-[3px] rounded-full transition-all duration-300 ease-out"
                style={{
                  width:      i === index ? "24px" : "6px",
                  background: i === index ? "#ffffff" : "#2d2d2d",
                }}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next slide"
            className="flex items-center justify-center bg-ink-4 border border-ink-6 hover:border-smoke hover:text-paper text-smoke-2 transition-all"
            style={{ width: 36, height: 36, borderRadius: "0.2rem", fontSize: "16px" }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
