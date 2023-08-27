import nesting from "tailwindcss/nesting/index.js";
import tailwind from "tailwindcss";
import tailwindConfig from "./tailwind.config.js";
import autoprefixer from "autoprefixer";

import postcssImport from "postcss-import";

export default {
  plugins: [
    postcssImport,
    nesting,
    tailwind(tailwindConfig),
    autoprefixer,
  ],
};
