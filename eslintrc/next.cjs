/**
 * Requires:
 *   - eslint
 *   - @typescript-eslint/parser
 *   - @stylistic/eslint-plugin
 *   - eslint-config-next
 */
/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: [
		"./react.cjs",
		"next/core-web-vitals",
	],
	rules: {
		
	},
};
