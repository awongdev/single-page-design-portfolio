/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.js'],
  theme: {
    colors: {
      lavender: 'rgb(117, 92, 222)',
      orange: 'rgb(246, 165, 96)',
      pink: 'rgb(243, 158, 158)',
      redOrange: 'rgb(235, 117, 101)',
      teal: 'rgb(97, 196, 183)',
      purple: 'rgb(85, 32, 73)',
      black: 'rgb(3, 3, 3)',
      gray: 'rgb(122, 116, 110)',
      offWhite: 'rgb(255, 247, 240)',
      white: '#ffffff',
    },
    extend: {
      maxWidth: { 1110: '69.375rem' },
      content: {
        left: 'url("./assets/icon-arrow-left.svg")',
        right: 'url("./assets/icon-arrow-right.svg")',
      },
    },
  },
  plugins: [],
};
