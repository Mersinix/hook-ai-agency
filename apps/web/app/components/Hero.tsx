export default function Hero() {
   const tags = [
  { label: "Growth & Marketing", color: "text-green-400 border-green-400/30 bg-green-400/10" },
  { label: "Creative & Branding", color: "text-pink-400 border-pink-400/30 bg-pink-400/10" },
  { label: "Technology & Development", color: "text-blue-400 border-blue-400/30 bg-blue-400/10" },
  { label: "AI Automation & Cloud", color: "text-purple-400 border-purple-400/30 bg-purple-400/10" },
];
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-indigo-500/8 blur-[100px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 animate-fade-in">
          <span className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            AI-Powered Growth Studio
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-balance animate-fade-up">
          We Build{" "}
          <span className="gradient-text">AI Systems</span>
          <br />
          That Scale{" "}
          <span className="relative">
            Revenue
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8 C60 3, 180 3, 298 8"
                stroke="url(#underline-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="underline-gradient"
                  x1="0"
                  y1="0"
                  x2="300"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-8 text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed animate-fade-up">
          We help startups and scaling companies grow with AI automation,
          modern web platforms, and performance-driven digital systems that
          actually deliver results.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up">
          <a href="#ready" className="btn-accent px-8 py-3.5 text-base">
            Book Free Strategy Call
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a href="#work" className="btn-primary px-8 py-3.5 text-base">
            View Case Studies
          </a>
        </div>

        {/* Trust indicators */}
        
      
      <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
        {tags.map((item) => (
          <span
            key={item.label}
            className={`px-2.5 py-1 rounded-full backdrop-blur border ${item.color}`}
          >
            {item.label}
          </span>
        ))}
      </div>

        {/* Scroll hint */}
        <div className="mt-20 flex flex-col items-center gap-2 text-text-subtle animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
