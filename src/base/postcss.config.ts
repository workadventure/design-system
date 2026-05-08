import postcssSass from "@csstools/postcss-sass";

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

module.exports = {
    plugins: [require("postcss-import"), require("tailwindcss/nesting"), sassPlugin],
};
