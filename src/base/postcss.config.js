import postcssSass from "@csstools/postcss-sass";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const sassPlugin = postcssSass({
    importer(url, _prev, done) {
        if (!url.startsWith("pkg:")) {
            done(null);
            return;
        }

        try {
            done({ file: require.resolve(url.slice(4)) });
        } catch (error) {
            done(error);
        }
    },
});

export default {
    plugins: [require("postcss-import"), require("tailwindcss/nesting"), sassPlugin],
};
