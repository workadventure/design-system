import { Config } from "tailwindcss";

export default [
    {
        pattern: /.*/,
    },
    {
        pattern: /.(sm|md|lg|xl)/,
        variants: ["sm", "md", "lg", "xl"],
    },
    {
        pattern:
            /(bg|to|via|from|text|fill|stroke|border|outline|text)-(primary|secondary|neutral|contrast|info|success|warning|danger|base)(-\d{2,4}|)(\/\d{2,3}|)/,
        variants: ["hover", "focus"],
    },
] satisfies Config["safelist"];
