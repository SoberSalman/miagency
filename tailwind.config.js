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
        primary: {
          50: '#f8f7f6',
          100: '#e8e6e2',
          200: '#d1ccc5',
          300: '#b3aba0',
          400: '#8a817a',
          500: '#5a5449',
          600: '#2d2d2d',
          700: '#1f1f1f',
          800: '#141414',
          900: '#0a0a0a',
        },
        accent: {
          50: '#fff8f0',
          100: '#ffecd9',
          200: '#ffd4a8',
          300: '#ffb86b',
          400: '#ff9d34',
          500: '#ff8800',
          600: '#ff7700',
          700: '#cc5500',
          800: '#994000',
          900: '#662b00',
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
