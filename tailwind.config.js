const typography = require("@tailwindcss/typography");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,js,jsx}", "index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
      },
      colors: {
        dark: "#121416",
        githubDark: "#24292F",
        githubHover: "#050708",
        midnightBlue: "#030317",
      },
      fontFamily: {
        "europa-bold": ["Europa-Bold", "sans-serif"],
        "europa-regular": ["Europa-Regular", "sans-serif"],
      },
    },
  },
  plugins: [typography],
};
