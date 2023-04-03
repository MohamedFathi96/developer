/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#1e2f32",
      },
      dropShadow: {
        btn: "0 10px 30px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/circle-scatter-haikei.svg')",
      },
    },
  },
  plugins: [],
};
