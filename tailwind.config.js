/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
      gridTemplateColumns: {
        'auto-1fr': 'repeat(auto-fill, minmax(200px,1fr))',
      },
      colors: {
        'trueGray-200': '#ebebeb'
      },
      animation: {
        'slide-to-left': 'transform: translate(110%,0)',
        'transition': 'transition: all 400ms ease',
        'slide-to-right': 'transform: translate(0,0)',

      },
      plugins: [],
    }
  }
};