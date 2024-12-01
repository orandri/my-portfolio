/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000615",   //050a15
        secondary: "#95A4BD",
        tertiary: "#0B2750", //0B2750   002D4D
        "black-100": "#0d121a",
        "black-200": "#03080e",
        "white-100": "#e8eef3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1A3F5F",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/fond-hero.png')",
      },
    },
  },
  plugins: [],
};
