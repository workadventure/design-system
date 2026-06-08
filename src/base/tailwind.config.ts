import type { Config } from "tailwindcss";
import baseConfig from "../baseConfig";

export default {
    content: [{ raw: "" }],
    ...baseConfig,
} satisfies Config;
