import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1C4A3E',
          light: '#3D7A6B',
        },
        surface: {
          DEFAULT: '#FAFAF7',
          raised: '#F0F4F2',
        },
        border: '#C5D0CB',
        foreground: '#1A1A18',
        muted: '#7A8780',
        accent: '#C4720D',
        success: '#2D6A4F',
        danger: '#B91C1C',
        ring: '#3D7A6B',
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'page-enter': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'page-enter': 'page-enter 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
