module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extends: {
      backgroundImage: {
        wave: "url('/resources/images/landing/wave.svg')",
      },
    },
    screens: {
      sm: '414px',
      // => @media (min-width: 414pxpx) { ... }

      md: '960px',
      // => @media (min-width: 960px) { ... }

      lg: '1280px',
      // => @media (min-width: 1280px) { ... }

      xl: '1600px',
      // => @media (min-width: 1600px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1920px) { ... }

      '3xl': '1980px',
    },
  },
  plugins: [],
};
