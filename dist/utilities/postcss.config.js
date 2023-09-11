"use strict";
module.exports = {
    plugins: [
        require("postcss-import"),
        require("tailwindcss/nesting"),
        require("@csstools/postcss-sass"),
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require("tailwindcss")("./src/utilities/tailwind.config.ts"),
    ],
};
