"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Work",       href: "#work"       },
  { label: "Stack",      href: "#stack"      },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-lg border-b border-ink-5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-16 h-14 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="font-mono text-sm font-semibold tracking-widest text-paper hover:text-paper-3 transition-colors">
          RK<span className="text-smoke">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[0.68rem] tracking-widest uppercase text-smoke hover:text-paper transition-colors duration-150"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="mailto:thisforrichard@gmail.com"
            className="font-mono text-[0.68rem] tracking-widest uppercase border border-ink-6 text-smoke hover:border-paper-3 hover:text-paper transition-all px-4 py-2"
            style={{ borderRadius: "0.2rem" }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-smoke hover:text-paper transition-colors flex flex-col gap-[5px]"
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-current transition-all duration-200 ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-200 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-ink-2 border-b border-ink-5 ${open ? "max-h-56" : "max-h-0"}`}>
        <div className="flex flex-col px-6 py-4 gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-[0.68rem] tracking-widest uppercase text-smoke hover:text-paper transition-colors py-2 border-b border-ink-5 last:border-none"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:thisforrichard@gmail.com"
            className="font-mono text-[0.68rem] tracking-widest uppercase border border-ink-6 text-smoke text-center py-2.5 mt-1"
            style={{ borderRadius: "0.2rem" }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
