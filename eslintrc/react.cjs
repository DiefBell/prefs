/**
 * Requires:
 *   - eslint
 *   - @typescript-eslint/eslint-plugin
 *   - @typescript-eslint/parser
 *   - eslint-plugin-react
 *   - eslint-plugin-react-hooks
 */
/** @type {import("eslint").Linter.Config} */
const config = {
	extends: [
		"./core.js",
		"plugin:react/recommended",
	],
	rules: {
		"react/function-component-definition": ["warn", { namedComponents: "arrow-function", unnamedComponents: "arrow-function" }],
		"react/jsx-indent": [
			"error",
			"tab",
			{
				checkAttributes: true,
				indentLogicalExpressions: true
			}
		],
	},
};

module.exports = config;
