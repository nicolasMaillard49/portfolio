import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0F2044',
          800: '#1A2E52',
          700: '#1E3A5F',
          600: '#254A78',
        },
        electric: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
        },
        dark: {
          bg: '#0A0A0A',
          surface: '#111111',
          card: '#161616',
          border: '#222222',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
        'blink': 'blink 1s step-end infinite',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'ripple': 'ripple 0.6s linear',
        'loader-bar': 'loaderBar 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.6' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        loaderBar: {
          '0%': { left: '-40%' },
          '100%': { left: '100%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-dark': `
          radial-gradient(at 20% 30%, rgba(59,130,246,0.08) 0%, transparent 50%),
          radial-gradient(at 80% 70%, rgba(96,165,250,0.06) 0%, transparent 50%)
        `,
        'mesh-light': `
          radial-gradient(at 20% 30%, rgba(59,130,246,0.05) 0%, transparent 50%),
          radial-gradient(at 80% 70%, rgba(30,58,95,0.04) 0%, transparent 50%)
        `,
      },
      boxShadow: {
        'card-dark': '0 1px 0 0 rgba(255,255,255,0.04), 0 4px 24px -4px rgba(0,0,0,0.6)',
        'card-dark-hover': '0 1px 0 0 rgba(59,130,246,0.2), 0 8px 32px -4px rgba(0,0,0,0.8), 0 0 0 1px rgba(59,130,246,0.15)',
        'card-light': '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px -2px rgba(0,0,0,0.08)',
        'card-light-hover': '0 4px 24px -4px rgba(15,32,68,0.15), 0 0 0 1px rgba(59,130,246,0.2)',
        'glow-blue': '0 0 20px rgba(59,130,246,0.35)',
        'glow-blue-sm': '0 0 10px rgba(59,130,246,0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config
