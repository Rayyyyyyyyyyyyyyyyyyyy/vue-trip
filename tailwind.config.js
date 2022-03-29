module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#18ea71",

        },
        secondary: {
          DEFAULT: "#9f9f9f",
        },

      fontFamily: {
        SFProDisplay: [
          "SFProDisplay",
          "-apple-system",
          "BlinkMacSystemFont",
          "Arial",
          "sans-serif"
        ]
      },

    }
  },

  plugins: [

  ],

};
