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
  const [deck,     setDeck]     = useState<CarouselSlide[]>(slides);
  const [index,    setIndex]    = useState(0);
  const [prevSrc,  setPrevSrc]  = useState<string | null>(null);
  const [dir,      setDir]      = useState<"next" | "prev">("next");
  const [paused,   setPaused]   = useState(false);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => { setDeck(shuffle(slides)); }, []);   // shuffle on hydration

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setDir("next");
      setIndex((i) => {
        const nextVal = i + 1;
        if (nextVal >= deck.length) {
          setDeck(shuffle(slides));   // reshuffle at end of each cycle
          return 0;
        }
        return nextVal;
      });
    }, interval);
    return () => clearInterval(t);
  }, [paused, deck.length, interval, resetKey]);

  useEffect(() => {
    if (deck[index]?.src) {
      setPrevSrc((prev) => {
        // Only set prev if it differs from current.src
        if (prev !== deck[index].src) {
          // If we had a previous image, update it
          return deck[index].src;
        }
        return prev;
      });
    }
  }, [index, deck]);

  // Keep track of the active and previous sources for ambient fading
  const currentSrc = deck[index]?.src;

  const goTo = (i: number, forceDir?: "next" | "prev") => {
    if (forceDir) {
      setDir(forceDir);
    } else {
      setDir(i > index ? "next" : "prev");
    }
    setIndex(i);
    setResetKey((k) => k + 1);
  };
  const prev = () => goTo((index - 1 + deck.length) % deck.length, "prev");
  const next = () => goTo((index + 1) % deck.length, "next");

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
        className="relative bg-ink flex items-center justify-center py-8 overflow-hidden w-full lg:h-[680px] h-[640px]"
      >
        {/* Ambient colour bleed with smooth cross-fade */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {prevSrc && prevSrc !== currentSrc && (
            <img
              key={`prev-${prevSrc}`}
              src={prevSrc}
              alt=""
              className="absolute inset-0 w-full h-full object-cover ambient-fade-out"
              style={{ filter: "blur(70px)", transform: "scale(1.5)" }}
            />
          )}
          {currentSrc && (
            <img
              key={`curr-${currentSrc}`}
              src={currentSrc}
              alt=""
              className="absolute inset-0 w-full h-full object-cover ambient-fade-in"
              style={{ filter: "blur(70px)", transform: "scale(1.5)" }}
            />
          )}
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
            <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#1c1c1c] border-b border-[#333] z-20 relative">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <div className="ml-3 flex-1 bg-[#2a2a2a] px-3 py-1 max-w-[200px]" style={{ borderRadius: "0.15rem" }}>
                <span className="font-mono text-[0.55rem] text-smoke-3 tracking-wider">Web Workspace</span>
              </div>
            </div>
            <div className="relative overflow-hidden" style={{ height: "390px" }}>
              {deck.map((s, i) => {
                const isActive = i === index;
                const isPrev = i === (index - 1 + deck.length) % deck.length;
                const isNext = i === (index + 1) % deck.length;
                
                let transformStyle = "translateX(0) scale(1)";
                let opacityStyle = 0;
                let zIndexStyle = 0;
                
                if (isActive) {
                  opacityStyle = 1;
                  zIndexStyle = 10;
                } else if (isPrev && dir === "next") {
                  transformStyle = "translateX(-30%) scale(0.95)";
                  opacityStyle = 0;
                  zIndexStyle = 0;
                } else if (isNext && dir === "prev") {
                  transformStyle = "translateX(30%) scale(0.95)";
                  opacityStyle = 0;
                  zIndexStyle = 0;
                } else {
                  transformStyle = dir === "next" ? "translateX(30%) scale(0.95)" : "translateX(-30%) scale(0.95)";
                  opacityStyle = 0;
                  zIndexStyle = 0;
                }

                return (
                  <div
                    key={s.src}
                    className="absolute inset-0"
                    style={{
                      opacity: opacityStyle,
                      transform: transformStyle,
                      zIndex: zIndexStyle,
                      pointerEvents: isActive ? "auto" : "none",
                      transition: "transform 600ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms ease-in-out"
                    }}
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

                    {/* Scanline Sweep */}
                    {isActive && (
                      <div
                        key={`sweep-${index}`}
                        className="absolute inset-0 pointer-events-none overflow-hidden z-20"
                      >
                        <div
                          className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
                          style={{
                            top: 0,
                            boxShadow: "0 0 10px #22d3ee, 0 0 20px #22d3ee",
                            animation: "sweep-line 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards"
                          }}
                        />
                        <div
                          className="absolute inset-0 bg-cyan-400/5"
                          style={{
                            animation: "sweep-glow 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards"
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Mobile phone frames with Bezel Bezel Mockup ── */}
        {!screenMode && (
          <div
            className="relative z-10 w-[298px] h-[636px] bg-[#151515] p-[7px]"
            style={{
              borderRadius: "2.3rem",
              border: "7px solid #282828",
              boxShadow: "0 30px 70px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          >
            {/* Dynamic Island Speaker notched look */}
            <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3">
              <span className="w-1.5 h-1.5 bg-[#111] rounded-full" />
              <span className="w-12 h-1 bg-[#1a1a1a] rounded-full" />
              <span className="w-2 h-2 bg-[#020202] rounded-full border border-[#080808]" />
            </div>

            {/* Inner viewport screen outline */}
            <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: "1.8rem" }}>
              {deck.map((s, i) => {
                const isActive = i === index;
                const isPrev = i === (index - 1 + deck.length) % deck.length;
                const isNext = i === (index + 1) % deck.length;
                
                let transformStyle = "translateX(0) scale(1) rotate(0deg)";
                let opacityStyle = 0;
                let zIndexStyle = 0;
                
                if (isActive) {
                  opacityStyle = 1;
                  zIndexStyle = 10;
                } else if (isPrev && dir === "next") {
                  transformStyle = "translateX(-110%) scale(0.85) rotate(-6deg)";
                  opacityStyle = 0;
                  zIndexStyle = 0;
                } else if (isNext && dir === "prev") {
                  transformStyle = "translateX(110%) scale(0.85) rotate(6deg)";
                  opacityStyle = 0;
                  zIndexStyle = 0;
                } else {
                  transformStyle = dir === "next" 
                    ? "translateX(110%) scale(0.85) rotate(6deg)" 
                    : "translateX(-110%) scale(0.85) rotate(-6deg)";
                  opacityStyle = 0;
                  zIndexStyle = 0;
                }

                return (
                  <div
                    key={s.src}
                    className="absolute inset-0"
                    style={{
                      opacity: opacityStyle,
                      transform: transformStyle,
                      zIndex: zIndexStyle,
                      pointerEvents: isActive ? "auto" : "none",
                      transition: "transform 650ms cubic-bezier(0.16, 1, 0.3, 1), opacity 550ms ease-in-out"
                    }}
                  >
                    <Image
                      src={s.src}
                      fill
                      alt={s.alt}
                      className="object-cover"
                      style={{ borderRadius: "1.8rem" }}
                      sizes="286px"
                      priority={i === 0}
                    />

                    {/* Scanline Sweep overlay */}
                    {isActive && (
                      <div
                        key={`sweep-${index}`}
                        className="absolute inset-0 pointer-events-none overflow-hidden z-20"
                        style={{ borderRadius: "1.8rem" }}
                      >
                        <div
                          className="absolute inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-75"
                          style={{
                            top: 0,
                            boxShadow: "0 0 12px #22d3ee, 0 0 25px #22d3ee",
                            animation: "sweep-line 480ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards"
                          }}
                        />
                        <div
                          className="absolute inset-0 bg-cyan-400/5"
                          style={{
                            animation: "sweep-glow 480ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards"
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ── Info strip ───────────────────────── */}
      <div className="bg-ink-3 border-t border-ink-5 px-5 pt-4 pb-4 flex flex-col gap-3 lg:h-[105px] justify-between">
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
