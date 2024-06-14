import Montserrat from "./public/Font/NotoSans_Condensed-Regular.ttf"
import Lora from "./public/Font/Lora-Regular.ttf"
import HMSans from "./public/Font/HMSans-Regular.ttf" 


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        '1': ['Montserrat'],
        '2': ['Lora'],
        '3': ['Hmsans'],
      },
      dropShadow: {
        '3xl': '0 -5px -5px rgba(0, 0, 0, 1)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
};