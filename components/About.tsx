export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-16 max-w-[1120px] mx-auto w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Left label */}
        <div className="md:col-span-3 flex flex-col gap-3">
          <div className="section-label">// about.md</div>
          <div
            className="hidden md:block w-px bg-border self-stretch mt-2"
            aria-hidden="true"
          />
        </div>

        {/* Right content */}
        <div className="md:col-span-9">
          <div
            className="border border-border bg-surface-container p-8 md:p-10 glow-hover"
            style={{ borderRadius: "0.25rem" }}
          >
            {/* Terminal header bar */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              <span className="font-mono text-xs text-text-dim ml-2 tracking-wider">
                richard@karanu ~ about.md
              </span>
            </div>

            <div className="flex flex-col gap-5 font-sans text-base leading-relaxed text-text-dim">
              <p>
                I&apos;m a{" "}
                <span className="text-text font-medium">
                  Senior Full Stack &amp; Backend Engineer
                </span>{" "}
                with 6+ years of experience building and scaling production
                systems across AI, FinTech, and SaaS environments.
              </p>
              <p>
                I specialize in designing, securing, and scaling{" "}
                <span className="text-primary">
                  backend and API-driven systems
                </span>{" "}
                — with a strong focus on reliability, data protection, and
                real-world failure scenarios.
              </p>
              <p>
                My edge is{" "}
                <span className="text-secondary font-medium">
                  systems thinking
                </span>
                : how architecture, security, performance, and cost intersect in
                production. I&apos;ve worked as a founding engineer, senior IC,
                and technical lead in zero-to-one startups, often owning systems
                end-to-end — from architecture to deployment and long-term
                stability.
              </p>
              <p>
                Today I&apos;m especially interested in roles where I can own
                backend and API architecture, reduce security and scaling risks,
                and lead technical decisions that have real business impact.
              </p>
            </div>

            {/* Meta footer */}
            <div className="mt-8 pt-4 border-t border-border flex flex-wrap gap-6">
              {[
                { label: "Location", value: "Nairobi, Kenya" },
                { label: "Availability", value: "Open to opportunities" },
                { label: "Languages", value: "English (C2) · Swahili (Native)" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="font-mono text-[0.65rem] tracking-widest uppercase text-text-dim">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-primary">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
