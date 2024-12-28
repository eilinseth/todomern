import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['dist', 'node_modules', 'coverage'] // Folder atau file yang diabaikan
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'], // File yang akan dilinting
    languageOptions: {
      ecmaVersion: 2020,
      parser: tsParser, // Menggunakan TypeScript parser
      globals: globals.browser // Menambahkan globals dari browser
    },
    plugins: {
      '@typescript-eslint': tseslint, // Plugin TypeScript ESLint
      'react-hooks': reactHooks, // Plugin React Hooks
      'react-refresh': reactRefresh // Plugin React Refresh
    },
    rules: {
      ...js.configs.recommended.rules, // Aturan bawaan ESLint
      ...tseslint.configs.recommended.rules, // Aturan rekomendasi TypeScript
      ...reactHooks.configs.recommended.rules, // Aturan rekomendasi React Hooks
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ], // Aturan React Refresh
      'no-console': ['warn', { allow: ['info', 'error'] }], // Aturan kustom untuk no-console
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ]
    }
  },
  {
    files: ['**/*.{js,jsx}'], // Untuk file JavaScript
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    rules: {
      ...js.configs.recommended.rules, // Aturan bawaan JavaScript
      'no-console': ['warn', { allow: ['info'] }] // Aturan no-console
    }
  }
];