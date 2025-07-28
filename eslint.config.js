import globals from 'globals'
import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactDom from 'eslint-plugin-react-dom'
import ts from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier/recommended'

export default [
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,
  reactDom.configs.recommended,
  ...ts.configs.recommended,
  prettier,
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
      'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
      'no-multi-str': 'warn',
      'prefer-template': 'warn',
      'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
      'arrow-body-style': ['warn', 'as-needed'],
      'implicit-arrow-linebreak': ['warn', 'beside'],
      'prefer-arrow-callback': ['warn'],
      'padded-blocks': ['warn', { blocks: 'never', classes: 'never', switches: 'never' }],
    },
  },
]
