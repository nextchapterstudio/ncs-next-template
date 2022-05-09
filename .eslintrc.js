module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'],
  plugins: ['@typescript-eslint', 'sonarjs'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  // Unsure if this is required
  // parser: '@typescript-eslint/parser',
  // parserOptions: {
  // project: './tsconfig.json',
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  //   ecmaVersion: 12,
  //   sourceType: 'module',
  // },
  rules: {
    'sonarjs/no-duplicate-string': ['warn', 3],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
        },
      },
    ],
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: ['>', '}'],
      },
    ],
    'react/display-name': 'error', // These errors will fail the Netlify build
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
  },
}
