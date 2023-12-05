/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
 content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
 theme: {
  extend: {
   colors: {
    dark: "#001B1F",
    darker: "#474747",
    secondary: "#00545F",
    primary: "#EBFFB7"
   },
   fontFamily: {
    serif: ['"Space Grotesk"']
   }
  }
 },
 plugins: []
};
