module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        "header": ["Passion One, sans-serif"],
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
            left: "32px",
          }
        },
        switchLeft: {
          "0%": {
            left: "32px",
          },
          "100%": {
            left: "0",
          }  
        }, 
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          }  
        },
        disappear: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          }  
        }
      },
      animation: {
        flipOut: "flipOut 0.5s 1 forwards",
        flipIn: "flipIn 0.5s 1 forwards",
        switchRight: "switchRight 0.3s 1 forwards ease-out",
        switchLeft: "switchLeft 0.3s 1 forwards ease-out",
        appear: "appear 0.3 1 forwards",
        disappear: "disappear 0.3 1 forwards"
      }
    },
  },
  plugins: [],
}
