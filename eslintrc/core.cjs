// const path = require("path");
// const stylistic = require("@stylistic/eslint-plugin");

/**
 * Requires:
 *   - eslint
 *   - @typescript-eslint/parser
 *   - @stylistic/eslint-plugin
 */
/** @type {import("eslint").Linter.Config} */
const config = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		// project: path.join(process.cwd, "tsconfig.json"),
	},
	plugins: [
		"@stylistic",
		"@typescript-eslint"
	],
	extends: [
		"plugin:@stylistic/recommended-extends"
	],
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
		"@stylistic/semi": ["error", "always"],

		// Double quotes
		"quotes": "off",
		"@stylistic/quotes": ["error", "double"],

		// Alman brace styling
		"brace-style": "off",
		"@stylistic/brace-style": ["error", "allman"],

		// Index with tabs instead of spaces
		"indent": "off",
		"@stylistic/no-tabs": "off",
		"@stylistic/indent": ["error", "tab"],

		// I like to be able to use if occassionally for lazy debugging
		"no-console": "warn",

		"arrow-body-style": ["warn", "as-needed"]
	},
};

module.exports = config;
