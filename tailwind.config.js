/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '414px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '4xl': [defaultTheme.fontSize['4xl'][0], '3.375rem'],
        '6xl': [defaultTheme.fontSize['6xl'][0], '4.1875rem'],
      },
      gap: {
        25: ['6.5rem'],
      },
      colors: {
        white: '#ffffff',
        black: '#090E11',
        primary: '#00D5FF',
        secondary: '#F2F2F3',
        'hover-primary': '#66E6FF',
      },
    },
  },
  variants: {
    extend: {
      padding: ['last'],
      gridColumn: ['even'],
    },
  },
  plugins: [],
};
