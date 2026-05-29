import tailwindcss from "@tailwindcss/postcss";
import postcss from "postcss";
import type { Root } from "postcss";
import postcssImport from "postcss-import";
import * as sass from "sass";

const sassPlugin = {
    postcssPlugin: "sass",
    Once(root: Root) {
        const file = root.source?.input.file;

        if (!file) {
            return;
        }

        const result = sass.compile(file, {
            importers: [new sass.NodePackageImporter()],
            sourceMap: false,
        });

        root.removeAll();
        root.append(postcss.parse(result.css, { from: file }).nodes);
    },
};

const tailwindConfig = {
    postcssPlugin: "tailwind-config",
    Once(root: Root) {
        root.prepend({ name: "config", params: JSON.stringify(new URL("../baseConfig.ts", import.meta.url).pathname) });
        root.prepend({ name: "reference", params: '"tailwindcss"' });
    },
};

export default {
    plugins: [sassPlugin, postcssImport(), tailwindConfig, tailwindcss()],
};
