import workadventureUi from "../src/index.ts";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [workadventureUi],
  workadventureUi: {
    oswaldFontUrl: "./Oswald-VariableFont_wght.ttf",
  },
}

