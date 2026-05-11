import { defineConfig } from "vite";

const externalDependencies = /^(colord|tailwindcss)(\/.*)?$/;

export default defineConfig({
    build: {
        emptyOutDir: false,
        lib: {
            entry: "src/index.ts",
            formats: ["es", "cjs"],
            fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
        },
        rollupOptions: {
            external: (id) => externalDependencies.test(id),
        },
        target: "es2022",
    },
});
