/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-yellow": "#FDE74C",
        green: "#9BC53D",
        "coral-red": "#C3423F",
        "dark-teal": "#404E4D",
      },
    },
  },
  plugins: [],
};
