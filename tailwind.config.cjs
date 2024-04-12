/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
        lg: '4rem',
      },
      center: true,
    },
    extend: {
      colors: {
        cafe: {
          'cream': '#fdfaf4',
          'dark': '#2c241e',
        }
      },
      fontFamily: {
        dm: ['DM Sans', 'sans-serif'],
        lora: ['Lora', 'serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
