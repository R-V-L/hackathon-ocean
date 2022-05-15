module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#D9EEF2",
          400: "#7DC6D4",
          500: "#436DB0",
          600: "#010A5C",
          900: "#000117",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
