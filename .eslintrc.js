module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: { react: { version: 'detect' } },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'array-bracket-newline': ['error', { multiline: true, minItems: 3 }],
    'object-curly-newline': ['error', { multiline: true, minProperties: 3 }],
    'object-curly-spacing': ['error', 'always'],
  },
}