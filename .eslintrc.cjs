// eslint-disable-next-line @typescript-eslint/no-var-requires
const confPrettier = require('./.prettierrc')

module.exports = {
  env: {
    browser: true,
    es2022: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'jest'],
  overrides: [
    {
      files: [
        '**/*.cjs',
        '.eslintrc.{js,cjs}',
        '*.ts',
        '*.tsx',
        '*.js',
        '*.jsx',
        '**/*.spec.js',
        '**/*.spec.jsx',
      ],
      env: {
        node: true,
        jest: true,
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/react-in-jsx-scope': ['off'],
    'prettier/prettier': ['error', confPrettier],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
