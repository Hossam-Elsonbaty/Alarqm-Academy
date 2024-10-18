/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily :{
      'poppins' : ['Poppins', 'sans-serif'],
      'cairo' : ['Cairo', 'sans-serif'],
      'LibreBaskerville' : ['Libre Baskerville', 'sans-serif'],
    },
    fontSize: {
      xxs: '0.6rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    lineHeight:{
      'xxl':'3rem'
    },
    borderRadius: {
      'half':'50%'
    },
    extend: {
      colors: {
        'navbar-blue' : 'rgb(40 105 130)',
        'golden-sand' : '#d8b773',
        'deep-teal' : '#256882',
        'deep-teal-hover' : '#22566a',
        'golden-sand-hover' : 'rgb(178 150 92)',
      }
    },
  },
  plugins: [],
}