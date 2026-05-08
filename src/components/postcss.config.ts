module.exports = {
    plugins: [
        require("postcss-import"),
        require("tailwindcss/nesting"),
        sassPlugin,
        require("postcss-inline-svg"),
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require("tailwindcss")("./src/components/tailwind.config.ts"),
    ],
};
