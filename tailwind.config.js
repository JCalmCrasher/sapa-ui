/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
 content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
 theme: {
  extend: {
    colors: {
        'text-dark': '#001B1F',
        'text-darker': '#474747',
        'green-primary': '#00545F',
    
      },
      fontFamily: {
        'serif': ['"Space Grotesk"']
      },
  }
 },
 plugins: []
};
