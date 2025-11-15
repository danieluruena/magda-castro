module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
  ],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'array-bracket-newline': ['error', { multiline: true, minItems: 3 }],
    'object-curly-newline': ['error', { multiline: true, minProperties: 3 }],
    'object-curly-spacing': ['error', 'always'],
  },
}