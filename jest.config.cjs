module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.spec.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/index.ts',
    '!src/i18n/locales/**',
    '!src/**/interfaces.ts',
    '!src/**/*.d.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|jpeg|gif|mp4|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  transformIgnorePatterns: ['/node_modules/(?!(react-vertical-timeline-component)/)'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coverageReporters: ['lcov', 'text-summary'],
  moduleNameMapper: {
    '^framer-motion$': '<rootDir>/test-mocks/framer-motion.tsx',
    '^react-vertical-timeline-component/style\\.min\\.css$': 'jest-transform-stub',
  },
}
