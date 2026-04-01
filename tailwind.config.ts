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
          900: '#0A0F1E',
          800: '#111832',
          700: '#1A2345',
          600: '#243058',
        },
        electric: {
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
        },
        dark: {
          bg: '#06060C',
          surface: '#0C0C16',
          card: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.06)',
          medium: 'rgba(255, 255, 255, 0.10)',
          heavy: 'rgba(255, 255, 255, 0.15)',
          border: 'rgba(255, 255, 255, 0.10)',
          'border-hover': 'rgba(255, 255, 255, 0.18)',
        },
        accent: {
          violet: '#A78BFA',
          fuchsia: '#C084FC',
          cyan: '#22D3EE',
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
          radial-gradient(at 15% 25%, rgba(99,102,241,0.12) 0%, transparent 50%),
          radial-gradient(at 85% 75%, rgba(167,139,250,0.08) 0%, transparent 50%),
          radial-gradient(at 50% 50%, rgba(34,211,238,0.04) 0%, transparent 60%)
        `,
        'mesh-light': `
          radial-gradient(at 15% 25%, rgba(99,102,241,0.06) 0%, transparent 50%),
          radial-gradient(at 85% 75%, rgba(167,139,250,0.04) 0%, transparent 50%)
        `,
      },
      boxShadow: {
        'card-dark': '0 4px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card-dark-hover': '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(99,102,241,0.2)',
        'card-light': '0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)',
        'card-light-hover': '0 8px 32px rgba(0,0,0,0.1), 0 0 0 1px rgba(99,102,241,0.2)',
        'glass': '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glass-hover': '0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
        'glow-blue': '0 0 25px rgba(99,102,241,0.4), 0 0 50px rgba(99,102,241,0.1)',
        'glow-blue-sm': '0 0 12px rgba(99,102,241,0.3)',
        'glow-violet': '0 0 25px rgba(167,139,250,0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config
