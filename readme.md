# Dief's Prefs

### Node/TypeScript/React
Install with `npm/yarn/bun add --dev github:DiefBell/prefs`.
All dependencies should be installed automatically, but incase they arent:
```json
{
	"devDependencies": {
		"@stylistic/eslint-plugin": "2.7.1",
		"@types/eslint": "8.56.0",
		"@typescript-eslint/eslint-plugin": "8.3.0",
		"@typescript-eslint/parser": "8.3.0",
		"eslint": "8.56.0",
		"eslint-config-next": "14.2.7",
	}
}
```

Extend this in your `.eslintrc.cjs` with:
```json
{
	"extends": [
		"./node_modules/@dief/prefs/eslintrc/core.cjs"
	]
}
```
There's also `react.cjs` and `next.cjs` if desired.
