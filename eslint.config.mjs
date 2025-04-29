import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  pluginJs.configs.recommended, // Directly include recommended config
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    rules: {
      'no-async-promise-executor': 'off',
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs', // Ensure CommonJS for .js files
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'no-async-promise-executor': 'off',
    },
  },
];