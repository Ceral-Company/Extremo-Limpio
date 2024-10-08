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
        'azul-oscuro': '#123456',
        'azul-claro': '#abcdef',
        'azul-fuerte': '#17A7B6',
        'azul-clarito': '#27AAE1',
        'azul-iconos': '#1681E5',
        'rojo-extremo': '#ff0000',
        'gris-footer': '#f2f2f2'
      }
    },
  },
  plugins: [],
};
export default config;
