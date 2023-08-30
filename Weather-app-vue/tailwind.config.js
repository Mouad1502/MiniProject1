/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    extend: {
      typography:{
        Default:{
          css:{
            margin:'0',
            padding:'0',
            fontFamily:'Poppins, sans-serif',
            boxSizing: 'border-box',
          },
        },
      },
    },
    container:{
      padding:"2rem",
      center:true,
    },
  },
  plugins: [],
}

