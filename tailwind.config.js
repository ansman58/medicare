/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      baseColor: "#0EA5E9", // Modern Medical Blue
      baseColorDark: "#0284C7", // Darker shade for hover
      baseColorLight: "#38BDF8", // Lighter shade
      secondary: "#6366f1", // Indigo accent
      heading: "#0F172A", // Slate 900
      pfont: "#334155", // Slate 700
      white: "#ffffff",
      bg_one: "#F8FAFC", // Slate 50
      titleColor: "#1E293B", // Slate 800
      border: "#E2E8F0", // Slate 200
      faintBorder: "#F1F5F9",
      black: "#000000",
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        body: ["var(--font-body)"],
        title: ["var(--font-title)"],
        // Keeping legacy names mapped to new fonts for compatibility
        openSans: ["var(--font-body)"],
        playFair: ["var(--font-title)"],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(14, 165, 233, 0.3)',
      },
      spacing: {
        15: "15px",
        35: "35px",
        48: "48px",
        60: "60px",
        pmobile: "15px",
        plaptop: "10%",
        ptablet: "6%",
      },
      maxWidth: {
        540: "540px",
        720: "720px",
        maxWidth: "1720px",
      },
      animation: {
        slide: "slide 10s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
    screens: {
      mobile: "600px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      md: "900px",
    },
  },
  plugins: [],
};
