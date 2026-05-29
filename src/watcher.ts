import { execSync } from "child_process";
import fs from "fs";

console.log("WorkAdventure UI watcher started.");

fs.watch("./src/base", (filename: string) => {
    console.log(`Base file ${filename} changed.`);
    execSync("npm run build:base");
    console.log("Watching for changes...");
});

fs.watch("./src/utilities", (filename: string) => {
    console.log(`Utility file ${filename} changed.`);
    execSync("npm run build:utilities");
    console.log("Watching for changes...");
});

fs.watch("./src/components", (filename: string) => {
    console.log(`Component file ${filename} changed.`);
    execSync("npm run build:components");
    console.log("Watching for changes...");
});

console.log("Watching for changes...");
