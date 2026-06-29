import { assetSrc } from './assetSrc'

describe('assetSrc', () => {
  it('returns the src unchanged when it is a non-empty string', () => {
    expect(assetSrc('/images/logo.png')).toBe('/images/logo.png')
  })

  it('returns undefined for an empty string', () => {
    expect(assetSrc('')).toBeUndefined()
  })

  it('returns undefined when src is undefined', () => {
    expect(assetSrc(undefined)).toBeUndefined()
  })
})
