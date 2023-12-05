/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'calibre': ['calibre', 'sans-serif'],
        'alike': ['Alike'],
        'manrope': ['Manrope'],
        'nidas': ['Nidas'],
        'xeroda': ['Xeroda'], 
        'cousine': ['Cousine'],
        'fragment': ['Fragment'],
        'quicksand': ['Quicksand'],
        'elianto': ['Elianto'],
        'nunito': ['Nunito'],
        'fira': ['Fira'],
        'biryani': ['Biryani'],
        'iceland': ['Iceland'],
        'abandoned': ['Abandoned'],
        'caviar': ['Caviar'],
        'modern': ['Modern'],
      },
      backgroundImage: theme => ({
        'squares': "linear-gradient(to right, rgb(50, 50, 50) 1px, transparent 1px), linear-gradient(to bottom, rgb(50,50,50) 1px, transparent 1px);",
        'radial': "radial-gradient(white, rgb(237, 255, 252 ))"
      }),
      colors: {
        'b': "rgb(190, 255, 254)" ,
        'offwhite' : '#E2E8F0',
        'bl': '#00f7f7',
        'p': '#ae00ff',
        't': '#f1e9e3',
        'test': '#002551',
        'back': '#201c1c',
        'w': '#E8FFFE',
        'hov': '#524747'
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}

