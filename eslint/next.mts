// eslint/next.mts
import reactConfig from "./react.mjs";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  ...reactConfig,
  nextPlugin.configs["recommended"],
  nextPlugin.configs["core-web-vitals"],
];
