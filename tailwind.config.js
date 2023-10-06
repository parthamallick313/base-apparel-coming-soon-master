/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
    },
    screens: {
      md: "425px",
      lg: "512px",
      xl: "768px",
      "2xl": "1280px",
    },
  },
  plugins: [],
};
