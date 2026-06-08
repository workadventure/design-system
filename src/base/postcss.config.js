import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

export default {
    plugins: [
        require("postcss-import"),
        require("tailwindcss/nesting"),
        require("tailwindcss")("./src/base/tailwind.config.ts"),
    ],
};
