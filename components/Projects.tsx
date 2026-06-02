import Image from "next/image";
import ProjectCarousel, { type CarouselSlide } from "./ProjectCarousel";
import MoreWork from "./MoreWork";

/* ── BayKart slides ──────────────────────────── */
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

/* ── SmartChef slides ────────────────────────── */
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
    label:       "Meal Planner",
    description: "Plan breakfast, lunch, and dinner for the whole week — drag recipes from your library into any slot",
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
    <div className="relative px-6 md:px-7 py-6 bg-ink-2 border-b border-ink-5 flex flex-col gap-3 overflow-hidden">
      <img
        src={mobileBg}
        aria-hidden="true"
        alt=""
        className="lg:hidden absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: mobileBgPosition, filter: "blur(18px)", transform: "scale(1.15)", opacity: 0.13 }}
      />
      <div className="lg:hidden absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.6) 100%)" }} />
      <div className="relative z-10 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[0.58rem] tracking-widest uppercase text-smoke-3">{num}</span>
          <span className="font-mono text-[0.6rem] tracking-wider uppercase text-smoke-2">{category}</span>
        </div>
        <h3 className="font-sans text-lg font-bold text-paper leading-tight">{title}</h3>
        <p className="font-sans text-sm text-smoke leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1.5">
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

        {/* ── Row 1: BayKart + SmartChef (both iOS) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* BayKart */}
          <div className="border border-ink-5 overflow-hidden flex flex-col" style={{ borderRadius: "0.3rem" }}>
            <ProjectHeader
              num="01" category="AgriTech · Mobile · AI"
              title="BayKart — Agricultural Marketplace"
              description="End-to-end platform for African farmers. Real-time commodity pricing, AI crop analysis, and verified buyer-seller matching."
              chips={["10K+ Farmers", "60% Price Loss ↓", "iOS + Android"]}
              mobileBg="/images/marketplace-listing.png"
            />
            <div className="px-6 py-2.5 border-b border-ink-5 bg-ink-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" aria-hidden="true" />
              <span className="font-mono text-[0.58rem] tracking-widest uppercase text-smoke-2">
                Mobile App · iOS &amp; Android
              </span>
            </div>
            <ProjectCarousel slides={baykartSlides} interval={3800} fill />
            <div className="px-6 py-3.5 border-t border-ink-5 bg-ink-2 flex flex-wrap items-center gap-2">
              <span className="font-mono text-[0.55rem] tracking-widest uppercase text-smoke-3 mr-1">Stack</span>
              {["React Native", "Django", "AWS", "Terraform", "PostgreSQL", "Redis"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* SmartChef */}
          <div className="border border-ink-5 overflow-hidden flex flex-col" style={{ borderRadius: "0.3rem" }}>
            <ProjectHeader
              num="02" category="FoodTech · iOS · AI"
              title="SmartChef — AI Recipe Generator"
              description="Point your camera at any ingredients — SmartChef detects them, generates a personalised recipe, and guides you step-by-step through cooking it."
              chips={["AI Ingredient Scan", "Meal Planner", "Ask the Chef"]}
              mobileBg="/images/smartchef/home.png"
            />
            <div className="px-6 py-2.5 border-b border-ink-5 bg-ink-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" aria-hidden="true" />
              <span className="font-mono text-[0.58rem] tracking-widest uppercase text-smoke-2">
                iOS App · iPhone
              </span>
            </div>
            <ProjectCarousel slides={smartchefSlides} interval={3600} fill />
            <div className="px-6 py-3.5 border-t border-ink-5 bg-ink-2 flex flex-wrap items-center gap-2">
              <span className="font-mono text-[0.55rem] tracking-widest uppercase text-smoke-3 mr-1">Stack</span>
              {["Swift", "SwiftUI", "UIKit", "iOS"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

        </div>

        {/* ── Row 2: Store POS (full-width) ── */}
        <div className="border border-ink-5 overflow-hidden flex flex-col" style={{ borderRadius: "0.3rem" }}>
          <ProjectHeader
            num="03" category="Retail · Web · Full-stack"
            title="Store POS — Point of Sale System"
            description="Full-stack POS with inventory management, sales analytics, multi-cashier support, and real-time stock reconciliation."
            chips={["650+ SKUs", "Multi-cashier", "Offline-first"]}
            mobileBg="/images/pos/pos-dashboard.png"
            mobileBgPosition="top"
          />
          <div className="px-6 py-2.5 border-b border-ink-5 bg-ink-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" aria-hidden="true" />
            <span className="font-mono text-[0.58rem] tracking-widest uppercase text-smoke-2">
              Web App · Windows Desktop
            </span>
          </div>
          <ProjectCarousel slides={posSlides} interval={4200} screenMode fill />
          <div className="px-6 py-3.5 border-t border-ink-5 bg-ink-2 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[0.55rem] tracking-widest uppercase text-smoke-3 mr-1">Stack</span>
            {["React", "Node.js", "Django", "PostgreSQL", "Redis", "Docker"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
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
