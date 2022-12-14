/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      red: "#f44336",
      "grey-400": "#536964",
      "green-800": "#081411",
      "green-700": "#0F2723",
      "green-500": "#1C463E",
      "green-300": "#619B8A",
      "green-200": "#B2C9AB",
      "mint-400": "#4FB286",
      "mint-200": "#50FFB1",
      "mint-100": "#BDF8E6",
    },
    backgroundImage: {
      homehero: "url('../../assets/images/bannerThinDark.png')",
      drelogo: "url('../../assets/images/whitedrelogo.png')",
      emptystate: "url('../../assets/images/emptystate.png')",
    },
    extend: {},
  },
  plugins: [],
}
