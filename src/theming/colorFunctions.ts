import colorNames from "./colorNames";
import themeDefaults from "./themeDefaults";

import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import namesPlugin from "colord/plugins/names";
import lchPlugin from "colord/plugins/lch";
import hwbPlugin from "colord/plugins/hwb";
import labPlugin from "colord/plugins/lab";
import xyzPlugin from "colord/plugins/xyz";

extend([mixPlugin, namesPlugin, lchPlugin, hwbPlugin, labPlugin, xyzPlugin]);

export default {
    turnColorValuesToString: function (input) {
        const [h, s, l] = input.match(/\d+(\.\d+)?%|\d+(\.\d+)?/g).map(parseFloat);
        return `${h} ${s}% ${l}%`;
    },

    convertColorFormat: function (input: object | null) {
        if (typeof input !== "object" || input === null) {
            return input;
        }

        const resultObj = {};

        Object.entries(input).forEach(([rule, value]) => {
            if (colorNames[rule]) {
                const hslArray = colord(value).toHsl();
                resultObj[colorNames[rule]] = `${hslArray.h} ${hslArray.s}% ${hslArray.l}%`;
            } else {
                resultObj[rule] = value;
            }

            // add css variables if not exist
            Object.entries(themeDefaults.variables).forEach((item) => {
                const [variable, value] = item;
                if (!Object.hasOwn(input, variable)) {
                    resultObj[variable] = value;
                }
            });

            // add other custom styles
            if (!colorNames[rule]) {
                resultObj[rule] = value;
            }
        });

        return resultObj;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    injectThemes: function (addBase: any, config: any, themes: any) {
        const includedThemesObj = {};
        Object.entries(themes).forEach(([theme, value]) => {
            includedThemesObj[theme] = this.convertColorFormat(value as object);
        });

        // add custom themes
        if (Array.isArray(config("wa.themes"))) {
            config("wa.themes").forEach((item) => {
                if (typeof item === "object" && item !== null) {
                    Object.entries(item).forEach(([customThemeName, customThemevalue]) => {
                        includedThemesObj["[data-theme=" + customThemeName + "]"] = this.convertColorFormat(
                            customThemevalue as object,
                        );
                    });
                }
            });
        }

        let themeOrder: string[] = [];

        if (Array.isArray(config("wa.themes"))) {
            config("wa.themes").forEach((theme) => {
                if (typeof theme === "object" && theme !== null) {
                    Object.keys(theme).forEach((customThemeName) => {
                        themeOrder.push(customThemeName);
                    });
                } else if (Object.hasOwn(includedThemesObj, "[data-theme=" + theme + "]")) {
                    themeOrder.push(theme);
                }
            });
        } else {
            themeOrder = themeDefaults.themeOrder;
        }

        // inject themes in order
        const themesToInject = {};
        themeOrder.forEach((themeName, index) => {
            if (index === 0) {
                // first theme as root
                themesToInject[":root"] = includedThemesObj["[data-theme=" + themeName + "]"];
            } else if (index === 1) {
                // auto dark
                if (config("wa.darkTheme")) {
                    if (themeOrder[0] !== config("wa.darkTheme") && themeOrder.includes(config("wa.darkTheme"))) {
                        themesToInject["@media (prefers-color-scheme: dark)"] = {
                            [":root"]: includedThemesObj[`[data-theme=${config("wa.darkTheme")}]`],
                        };
                    }
                } else if (config("wa.darkTheme") === false) {
                    // disables prefers-color-scheme: dark
                } else {
                    if (themeOrder[0] !== "dark" && themeOrder.includes("dark")) {
                        themesToInject["@media (prefers-color-scheme: dark)"] = {
                            [":root"]: includedThemesObj["[data-theme=dark]"],
                        };
                    }
                }
                // theme 0 with name
                themesToInject["[data-theme=" + themeOrder[0] + "]"] =
                    includedThemesObj["[data-theme=" + themeOrder[0] + "]"];
                // theme 1 with name
                themesToInject["[data-theme=" + themeOrder[1] + "]"] =
                    includedThemesObj["[data-theme=" + themeOrder[1] + "]"];
            } else {
                themesToInject["[data-theme=" + themeName + "]"] = includedThemesObj["[data-theme=" + themeName + "]"];
            }
        });

        addBase(themesToInject);

        return {
            includedThemesObj,
            themeOrder,
        };
    },
};
