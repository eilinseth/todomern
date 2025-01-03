/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans : ['Poppins','sans-serif']
      },colors : {
        navy : '#000030',
        brightGray : "#D3D3D3"
      }
    },
  },
  plugins: [],
}

