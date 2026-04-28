"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type Solution = {
  id: string;
  title: string;
  desc: string;
  metric: string;
  metricLabel: string;
  service: "Growth" | "Creative" | "Build" | "Automate";
  industry: string;
  stack: string[];
  visual: { from: string; to: string; icon: string };
};

const SERVICE_FILTERS = ["All", "Growth", "Creative", "Build", "Automate"] as const;
const INDUSTRY_FILTERS = [
  "All",
  "Real Estate",
  "Hospitality",
  "Beauty & Fashion",
  "Sports & Education",
  "Travel",
  "IT & SaaS",
] as const;
const SORT_OPTIONS = ["Featured", "Impact", "Newest"] as const;

const SERVICE_COLORS: Record<string, string> = {
  Growth:   "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  Creative: "text-pink-400   bg-pink-400/10   border-pink-400/30",
  Build:    "text-blue-400   bg-blue-400/10   border-blue-400/30",
  Automate: "text-violet-400 bg-violet-400/10 border-violet-400/30",
};

const SORT_ORDER: Record<string, string[]> = {
  Featured: [],
  Impact:   ["s1","s3","s4","s5","s7","s2","s6","s8","s9","s10","s11","s12"],
  Newest:   ["s12","s11","s10","s9","s8","s7","s6","s5","s4","s3","s2","s1"],
};

function ModalCard({ s }: { s: Solution }) {
  return (
    <div
      className="group relative rounded-2xl border border-white/8 overflow-hidden transition-all duration-300 hover:border-white/18 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
      style={{ background: "rgba(16,24,42,0.85)", backdropFilter: "blur(8px)" }}
    >
      {/* Visual area */}
      <div
        className={`relative h-24 w-full flex items-center justify-center overflow-hidden bg-gradient-to-br ${s.visual.from} ${s.visual.to}`}
      >
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <span className="text-4xl transition-transform duration-300 group-hover:scale-110 relative z-10">
          {s.visual.icon}
        </span>
        {/* service badge */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full border ${SERVICE_COLORS[s.service]}`}>
            {s.service}
          </span>
        </div>
        {/* metric */}
        <div className="absolute top-2.5 right-2.5 text-right z-10">
          <div className="text-lg font-bold text-white leading-none">{s.metric}</div>
          <div className="text-[10px] text-white/55 mt-0.5">{s.metricLabel}</div>
        </div>
        {/* bottom glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="text-[10px] text-text-subtle uppercase tracking-widest mb-1.5">{s.industry}</div>
        <h4 className="text-sm font-bold text-white mb-1.5 leading-snug line-clamp-1">{s.title}</h4>
        <p className="text-[11px] text-text-muted leading-relaxed mb-3 line-clamp-2">{s.desc}</p>
        <div className="flex flex-wrap gap-1">
          {s.stack.map((t) => (
            <span key={t} className="text-[10px] text-text-subtle bg-white/4 border border-white/6 rounded-full px-2 py-0.5">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Hover accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

export default function SolutionsModal({
  open,
  onClose,
  solutions,
}: {
  open: boolean;
  onClose: () => void;
  solutions: Solution[];
}) {
  const [serviceFilter, setServiceFilter] = useState<string>("All");
  const [industryFilter, setIndustryFilter] = useState<string>("All");
  const [sort, setSort] = useState<string>("Featured");
  const [search, setSearch] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    // Focus search on open
    const t = setTimeout(() => searchRef.current?.focus(), 120);
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
      clearTimeout(t);
    };
  }, [open, onClose]);

  const hasActiveFilters =
    serviceFilter !== "All" || industryFilter !== "All" || search.trim() !== "";

  const clearFilters = () => {
    setServiceFilter("All");
    setIndustryFilter("All");
    setSearch("");
    setSort("Featured");
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let result = solutions.filter((s) => {
      const svcMatch = serviceFilter === "All" || s.service === serviceFilter;
      const indMatch = industryFilter === "All" || s.industry === industryFilter;
      const searchMatch =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.desc.toLowerCase().includes(q) ||
        s.stack.some((t) => t.toLowerCase().includes(q)) ||
        s.industry.toLowerCase().includes(q);
      return svcMatch && indMatch && searchMatch;
    });

    if (sort !== "Featured") {
      const order = SORT_ORDER[sort] ?? [];
      result = [...result].sort(
        (a, b) => order.indexOf(a.id) - order.indexOf(b.id)
      );
    }
    return result;
  }, [solutions, serviceFilter, industryFilter, search, sort]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      className="fixed inset-0 z-50 flex items-stretch justify-center"
      style={{ background: "rgba(7,12,26,0.80)", backdropFilter: "blur(20px)" }}
    >
      {/* Modal shell — full-height, max-width container */}
      <div
        className="relative w-full max-w-7xl mx-auto my-4 md:my-6 flex flex-col rounded-3xl border border-white/10 overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.7)]"
        style={{ background: "rgba(10,16,32,0.97)" }}
      >

        {/* ─── STICKY GLASS COMMAND BAR ─── */}
        <div
          className="flex-shrink-0 z-10 flex flex-col gap-0"
          style={{
            background: "rgba(10,16,36,0.65)",
            backdropFilter: "blur(24px)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 4px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03)",
          }}
        >
          {/* Row 1 — title + search + sort + close */}
          <div className="flex items-center gap-3 px-5 md:px-7 py-3.5">
            {/* Title */}
            <div className="flex-shrink-0 hidden sm:flex flex-col">
              <span className="text-sm font-bold text-white leading-none">All Solutions</span>
              <span className="text-[10px] text-text-subtle mt-0.5 leading-none">
                {filtered.length}/{solutions.length}
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-7 bg-white/8 mx-1" />

            {/* Search */}
            <div className="relative flex-1 min-w-0">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-subtle pointer-events-none"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search solutions, stacks, industries…"
                className="w-full bg-white/5 border border-white/8 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder:text-text-subtle focus:outline-none focus:border-accent/40 focus:bg-white/8 transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-subtle hover:text-white"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="flex-shrink-0 flex items-center gap-1 bg-white/4 border border-white/8 rounded-xl px-1 py-1">
              {SORT_OPTIONS.map((o) => (
                <button
                  key={o}
                  onClick={() => setSort(o)}
                  className={`text-[10px] font-semibold px-2.5 py-1 rounded-lg transition-all ${
                    sort === o
                      ? "bg-white/12 text-white"
                      : "text-text-subtle hover:text-white"
                  }`}
                >
                  {o}
                </button>
              ))}
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="flex-shrink-0 w-8 h-8 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-all"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Row 2 — filter chips, horizontally scrollable */}
          <div className="border-t border-white/5">
            <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide px-5 md:px-7 py-2.5">
              {/* Service group */}
              <div className="flex items-center gap-1.5 flex-shrink-0 mr-3">
                <span className="text-[9px] font-semibold text-text-subtle uppercase tracking-widest flex-shrink-0">Svc</span>
                {SERVICE_FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setServiceFilter(f)}
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border whitespace-nowrap transition-all duration-150 flex-shrink-0 ${
                      serviceFilter === f
                        ? f === "All"
                          ? "bg-white/15 border-white/30 text-white"
                          : SERVICE_COLORS[f]
                        : "border-white/8 text-text-muted hover:border-white/18 hover:text-white"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Separator */}
              <div className="w-px h-5 bg-white/8 flex-shrink-0 mr-3" />

              {/* Industry group */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className="text-[9px] font-semibold text-text-subtle uppercase tracking-widest flex-shrink-0">Ind</span>
                {INDUSTRY_FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setIndustryFilter(f)}
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border whitespace-nowrap transition-all duration-150 flex-shrink-0 ${
                      industryFilter === f
                        ? "bg-accent/15 border-accent/35 text-accent"
                        : "border-white/8 text-text-muted hover:border-white/18 hover:text-white"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─── SCROLLABLE CARD GRID ─── */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-5 md:px-7 pt-5 pb-20">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <span className="text-5xl mb-4 opacity-60">🔍</span>
              <p className="text-text-muted text-sm mb-3">No solutions match these filters.</p>
              <button
                onClick={clearFilters}
                className="text-accent text-xs border border-accent/25 rounded-full px-4 py-1.5 hover:bg-accent/10 transition-all"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
              {filtered.map((s) => (
                <ModalCard key={s.id} s={s} />
              ))}
            </div>
          )}
        </div>

        {/* ─── FLOATING GLASS FOOTER ─── */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-5 md:px-7 py-3"
          style={{
            background: "rgba(10,16,32,0.70)",
            backdropFilter: "blur(24px)",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 -4px 32px rgba(0,0,0,0.35)",
          }}
        >
          {/* Left — results + clear */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-text-subtle">
              <span className="text-white font-semibold">{filtered.length}</span>
              {" "}of {solutions.length} solutions
            </span>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-[10px] text-text-muted border border-white/8 rounded-full px-2.5 py-1 hover:border-white/20 hover:text-white transition-all"
              >
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Clear filters
              </button>
            )}
          </div>

          {/* Right — ESC hint + CTA */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-1 text-[10px] text-text-subtle">
              <kbd className="font-mono bg-white/6 border border-white/10 rounded px-1.5 py-0.5">ESC</kbd>
              to close
            </span>
            <a
              href="#ready"
              onClick={onClose}
              className="btn-accent text-xs px-4 py-2 gap-1.5"
            >
              Build your system
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
