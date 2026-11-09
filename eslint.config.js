import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended, // Standard ESLint bug-catching rules
  eslintConfigPrettier, // MUST be last: turns off ESLint formatting rules
];
