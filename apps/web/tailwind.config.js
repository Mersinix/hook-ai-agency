/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        "primary-dark": "#0B3C5D",
        accent: "#7C3AED",
        "accent-dark": "#6D28D9",
        "accent-soft": "#6366F1",
        background: "#0A0F1E",
        "background-soft": "#0D1424",
        "background-card": "#111827",
        "background-light": "#F9FAFB",
        text: "#F1F5F9",
        "text-muted": "#94A3B8",
        "text-subtle": "#64748B",
        border: "rgba(255,255,255,0.08)",
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 58, 237, 0.45)",
        "glow-sm": "0 0 25px rgba(124, 58, 237, 0.25)",
        card: "0 8px 32px rgba(0, 0, 0, 0.4)",
        soft: "0 20px 60px rgba(0, 0, 0, 0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124,58,237,0.3), transparent)",
      },
        animation: {
    'spin-slow': 'spin 5s linear infinite',
  },
    },
  },
  plugins: [],
};
