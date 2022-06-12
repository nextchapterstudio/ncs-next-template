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
    'plugin:jsx-a11y/recommended',
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

    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
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

    'jsx-a11y/anchor-is-valid': 'off', // This rule is not compatible with Next.js's <Link /> components
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
  },
}
