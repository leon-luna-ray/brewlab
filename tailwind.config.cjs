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
      animation: {
        none: 'none',
        bounce: 'bounce 1s infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        slide: 'slide 1s ease-in-out infinite alternate, slide-out 1s ease-in-out 1s infinite alternate',
        spin: 'spin 5s linear infinite',
        wiggle: 'wiggle 4s ease-in-out infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        pulse: {
          '50%': {
            opacity: '.3',
          },
        },
        slide: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        spin: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}
