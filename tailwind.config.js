/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark:    '#08080f',
        surface: '#0f0f1a',
        card:    '#141424',
        border:  '#1e1e35',
        muted:   '#64748b',
        blue: {
          DEFAULT: '#3b82f6',
          bright:  '#60a5fa',
          dim:     '#1d4ed8',
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
