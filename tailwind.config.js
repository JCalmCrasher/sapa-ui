/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
 content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
 theme: {
  container: {
    center: true,
    screens: {
     "3xl": "2560px"
    }
   },
   screens: {
    xs: "320px",
    sm: "640px",
    md: "920px",
    lg: "1024px",
    xl: "1440px",
    "2xl": "1680px",
    "3xl": "2560px"
   },
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
