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
      plugins: [],
    }
  }
};