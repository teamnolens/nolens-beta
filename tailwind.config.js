/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'nolens-light': '#F5F5F5',
        'nolens-card': '#FFFFFF',
        'nolens-text': '#1A1A1A',
        'nolens-muted': '#4A4A4A',
        'nolens-accent': '#1A1A1A',
        'nolens-highlight': '#333333',
        'nolens-danger': '#D32F2F',
        'nolens-gold': '#D4AF37', // Added Nolens' original color
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'nolens': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};