import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#a855f7',
        'neon-blue': '#3b82f6',
        'neon-cyan': '#06b6d4',
        'dark-base': '#050510',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      backdropBlur: {
        xl: '20px',
      },
    },
  },
  plugins: [],
} satisfies Config
