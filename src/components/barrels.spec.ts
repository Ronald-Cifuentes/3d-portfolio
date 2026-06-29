/**
 * Tests for barrel (index.ts) files to ensure they properly re-export
 * and are executed for coverage purposes.
 */

describe('Component barrel exports', () => {
  test('src/components/index.ts exports all components', () => {
    const barrel = require('./index')

    expect(barrel.Content).toBeDefined()
    expect(barrel.Navbar).toBeDefined()
    expect(barrel.Skills).toBeDefined()
    expect(barrel.Experience).toBeDefined()
    expect(barrel.LanguageSelector).toBeDefined()
  })

  test('src/components/Background/index.ts exports Background', () => {
    const barrel = require('./Background')

    expect(barrel.default).toBeDefined()
  })

  test('src/components/Experience/ExperienceCard/index.ts exports ExperienceCard', () => {
    const barrel = require('./Experience/ExperienceCard')

    expect(barrel.default).toBeDefined()
  })

  // Note: Footer barrel test skipped because Footer.const.tsx uses Vite-specific
  // '?react' SVG imports that cannot be resolved in Jest environment.
  // Footer component coverage is obtained via existing Footer.spec.tsx tests.
})
