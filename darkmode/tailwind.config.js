/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dark.html',
    './index.html'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
     colors:{
      brightRed: '#FFC600',
      brightRedLight: '#c3af69',
      brightRedSupLight: '#c3af69',
      darkBlue: 'hsl(228, 39%, 23%)',
      darkGrayishBlue: 'hsl(227, 12%, 61%)',
      veryDarkBlue: '#1C1C1E',
      veryPaleRed: 'hsl(13, 100%, 96%)',
      veryLightGray: 'hsl(0, 0%, 98%)',
     } 
    },
  },
  plugins: [],
}

