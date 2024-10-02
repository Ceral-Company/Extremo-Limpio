import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      'dark-gray' : '#303030',
      'light-gray' : '#787878',
      'black' : '#151515',
      'brown' : '#9D6C41',
      'gold' : '#C28855',
      'beige' : '#F4D4B4',
      'light-beige' : '#F5ECE2',
      'orange' : '#E2982F',
      'dark-blue' : '#3C4959',
      'light-blue' : '#2c5163',
        'blue-link' : '#03a9f4',
        'purple-footer' : '#8d8ba7'
      }
    },
  },
  plugins: [],
};
export default config;
