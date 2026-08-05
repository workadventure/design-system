import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [tailwindcss()],
    base: "./",
    build: {
        rollupOptions: {
            input: {
                index: "./index.html",
                botList: "./bot-list.html",
                botEdit: "./bot-edit.html",
                botLogs: "./bot-logs.html",
                prebuildComponents: "./prebuild-components.html",
            },
        },
    },
    server: {
        open: true,
    },
});
