import workadventureUi from "../src/index";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts}"],
    theme: {
        extend: {},
    },
    plugins: [workadventureUi],
};
