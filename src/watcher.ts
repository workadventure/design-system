import { execSync } from "node:child_process";
import fs from "node:fs";

console.log("WorkAdventure UI watcher started.");

function rebuildCssEntry() {
    execSync("npm run compile:style");
    execSync("npm run copy:theme");
}

fs.watch("./src/base", (eventType, filename) => {
    console.log(`Base file ${filename} changed.`);
    execSync("npm run build:base");
    rebuildCssEntry();
    console.log("Watching for changes...");
});

fs.watch("./src/utilities", (eventType, filename) => {
    console.log(`Utility file ${filename} changed.`);
    execSync("npm run build:utilities");
    rebuildCssEntry();
    console.log("Watching for changes...");
});

fs.watch("./src/components", (eventType, filename) => {
    console.log(`Component file ${filename} changed.`);
    execSync("npm run build:components");
    rebuildCssEntry();
    console.log("Watching for changes...");
});

fs.watch("./src/theme.css", (eventType, filename) => {
    console.log(`Theme file ${filename} changed.`);
    rebuildCssEntry();
    console.log("Watching for changes...");
});

fs.watch("./src/index.css", (eventType, filename) => {
    console.log(`Style entry file ${filename} changed.`);
    rebuildCssEntry();
    console.log("Watching for changes...");
});

console.log("Watching for changes...");
