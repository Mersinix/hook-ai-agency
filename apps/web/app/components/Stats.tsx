const stats = [
  { value: "50+", label: "Projects Delivered", sub: "Across AI, SaaS & web" },
  { value: "20+", label: "Happy Clients", sub: "Startups & scale-ups" },
  { value: "5+", label: "Years Experience", sub: "Full-stack & AI" },
  { value: "300%", label: "Avg Growth Boost", sub: "Measured performance" },
];

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-indigo-500/5" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-subtle rounded-2xl p-6 md:p-8 text-center card-hover group"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-text-muted">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
