import { act, cleanup, renderHook } from '@testing-library/react'
import { useTemplateName } from './useTemplateName'

describe('<TemplateName />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    const { result } = renderHook(() => useTemplateName())

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(1)
  })
})
