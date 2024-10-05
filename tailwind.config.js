/** @type {import('tailwindcss').Config} */

const flowbite = require('flowbite-react/tailwind');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        inter: ['InterVariable', 'sans-serif'],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
