import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

export default {
    plugins: [
        require("postcss-import"),
        require("tailwindcss/nesting"),
        require("postcss-inline-svg"),
        require("tailwindcss")("./src/components/tailwind.config.ts"),
    ],
};
