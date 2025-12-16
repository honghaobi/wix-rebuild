/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // BGS Brand Colors
      colors: {
        coral: {
          DEFAULT: '#DF7162',
          50: '#FCF0EE',
          100: '#F9E1DD',
          200: '#F3C3BB',
          300: '#EDA599',
          400: '#E78777',
          500: '#DF7162',
          600: '#D44A38',
          700: '#A73829',
          800: '#79291E',
          900: '#4B1912',
        },
        navy: {
          DEFAULT: '#2B328C',
          50: '#E8E9F4',
          100: '#D1D3E9',
          200: '#A3A7D3',
          300: '#757BBD',
          400: '#474FA7',
          500: '#2B328C',
          600: '#222870',
          700: '#1A1E54',
          800: '#111438',
          900: '#090A1C',
        },
        dark: {
          DEFAULT: '#1A1A2E',
          light: '#242442',
          lighter: '#2E2E4A',
          surface: '#16213E',
        },
        light: {
          DEFAULT: '#FFFFFF',
          muted: '#F5F5F5',
          subtle: '#E5E5E5',
        },
      },
      // Typography
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-2xl': ['5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-xl': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.3' }],
        'body-xl': ['1.25rem', { lineHeight: '1.6' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'body-xs': ['0.75rem', { lineHeight: '1.5' }],
      },
      // Spacing
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      // Container
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      // Aspect Ratios
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '16/10': '16 / 10',
      },
    },
  },
  plugins: [],
}
