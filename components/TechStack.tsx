const languages = ["Python", "TypeScript", "JavaScript", "Java", "SQL"];
const aiTools   = ["LangGraph", "LangChain", "OpenAI API", "Gemini", "Claude"];

export default function TechStack() {
  return (
    <section id="stack" className="py-16 px-5 md:px-16 max-w-[1200px] mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-smoke-2 whitespace-nowrap">
          Tech
        </p>
        <div className="flex-1 h-px bg-ink-5" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink-5 border border-ink-5"
           style={{ borderRadius: "0.3rem", overflow: "hidden" }}>

        {/* Languages */}
        <div className="bg-ink-2 px-7 py-6 flex flex-col gap-4">
          <span className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-smoke-3">
            Languages
          </span>
          <div className="flex flex-wrap gap-2">
            {languages.map((l) => (
              <span key={l} className="tag">{l}</span>
            ))}
          </div>
        </div>

        {/* AI */}
        <div className="bg-ink-2 px-7 py-6 flex flex-col gap-4">
          <span className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-smoke-3">
            AI and Automation
          </span>
          <div className="flex flex-wrap gap-2">
            {aiTools.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
