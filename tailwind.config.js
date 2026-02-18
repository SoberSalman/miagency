/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2f0',
          200: '#b3c5e1',
          300: '#8da8d2',
          400: '#678bc3',
          500: '#4169b4',
          600: '#2d4a99',
          700: '#1e3a5f',
          800: '#162a42',
          900: '#0f1a2a',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf8f3',
          200: '#faf2e8',
          300: '#f5e8db',
          400: '#f0dccb',
          500: '#e8ccb3',
          600: '#ddb899',
          700: '#cda47f',
          800: '#b89066',
          900: '#a37c4d',
        },
        gold: {
          50: '#fef8f0',
          100: '#fde8d1',
          200: '#fbd7a3',
          300: '#f9c675',
          400: '#f7b547',
          500: '#d4af37',
          600: '#c19a3d',
          700: '#b8860b',
          800: '#9b7049',
          900: '#88584f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sohne', 'system-ui', 'sans-serif'],
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
