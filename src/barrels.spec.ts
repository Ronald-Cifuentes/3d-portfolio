/**
 * Tests for root-level barrel (index.ts) files to ensure they properly re-export
 * and are executed for coverage purposes.
 */

describe('Root barrel exports', () => {
  test('src/assets/index.ts exports all assets', () => {
    const assets = require('./assets')

    // Icons
    expect(assets.menu).toBeDefined()
    expect(assets.close).toBeDefined()

    // Companies
    expect(assets.Acid).toBeDefined()
    expect(assets.Treinta).toBeDefined()
    expect(assets.ITG).toBeDefined()
    expect(assets.Softgic).toBeDefined()
    expect(assets.Mantum).toBeDefined()
    expect(assets.CCF).toBeDefined()
    expect(assets.Sena).toBeDefined()

    // Skills
    expect(assets.web).toBeDefined()
    expect(assets.frontend).toBeDefined()
    expect(assets.backend).toBeDefined()

    // Frontend tech
    expect(assets.Reactjs).toBeDefined()
    expect(assets.Typescript).toBeDefined()
  })

  test('src/hoc/index.ts exports SectionWrapper', () => {
    const hoc = require('./hoc')

    expect(hoc.SectionWrapper).toBeDefined()
    expect(typeof hoc.SectionWrapper).toBe('function')
  })
})
