import plugin from "tailwindcss/plugin";
import baseConfig from "./baseConfig";
import base from "../dist/style/base";
import utilities from "../dist/style/utilities";
import components from "../dist/style/components";
import themes from "./theming/themes";
import colorFunctions from "./theming/colorFunctions";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function main({ addBase, addComponents, config }: any) {
    console.log("☕ WorkAdventure UI");

    const baseWithFontFace = {
        ...base,
        "@font-face": {
            fontFamily: "Oswald",
            src: `url(${config("workadventureUi").oswaldFontUrl}) format('truetype')`,
            fontWeight: "normal",
            fontStyle: "normal",
        },
    };

    // Add base styles
    addBase(baseWithFontFace);

    // Add utilities
    addComponents(utilities, { variants: ["responsive"] });

    // Add components
    addComponents(components);

    const themeInjectorHsl = colorFunctions.injectThemes(addBase, config, themes);
    themeInjectorHsl;
}

export default plugin(main, baseConfig);
