import Montserrat from "./public/Font/NotoSans_Condensed_Regular.ttf";
import Lora from "./public/Font/Lora_Regular.ttf";
import HMSans from "./public/Font/HMSans_Regular.ttf";
import HMSansLatin from "./public/Font/HMSansLatin_SemiBold.ttf";


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
        "4": ['HMSansLatin'],
      },
    },
  },
  plugins: [],
};