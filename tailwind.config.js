/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.25rem',
      },
      colors: {
        dark: '#121416',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
