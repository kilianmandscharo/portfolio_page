module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        "header": ["Oxanium, sans-serif"],
        "normal": ["Quicksand, sans-serif"]
      },
      keyframes: {
        flipOut: {
          "0%": {
            transform: "rotateY(0deg)",
            opacity: "1"
          },
          "100%": {
            transform: "rotateY(180deg)",
            opacity: "0"
          }
        },
        flipIn: {
          "0%": {
            transform: "rotateY(-180deg)",
            opacity: "0"
          },
          "100%": {
            transform: "rotateY(0deg)",
            opacity: "1"
          },
        },
        switchRight: {
          "0%": {
            left: "0",
          },
          "100%": {
            left: "40px",
          }
        },
        switchLeft: {
          "0%": {
            left: "40px",
          },
          "100%": {
            left: "0",
          }  
        }
      },
      animation: {
        flipOut: "flipOut 0.5s 1 forwards",
        flipIn: "flipIn 0.5s 1 forwards",
        switchRight: "switchRight 0.5s 1 forwards",
        switchLeft: "switchLeft 0.5s 1 forwards"
      }
    },
  },
  plugins: [],
}
