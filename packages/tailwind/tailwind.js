const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '7rem',
        '2xl': '6rem',
      },
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      primary: {
        50: 'rgb(var(--color-primary-50))',
        100: 'rgb(var(--color-primary-100))',
        200: 'rgb(var(--color-primary-200))',
        300: 'rgb(var(--color-primary-300))',
        400: 'rgb(var(--color-primary-400))',
        500: 'rgb(var(--color-primary-500))',
        600: 'rgb(var(--color-primary-600))',
        700: 'rgb(var(--color-primary-700))',
        800: 'rgb(var(--color-primary-800))',
        900: 'rgb(var(--color-primary-900))',
        1000: 'rgb(var(--color-primary-1000))',
      },
      secondary: {
        20: 'rgb(var(--color-secondary-20))',
        50: 'rgb(var(--color-secondary-50))',
        100: 'rgb(var(--color-secondary-100))',
        200: 'rgb(var(--color-secondary-200))',
        300: 'rgb(var(--color-secondary-300))',
        400: 'rgb(var(--color-secondary-400))',
        500: 'rgb(var(--color-secondary-500))',
        600: 'rgb(var(--color-secondary-600))',
        700: 'rgb(var(--color-secondary-700))',
        800: 'rgb(var(--color-secondary-800))',
        900: 'rgb(var(--color-secondary-900))',
        1000: 'rgb(var(--color-secondary-1000))',
        1070: 'rgb(var(--color-secondary-1070))',
        1100: 'rgb(var(--color-secondary-1100))',
        950: 'rgb(var(--color-secondary-950))',
        850: 'rgb(var(--color-secondary-850))',
      },
      grey: {
        5: 'rgb(var(--color-grey-5))',
        50: 'rgb(var(--color-grey-50))',
        20: 'rgb(var(--color-grey-20))',
        10: 'rgb(var(--color-grey-10))',
        100: 'rgb(var(--color-grey-100))',
        200: 'rgb(var(--color-grey-200))',
        300: 'rgb(var(--color-grey-300))',
        400: 'rgb(var(--color-grey-400))',
        500: 'rgb(var(--color-grey-500))',
        600: 'rgb(var(--color-grey-600))',
        700: 'rgb(var(--color-grey-700))',
        800: 'rgb(var(--color-grey-800))',
        900: 'rgb(var(--color-grey-900))',
        1000: 'rgb(var(--color-grey-1000))',
      },
    },
  },
};
