/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        primary: '#3b515e',
        secondary: '#303a22',
        option1: '#3f4a10',
        option2: '#132122',
        option3: '#6f4f36',
      },
    },
  },
  plugins: [forms],
};
