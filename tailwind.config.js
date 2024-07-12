/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tech-stack-box-first-color': '#1a1a29',
        'tech-stack-box-second-color': 'rgba(27, 27, 40, 0)',
        'navbarBorder-dark': '#e2e2e2', // Define your custom color here
      },
    },
  },
  plugins: [],
}

