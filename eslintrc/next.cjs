/**
 * Requires:
 *   - eslint
 *   - @typescript-eslint/parser
 *   - @stylistic/eslint-plugin
 *   - eslint-config-next
 */
/** @type {import("eslint").Linter.Config} */
const config = {
	extends: [
		"./react.cjs",
		"next/core-web-vitals",
	],
	rules: {

	},
};

module.exports = config;
