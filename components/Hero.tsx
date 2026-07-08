"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface HeroProject {
  id:          string;
  name:        string;
  tag:         string;
  src:         string;
  isMobile:    boolean;
  logs:        string[];
  metrics:     { label: string; value: string }[];
}

const heroProjects: HeroProject[] = [
  {
    id:       "baykart",
    name:     "BayKart Marketplace",
    tag:      "React Native / Django / AWS",
    src:      "/images/marketplace-listing.png",
    isMobile: true,
    logs: [
      "sys_init: connecting to AWS cluster...",
      "db: postgresql://rds.baykart.internal connected",
      "sisi_ai: loading Crop Doctor model (VGG16)...",
      "model: accuracy verified at 94.8%",
      "api: GET /api/v1/listings?region=nairobi - 200 (112ms)",
      "broker: Redis cache hit rate: 84.2%"
    ],
    metrics: [
      { label: "Active Sessions", value: "12,482/hr" },
      { label: "AI Inference", value: "85ms" }
    ]
  },
  {
    id:       "smartchef",
    name:     "SmartChef AI App",
    tag:      "SwiftUI / UIKit / OpenAI API",
    src:      "/images/smartchef/home.png",
    isMobile: true,
    logs: [
      "ios_daemon: instantiating camera module...",
      "vision: loading YOLOv8 custom weights...",
      "openai: key validated, token limit OK",
      "scan: user uploaded image (3.4MB PNG)",
      "vision: detected [egg, tomato, cheese] (conf 97%)",
      "ai_gen: recipe 'Savory Scramble' built in 1.4s"
    ],
    metrics: [
      { label: "Vision Latency", value: "320ms" },
      { label: "Recipe Gen Rate", value: "48 req/min" }
    ]
  },
  {
    id:       "pos",
    name:     "Store POS System",
    tag:      "React / Node.js / PostgreSQL",
    src:      "/images/pos/pos-dashboard.png",
    isMobile: false,
    logs: [
      "pos_kernel: initializing local daemon...",
      "sync: fetching inventory snapshot (680 SKUs)",
      "offline_db: sqlite local DB reconciled",
      "sales: registering transaction TXN_729482...",
      "printer: thermal driver status: ONLINE",
      "analytics: pushing daily rollup to cluster - 201"
    ],
    metrics: [
      { label: "Local SKUs", value: "650+ Items" },
      { label: "Sync Latency", value: "14ms" }
    ]
  },
  {
    id:       "focus",
    name:     "FocusFlow Productivity",
    tag:      "React Native / Expo / SQLite",
    src:      "/images/focus/Screenshot_20260621_183654.webp",
    isMobile: true,
    logs: [
      "expo_runtime: checking OTA updates...",
      "distraction_shield: hook registered for Android v14",
      "blocker: social_apps_blocked=true dnd=active",
      "timer: start deep work cycle (25min, tag=coding)",
      "db: sqlite checkpointed focus_history (142 runs)",
      "shield: blocked attempt to launch 'instagram' (3x)"
    ],
    metrics: [
      { label: "Shield State", value: "14 Apps Blocked" },
      { label: "Deep Work Hr", value: "4.5hr/day" }
    ]
  }
];

export default function Hero() {
  const [activeProj, setActiveProj] = useState(0);
  const [cpu, setCpu] = useState(48);
  const [mem, setMem] = useState(72);
  const [latency, setLatency] = useState(14);
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);

  useEffect(() => {
    // Cycle projects
    const projInterval = setInterval(() => {
      setActiveProj((p) => (p + 1) % heroProjects.length);
    }, 4500);

    // Fluctuate stats
    const statsInterval = setInterval(() => {
      setCpu((prev) => {
        const delta = Math.floor(Math.random() * 9) - 4; // -4 to +4
        return Math.max(30, Math.min(85, prev + delta));
      });
      setMem((prev) => {
        const delta = Math.floor(Math.random() * 3) - 1; // -1 to +1
        return Math.max(68, Math.min(76, prev + delta));
      });
      setLatency((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
        return Math.max(10, Math.min(22, prev + delta));
      });
    }, 1500);

    return () => {
      clearInterval(projInterval);
      clearInterval(statsInterval);
    };
  }, []);

  useEffect(() => {
    setVisibleLogs([]);
    const logs = heroProjects[activeProj].logs;
    
    // Add logs one by one
    const timers: NodeJS.Timeout[] = [];
    logs.forEach((log, idx) => {
      const t = setTimeout(() => {
        setVisibleLogs((prev) => [...prev, log]);
      }, idx * 300);
      timers.push(t);
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [activeProj]);

  const activeProject = heroProjects[activeProj];
  const isMobile = activeProject.isMobile;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ink">

      {/* ── Background: dark control-panel image ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/images/hero-bg.jpg"
          fill
          alt=""
          className="object-cover object-center"
          style={{ opacity: 0.05 }}
          priority
        />
        {/* Gradient vignette — fades left so text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.2) 100%)",
          }}
        />
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ink-5 to-transparent" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 md:px-16 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── Left: text ── */}
        <div className="flex flex-col gap-8">



          {/* Name */}
          <div className="float-up-2">
            <h1
              className="font-sans font-black leading-[0.92] tracking-[-0.04em]"
              style={{ fontSize: "clamp(60px, 9.5vw, 112px)" }}
            >
              <span className="block text-paper">Richard</span>
              <span className="block" style={{ color: "#333333" }}>Karanu</span>
            </h1>
          </div>

          {/* Role */}
          <div className="float-up-3">
            <p className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-cyan-400 font-semibold">
              Senior Full Stack &amp; Backend Engineer
            </p>
          </div>

          {/* Pitch */}
          <p className="float-up-4 font-sans text-lg text-smoke leading-relaxed max-w-md">
            Building highly reliable production systems across AI, FinTech &amp; SaaS.
            6+ years shipping secure, performant applications.
          </p>

          {/* CTAs */}
          <div className="float-up-5 flex flex-wrap gap-3">
            <a
              href="#work"
              className="font-mono text-[0.65rem] tracking-widest uppercase bg-paper text-ink px-7 py-3.5 font-bold hover:bg-paper-2 transition-all cursor-pointer"
              style={{ borderRadius: "0.2rem" }}
            >
              Explore My Work →
            </a>
            <a
              href="#contact"
              className="font-mono text-[0.65rem] tracking-widest uppercase border border-ink-6 text-smoke hover:border-smoke hover:text-paper transition-all px-7 py-3.5"
              style={{ borderRadius: "0.2rem" }}
            >
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div className="float-up-5 flex flex-wrap gap-x-8 gap-y-4 pt-5 border-t border-ink-5">
            {[
              ["6+",    "Years Experience"   ],
              ["99.9%", "Uptime Achieved"    ],
              ["75%",   "Avg API Perf. Gain" ],
              ["10+",   "Products Shipped"   ],
            ].map(([val, label]) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="font-sans text-2xl font-black text-paper leading-none tracking-tight">
                  {val}
                </span>
                <span className="font-mono text-[0.58rem] tracking-widest uppercase text-smoke-3">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Systems Dashboard & Morphing Device Showcase ── */}
        <div className="hidden lg:flex flex-col gap-4 relative h-[560px] justify-center items-center">
          
          {/* Dashboard Panel Wrapper */}
          <div 
            className="w-full max-w-[480px] bg-[#0c0c0e]/95 border border-ink-5 p-5 flex flex-col gap-4 relative overflow-hidden"
            style={{
              borderRadius: "0.4rem",
              boxShadow: "0 30px 60px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.03)"
            }}
          >
            {/* Top panel bar */}
            <div className="flex items-center justify-between border-b border-ink-5 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-paper">RK_NODE_CLUSTER_v2.0</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[0.5rem] tracking-widest text-[#4ade80] font-bold">SYS_OK</span>
                <span className="font-mono text-[0.5rem] text-smoke-2 tabular-nums">RTT: {latency}ms</span>
              </div>
            </div>

            {/* Metrics display row */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-ink p-2 border border-ink-6 flex flex-col gap-1" style={{ borderRadius: "0.2rem" }}>
                <span className="font-mono text-[0.45rem] tracking-widest uppercase text-smoke-3">CPU Usage</span>
                <span className="font-sans text-[0.7rem] font-bold text-paper tabular-nums">{cpu}%</span>
                <div className="h-1 bg-ink-5 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 transition-all duration-300" style={{ width: `${cpu}%` }} />
                </div>
              </div>
              <div className="bg-ink p-2 border border-ink-6 flex flex-col gap-1" style={{ borderRadius: "0.2rem" }}>
                <span className="font-mono text-[0.45rem] tracking-widest uppercase text-smoke-3">Memory</span>
                <span className="font-sans text-[0.7rem] font-bold text-paper tabular-nums">{mem}%</span>
                <div className="h-1 bg-ink-5 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 transition-all duration-300" style={{ width: `${mem}%` }} />
                </div>
              </div>
              <div className="bg-ink p-2 border border-ink-6 flex flex-col gap-1" style={{ borderRadius: "0.2rem" }}>
                <span className="font-mono text-[0.45rem] tracking-widest uppercase text-smoke-3">DB Pool</span>
                <span className="font-sans text-[0.7rem] font-bold text-paper tabular-nums">18/20</span>
                <div className="h-1 bg-ink-5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#4ade80]" style={{ width: "90%" }} />
                </div>
              </div>
            </div>

            {/* Core Split: Terminal logs + Morphing device */}
            <div className="flex gap-4 items-center justify-between min-h-[290px]">
              
              {/* Terminal Logs Window */}
              <div className="flex-1 flex flex-col gap-1.5 h-[270px] bg-black p-3 border border-ink-6 overflow-hidden select-text" style={{ borderRadius: "0.25rem" }}>
                <div className="flex items-center justify-between border-b border-ink-6 pb-1 mb-1">
                  <span className="font-mono text-[0.48rem] tracking-widest text-smoke-2 uppercase">Core_System_Logs</span>
                  <span className="font-mono text-[0.45rem] text-cyan-400 animate-pulse">RUNNING</span>
                </div>
                <div className="flex flex-col gap-1 overflow-y-auto h-full font-mono text-[0.52rem] text-smoke leading-normal scrollbar-none">
                  {visibleLogs.map((log, idx) => (
                    <div key={`${activeProj}-${idx}`} className="truncate transition-all duration-300 slide-info-enter">
                      <span className="text-smoke-3 mr-1">&gt;</span>
                      {log}
                    </div>
                  ))}
                  <div className="flex items-center text-cyan-400">
                    <span className="text-smoke-3 mr-1">&gt;</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>

              {/* Morphing Device Preview */}
              <div className="shrink-0 flex items-center justify-center">
                <div 
                  className="bg-[#151515] relative p-1 transition-all duration-700 ease-in-out border border-[#2d2d2d]"
                  style={{
                    width: isMobile ? "135px" : "190px",
                    height: isMobile ? "270px" : "120px",
                    borderRadius: isMobile ? "1.5rem" : "0.4rem",
                    boxShadow: "0 20px 45px rgba(0,0,0,0.85)",
                    borderWidth: isMobile ? "5px" : "4px",
                    borderColor: "#2d2d2d"
                  }}
                >
                  {/* Speaker cutout for phone */}
                  {isMobile && (
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-black rounded-full z-20" />
                  )}
                  {/* Browser dots for web */}
                  {!isMobile && (
                    <div className="absolute top-1 left-2 flex gap-1 z-20">
                      <span className="w-1 h-1 rounded-full bg-[#ff5f57]" />
                      <span className="w-1 h-1 rounded-full bg-[#febc2e]" />
                      <span className="w-1 h-1 rounded-full bg-[#28c840]" />
                    </div>
                  )}

                  {/* Inner screenshot */}
                  <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: isMobile ? "1.1rem" : "0.2rem" }}>
                    {heroProjects.map((p, idx) => {
                      const isActive = idx === activeProj;
                      return (
                        <div
                          key={p.id}
                          className="absolute inset-0 transition-opacity duration-700"
                          style={{
                            opacity: isActive ? 1 : 0,
                            pointerEvents: isActive ? "auto" : "none"
                          }}
                        >
                          <Image
                            src={p.src}
                            fill
                            alt={p.name}
                            className={p.isMobile ? "object-cover" : "object-contain"}
                            style={{ background: p.isMobile ? "transparent" : "#0d0d0d" }}
                            sizes="190px"
                            priority={idx === 0}
                          />

                          {/* Scanline sweep */}
                          {isActive && (
                            <div 
                              key={`hero-sweep-${idx}`}
                              className="absolute inset-0 pointer-events-none overflow-hidden z-20"
                            >
                              <div
                                className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
                                style={{
                                  top: 0,
                                  boxShadow: "0 0 8px #22d3ee",
                                  animation: "sweep-line 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards"
                                }}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom details / stack bar */}
            <div className="border-t border-ink-5 pt-3 mt-1 flex justify-between items-center bg-ink-2 z-10 relative">
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-[0.45rem] tracking-widest text-smoke-3 uppercase">Active Target</span>
                <span className="font-sans text-[0.7rem] font-bold text-paper truncate max-w-[120px]">{activeProject.name}</span>
              </div>
              <div className="flex flex-col items-end gap-0.5">
                <span className="font-mono text-[0.45rem] tracking-widest text-smoke-3 uppercase">Deployment Stack</span>
                <span className="font-mono text-[0.55rem] text-cyan-400 tracking-wider font-semibold">{activeProject.tag}</span>
              </div>
            </div>

            {/* Mini metrics bar */}
            <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-ink-6">
              {activeProject.metrics.map((m) => (
                <div key={m.label} className="flex justify-between items-center px-2 py-1 bg-ink border border-ink-6" style={{ borderRadius: "0.15rem" }}>
                  <span className="font-mono text-[0.45rem] text-smoke-2 uppercase">{m.label}</span>
                  <span className="font-mono text-[0.52rem] text-[#4ade80] font-bold tabular-nums">{m.value}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Holographic grid light accent behind the panel */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none -z-10" />
        </div>
      </div>
    </section>
  );
}
