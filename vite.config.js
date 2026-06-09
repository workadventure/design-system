import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [tailwindcss()],
    base: "./",
    build: {
        copyPublicDir: false,
        emptyOutDir: false,
        minify: false,
        rollupOptions: {
            input: {
                style: "src/index.css",
            },
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name?.endsWith(".css")) {
                        return "[name][extname]";
                    }

                    return "assets/[name]-[hash][extname]";
                },
            },
        },
    },
});
