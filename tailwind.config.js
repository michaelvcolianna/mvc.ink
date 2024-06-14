const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px',
      },
      fontFamily: {
        'sans': ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
      },
      gap: {
        'thin': '1px',
      },
      maxWidth: {
        '1/2': '50%',
        '3/5': '60%',
        '3/4': '75%',
      },
    },
    screens: {
      'sm': '480px',
      'md': '736px',
      'lg': '980px',
      'xl': '1280px',
      '2xl': '1680px',
    },
  },
  plugins: [],
}
