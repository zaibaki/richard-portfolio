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
}

export default function ProjectCarousel({
  slides,
  interval   = 3500,
  screenMode = false,
}: Props) {
  const [index,    setIndex]    = useState(0);
  const [paused,   setPaused]   = useState(false);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      interval
    );
    return () => clearInterval(t);
  }, [paused, slides.length, interval, resetKey]);

  const goTo = (i: number) => {
    setIndex(i);
    setResetKey((k) => k + 1);
  };
  const prev = () => goTo((index - 1 + slides.length) % slides.length);
  const next = () => goTo((index + 1) % slides.length);

  if (!slides.length) return null;

  /* interval label e.g. "3.5s" */
  const intervalLabel = interval >= 1000
    ? `${(interval / 1000).toFixed(interval % 1000 === 0 ? 0 : 1)}s`
    : `${interval}ms`;

  return (
    <div
      className="flex flex-col select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Stage ─────────────────────────────── */}
      <div
        className="relative bg-ink overflow-hidden flex items-center justify-center"
        style={{ height: screenMode ? "460px" : "620px" }}
      >
        {/* Progress bar — key resets animation on every slide change */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-ink-5 z-30">
          <div
            key={`pb-${index}-${resetKey}-${paused}`}
            className="h-full bg-white/40"
            style={
              paused
                ? { width: "0%" }
                : { animation: `progress-bar ${interval}ms linear forwards` }
            }
          />
        </div>

        {/* Autoplay badge */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-ink-4/80 border border-ink-5 px-2 py-1 backdrop-blur-sm"
             style={{ borderRadius: "0.2rem" }}>
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: paused ? "#444" : "#4ade80",
              animation: paused ? "none" : "pulse-dot 1.8s ease-in-out infinite",
            }}
          />
          <span className="font-mono text-[0.52rem] tracking-widest uppercase text-smoke-3">
            {paused ? "paused" : `auto · ${intervalLabel}`}
          </span>
        </div>

        {/* Ambient colour bleed */}
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-700" aria-hidden="true">
          <img
            src={slides[index].src}
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: "blur(60px)", transform: "scale(1.4)", opacity: 0.14 }}
          />
        </div>

        {/* ── Desktop browser chrome ── */}
        {screenMode && (
          <div className="relative z-10 w-full mx-4 md:mx-6 overflow-hidden"
               style={{
                 maxHeight: "400px",
                 borderRadius: "0.6rem",
                 boxShadow: "0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
               }}>
            {/* Chrome bar */}
            <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#1c1c1c] border-b border-[#333]">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <div className="ml-3 flex-1 bg-[#2a2a2a] px-3 py-1 max-w-[200px]"
                   style={{ borderRadius: "0.15rem" }}>
                <span className="font-mono text-[0.55rem] text-smoke-3 tracking-wider">Store POS</span>
              </div>
            </div>
            {/* Screenshot area */}
            <div className="relative" style={{ height: "354px" }}>
              {slides.map((s, i) => (
                <div
                  key={s.src}
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: i === index ? 1 : 0 }}
                >
                  <Image
                    src={s.src}
                    fill
                    alt={s.alt}
                    className="object-cover object-top"
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
            className="relative z-10 w-[286px] h-[580px]"
            style={{
              borderRadius: "2.4rem",
              overflow: "hidden",
              boxShadow: "0 32px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
            }}
          >
            {slides.map((s, i) => (
              <div
                key={s.src}
                className="absolute inset-0 transition-all duration-500 ease-in-out"
                style={{
                  opacity:       i === index ? 1 : 0,
                  transform:     i === index ? "scale(1)" : "scale(0.96)",
                  pointerEvents: i === index ? "auto" : "none",
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

        {/* Label + counter */}
        <div key={index} className="slide-info-enter flex items-start justify-between gap-3">
          <div className="min-w-0 flex flex-col gap-1">
            <p className="font-sans text-sm font-semibold text-paper leading-snug line-clamp-1">
              {slides[index].label}
            </p>
            <p className="font-sans text-xs text-smoke leading-relaxed line-clamp-2">
              {slides[index].description}
            </p>
          </div>
          <span className="font-mono text-[0.58rem] tracking-widest text-smoke-3 tabular-nums shrink-0 pt-0.5">
            {String(index + 1).padStart(2, "0")}&thinsp;/&thinsp;{String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-3">
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="flex items-center justify-center bg-ink-4 border border-ink-6 hover:border-smoke hover:text-paper text-smoke-2 transition-all"
            style={{ width: 36, height: 36, borderRadius: "0.2rem", fontSize: "16px" }}
          >
            ←
          </button>

          {/* Pill dots */}
          <div className="flex-1 flex items-center justify-center gap-1.5">
            {slides.map((_, i) => (
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

          {/* Next */}
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
