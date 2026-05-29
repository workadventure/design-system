import colors from "../theming/colors";
import fontFamily from "../theming/fontFamily";
import opacity from "../theming/opacity";

export default {
    theme: {
        extend: {
            height: {
                "13": "3.25rem",
            },
            borderRadius: {
                none: "0",
                sm: "4px",
                DEFAULT: "8px",
                md: "12px",
                lg: "16px",
                xl: "32px",
                full: "9999px",
            },
            opacity,
            fontSize: {
                xxs: ["11px", { lineHeight: "1rem" }],
            },
        },
        colors,
        fontFamily,
    },
};
