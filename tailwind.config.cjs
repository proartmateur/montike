/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  
  theme: {
    extend: {
      colors:{
        "m-blue-0": "#0D0772",
        "m-blue-1": "#0034C3",
        "m-blue-2": "#0060FF",
        "m-blue-3": "#53ABFF",
        "m-blue-4": "#AFE3FF",
    
        "m-aqua-0": "#289E9B",
        "m-aqua-1": "#3BC4C4",
        "m-aqua-2": "#B0FDFF",
        
        "m-gold-0": "#FFB940",
        "m-gold-1": "#FFD359",
        "m-gold-2": "#FFEA7D",
        "m-gold-3": "#FFFAE2",
        
        "m-neutro-0": "#2B2B2B",
        "m-neutro-1": "#4C4A4A",
        "m-neutro-2": "#8C8787",
    
      },
      fontFamily: {
        sans: [
          "Merriweather Sans Variable",
          "Merriweather Sans",
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          "Merriweather Variable",
          "Merriweather",
          ...defaultTheme.fontFamily.serif,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
