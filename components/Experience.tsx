const roles = [
  { period: "2025 – 2026", role: "Senior Full Stack Mobile Engineer", company: "BayKart",        type: "Contract"  },
  { period: "2025",        role: "Founding Engineer",                 company: "Resmatcha",       type: "Full-time" },
  { period: "2025",        role: "Full Stack Engineer",               company: "Kreatoors.ai",    type: "Contract"  },
  { period: "2024",        role: "Full Stack Engineer",               company: "Complasset",      type: "Contract"  },
  { period: "2023 – 2024", role: "Full Stack Engineer",               company: "Miksi AI",        type: "Contract"  },
  { period: "2022 – 2023", role: "Backend Engineer",                  company: "Dowell Research", type: "Contract"  },
  { period: "2020 – 2022", role: "Software Engineer",                 company: "Freelance",       type: "Freelance" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-5 md:px-16 max-w-[1200px] mx-auto">
      <div className="flex items-center gap-4 mb-10">
        <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-smoke-2 whitespace-nowrap">
          Experience
        </p>
        <div className="flex-1 h-px bg-ink-5" />
      </div>

      <div className="flex flex-col divide-y divide-ink-5 border border-ink-5" style={{ borderRadius: "0.3rem", overflow: "hidden" }}>
        {roles.map((r) => (
          <div
            key={r.company}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-5 bg-ink-2 hover:bg-ink-3 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="font-mono text-[0.62rem] tracking-wider text-smoke-3 sm:w-24 shrink-0">
                {r.period}
              </span>
              <span className="font-sans text-sm font-medium text-paper">
                {r.role}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-sans text-sm text-smoke">{r.company}</span>
              <span className="chip chip-gray">{r.type}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <a
          href="https://www.linkedin.com/in/richard-karanu"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[0.65rem] tracking-widest uppercase text-smoke hover:text-paper transition-colors underline underline-offset-4"
        >
          Full profile on LinkedIn →
        </a>
      </div>
    </section>
  );
}
