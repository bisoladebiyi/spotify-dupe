/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'card-bg': '#181818'
      },
      colors: {
        'faint': '#b3b3b3;'
      },
      boxShadow: {
        'imgShadow': '0 8px 24px rgb(0 0 0 / 50%)'
      }
    },
  },
  plugins: [],
}

