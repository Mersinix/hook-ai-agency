"use client";

import { useEffect, useRef } from "react";

export default function Mac() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-soft to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] bg-accent/10 blur-[120px] rounded-full" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Header (MATCHES PROCESS) */}
        <div className="max-w-3xl mx-auto mb-16">

          <div className="section-label mb-6">
            AI Product Interface
          </div>

          <h2 className="section-heading mb-6">
            We Build{" "}
            <span className="gradient-text">
              Intelligent Systems
            </span>{" "}
            That Power Growth
          </h2>

          <p className="section-subtext text-lg">
            From automation to full-scale platforms, we design and deploy
            high-performance systems that streamline operations and scale
            revenue.
          </p>

        </div>

        {/* VIDEO (NOW BELOW TEXT) */}
        <div className="flex justify-center">
          <video
            ref={videoRef}
            src="/videos/hero.mp4"
            autoPlay
            muted
            playsInline
            className="w-[80%] max-w-4xl rounded-xl border border-[#0088ff]/30 shadow-[0_0_30px_rgba(0,136,255,0.25)]"
          />
        </div>
  {/* Scroll hint */}
        <div className="mt-10 flex flex-col items-center gap-2 text-text-subtle animate-bounce">
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