import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import globals from "globals";

// Mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: pluginJs.configs.recommended,
});

export default [
	js.configs.recommended,
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	{
		rules: {
			"no-unused-vars": "warn",
			"no-undef": "warn",
		},
	},
	...compat.extends("xo"),
	{
		extends: [
			"plugin:@next/next/recommended",
			"next/core-web-vitals",
			"next",
			"prettier",
		],
	},
	pluginReactConfig,
];
