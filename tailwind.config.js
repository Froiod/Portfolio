/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    
    extend: {
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
        color1: '#feffff',
        color2: '#def2f1',
        color3: '#3aafa9',
        color4: '#2b7a78',
        color5: '#17252a'
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
