/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark:    'var(--bg-dark)',
        surface: 'var(--bg-surface)',
        card:    'var(--bg-card)',
        border:  'var(--border-color)',
        muted:   'var(--text-muted)',
        blue: {
          DEFAULT: 'var(--blue)',
          bright:  'var(--blue-bright)',
          dim:     '#1d4ed8',
        },
        green: {
          400: 'var(--green)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}