/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      baseColor:"#0051d2",
      baseColorLight: "#ec473a",
      dip: "#020a21",
      heading: "#33363e",
      pfont: "#797979",
      white: "#fff",
      bg_one: "#f7f7f7",
      titleColor: "#2a2a2a",
      border: "#e8edf1",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      mobile: "600px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
    styles:{
      
    }
  },
  plugins: [],
}
