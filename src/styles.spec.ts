import { styles } from './styles'

describe('styles', () => {
  test('exports paddingX with responsive classes', () => {
    expect(styles.paddingX).toBe('sm:px-16 px-6')
  })

  test('exports paddingY with responsive classes', () => {
    expect(styles.paddingY).toBe('sm:py-16 py-6')
  })

  test('exports padding with both x and y responsive classes', () => {
    expect(styles.padding).toBe('sm:px-16 px-6 sm:py-16 py-10')
  })

  test('exports heroHeadText with responsive font sizes', () => {
    expect(styles.heroHeadText).toContain('font-black')
    expect(styles.heroHeadText).toContain('text-white')
    expect(styles.heroHeadText).toContain('lg:text-[80px]')
    expect(styles.heroHeadText).toContain('sm:text-[60px]')
    expect(styles.heroHeadText).toContain('xs:text-[50px]')
    expect(styles.heroHeadText).toContain('text-[40px]')
  })

  test('exports heroSubText with responsive font sizes', () => {
    expect(styles.heroSubText).toContain('text-[#dfd9ff]')
    expect(styles.heroSubText).toContain('font-medium')
    expect(styles.heroSubText).toContain('lg:text-[30px]')
  })

  test('exports sectionHeadText with responsive font sizes', () => {
    expect(styles.sectionHeadText).toContain('text-white')
    expect(styles.sectionHeadText).toContain('font-black')
    expect(styles.sectionHeadText).toContain('md:text-[60px]')
  })

  test('exports sectionSubText with secondary color', () => {
    expect(styles.sectionSubText).toContain('text-secondary')
    expect(styles.sectionSubText).toContain('uppercase')
    expect(styles.sectionSubText).toContain('tracking-wider')
  })

  test('styles object has all expected keys', () => {
    const expectedKeys = [
      'paddingX',
      'paddingY',
      'padding',
      'heroHeadText',
      'heroSubText',
      'sectionHeadText',
      'sectionSubText',
    ]
    expect(Object.keys(styles)).toEqual(expectedKeys)
  })
})
