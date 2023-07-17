/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      fontFamily: {
        'Hanken-Grotesk': ['Hanken Grotesk', 'sans-serif'],
      },
      colors: {
        'Pale-blue': 'hsl(225, 100%, 94%)',
        'Bright-blue': ' hsl(245, 75%, 52%)',
        'Very-pale-blue': 'hsl(225, 100%, 98%)',
        'Desaturated-blue': ' hsl(224, 23%, 55%)',
        'Dark-blue': ' hsl(223, 47%, 23%)'
      },
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }

        'md': '960px',
        // => @media (min-width: 960px) { ... }

        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
    plugins: [],
  }
}
