const js = require('@eslint/js');
const prettier = require('eslint-plugin-prettier');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  {
    files: ['src/**/*.js', 'src/**/*.cjs'], // Add this line
    plugins: {
      prettier: prettier,
    },
    rules: {
      'no-unused-vars': 'warn',
      'semi': ['error', 'always'],
      'prettier/prettier': 'error',
    },
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'script',
      globals: {
        ...globals.node,
      },
    },
  },
];
