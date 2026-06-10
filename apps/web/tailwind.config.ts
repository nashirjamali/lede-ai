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
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [],
};

export default config;
