"use strict";
/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require("child_process");
const fs = require("fs");
console.log("WorkAdventure UI watcher started.");
fs.watch("./src/base", (eventType, filename) => {
    console.log(`Base file ${filename} changed.`);
    execSync("npm run build:base");
    console.log("Watching for changes...");
});
fs.watch("./src/utilities", (eventType, filename) => {
    console.log(`Utility file ${filename} changed.`);
    execSync("npm run build:utilities");
    console.log("Watching for changes...");
});
fs.watch("./src/components", (eventType, filename) => {
    console.log(`Component file ${filename} changed.`);
    execSync("npm run build:components");
    console.log("Watching for changes...");
});
console.log("Watching for changes...");
