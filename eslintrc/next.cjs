/**
 * Requires:
 *   - eslint
 *   - @typescript-eslint/eslint-plugin
 *   - @typescript-eslint/parser
 *   - eslint-plugin-react
 *   - eslint-plugin-react-hooks
 *   - eslint-config-next
 */
/** @type {import("eslint").Linter.Config} */
const config = {
	extends: [
		"./react.js",
		"next/core-web-vitals",
	],
	rules: {

	},
};

module.exports = config;
