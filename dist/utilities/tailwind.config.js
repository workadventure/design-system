import plugin from "tailwindcss/plugin";
import responsiveRegex from "../lib/responsiveRegex";
import colors from "../theming/colors";
import fontFamily from "../theming/fontFamily";
import base from "../../dist/style/base";
import opacity from "../theming/opacity";
export default {
    content: [{ raw: "" }],
    safelist: responsiveRegex,
    theme: {
        extend: {
            opacity,
            fontSize: {
                xxs: ["11px", { lineHeight: "1rem" }],
            },
        },
        colors,
        fontFamily,
    },
    plugins: [
        plugin(function ({ addBase }) {
            addBase(base);
        }),
    ],
};
