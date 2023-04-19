/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '390px',
      md: '600px',
      lg: '768px',
      xl: '1024px',
      '2xl': '1170px',
    },
    extend: {
      colors:{
        primary:{
          500: '#181818'
        },
        gray: {
          darkest: '#4F4E4D',
          dark: '#737373',
          medium: '#A3A3A3',
          light: '#EEEEEE',
          lightest: '#FFFFFF',
          500: '#31344C',
        },
      },
      container: {
        screens: {
          sm: '390px',
          md: '600px',
          lg: '768px',
          xl: '1024px',
          '2xl': '1170px',
        },
      },
    },
  },
  plugins: [],
}
