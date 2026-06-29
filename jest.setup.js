require('@testing-library/jest-dom')

// Mock IntersectionObserver for jsdom (framer-motion requires it)
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback
  }
  observe() {
    return null
  }
  unobserve() {
    return null
  }
  disconnect() {
    return null
  }
}

global.IntersectionObserver = MockIntersectionObserver

// Treat any console output during a test as a failure: console errors/warnings
// (e.g. React invalid-prop or empty-src warnings) must be fixed at the source,
// not ignored. A test that emits to console.error/console.warn fails.
const consoleProblems = []
;['error', 'warn'].forEach(method => {
  const original = console[method].bind(console)
  console[method] = (...args) => {
    consoleProblems.push(
      `console.${method}: ` + args.map(a => (a && a.message) || String(a)).join(' ')
    )
    original(...args)
  }
})

afterEach(() => {
  const problems = consoleProblems.splice(0)
  if (problems.length > 0) {
    throw new Error(
      'Console output is not allowed during tests; fix the root cause:\n' + problems.join('\n')
    )
  }
})
