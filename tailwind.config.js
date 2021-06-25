const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './playlist/**/*.js'],
  darkMode: 'class',
  theme: {
    darkSelector: '.dark-mode',
    filter: { // defaults to {}
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      header: ['Nunito Sans', 'sans-serif'],
      body: ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          lighter: '#4FD1C5',
          default: colors.indigo[500],
          // default: colors.green[500],
          darker: '#319795',
        },
        secondary: {
          lighter: '#63B3ED',
          default: '#4299E1',
          darker: '#3182CE',
        },
      },
    },
  },
  variants: {
    extend: {
      filter: ['hover']
    },
  },
  plugins: [require('tailwindcss-filters'),
  ],
}