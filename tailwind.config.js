/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],

  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1236px",
      },
    },
    extend: {},
  },
  plugins: [],
};
