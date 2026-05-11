import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ink">

      {/* ── Background: dark control-panel image ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/images/hero-bg.jpg"
          fill
          alt=""
          className="object-cover object-center"
          style={{ opacity: 0.06 }}
          priority
        />
        {/* Gradient vignette — fades left so text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.1) 100%)",
          }}
        />
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ink-5 to-transparent" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 md:px-16 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── Left: text ── */}
        <div className="flex flex-col gap-8">

          {/* Hire Me CTA — top of hero */}
          <div className="float-up-1">
            <a
              href="mailto:thisforrichard@gmail.com"
              className="inline-flex items-center gap-2 font-mono text-[0.62rem] tracking-widest uppercase border border-ink-6 text-smoke hover:border-smoke hover:text-paper transition-all px-4 py-2"
              style={{ borderRadius: "0.2rem" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" style={{ animation: "pulse-dot 2.5s ease-in-out infinite" }} />
              Hire Me
            </a>
          </div>

          {/* Name */}
          <div className="float-up-2">
            <h1
              className="font-sans font-black leading-[0.92] tracking-[-0.04em]"
              style={{ fontSize: "clamp(60px, 9.5vw, 112px)" }}
            >
              <span className="block text-paper">Richard</span>
              <span className="block" style={{ color: "#444" }}>Karanu</span>
            </h1>
          </div>

          {/* Role */}
          <div className="float-up-3">
            <p className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-smoke-2">
              Senior Full Stack &amp; Backend Engineer
            </p>
          </div>

          {/* Pitch */}
          <p className="float-up-4 font-sans text-lg text-smoke leading-relaxed max-w-md">
            Building production systems across AI, FinTech &amp; SaaS.
            6+ years shipping real products end-to-end.
          </p>

          {/* CTAs */}
          <div className="float-up-5 flex flex-wrap gap-3">
            <a
              href="#work"
              className="font-mono text-[0.65rem] tracking-widest uppercase bg-paper text-ink px-7 py-3.5 font-bold hover:bg-paper-2 transition-colors"
              style={{ borderRadius: "0.2rem" }}
            >
              View My Work →
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
              ["99.9%", "Uptime"             ],
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

        {/* ── Right: floating phones ── */}
        <div className="hidden lg:block relative h-[600px]">

          {/* Back phone — account with RK avatar */}
          <div
            className="absolute right-2 top-20 phone-float-delay"
            style={{ opacity: 0.4 }}
          >
            <Image
              src="/images/account-rk.png"
              width={196}
              height={424}
              alt="BayKart account — Richard Karanu"
              className="drop-shadow-2xl"
            />
          </div>

          {/* Mid phone — home dashboard */}
          <div
            className="absolute right-[136px] top-6 slide-in-right phone-float"
            style={{ opacity: 0.72 }}
          >
            <Image
              src="/images/home-dashboard.png"
              width={224}
              height={484}
              alt="BayKart home dashboard"
              className="drop-shadow-2xl"
            />
          </div>

          {/* Front phone — marketplace with real strawberry photo */}
          <div
            className="absolute right-[254px] top-20 slide-in-right phone-float"
            style={{ animationDelay: "2s" }}
          >
            <Image
              src="/images/marketplace-listing.png"
              width={252}
              height={544}
              alt="BayKart marketplace listing"
              className="drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
