import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, AppState } from './store'
import { decrement, increment } from './storeSlice'

export const useCounter = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { count } = useSelector((state: AppState) => state.storeReducer)
  return {
    inc: () => dispatch(increment()),
    dec: () => dispatch(decrement()),
    count,
  }
}
