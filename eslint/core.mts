import { defineConfig } from "eslint/config";
import type * as Eslint from "eslint"

import eslint from "@eslint/js";
import tseslint from "typescript-eslint"
import stylisticPlugin from "@stylistic/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

/**
 * Default TypeScript language options.
 * Import this into "main" Eslint config file.
 */
export const languageOptions: Eslint.Linter.Config["languageOptions"] = {
	parser: typescriptParser,
	parserOptions: {
		project: "./tsconfig.json",
		tsconfigRootDir: process.cwd(),
	},
};

export default defineConfig([
	eslint.configs.recommended,
	tseslint.configs.recommendedTypeChecked as Eslint.Linter.Config,
	tseslint.configs.strict as Eslint.Linter.Config,
	tseslint.configs.stylistic as Eslint.Linter.Config,
	stylisticPlugin.configs.recommended,
	{
		files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
		languageOptions,
		plugins: {
			"@typescript-eslint": tseslint.plugin as Eslint.ESLint.Plugin,
			"@stylistic": stylisticPlugin
		},
		rules: {
			// Helps with tree shaking, I think
			"@typescript-eslint/consistent-type-imports": [
				"warn",
				{
					prefer: "type-imports",
					fixStyle: "inline-type-imports",
				},
			],

			// General good practice
			"@typescript-eslint/ban-ts-comment": [
				"error",
				{ "ts-ignore": "allow-with-description" },
			],
			"@typescript-eslint/no-explicit-any": "warn",

			// Warn if any vars are unused, but ignore it if the var is just "_".
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_$" }],

			// Have semi-colons
			"semi": ["off"],
			"@stylistic/semi": ["warn", "always"],

			// Double quotes
			"quotes": "off",
			"@stylistic/quotes": ["warn", "double"],

			// Alman brace styling
			"brace-style": "off",
			"@stylistic/brace-style": ["warn", "allman"],

			// Index with tabs instead of spaces
			"indent": "off",
			"@stylistic/no-tabs": "off",
			"@stylistic/indent": ["warn", "tab"],
			"@stylistic/indent-binary-ops": ["warn", "tab"],

			// I like to be able to use if occassionally for lazy debugging
			"no-console": "warn",

			"arrow-body-style": "off",
			"@stylistic/arrow-parens": ["warn", "always"],
			"@stylistic/member-delimiter-style": ["warn", {
				"multiline": {
					"delimiter": "comma",
					"requireLast": true
				},
				"singleline": {
					"delimiter": "comma",
					"requireLast": true
				},
				"overrides": {
					"interface": {
						"multiline": {
							"delimiter": "semi",
							"requireLast": true
						}
					}
				}
			}],
			"@stylistic/keyword-spacing": ["warn", {
				"overrides": {
					"if": { "after": false }
				}
			}],

			// Max line length
			"max-len": "off",
			"@stylistic/max-len": ["warn", { code: 120, ignoreStrings: true }],

			// misc
			"@stylistic/multiline-ternary": "off",
			"@typescript-eslint/require-await": "off",

			// God these are horrendously strict na 🤢
			"@typescript-eslint/no-unsafe-assignment": "off",
			"@typescript-eslint/no-unsafe-call": "off",
			"@typescript-eslint/no-unsafe-member-access": "off"
		}
	},
]);
