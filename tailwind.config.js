/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          100:'#2196f3',
          200:'#333',
          300:'#666',
          400:'#e91e63'
        }
      },
      fontFamily:{
        openSans:['Open Sans']
      }
    },
  },
  plugins: [],
}

