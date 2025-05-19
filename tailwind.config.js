/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#1E1A2F',
        'purple': '#6C5CE7',
        'light-purple': '#A29BFE',
        'accent': '#00D2D3',
        'subtle': 'rgba(108, 92, 231, 0.2)',
        'text': '#F5F5F7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'border': 'border 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        border: {
          '0%': { 
            backgroundPosition: '0% 50%',
            borderColor: 'rgba(108, 92, 231, 0.3)',
          },
          '50%': { 
            backgroundPosition: '100% 50%',
            borderColor: 'rgba(0, 210, 211, 0.3)',
          },
          '100%': { 
            backgroundPosition: '0% 50%',
            borderColor: 'rgba(108, 92, 231, 0.3)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'conic-90': 'conic-gradient(var(--tw-gradient-stops))',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
} 