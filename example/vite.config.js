import { defineConfig } from "vite";

export default defineConfig({
    base: "./",
    build: {
        rollupOptions: {
            input: {
                index: "./index.html",
                botList: "./bot-list.html",
                botEdit: "./bot-edit.html",
                botLogs: "./bot-logs.html",
            },
        },
    },
    server: {
        open: true,
    },
});
