import { defineConfig } from "vite";

const externalDependencies = /^(colord|tailwindcss)(\/.*)?$/;

export default defineConfig({
    build: {
        emptyOutDir: false,
        lib: {
            entry: "src/index.ts",
            formats: ["es"],
            fileName: () => "index.js",
        },
        rollupOptions: {
            external: (id) => externalDependencies.test(id),
        },
        target: "es2022",
    },
});
