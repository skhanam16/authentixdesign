/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // Optional: Select specific themes from the 35+ available
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee"],
  },
}