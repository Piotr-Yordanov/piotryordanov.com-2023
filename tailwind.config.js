module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class',
  theme: {
    darkSelector: '.dark-mode',
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
          default: '#38B2AC',
          darker: '#319795',
        },
        secondary: {
          lighter: '#63B3ED',
          default: '#4299E1',
          darker: '#3182CE',
        },
        borderWidth: {
          '14': '14px',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-dark-mode')()],
}