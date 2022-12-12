/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        'red': 'hsl(0, 100%, 74%)',
        'green': 'hsl(154, 59%, 51%)',
        'grayishBlue': "hsl(246, 25%, 77%)",
        "darkBlue": "hsl(249, 10%, 26%)",
        "blue": "hsl(248, 32%, 49%)", 
      },
    },
  },
  plugins: [],
}
