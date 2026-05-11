import Image from "next/image";

/* ── Inline SVG icons ─────────────────────── */
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 22, height: 22 }}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 22, height: 22 }}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const IconDoc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink-2 border-t border-ink-5">

      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/images/section-bg.jpg"
          fill
          alt=""
          className="object-cover object-center"
          style={{ opacity: 0.04 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #0a0a0a 0%, transparent 60%, #0a0a0a 100%)" }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-16 py-28 flex flex-col items-center text-center gap-12">

        {/* Label */}
        <p className="font-mono text-[0.63rem] tracking-[0.18em] uppercase text-smoke-2">
          Let&apos;s work together
        </p>

        {/* Heading */}
        <h2
          className="font-sans font-black text-paper tracking-tight leading-none"
          style={{ fontSize: "clamp(52px, 9vw, 112px)" }}
        >
          Let&apos;s Build.
        </h2>

        {/* Body */}
        <p className="font-sans text-lg text-smoke max-w-lg leading-relaxed -mt-6">
          Open to full-time, contract, and freelance engagements.
          <br />Senior Backend · Full Stack · AI Platform.
        </p>

        {/* 3D Mail Me button */}
        <a href="mailto:thisforrichard@gmail.com" className="mail-btn-3d">
          <IconMail />
          Mail Me
        </a>

        {/* Social icon cards */}
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://linkedin.com/in/richard-karanu"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <IconLinkedIn />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <IconGitHub />
            <span>GitHub</span>
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#4ade80]"
            aria-hidden="true"
            style={{ animation: "pulse-dot 2.5s ease-in-out infinite" }}
          />
          <span className="font-mono text-[0.6rem] tracking-widest uppercase text-smoke-3">
            Nairobi, Kenya · Available globally
          </span>
        </div>
      </div>
    </section>
  );
}
