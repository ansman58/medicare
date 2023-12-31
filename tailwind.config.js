/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      baseColor: "#0051d2",
      baseColorLight: "#ec473a",
      dip: "#020a21",
      heading: "#33363e",
      pfont: "#797979",
      white: "#fff",
      bg_one: "#f7f7f7",
      titleColor: "#2a2a2a",
      border: "#e8edf1",
      faintBorder: "#ededed33",
      dynamicBack: "#1d1d1d",
      black: "#000",
      squant: "#666666",
    },
    extend: {
      fontFamily: {
        openSans: ["var(--font-open-sans)"],
        playFair: ["var(--font-play-fair)"],
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
