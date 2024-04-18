import workadventureUi from "../src/index";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./*.html", "./src/**/*.{js,ts}"],
    theme: {
        extend: {},
    },
    plugins: [workadventureUi],
};
