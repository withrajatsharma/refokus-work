/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
      
    extend: {
      screens:{
        sm:"478px",
        md:"770px",
        lg:"1000px",
        xl:"1340px",
      },
      colors:{
        dark_grey:"#161618"
      },
    },
  },
  plugins: [],
}

