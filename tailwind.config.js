// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      xxl: { max: '1440px'},
      xl: { max: '1280px' },    
      lg: { max: '1024px' },
      md: { max: '960px' },
      sm: { max: '720px' },
      xs: { max: '440px' },
    },

    extend: {},
  },
  plugins: [],
}