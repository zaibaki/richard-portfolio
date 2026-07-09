"use client";

import Image from "next/image";
import { useState } from "react";
import ProjectCarousel, { type CarouselSlide } from "./ProjectCarousel";

/* ── 01. ScienceBridge slides ────────────────── */
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

/* ── 02. LangGraph-Voice-Agent slides ────────── */
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

/* ── 03. SmartChef slides ────────────────────── */
const smartchefSlides: CarouselSlide[] = [
  {
    src:         "/images/smartchef/home.png",
    alt:         "SmartChef — The Kitchen home screen",
    label:       "The Kitchen",
    description: "AI-powered home screen with recent recipes, cooking inspiration, and one-tap camera ingredient scan",
  },
  {
    src:         "/images/smartchef/scan.png",
    alt:         "SmartChef — ingredient detection",
    label:       "AI Ingredient Scanner",
    description: "Point your camera at any ingredients — the app detects them instantly and generates a tailored recipe",
  },
  {
    src:         "/images/smartchef/recipe.png",
    alt:         "SmartChef — generated recipe card",
    label:       "AI-Generated Recipe",
    description: "Full recipe with prep time, cook time, servings, and scalable ingredient list — generated from your scan",
  },
  {
    src:         "/images/smartchef/steps.png",
    alt:         "SmartChef — step-by-step instructions",
    label:       "Step-by-Step Guide",
    description: "Guided cooking instructions with integrated kitchen timers and chef tips at every step",
  },
  {
    src:         "/images/smartchef/cooking.png",
    alt:         "SmartChef — start cooking mode",
    label:       "Start Cooking Mode",
    description: "Nutrition info, chef tips, and an AI chat assistant — ask substitutions, technique, or anything",
  },
  {
    src:         "/images/smartchef/recipes.png",
    alt:         "SmartChef — recipe library",
    label:       "Recipe Library",
    description: "All your generated recipes saved and organised by date — filter, favourite, and revisit anytime",
  },
  {
    src:         "/images/smartchef/favourites.png",
    alt:         "SmartChef — favourites",
    label:       "Favourites",
    description: "Star your best recipes for quick access — your personal cookbook, always in your pocket",
  },
  {
    src:         "/images/smartchef/planner.png",
    alt:         "SmartChef — meal planner",
    label:       "Weekly Meal Plan",
    description: "Plan breakfast, lunch, and dinner for the whole week — drag recipes from your library into any slot",
  },
];

/* ── 04. BayKart slides ──────────────────────── */
const baykartSlides: CarouselSlide[] = [
  {
    src:         "/images/home-dashboard.png",
    alt:         "BayKart home — Quick Access dashboard",
    label:       "Home Dashboard",
    description: "Quick access to weather, crop prices, AI assistant, agri services, and business tools",
  },
  {
    src:         "/images/marketplace-listing.png",
    alt:         "BayKart marketplace — live produce listing",
    label:       "Live Marketplace",
    description: "Real produce listings with photos, verified seller ratings, and instant buy with live pricing",
  },
  {
    src:         "/images/market-prices.png",
    alt:         "BayKart market prices — live crop pricing",
    label:       "Live Market Prices",
    description: "Real-time farm-gate prices for crops across locations — searchable by crop, district, or region",
  },
  {
    src:         "/images/my-sales.png",
    alt:         "BayKart my sales — order tracking",
    label:       "Sales & Order Tracking",
    description: "Full order pipeline: confirmed → paid → scheduled → transit → delivered, with buyer details",
  },
  {
    src:         "/images/weather.png",
    alt:         "BayKart weather — Nairobi forecast",
    label:       "Weather Forecasting",
    description: "Location-based weather with 5-day forecast, humidity, wind, sunrise/sunset — spoken aloud for farmers",
  },
  {
    src:         "/images/product-detail.png",
    alt:         "BayKart product detail — Papaya Grade A",
    label:       "Product Detail",
    description: "Grade-graded listings with seller trust scores, availability window, and direct Order Now flow",
  },
  {
    src:         "/images/transport.png",
    alt:         "BayKart transport — crop logistics",
    label:       "Crop Transport & Logistics",
    description: "Verified transport providers for moving produce from farm to market — with price and route details",
  },
  {
    src:         "/images/sisi-ai-real.png",
    alt:         "Sisi AI — farming assistant chatbot",
    label:       "Sisi AI Farming Assistant",
    description: "Multimodal AI assistant — upload crop photos for disease diagnosis or ask farming questions in any language",
  },
  {
    src:         "/images/account-rk.png",
    alt:         "BayKart account — Richard Karanu profile",
    label:       "Farmer Profile",
    description: "Verified farmer profile with unique BayKart ID, quick actions, and full account management",
  },
];

/* ── 05. FocusFlow slides ────────────────────── */
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

/* ── 06. Context-Aware AI Agents (Miksi AI) slides ── */
const miksiSlides: CarouselSlide[] = [
  {
    src:         "/images/miksi-banner.jpg",
    alt:         "Miksi SQL agent architecture map",
    label:       "Context-Aware BI Agent Architecture",
    description: "Agent pipeline mapping intent, context reasoning, and executing queries on Snowflake/databricks",
  }
];

/* ── 07. Multi-tenant API Infrastructure (Kreatoors AI) slides ── */
const kreatoorsSlides: CarouselSlide[] = [
  {
    src:         "/images/kreatoors-banner.jpg",
    alt:         "Kreatoors API gateway infrastructure map",
    label:       "Multi-tenant API Gateway Architecture",
    description: "Scaled API infrastructure showing auth, rate limiters, DB pools, and Redis caching nodes",
  }
];

/* ── 08. Store POS slides ────────────────────── */
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

/* ── Helper Component: Alternating Project Row ── */
/* Displays app text first on mobile, then alternates on desktop */
function ProjectRow({
  num,
  category,
  title,
  description,
  chips,
  stack,
  slides,
  screenMode = false,
  githubUrl,
  alignLeft,
}: {
  num: string;
  category: string;
  title: string;
  description: string;
  chips: string[];
  stack: string[];
  slides: CarouselSlide[];
  screenMode?: boolean;
  githubUrl?: string;
  alignLeft: boolean;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center py-14 border-b border-ink-5 last:border-0">
      
      {/* Text Details Column (DOM element 1 - flows first on mobile) */}
      <div className={`lg:col-span-6 flex flex-col gap-5 ${alignLeft ? "lg:order-2" : "lg:order-1"}`}>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[0.58rem] tracking-widest uppercase text-smoke-3">{num}</span>
              <span className="font-mono text-[0.6rem] tracking-wider uppercase text-cyan-400 font-semibold">{category}</span>
            </div>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.6rem] tracking-widest uppercase border border-ink-5 hover:border-[#4ade80] hover:text-[#4ade80] hover:shadow-[0_0_12px_rgba(74,222,128,0.15)] bg-ink-3 px-3 py-1.5 rounded flex items-center gap-2 transition-all duration-300 relative overflow-hidden group/git hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] absolute top-1 right-1" style={{ animation: "pulse-dot 2.5s ease-in-out infinite" }} />
                <svg className="w-3.5 h-3.5 fill-current text-smoke-3 group-hover/git:text-[#4ade80] transition-colors" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub Code
              </a>
            )}
          </div>
          <h3 className="font-sans text-2xl font-black text-paper leading-tight tracking-tight mt-1">{title}</h3>
          <p className="font-sans text-sm text-smoke leading-relaxed mt-2">{description}</p>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-1">
          {chips.map((s) => <span key={s} className="chip chip-white">{s}</span>)}
        </div>

        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-ink-5 mt-2">
          <span className="font-mono text-[0.55rem] tracking-widest uppercase text-smoke-3 mr-1 self-center">Stack</span>
          {stack.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

      </div>

      {/* Visual / Carousel Column (DOM element 2 - alternates on desktop) */}
      <div className={`lg:col-span-6 flex justify-center w-full ${alignLeft ? "lg:order-1" : "lg:order-2"}`}>
        <div className="border border-ink-5 overflow-hidden flex flex-col w-full" style={{ borderRadius: "0.4rem", boxShadow: "0 20px 40px rgba(0,0,0,0.6)" }}>
          <ProjectCarousel slides={slides} interval={4000} screenMode={screenMode} />
        </div>
      </div>

    </div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  
  // Global alternate counter
  let alignLeft = true;

  return (
    <section id="work" className="relative">

      {/* Section header with filter tabs */}
      <div className="relative overflow-hidden border-t border-ink-5">
        <Image
          src="/images/work-bg.jpg"
          fill
          alt=""
          className="object-cover"
          style={{ opacity: 0.05, objectPosition: "center" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-16 pt-20 pb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-smoke-2 mb-3">Portfolio Projects</p>
            <h2 className="font-sans text-5xl md:text-7xl font-black text-paper tracking-tight leading-none">
              What I Build.
            </h2>
          </div>
          <div className="flex gap-2.5 self-start sm:self-end z-20">
            <button
              onClick={() => setShowAll(false)}
              className={`px-4 py-2.5 font-mono text-[0.58rem] tracking-widest uppercase border transition-all duration-300 cursor-pointer ${
                !showAll
                  ? "bg-paper text-ink border-paper shadow-lg font-bold"
                  : "border-ink-5 text-smoke hover:border-smoke hover:text-paper"
              }`}
              style={{ borderRadius: "0.2rem" }}
            >
              Featured (5)
            </button>
            <button
              onClick={() => setShowAll(true)}
              className={`px-4 py-2.5 font-mono text-[0.58rem] tracking-widest uppercase border transition-all duration-300 cursor-pointer ${
                showAll
                  ? "bg-paper text-ink border-paper shadow-lg font-bold"
                  : "border-ink-5 text-smoke hover:border-smoke hover:text-paper"
              }`}
              style={{ borderRadius: "0.2rem" }}
            >
              All Projects (8)
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-16 py-8 flex flex-col gap-12">

        {/* ── SECTION 1: Full-Stack AI Engineering ────────────────── */}
        <div>
          <div className="border-t border-ink-5 pt-10 pb-4">
            <h3 className="font-mono text-[0.72rem] md:text-[0.78rem] tracking-[0.25em] uppercase text-[#4ade80] font-bold mb-2">01 // Full-Stack AI Engineering</h3>
            <h4 className="font-sans text-3xl md:text-4xl font-black text-paper tracking-tight leading-tight">Stateful Agents &amp; Scaled Architecture</h4>
          </div>
          <div className="flex flex-col">
            <ProjectRow
              num="01"
              category="AI Agent · Scientific Research · Code Gen"
              title="ScienceBridge — Scientific AI Agent"
              description="An autonomous research agent accelerating discovery. Reads complex scientific datasets, generates testable hypotheses based on patterns, and validates them dynamically via automated Python code execution."
              chips={["Autonomous EDA", "Hypothesis Testing", "Dynamic ML Models"]}
              stack={["Python", "FastAPI", "Docker", "scikit-learn", "Alembic", "PostgreSQL", "SQLAlchemy"]}
              slides={sciencebridgeSlides}
              screenMode={true}
              githubUrl="https://github.com/zaibaki/ScienceBridge"
              alignLeft={alignLeft}
            />
            {(() => { alignLeft = !alignLeft; return null; })()}

            <ProjectRow
              num="02"
              category="Agentic AI · Voice Interface · WebSockets"
              title="LangGraph Voice Agent — Real-time Speech AI"
              description="A stateful, full-stack voice agent using LangGraph and OpenAI's Realtime API for speech-to-speech conversations. Integrates autonomous tool-calling (web search, notes, calculator) with visual audiowaves."
              chips={["OpenAI Realtime API", "Tavily Web Search", "Audio Visualization"]}
              stack={["LangGraph", "FastAPI", "WebSockets", "Python", "Tavily API", "Tailwind CSS", "Jinja2"]}
              slides={voiceagentSlides}
              screenMode={true}
              githubUrl="https://github.com/zaibaki/LangGraph-Voice-Agent"
              alignLeft={alignLeft}
            />
            {(() => { alignLeft = !alignLeft; return null; })()}

            {/* Conditionally rendered AI Systems */}
            {showAll && (
              <>
                <ProjectRow
                  num="06"
                  category="AI Agent · BI Analytics · Context RAG"
                  title="Context-Aware AI Agents — Miksi AI"
                  description="A context-aware database business intelligence agent. Translates natural language queries to high-accuracy SQL queries by mapping metadata schemas and semantic vector indexes on Snowflake and Databricks."
                  chips={["90% SQL Accuracy", "Snowflake & Databricks", "Context RAG"]}
                  stack={["Python", "LangGraph", "FastAPI", "Snowflake", "Azure", "VectorDB"]}
                  slides={miksiSlides}
                  screenMode={true}
                  githubUrl="https://github.com/zaibaki/Miksi-AI"
                  alignLeft={alignLeft}
                />
                {(() => { alignLeft = !alignLeft; return null; })()}

                <ProjectRow
                  num="07"
                  category="Systems · API Infrastructure · Scalability"
                  title="Multi-tenant API Infrastructure — Kreatoors AI"
                  description="A highly scalable and secure API gateway infrastructure serving 20K+ active users. Restructured backend request routing, rate limiting algorithms, and database pooling, reducing P95 latency from 800ms to 200ms."
                  chips={["20K+ Users", "200ms P95 Latency", "99.9% Uptime"]}
                  stack={["Node.js", "TypeScript", "Redis Cluster", "Kubernetes", "AWS"]}
                  slides={kreatoorsSlides}
                  screenMode={true}
                  alignLeft={alignLeft}
                />
                {(() => { alignLeft = !alignLeft; return null; })()}
              </>
            )}
          </div>
        </div>

        {/* ── SECTION 2: iOS Native ───────────────────────────────── */}
        <div>
          <div className="border-t border-ink-5 pt-10 pb-4">
            <h3 className="font-mono text-[0.72rem] md:text-[0.78rem] tracking-[0.25em] uppercase text-[#4ade80] font-bold mb-2">02 // iOS Native</h3>
            <h4 className="font-sans text-3xl md:text-4xl font-black text-paper tracking-tight leading-tight">High-Performance Mobile Vision</h4>
          </div>
          <div className="flex flex-col">
            <ProjectRow
              num="03"
              category="FoodTech · iOS · Computer Vision"
              title="SmartChef — AI Recipe Recognition App"
              description="Point-and-cook AI application running local YOLOv8 object recognition on iOS. Detects multiple kitchen ingredients simultaneously to compile custom AI recipes via OpenAI's GPT models."
              chips={["YOLOv8 & OpenCV", "CoreML Local Inference", "AI Recipe Planner"]}
              stack={["Swift", "SwiftUI", "UIKit", "iOS", "OpenAI API"]}
              slides={smartchefSlides}
              screenMode={false}
              alignLeft={alignLeft}
            />
            {(() => { alignLeft = !alignLeft; return null; })()}
          </div>
        </div>

        {/* ── SECTION 3: Cross-Platform & Android ──────────────────── */}
        <div>
          <div className="border-t border-ink-5 pt-10 pb-4">
            <h3 className="font-mono text-[0.72rem] md:text-[0.78rem] tracking-[0.25em] uppercase text-[#4ade80] font-bold mb-2">03 // Cross-Platform &amp; Android</h3>
            <h4 className="font-sans text-3xl md:text-4xl font-black text-paper tracking-tight leading-tight">Full-Stack Mobile Applications</h4>
          </div>
          <div className="flex flex-col">
            <ProjectRow
              num="04"
              category="AgriTech · Mobile · AI assistant"
              title="BayKart — Agricultural Commodities Marketplace"
              description="A multi-service platform connecting 10K+ African farmers directly to buyer markets. Integrated weather forecasting services, logistics pipelines, and a sisi-AI multimodal crop disease diagnostic assistant."
              chips={["Real-time Pricing", "AI Crop Doctor", "Verified Buyers"]}
              stack={["React Native", "Django", "AWS", "PostgreSQL", "Redis"]}
              slides={baykartSlides}
              screenMode={false}
              alignLeft={alignLeft}
            />
            {(() => { alignLeft = !alignLeft; return null; })()}

            <ProjectRow
              num="05"
              category="Productivity · Mobile · UX"
              title="FocusFlow — Gamified Deep Work App"
              description="A gamified mobile application helping developers and creators block distractions, track focus sessions, and build long-term productivity habits with streaks and milestone achievements."
              chips={["Pomodoro Timer", "App Blocker", "Focus Analytics"]}
              stack={["React Native", "Expo", "TypeScript", "SQLite", "Victory Charts", "Tailwind CSS"]}
              slides={focusSlides}
              screenMode={false}
              alignLeft={alignLeft}
            />
            {(() => { alignLeft = !alignLeft; return null; })()}
          </div>
        </div>

        {/* ── SECTION 4: Open Source (Conditional) ────────────────── */}
        {showAll && (
          <div>
            <div className="border-t border-ink-5 pt-10 pb-4">
              <h3 className="font-mono text-[0.72rem] md:text-[0.78rem] tracking-[0.25em] uppercase text-[#4ade80] font-bold mb-2">04 // Open Source</h3>
              <h4 className="font-sans text-3xl md:text-4xl font-black text-paper tracking-tight leading-tight">Maintained Production Toolkits</h4>
            </div>
            <div className="flex flex-col">
              <ProjectRow
                num="08"
                category="Retail · Web · Full-stack"
                title="Store POS — Point of Sale System"
                description="A full-featured offline-first retail system with inventory management, sales reports, multi-cashier registers, barcode printing, and revenue analytics."
                chips={["650+ SKUs", "Multi-cashier", "Offline-first"]}
                stack={["React", "Node.js", "Django", "PostgreSQL", "Redis", "Docker", "SQLite"]}
                slides={posSlides}
                screenMode={true}
                githubUrl="https://github.com/zaibaki/Store-POS"
                alignLeft={alignLeft}
              />
            </div>
          </div>
        )}

        {/* Expand / Collapse Button */}
        <div className="flex justify-center pt-8 border-t border-ink-5">
          <button
            onClick={() => setShowAll(!showAll)}
            className="font-mono text-[0.68rem] tracking-widest uppercase border border-ink-5 hover:border-[#4ade80] hover:text-[#4ade80] bg-ink-2 px-8 py-4 rounded transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_15px_rgba(74,222,128,0.15)] hover:scale-[1.02]"
          >
            {showAll ? "Collapse Systems & Backend Projects" : "+ View 3 Systems & Backend Projects"}
          </button>
        </div>

      </div>

      <div className="section-divider mt-16" />
    </section>
  );
}
