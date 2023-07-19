module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/**/*.(tsx|ts)', '!<rootDir>/**/*.test.(tsx|ts)'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  transform: {
    // '^.+\\.ts?$': 'ts-jest',
    // '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coverageReporters: ['lcov', 'text-summary'],
}
