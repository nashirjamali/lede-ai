import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E1320',
          soft: '#2A3F5F',
        },
        brand: {
          DEFAULT: '#0E1320',
          light: '#2A3F5F',
        },
        surface: {
          DEFAULT: '#FAF7F2',
          raised: '#F2EDE4',
          inset: '#EAE4D9',
        },
        border: '#D9D0C4',
        foreground: '#0E1320',
        muted: '#6B6560',
        accent: {
          DEFAULT: '#C24E2E',
          soft: '#E8A090',
        },
        highlight: '#D4A574',
        success: '#1F6B4E',
        danger: '#A32626',
        ring: '#2A3F5F',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Newsreader', 'serif'],
        sans: ['var(--font-sans)', 'Albert Sans', 'sans-serif'],
        mono: ['var(--font-mono)', 'IBM Plex Mono', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 1px)',
        sm: 'calc(var(--radius) - 2px)',
      },
      boxShadow: {
        card: '0 1px 2px rgba(14, 19, 32, 0.04), 0 4px 16px rgba(14, 19, 32, 0.06)',
        elevated: '0 8px 32px rgba(14, 19, 32, 0.1), 0 2px 8px rgba(14, 19, 32, 0.04)',
      },
      keyframes: {
        'page-enter': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-slide': {
          from: { opacity: '0', transform: 'translateX(-8px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'page-enter': 'page-enter 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-slide': 'fade-slide 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
