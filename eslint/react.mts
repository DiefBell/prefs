import { defineConfig } from "eslint/config";
import type * as Eslint from "eslint"

import reactPlugin from "eslint-plugin-react";
import coreConfig, { languageOptions as coreLanguageOptions } from "./core.mts";

export const languageOptions: Eslint.Linter.Config["languageOptions"] = {
	...coreLanguageOptions,
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	}
};

export default defineConfig([
	coreConfig,
	reactPlugin.configs.flat.recommended as Eslint.Linter.Config,
	{
		files: ["**/*.{jsx,tsx}"],
		plugins: {
			"react": reactPlugin,
		},
		languageOptions,
		rules: {
			"react/react-in-jsx-scope": "off",
			"react/jsx-wrap-multilines": ["warn", { declaration: "parens-new-line" }],
			"react/function-component-definition": [
				"warn",
				{
					namedComponents: "arrow-function",
					unnamedComponents: "arrow-function"
				}
			],
			"@stylistic/jsx-indent": [
				"warn",
				"tab",
				{
					checkAttributes: true,
					indentLogicalExpressions: true
				}
			],
			"@stylistic/jsx-indent-props": ["warn", "tab"],
			"@stylistic/jsx-pascal-case": "warn",
		}
	}
])