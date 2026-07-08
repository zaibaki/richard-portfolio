"use client";

import { useState } from "react";

const projects = [
  {
    num:    "05",
    name:   "BayKart — Agriculture Marketplace",
    client: "African Agri",
    blurb:  "A commodities marketplace connecting 10K+ farmers directly to buyers. Features weather forecasts, logistics, and sisi-AI crop diagnostics.",
    chips:  ["10K+ Farmers", "Multimodal AI", "iOS & Android"],
    stack:  ["React Native", "Django", "AWS", "PostgreSQL", "Redis"],
  },
  {
    num:    "06",
    name:   "SmartChef — Recipe Recognition App",
    client: "AI Scanning",
    blurb:  "Point-and-cook AI application running YOLOv8 object recognition on iOS. Detects multiple kitchen ingredients to generate custom AI recipes.",
    chips:  ["OpenCV / YOLOv8", "CoreML", "AI Recipes"],
    stack:  ["Swift", "SwiftUI", "UIKit", "OpenAI API", "iOS"],
  },
  {
    num:    "07",
    name:   "Multi-tenant API Infrastructure",
    client: "Kreatoors AI",
    blurb:  "Secure API infra for 20K+ users. Latency cut from 800 ms → 200 ms.",
    chips:  ["20K+ Users", "200ms P95", "99.9% Uptime"],
    stack:  ["Node.js", "TypeScript", "MongoDB", "AWS"],
  },
  {
    num:    "08",
    name:   "Context-Aware AI Agents",
    client: "Miksi AI",
    blurb:  "BI agents with 90% SQL accuracy. Published Python SDK on PyPI — 200+ downloads.",
    chips:  ["90% Accuracy", "200+ Downloads", "0 Prod Bugs"],
    stack:  ["Python", "LangGraph", "FastAPI", "Azure"],
  },
];

export default function MoreWork() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4">
      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-5 py-3.5 border border-ink-5 bg-ink-2 hover:bg-ink-3 hover:border-ink-6 transition-all group cursor-pointer"
        style={{ borderRadius: "0.3rem" }}
      >
        <span className="font-mono text-[0.62rem] tracking-widest uppercase text-smoke-2 group-hover:text-paper transition-colors">
          {open ? "Hide additional work" : "View more work"}
        </span>
        <span
          className="font-mono text-xs text-smoke-3 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ↓
        </span>
      </button>

      {/* Collapsible content */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: open ? "1000px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
          {projects.map((p) => (
            <div
              key={p.name}
              className="border border-ink-5 bg-ink-3 p-6 flex flex-col justify-between gap-4 card-hover"
              style={{ borderRadius: "0.25rem" }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[0.58rem] tracking-widest uppercase text-smoke-3">
                    {p.num}
                  </span>
                  <span
                    className="font-mono text-[0.6rem] tracking-wider text-smoke-2 bg-ink-5 px-2 py-0.5"
                    style={{ borderRadius: "0.15rem" }}
                  >
                    {p.client}
                  </span>
                </div>

                <div>
                  <h3 className="font-sans text-base font-bold text-paper leading-snug mb-1.5">
                    {p.name}
                  </h3>
                  <p className="font-sans text-sm text-smoke leading-relaxed">{p.blurb}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.chips.map((c) => (
                    <span key={c} className="chip chip-white">{c}</span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-ink-5">
                {p.stack.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
