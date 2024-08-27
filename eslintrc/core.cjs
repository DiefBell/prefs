// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

/**
 * Requires:
 *   - eslint
 *   - @typescript-eslint/eslint-plugin
 *   - @typescript-eslint/parser
 */
/** @type {import("eslint").Linter.Config} */
const config = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: path.join(__dirname, "tsconfig.json"),
	},
	plugins: ["@typescript-eslint"],
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:@typescript-eslint/stylistic-type-checked"
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

		// Warn if any vars are unused, but ignore it if the var is just "_".
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_$" }],

		// Have semi-colons
		"semi": ["off"],
		"@typescript-eslint/semi": ["warn"],

		// Double quotes
		"quotes": ["warn", "double"],
		"@typescript-eslint/no-explicit-any": "warn",

		// Alman brace styling
		"brace-style": "off",
		"@typescript-eslint/brace-style": ["error", "allman"],

		// Index with tabs instead of spaces
		"indent": "off",
		"@typescript-eslint/indent": ["error", "tab"],

		// I like to be able to use if occassionally for lazy debugging
		"no-console": "warn",

		"arrow-body-style": ["warn", "as-needed"]
	},
};

module.exports = config;
