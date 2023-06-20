/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwind will look the .html & .js files inside   build directory
  content: ["./build/*.html","./build/js/*.js"],
  theme: {
    extend: { 
      //  adding custom feature for screen
      screens:{
      'widescreen': {'raw': '(min-aspect-ratio:3/2)'},
      'tallscreen': {'raw': '(min-aspect-ratio:13/20)'},
    },
    
  //  adding custom animation & keyframs
  // naming the keyframes to open-menu
    keyframes: {
      'open-menu': {
        "0%": {
          transform: "scaleY(0)"
        },
        "80%": {
          transform: "scaleY(1.2)"
        },
        "0%": {
          transform: "scaleY(1)"
        }
      }
    },
    // adding animation
    animation: {
      'open-menu': 'open-menu 0.5s ease-in-out forwards',

    }
  },
  },
  plugins: [],
}

