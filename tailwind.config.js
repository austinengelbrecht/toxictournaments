/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "current",
      white: "#ffffff",
      offwhite: "#ebebeb",
      black: "#000000",

      logo: {
        1: "#14d900",
        2: "#13c900",
        3: "#08a700",
      },
      toxic: {
        1: "#1aff00",
        2: "#18f200",
        3: "#13c900",
        4: "#13bf00",
        5: "#11a600",
      },
      poison: {
        1: "#8313bf",
        2: "#7211a6",
        3: "#600e8c",
        4: "#4f0b73",
        5: "#3d0959",
      },
    },
    extend: {},
  },
  plugins: [],
};
