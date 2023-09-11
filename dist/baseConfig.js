import opacity from "./theming/opacity";
import fontFamily from "./theming/fontFamily";
import colors from "./theming/colors";
export default {
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            colors,
            backdropBlur: {
                none: "0",
                sm: "4px",
                DEFAULT: "8px",
                lg: "12px",
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
            borderWidth: {
                DEFAULT: "1px",
                0: "0px",
                2: "2px",
                4: "4px",
                8: "8px",
            },
            boxShadow: {
                xs: "0px 0px 2px rgba(24, 24, 28, 0.06), 0px 1px 2px rgba(24, 24, 28, 0.12)",
                sm: "0px 2px 50px 3px rgba(24, 24, 28, 0.02), 0px 15px 24px -14px rgba(24, 24, 28, 0.12)",
                DEFAULT: "0px 8px 50px 5px rgba(24, 24, 28, 0.03), 0px 32px 40px -30px rgba(24, 24, 28, 0.12)",
                lg: "0px 8px 50px 8px rgba(24, 24, 28, 0.06), 0px 32px 40px -20px rgba(24, 24, 28, 0.12)",
            },
            fontFamily,
            fontSize: {
                xxs: ["11px", { lineHeight: "1rem" }],
                xs: ["13px", { lineHeight: "1.25rem" }],
                sm: ["14px", { lineHeight: "1.5rem" }],
                DEFAULT: ["16px", { lineHeight: "1.75rem" }],
                lg: ["18px", { lineHeight: "1.75rem" }],
                xl: ["24px", { lineHeight: "1.75rem" }],
            },
            opacity,
        },
    },
};
