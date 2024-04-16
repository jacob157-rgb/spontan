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
        primary: '#FFBC0F',
        secondary: '#1E212B',
        tertiary: '#CE2171',
        oren: '#FAA300',
        gry: '#E9E9E9',
        whit: '#EFF6E0',
        blck: '#01161E',
        overwhelm: '#A6C983',
        overwork:'#7EC7EA',
      },
    },
  },
  plugins: [],
}

