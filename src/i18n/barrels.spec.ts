/**
 * Tests for i18n barrel (index.ts) files to ensure they properly re-export
 * and are executed for coverage purposes.
 */

describe('i18n barrel exports', () => {
  test('src/i18n/index.ts exports all i18n utilities', () => {
    const barrel = require('./index')

    expect(barrel.LanguageProvider).toBeDefined()
    expect(barrel.LanguageContext).toBeDefined()
    expect(barrel.useTranslation).toBeDefined()
    expect(barrel.en).toBeDefined()
    expect(barrel.es).toBeDefined()
  })

  test('src/i18n/locales/index.ts exports locale dictionaries', () => {
    const locales = require('./locales')

    expect(locales.en).toBeDefined()
    expect(locales.es).toBeDefined()
    expect(locales.en.content).toBeDefined()
    expect(locales.es.content).toBeDefined()
  })
})
