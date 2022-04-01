module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4464be",
          light: "#46BEEB",
          fb: "#1877f2",
          twitter: "#1da1f2"
        },
        secondary: {
          DEFAULT: "#E9EDF0",
          light: "#fff",
          dark: "#707070",
        },
        success: "#8FC69A",
        warning: "#F9669C",
        bg: {
          DEFAULT: "#F5F3F4",
          light: "#bed2ef",
          footer: "#26272B",
          icon: "#33353D",
          red: "#FF5555",
        },
        text: {
          DEFAULT: "#3C3C3C",
          light: "#8E8E8E"
        }
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
  variants: {
    extend: {
      fill: ["hover"],
      stroke: ["hover"],
    }
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".text-vertical": {
          "writing-mode": "vertical-lr",
          "letter-spacing": "0.25rem"
        }

      })
    }
  ],
  experimental: {
    applyComplexClasses: true
  }
};
