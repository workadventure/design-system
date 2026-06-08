
# @workadventure/design-system

[WorkAdventure](https://workadventu.re)'s Tailwind themes.


## Requirements
- Node 20.19+ or 22.12+
- Tailwind CSS 4

## Installation

Add the dependency:

```bash
npm install @workadventure/design-system
```

Import Tailwind and the design system from your application CSS:

```css
@import "tailwindcss";
@import "@workadventure/design-system/theme.css";
@import "@workadventure/design-system/style.css";
```

Tailwind 4 detects source files automatically. If your project needs explicit paths, add them in CSS:

```css
@source "./index.html";
@source "./src/**/*.{js,ts,jsx,tsx}";
```

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
