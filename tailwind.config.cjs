/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "425px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        unicaOne: "'Unica One', cursive;",
        bebas: "'Bebas Neue', cursive;",
        montserrat: "'Montserrat', sans-serif;",
      },
      backgroundImage: {
        "hero-bg": "url('/hero-bg.png')",
        "hero-mobile-bg": "url('/mobile-bg.jpg')",
        "drinks-bg": "url('/search-section-bg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
