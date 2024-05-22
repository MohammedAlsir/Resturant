/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
      }, //end  container
    }, //end extend

    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
      dmsans: ["DM Sans", "sans-serif"],
    }, //end fontFamily

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
      },
    },

    keyframes: {
      move: {
        "50%": { transform: "translateY(15px)" },
      },
    },

    animation: {
      movingY: "move 2s ease-in-out infinite",
    },
  }, //end  theme
  plugins: [],
}; //end module
