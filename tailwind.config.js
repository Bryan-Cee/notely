const theme = require("tailwindcss/defaultTheme");
const minWidths = require("tailwindcss/defaultConfig");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      ...theme.minWidth,
      90: "90px",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", ...theme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
