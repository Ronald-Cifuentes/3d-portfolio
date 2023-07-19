import { useCallback, useState } from 'react'
import { UseTemplateName } from './interfaces'

export const useTemplateName: UseTemplateName = () => {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])

  return { increment, count }
}
