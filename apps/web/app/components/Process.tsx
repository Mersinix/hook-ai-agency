const steps = [
  {
    n: "01",
    title: "Audit & Opportunity Mapping",
    desc: "We analyze your acquisition, operations, and delivery stack to uncover the highest-leverage AI and automation opportunities.",
    icon: "◉",
    tag: "Strategy"
  },
  {
    n: "02",
    title: "Systems Blueprint",
    desc: "We architect a scalable ecosystem — workflows, AI agents, integrations and interfaces — with a clear execution roadmap.",
    icon: "◉",
    tag: "Architecture"
  },
  {
    n: "03",
    title: "Build & Deploy",
    desc: "We engineer, connect and launch your growth infrastructure with rigorous testing, automation logic and production-ready quality.",
    icon: "◉",
    tag: "Execution"
  },
  {
    n: "04",
    title: "Scale & Optimise",
    desc: "We refine performance through data, iteration and continuous optimisation to compound efficiency, revenue and growth.",
    icon: "◉",
    tag: "Growth"
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-soft to-background"/>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] bg-accent/10 blur-[120px] rounded-full"/>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="section-label mb-6">
            Our Methodology
          </div>

          <h2 className="section-heading mb-6">
            From Strategy to{" "}
            <span className="gradient-text">
              Scalable Systems
            </span>
          </h2>

          <p className="section-subtext text-lg">
            Every engagement follows a proven four-phase framework designed
            to move from insight to execution — and from execution to growth.
          </p>
        </div>

        {/* Process */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {steps.map((step, i) => (
            <div key={step.n} className="relative group">

              {/* connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-full w-full h-px bg-gradient-to-r from-accent/30 to-transparent -translate-y-1/2 z-0"/>
              )}

              <div className="relative z-10 h-full rounded-3xl glass-subtle border border-yellow-300/30 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:shadow-glow-sm">

                {/* Top */}
                <div className="flex justify-between items-center mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xl font-semibold">
                    {step.icon}
                  </div>

                  <div className="text-right">
                    <div className="text-[11px] uppercase tracking-[0.25em] text-accent/60 mb-1">
                      {step.tag}
                    </div>

                    <div className="font-mono text-sm text-white/35">
                      {step.n}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-text-muted">
                  {step.desc}
                </p>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <span className="text-xs tracking-widest uppercase text-accent">
                    Phase {step.n}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24">
          <p className="text-text-muted mb-6 text-lg">
            Build smarter systems. Scale faster.
          </p>

          <a
            href="#ready"
            className="btn-accent px-10 py-4 text-sm tracking-wide"
          >
            Book a Strategy Call
          </a>
        </div>

      </div>
    </section>
  );
}