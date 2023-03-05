/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./**/*.html",
    "./node_modules/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        'rem': {
          '1.5': '1.5rem',
        },
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
