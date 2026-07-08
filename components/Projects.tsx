import Image from "next/image";
import ProjectCarousel, { type CarouselSlide } from "./ProjectCarousel";
import MoreWork from "./MoreWork";

/* ── ScienceBridge slides ────────────────────── */
const sciencebridgeSlides: CarouselSlide[] = [
  {
    src:         "/images/sciencebridge-banner.jpg",
    alt:         "ScienceBridge core system flow diagram",
    label:       "ScienceBridge Core Architecture",
    description: "Multi-tool agent linking scientific data ingestion, ML models, and dynamic python code execution",
  },
  {
    src:         "/images/sciencebridge-stats.jpg",
    alt:         "ScienceBridge data analysis results view",
    label:       "ScienceBridge Data & ML Execution",
    description: "Interactive neural network validation loss graphs, scatter clustering plots, and execution logs",
  },
];

/* ── LangGraph-Voice-Agent slides ────────────── */
const voiceagentSlides: CarouselSlide[] = [
  {
    src:         "/images/voiceagent-banner.jpg",
    alt:         "LangGraph Voice Agent system architecture map",
    label:       "Voice Agent LangGraph Blueprint",
    description: "OpenAI Realtime API conversation loop with state managers, Whisper ASR, and custom tools",
  },
  {
    src:         "/images/voiceagent-waveform.jpg",
    alt:         "LangGraph Voice Agent circular visualizer and transcript log",
    label:       "Real-time Audio Visualiser & Speech Logs",
    description: "Sleek frontend dashboard with circular audio waveforms and transcribed user dialogue log",
  },
];

/* ── FocusFlow slides ────────────────────────── */
const focusSlides: CarouselSlide[] = [
  {
    src:         "/images/focus/Screenshot_20260621_183654.webp",
    alt:         "FocusFlow dashboard — today's focus goals",
    label:       "Dashboard Home",
    description: "Daily focus analytics, goals checklist, active streak tracker, and quick-start session panel",
  },
  {
    src:         "/images/focus/Screenshot_20260621_183724.webp",
    alt:         "FocusFlow active session timer",
    label:       "Immersive Focus Timer",
    description: "Distraction-free countdown mode with minimalist dial, focus target tracking, and white-noise controls",
  },
  {
    src:         "/images/focus/Screenshot_20260621_183759.webp",
    alt:         "FocusFlow session pause state",
    label:       "Smart Session Pause",
    description: "Gentle warning screen helping users avoid abandonment and return to their focus zone quickly",
  },
  {
    src:         "/images/focus/Screenshot_20260621_183822.webp",
    alt:         "FocusFlow session completion screen",
    label:       "Session Completed!",
    description: "Rewards readout including focus score, total focused minutes, XP tokens, and break timer initialization",
  },
  {
    src:         "/images/focus/Screenshot_20260621_183843.webp",
    alt:         "FocusFlow integrated task manager",
    label:       "Deep Work Task Board",
    description: "Create and prioritize tasks to tie directly into your focus timer, tracking time-to-complete metrics",
  },
  {
    src:         "/images/focus/Screenshot_20260621_183900.webp",
    alt:         "FocusFlow distraction shield settings",
    label:       "Distraction Shield Configuration",
    description: "Configure the active system blocklist to temporarily lock out distracting apps and disable notifications",
  },
  {
    src:         "/images/focus/Screenshot_20260621_183914.webp",
    alt:         "FocusFlow analytics and charts",
    label:       "Focus Analytics",
    description: "Granular charts showing weekly productivity patterns, focus category splits, and historical trends",
  },
  {
    src:         "/images/focus/Screenshot_20260621_183937.webp",
    alt:         "FocusFlow achievements and milestones",
    label:       "Milestones & Gamification",
    description: "Level up your focus rank, unlock badges, and track your metrics progression over time",
  },
  {
    src:         "/images/focus/Screenshot_20260621_183947.webp",
    alt:         "FocusFlow global settings and sounds",
    label:       "Custom Settings",
    description: "Adjust target intervals (classic Pomodoro vs. custom), notification sound presets, and backup options",
  },
];

/* ── POS slides ──────────────────────────────── */
const posSlides: CarouselSlide[] = [
  {
    src:         "/images/pos/pos-terminal.png",
    alt:         "Store POS — point of sale terminal",
    label:       "Point of Sale Terminal",
    description: "Fast checkout with barcode scanning, cart management, and category browsing across 650+ SKUs",
  },
  {
    src:         "/images/pos/pos-dashboard.png",
    alt:         "Store POS — analytics dashboard",
    label:       "Analytics Dashboard",
    description: "Real-time KPIs — sales, gross profit, net profit, stock value — with 30-day trend charts",
  },
  {
    src:         "/images/pos/pos-reports.png",
    alt:         "Store POS — transaction reports",
    label:       "Transaction Reports",
    description: "Full transaction history with per-cashier filtering, CSV/PDF export, and profit breakdown",
  },
  {
    src:         "/images/pos/pos-admin.png",
    alt:         "Store POS — admin panel",
    label:       "Admin Panel",
    description: "Complete back-office: expenses, damages, credits, stock management, reconciliation, and audit logs",
  },
  {
    src:         "/images/pos/pos-products.png",
    alt:         "Store POS — product catalogue",
    label:       "Product Catalogue",
    description: "650+ products with category filters, stock levels, live pricing, and low-stock alerts",
  },
  {
    src:         "/images/pos/pos-analytics.png",
    alt:         "Store POS — revenue analytics",
    label:       "Revenue Analytics",
    description: "Revenue-by-category pie chart and full stock reconciliation — opening value vs. variance",
  },
  {
    src:         "/images/pos/pos-stock.png",
    alt:         "Store POS — stock management",
    label:       "Stock Management",
    description: "Receive stock with buying/selling price capture, barcode printing, and SKU tracking",
  },
];

/* ── Shared description card ─────────────────── */
function ProjectHeader({
  num, category, title, description, chips, mobileBg, mobileBgPosition = "center",
}: {
  num: string;
  category: string;
  title: string;
  description: string;
  chips: string[];
  mobileBg: string;
  mobileBgPosition?: string;
}) {
  return (
    <div className="relative px-6 md:px-7 pt-5 pb-7 bg-ink-2 border-b border-ink-5 flex flex-col justify-between overflow-hidden lg:h-[200px]">
      <img
        src={mobileBg}
        aria-hidden="true"
        alt=""
        className="lg:hidden absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: mobileBgPosition, filter: "blur(18px)", transform: "scale(1.15)", opacity: 0.13 }}
      />
      <div className="lg:hidden absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.6) 100%)" }} />
      <div className="relative z-10 flex flex-col gap-2.5 h-full justify-between flex-grow">
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[0.58rem] tracking-widest uppercase text-smoke-3">{num}</span>
            <span className="font-mono text-[0.6rem] tracking-wider uppercase text-smoke-2">{category}</span>
          </div>
          <h3 className="font-sans text-lg font-bold text-paper leading-tight">{title}</h3>
          <p className="font-sans text-sm text-smoke leading-relaxed lg:min-h-[66px]">{description}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {chips.map((s) => <span key={s} className="chip chip-white">{s}</span>)}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative">

      {/* Section header */}
      <div className="relative overflow-hidden border-t border-ink-5">
        <Image
          src="/images/work-bg.jpg"
          fill
          alt=""
          className="object-cover"
          style={{ opacity: 0.05, objectPosition: "center" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-16 pt-20 pb-10">
          <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-smoke-2 mb-3">Featured Work</p>
          <h2 className="font-sans text-5xl md:text-7xl font-black text-paper tracking-tight leading-none">
            What I Build.
          </h2>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-16 py-8 flex flex-col gap-4">

        {/* ── Row 1: ScienceBridge + LangGraph Voice Agent (both Web/AI) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* ScienceBridge */}
          <div className="border border-ink-5 overflow-hidden flex flex-col" style={{ borderRadius: "0.3rem" }}>
            <ProjectHeader
              num="01" category="AI Agent · Scientific Research · Code Gen"
              title="ScienceBridge — Scientific AI Agent"
              description="An autonomous research agent accelerating discovery. Reads scientific datasets, generates testable hypotheses, and validates them dynamically via code execution."
              chips={["Autonomous EDA", "Hypothesis Testing", "Dynamic ML Models"]}
              mobileBg="/images/sciencebridge-banner.jpg"
            />
            <div className="px-6 py-2.5 border-b border-ink-5 bg-ink-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" aria-hidden="true" />
                <span className="font-mono text-[0.58rem] tracking-widest uppercase text-smoke-2">
                  Autonomous Agent · CLI &amp; Web API
                </span>
              </div>
              <a
                href="https://github.com/zaibaki/ScienceBridge"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.58rem] tracking-widest uppercase text-smoke hover:text-cyan-400 transition-colors flex items-center gap-1.5 group/git"
              >
                <svg className="w-3.5 h-3.5 fill-current text-smoke-3 group-hover/git:text-cyan-400 transition-colors" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub Code →
              </a>
            </div>
            <ProjectCarousel slides={sciencebridgeSlides} interval={4500} screenMode />
            <div className="px-6 py-2.5 border-t border-ink-5 bg-ink-2 flex flex-wrap items-center gap-2 lg:h-[76px]">
              <span className="font-mono text-[0.55rem] tracking-widest uppercase text-smoke-3 mr-1">Stack</span>
              {["Python", "FastAPI", "Docker", "scikit-learn", "Alembic", "PostgreSQL", "SQLAlchemy"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* LangGraph Voice Agent */}
          <div className="border border-ink-5 overflow-hidden flex flex-col" style={{ borderRadius: "0.3rem" }}>
            <ProjectHeader
              num="02" category="Agentic AI · Voice Interface · Stateful Workflows"
              title="LangGraph Voice Agent — Real-time Speech AI"
              description="A stateful, full-stack voice agent using LangGraph and OpenAI's Realtime API for natural speech-to-speech conversations with autonomous tool-calling capabilities."
              chips={["OpenAI Realtime API", "Tavily Web Search", "Audio Visualization"]}
              mobileBg="/images/voiceagent-banner.jpg"
            />
            <div className="px-6 py-2.5 border-b border-ink-5 bg-ink-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" aria-hidden="true" />
                <span className="font-mono text-[0.58rem] tracking-widest uppercase text-smoke-2">
                  Speech Agent · WebSockets Interface
                </span>
              </div>
              <a
                href="https://github.com/zaibaki/LangGraph-Voice-Agent"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.58rem] tracking-widest uppercase text-smoke hover:text-cyan-400 transition-colors flex items-center gap-1.5 group/git"
              >
                <svg className="w-3.5 h-3.5 fill-current text-smoke-3 group-hover/git:text-cyan-400 transition-colors" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub Code →
              </a>
            </div>
            <ProjectCarousel slides={voiceagentSlides} interval={4200} screenMode />
            <div className="px-6 py-2.5 border-t border-ink-5 bg-ink-2 flex flex-wrap items-center gap-2 lg:h-[76px]">
              <span className="font-mono text-[0.55rem] tracking-widest uppercase text-smoke-3 mr-1">Stack</span>
              {["LangGraph", "FastAPI", "WebSockets", "Python", "Tavily API", "Tailwind CSS", "Jinja2"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

        </div>

        {/* ── Row 2: FocusFlow + Store POS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* FocusFlow */}
          <div className="border border-ink-5 overflow-hidden flex flex-col" style={{ borderRadius: "0.3rem" }}>
            <ProjectHeader
              num="03" category="Productivity · Mobile · UX"
              title="FocusFlow — Gamified Deep Work App"
              description="A beautiful mobile app helping developers and creators block distractions, track focus sessions, and build long-term productivity habits with gamified rewards."
              chips={["Pomodoro Timer", "App Blocker", "Focus Analytics"]}
              mobileBg="/images/focus/Screenshot_20260621_183654.webp"
            />
            <div className="px-6 py-2.5 border-b border-ink-5 bg-ink-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" aria-hidden="true" />
                <span className="font-mono text-[0.58rem] tracking-widest uppercase text-smoke-2">
                  Mobile App · iOS &amp; Android
                </span>
              </div>
            </div>
            <ProjectCarousel slides={focusSlides} interval={4000} />
            <div className="px-6 py-2.5 border-t border-ink-5 bg-ink-2 flex flex-wrap items-center gap-2 lg:h-[76px]">
              <span className="font-mono text-[0.55rem] tracking-widest uppercase text-smoke-3 mr-1">Stack</span>
              {["React Native", "Expo", "TypeScript", "SQLite", "Victory Charts", "Tailwind CSS"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Store POS */}
          <div className="border border-ink-5 overflow-hidden flex flex-col" style={{ borderRadius: "0.3rem" }}>
            <ProjectHeader
              num="04" category="Retail · Web · Full-stack"
              title="Store POS — Point of Sale System"
              description="Full-stack POS with inventory management, sales analytics, multi-cashier support, and real-time stock reconciliation."
              chips={["650+ SKUs", "Multi-cashier", "Offline-first"]}
              mobileBg="/images/pos/pos-dashboard.png"
              mobileBgPosition="top"
            />
            <div className="px-6 py-2.5 border-b border-ink-5 bg-ink-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" aria-hidden="true" />
                <span className="font-mono text-[0.58rem] tracking-widest uppercase text-smoke-2">
                  Open Source Project · Desktop App
                </span>
              </div>
              <a
                href="https://github.com/zaibaki/Store-POS"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.58rem] tracking-widest uppercase text-smoke hover:text-cyan-400 transition-colors flex items-center gap-1.5 group/git"
              >
                <svg className="w-3.5 h-3.5 fill-current text-smoke-3 group-hover/git:text-cyan-400 transition-colors" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub Code →
              </a>
            </div>
            <ProjectCarousel slides={posSlides} interval={4200} screenMode />
            <div className="px-6 py-2.5 border-t border-ink-5 bg-ink-2 flex flex-wrap items-center gap-2 lg:h-[76px]">
              <span className="font-mono text-[0.55rem] tracking-widest uppercase text-smoke-3 mr-1">Stack</span>
              {["React", "Node.js", "Django", "PostgreSQL", "Redis", "Docker", "SQLite"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* More work — collapsed */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 pb-20">
        <MoreWork />
      </div>

      <div className="section-divider" />
    </section>
  );
}
