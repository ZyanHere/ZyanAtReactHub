/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandDark: "#0b0b0d",
        brandBlue: "#125795"
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "2.5rem",
          xl: "3rem",
          "2xl": "4rem",
          "3xl": "5rem",
          "4xl": "6rem",
          "5xl": "7rem",
          "6xl": "8rem",
          "7xl": "9rem",
          "8xl": "10rem",
          "9xl": "11rem",
          "10xl": "12rem",
          "11xl": "13rem",
          "12xl": "14rem",
          "13xl": "15rem",
          "14xl": "16rem",
          "15xl": "17rem",
          "16xl": "18rem",
          "17xl": "19rem",
        },
        fontFamily: {
          merriweather: ["Merriweather", "serif"],
          montserrat: ["Monserrat", "sans-serif"], 
        }
      }
    },
  },
  plugins: [],
}

