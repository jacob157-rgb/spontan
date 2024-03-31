/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: '#124559',
        secondary: '#598392',
        tertiary: '#AEC3B0',
        whit: '#EFF6E0',
        blck: '#01161E',
      },
    },
  },
  plugins: [],
}

