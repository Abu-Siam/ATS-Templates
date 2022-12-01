/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],

    },
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1600px'
    },
    extend: {
      colors:{
        olwelGreen:'#2D8B45',
        olwelGreenLight:'#CFFFD94D',
        olwelGreenBorder:'#E0EEE3'
        
      }
    },
  },
  plugins: [],
}