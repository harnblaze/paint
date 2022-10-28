import styles from "rollup-plugin-styles";
import { babel } from "@rollup/plugin-babel";
import serve from "rollup-plugin-serve";
import html from "@rollup/plugin-html";

export default {
  input: "./index.js",
  output: {
    file: "build/bundle.js",
    format: "es",
  },
  watch: {
    exclude: ["node_modules/**", "build/**"],
  },
  plugins: [
    styles(),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/env"],
    }),
    serve({ open: true }),
    html(),
  ],
};
