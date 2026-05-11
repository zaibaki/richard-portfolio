import Image from "next/image";
import ProjectCarousel, { type CarouselSlide } from "./ProjectCarousel";

/* ── BayKart slides — real device photos ────── */
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

/* ── POS slides ─────────────────────────────── */
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

/* ── Other projects ─────────────────────────── */
const otherProjects = [
  {
    num:    "03",
    name:   "Multi-tenant API Infrastructure",
    client: "Kreatoors AI",
    blurb:  "Secure API infra for 20K+ users. Latency cut from 800 ms → 200 ms.",
    chips:  ["20K+ Users", "200ms P95", "99.9% Uptime"],
    stack:  ["Node.js", "TypeScript", "MongoDB", "AWS"],
  },
  {
    num:    "04",
    name:   "Context-Aware AI Agents",
    client: "Miksi AI",
    blurb:  "BI agents with 90% SQL accuracy. Published Python SDK on PyPI — 200+ downloads.",
    chips:  ["90% Accuracy", "200+ Downloads", "0 Prod Bugs"],
    stack:  ["Python", "LangGraph", "FastAPI", "Azure"],
  },
];


export default function Projects() {
  return (
    <section id="work" className="relative">

      {/* ── Section header with work-bg.jpg ── */}
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
          <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-smoke-2 mb-3">
            Featured Work
          </p>
          <h2 className="font-sans text-5xl md:text-7xl font-black text-paper tracking-tight leading-none">
            What I Build.
          </h2>
        </div>
      </div>

      {/* ── Side-by-side carousels ── */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 py-8">

        {/* Outer card */}
        <div className="border border-ink-5 overflow-hidden" style={{ borderRadius: "0.3rem" }}>

          {/* Project meta header — two projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-ink-5 border-b border-ink-5">
            {/* BayKart */}
            <div className="px-6 md:px-8 py-6 bg-ink-2 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[0.58rem] tracking-widest uppercase text-smoke-3">01</span>
                <span className="font-mono text-[0.62rem] tracking-wider uppercase text-smoke-2">AgriTech · Mobile · AI</span>
              </div>
              <h3 className="font-sans text-lg md:text-xl font-bold text-paper leading-tight">
                BayKart — Agricultural Marketplace
              </h3>
              <p className="font-sans text-sm text-smoke leading-relaxed">
                End-to-end platform for African farmers. Real-time commodity pricing, AI crop analysis, and verified buyer-seller matching.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {["10K+ Farmers", "60% Price Loss ↓", "iOS + Android"].map((s) => (
                  <span key={s} className="chip chip-white">{s}</span>
                ))}
              </div>
            </div>
            {/* Store POS */}
            <div className="px-6 md:px-8 py-6 bg-ink-2 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[0.58rem] tracking-widest uppercase text-smoke-3">02</span>
                <span className="font-mono text-[0.62rem] tracking-wider uppercase text-smoke-2">Retail · Web · Full-stack</span>
              </div>
              <h3 className="font-sans text-lg md:text-xl font-bold text-paper leading-tight">
                Store POS — Point of Sale System
              </h3>
              <p className="font-sans text-sm text-smoke leading-relaxed">
                Full-stack POS with inventory management, sales analytics, multi-cashier support, and real-time stock reconciliation.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {["650+ SKUs", "Multi-cashier", "Offline-first"].map((s) => (
                  <span key={s} className="chip chip-white">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Two-panel carousels ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-ink-5 bg-ink">

            {/* Left — BayKart mobile */}
            <div className="flex flex-col">
              <div className="px-6 py-3 border-b border-ink-5 bg-ink-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" aria-hidden="true" />
                <span className="font-mono text-[0.6rem] tracking-widest uppercase text-smoke-2">
                  Mobile App · iOS &amp; Android
                </span>
              </div>
              <ProjectCarousel slides={baykartSlides} interval={3800} />
            </div>

            {/* Right — POS desktop carousel */}
            <div className="flex flex-col">
              <div className="px-6 py-3 border-b border-ink-5 bg-ink-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" aria-hidden="true" />
                <span className="font-mono text-[0.6rem] tracking-widest uppercase text-smoke-2">
                  Web App · Windows Desktop
                </span>
              </div>
              <ProjectCarousel slides={posSlides} interval={4200} screenMode />
            </div>
          </div>

          {/* Stack rows */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-ink-5 border-t border-ink-5">
            <div className="px-6 md:px-8 py-4 bg-ink-2 flex flex-wrap items-center gap-2">
              <span className="font-mono text-[0.55rem] tracking-widest uppercase text-smoke-3 mr-1">Stack</span>
              {["React Native", "Django", "AWS", "Terraform", "PostgreSQL", "Redis"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div className="px-6 md:px-8 py-4 bg-ink-2 flex flex-wrap items-center gap-2">
              <span className="font-mono text-[0.55rem] tracking-widest uppercase text-smoke-3 mr-1">Stack</span>
              {["React", "Node.js", "Django", "PostgreSQL", "Redis", "Docker"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Other projects grid ── */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 pt-4 pb-20">
        <p className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-smoke-3 mb-5">
          More Work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {otherProjects.map((p) => (
            <div
              key={p.name}
              className="border border-ink-5 bg-ink-3 p-6 flex flex-col gap-4 card-hover"
              style={{ borderRadius: "0.2rem" }}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[0.58rem] tracking-widest uppercase text-smoke-3">{p.num}</span>
                <span
                  className="font-mono text-[0.6rem] tracking-wider text-smoke-2 bg-ink-5 px-2 py-0.5"
                  style={{ borderRadius: "0.15rem" }}
                >
                  {p.client}
                </span>
              </div>
              <div>
                <h3 className="font-sans text-base font-bold text-paper leading-snug mb-1.5">{p.name}</h3>
                <p className="font-sans text-sm text-smoke leading-relaxed">{p.blurb}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.chips.map((c) => (
                  <span key={c} className="chip chip-white">{c}</span>
                ))}
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

      <div className="section-divider" />
    </section>
  );
}
