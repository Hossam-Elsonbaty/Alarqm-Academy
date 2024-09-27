/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily :{
      'poppins' : ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'navbar-blue' : 'rgb(40 105 130)',
        'golden-sand' : '#d8b773',
      }
    },
  },
  plugins: [],
}