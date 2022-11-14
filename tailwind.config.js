/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        height:{
          '128' : '32rem',
          '170' :  '40rem'
        },
        colors: {
          'sky-blue': '#3f81eb',
          'bule-two':'#4986E9',
          'req-back': '#707DCC'
        },
    },
  },
  plugins: [],
}