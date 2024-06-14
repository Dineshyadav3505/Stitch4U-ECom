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
    },
  },
  plugins: [],
};