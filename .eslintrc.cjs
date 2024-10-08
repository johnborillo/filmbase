module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'semi': ['warn', 'never'],
    'indent': ['warn', 'tab', { 'SwitchCase': 1 }],
    'quotes': ['warn', 'single'],
    'no-else-return': ['error', { 'allowElseIf': false }],
    'no-shadow': ['error'],
    'react-hooks/exhaustive-deps': 'off',
    'space-before-function-paren': ['warn'],
  },
}
