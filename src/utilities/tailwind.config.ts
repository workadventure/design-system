import colors from "../theming/colors";
import fontFamily from "../theming/fontFamily";
import opacity from "../theming/opacity";

export default {
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
};
