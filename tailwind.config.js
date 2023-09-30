/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        harlequin: {
          50: "#eeffe4",
          100: "#d8ffc4",
          200: "#b4ff90",
          300: "#83ff50",
          400: "#41ff00",
          500: "#35e600",
          600: "#26b800",
          700: "#1c8b00",
          800: "#1b6d07",
          900: "#195c0b",
          950: "#073400",
        },
      },
    },
  },
  plugins: [],
  fontFamily: {
    sans: [
      "system-ui",
      "ui-sans-serif",
      "Roboto",
      "Helvetica Neue",
      "sans-serif",
    ],
    serif: ["ui-serif", "Georgia"],
    mono: ["ui-monospace", "SFMono-Regular"],
  },
  container: {
    padding: {
      DEFAULT: "1rem",
      sm: "2rem",
      md: "2rem",
      lg: "4rem",
      xl: "5rem",
      "2xl": "6rem",
    },
  },
};
