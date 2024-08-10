/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        belleza : ['Belleza' , 'sans-serif'],
        mulish : ["Mulish", 'sans-serif'],
        noto_serif : ["Noto Serif", 'serif'],
        ooohbaby : ['Oooh Baby','cursive'],
        playwrite_is : ["Playwrite IS", 'cursive']
      }
    },
  },
  plugins: [],
}