import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'

export default [
	{ files: ['**/*.{js,mjs,cjs,jsx}'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			'semi': ['warn', 'never'],
			'indent': ['warn', 'tab', { 'SwitchCase': 1 }],
			'quotes': ['warn', 'single'],
			'no-else-return': ['error', { 'allowElseIf': false }],
			'no-shadow': ['error'],
			'react-hooks/exhaustive-deps': [0],
			'space-before-function-paren': [1],
			'no-unused-vars': [0]
		}
	}
]