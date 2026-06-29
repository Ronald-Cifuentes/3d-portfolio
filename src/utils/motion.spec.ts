import { textVariant, fadeIn, zoomIn, slideIn, staggerContainer } from './motion'

describe('motion utilities', () => {
  describe('textVariant', () => {
    test('returns variants with default delay (undefined)', () => {
      const result = textVariant()

      expect(result.hidden).toEqual({
        y: -50,
        opacity: 0,
      })
      expect(result.show).toMatchObject({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 1.25,
          delay: undefined,
        },
      })
    })

    test('returns variants with specified delay', () => {
      const result = textVariant(0.5)

      expect(result.show).toMatchObject({
        transition: {
          delay: 0.5,
        },
      })
    })
  })

  describe('fadeIn', () => {
    test('direction left sets x to 100 and y to 0', () => {
      const result = fadeIn('left', 'tween', 0.2, 1)

      expect(result.hidden).toEqual({
        x: 100,
        y: 0,
        opacity: 0,
      })
      expect(result.show).toMatchObject({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          delay: 0.2,
          duration: 1,
          ease: 'easeOut',
        },
      })
    })

    test('direction right sets x to -100 and y to 0', () => {
      const result = fadeIn('right', 'spring', 0.1, 0.5)

      expect(result.hidden).toEqual({
        x: -100,
        y: 0,
        opacity: 0,
      })
    })

    test('direction up sets y to 100 and x to 0', () => {
      const result = fadeIn('up', 'tween', 0, 1)

      expect(result.hidden).toEqual({
        x: 0,
        y: 100,
        opacity: 0,
      })
    })

    test('direction down sets y to -100 and x to 0', () => {
      const result = fadeIn('down', 'inertia', 0.3, 2)

      expect(result.hidden).toEqual({
        x: 0,
        y: -100,
        opacity: 0,
      })
    })

    test('handles undefined type', () => {
      const result = fadeIn('left', undefined, 0, 1)

      expect(result.show).toMatchObject({
        transition: {
          type: undefined,
        },
      })
    })
  })

  describe('zoomIn', () => {
    test('returns correct hidden and show variants', () => {
      const result = zoomIn(0.5, 1.5)

      expect(result.hidden).toEqual({
        scale: 0,
        opacity: 0,
      })
      expect(result.show).toEqual({
        scale: 1,
        opacity: 1,
        transition: {
          type: 'tween',
          delay: 0.5,
          duration: 1.5,
          ease: 'easeOut',
        },
      })
    })
  })

  describe('slideIn', () => {
    test('direction left sets x to -100% and y to 0', () => {
      const result = slideIn('left', 'tween', 0.2, 1)

      expect(result.hidden).toEqual({
        x: '-100%',
        y: 0,
      })
      expect(result.show).toMatchObject({
        x: 0,
        y: 0,
        transition: {
          type: 'tween',
          delay: 0.2,
          duration: 1,
          ease: 'easeOut',
        },
      })
    })

    test('direction right sets x to 100% and y to 0', () => {
      const result = slideIn('right', 'spring', 0, 0.5)

      expect(result.hidden).toEqual({
        x: '100%',
        y: 0,
      })
    })

    test('direction up sets y to 100% and x to 0', () => {
      const result = slideIn('up', 'tween', 0, 1)

      expect(result.hidden).toEqual({
        x: 0,
        y: '100%',
      })
    })

    test('direction down sets y to 100% and x to 0', () => {
      const result = slideIn('down', 'keyframes', 0.1, 2)

      expect(result.hidden).toEqual({
        x: 0,
        y: '100%',
      })
    })

    test('handles undefined type', () => {
      const result = slideIn('left', undefined, 0, 1)

      expect(result.show).toMatchObject({
        transition: {
          type: undefined,
        },
      })
    })
  })

  describe('staggerContainer', () => {
    test('returns correct variants with delayChildren', () => {
      const result = staggerContainer(0.1, 0.2)

      expect(result.hidden).toEqual({})
      expect(result.show).toEqual({
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      })
    })

    test('defaults delayChildren to 0 when not provided', () => {
      const result = staggerContainer(0.05)

      expect(result.show).toEqual({
        transition: {
          staggerChildren: 0.05,
          delayChildren: 0,
        },
      })
    })
  })
})
