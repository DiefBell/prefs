
/**
 * Requires:
 *   - eslint
 *   - @typescript-eslint/parser
 *   - @stylistic/eslint-plugin
 */
/** @type {import("eslint").Linter.Config} */
const config = {
	plugins: [],
	extends: [
		"./core.cjs",
	],
	rules: {
		// "@stylistic/function-component-definition": ["warn", { namedComponents: "arrow-function", unnamedComponents: "arrow-function" }],
		// "@stylistic/jsx-indent": [
		// 	"error",
		// 	"tab",
		// 	{
		// 		checkAttributes: true,
		// 		indentLogicalExpressions: true
		// 	}
		// ],
		"@stylistic/jsx-indent-props": ["error", "tab"]
	},
};

module.exports = config;
