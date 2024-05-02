
# @workadventure/design-system

[WorkAdventure](https://workadventu.re)'s Tailwind themes.


## Requirements
- Node < v18
- TailwindCSS < v3.3
## Installation

Add the dependency:

```bash
  npm install @workadventure/design-system
```ncnp
Add the plugin to the Tailwind configuration:
```js
// tailwind.config.js

import workadventureUi from "@workadventure/design-system";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts}"],
    theme: {
        extend: {},
    },
    plugins: [workadventureUi],
    workadventureUi: {
        oswaldFontUrl: './path/to/font.ttf',
    },
};
```
> [!IMPORTANT]
> Replace './path/to/font.ttf' by the path to your font file in ttf format

## Contribute

How to run the example:

```bash
    npm install
    cd example
    npm install
    cd ..
    npm run dev
```

After that, you can open the example in your browser.

To build the package:

```bash
    npm run build
```

## Example sheet

![Design System](https://github.com/workadventure/design-system/blob/main/DesignSystem.jpg?raw=true)

