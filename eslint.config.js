import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import jestPlugin from 'eslint-plugin-jest'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

const prettierConfig = {
  singleQuote: true,
  arrowParens: 'avoid',
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  proseWrap: 'always',
  bracketSpacing: true,
  trailingComma: 'es5',
  semi: false,
  jsxSingleQuote: true,
}

// Browser globals
const browserGlobals = {
  window: 'readonly',
  document: 'readonly',
  navigator: 'readonly',
  console: 'readonly',
  alert: 'readonly',
  setTimeout: 'readonly',
  setInterval: 'readonly',
  clearTimeout: 'readonly',
  clearInterval: 'readonly',
  fetch: 'readonly',
  URL: 'readonly',
  URLSearchParams: 'readonly',
  FormData: 'readonly',
  Blob: 'readonly',
  File: 'readonly',
  FileReader: 'readonly',
  XMLHttpRequest: 'readonly',
  Headers: 'readonly',
  Request: 'readonly',
  Response: 'readonly',
  localStorage: 'readonly',
  sessionStorage: 'readonly',
  indexedDB: 'readonly',
  crypto: 'readonly',
  performance: 'readonly',
  requestAnimationFrame: 'readonly',
  cancelAnimationFrame: 'readonly',
  IntersectionObserver: 'readonly',
  MutationObserver: 'readonly',
  ResizeObserver: 'readonly',
  HTMLElement: 'readonly',
  HTMLInputElement: 'readonly',
  HTMLFormElement: 'readonly',
  HTMLTextAreaElement: 'readonly',
  HTMLButtonElement: 'readonly',
  HTMLDivElement: 'readonly',
  HTMLSpanElement: 'readonly',
  HTMLImageElement: 'readonly',
  HTMLCanvasElement: 'readonly',
  HTMLVideoElement: 'readonly',
  HTMLAudioElement: 'readonly',
  SVGSVGElement: 'readonly',
  Event: 'readonly',
  MouseEvent: 'readonly',
  KeyboardEvent: 'readonly',
  TouchEvent: 'readonly',
  CustomEvent: 'readonly',
  EventTarget: 'readonly',
  Element: 'readonly',
  Node: 'readonly',
  NodeList: 'readonly',
  DOMParser: 'readonly',
  Float32Array: 'readonly',
  Uint8Array: 'readonly',
  ArrayBuffer: 'readonly',
  DataView: 'readonly',
  WebSocket: 'readonly',
  WebGL2RenderingContext: 'readonly',
  WebGLRenderingContext: 'readonly',
  CanvasRenderingContext2D: 'readonly',
}

// Jest globals
const jestGlobals = {
  describe: 'readonly',
  it: 'readonly',
  test: 'readonly',
  expect: 'readonly',
  jest: 'readonly',
  beforeAll: 'readonly',
  afterAll: 'readonly',
  beforeEach: 'readonly',
  afterEach: 'readonly',
}

export default [
  // Ignore patterns
  {
    ignores: ['node_modules/**', 'dist/**', 'coverage/**', '**/*.cjs', 'jest.setup.js'],
  },

  // Prettier config to disable conflicting rules
  eslintConfigPrettier,

  // Main configuration for TypeScript/JavaScript files
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...browserGlobals,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // ESLint base rules
      'no-unused-vars': 'off', // handled by TypeScript

      // TypeScript rules
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error',

      // React rules
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': 'off',
      'react/prop-types': 'off',

      // React hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      // React refresh
      'react-refresh/only-export-components': [
        'error',
        { allowConstantExport: true, extraHOCs: ['SectionWrapper'] },
      ],

      // Prettier
      'prettier/prettier': ['error', prettierConfig],
    },
  },

  // Jest test files
  {
    files: ['**/*.spec.{ts,tsx}', '**/*.test.{ts,tsx}'],
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
      globals: {
        ...browserGlobals,
        ...jestGlobals,
      },
    },
    rules: {
      // Allow any in test files for mocking flexibility
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]
