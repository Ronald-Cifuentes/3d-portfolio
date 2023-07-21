import { FC } from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import type { ProvidersProps } from './interfaces'
import type { Store } from '@reduxjs/toolkit'
import { initialState } from '../../Redux/storeSlice'
import store from '../../Redux/store'

const rootUnitState = { storeReducer: initialState }

const mockStore = configureMockStore()

const Providers: FC<ProvidersProps> = ({ children, store }) => {
  return <Provider store={store}>{children}</Provider>
}

describe('<App /> Unit Testing', () => {
  let unitStore: Store

  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
    unitStore = mockStore(rootUnitState)
    unitStore.dispatch = jest.fn()
  })

  test('#1. Exist - Render default', () => {
    render(
      <Providers store={unitStore}>
        <App />
      </Providers>
    )

    const app = screen.getByTestId('app')
    expect(app).toBeInTheDocument()
  })

  test('#2. It works - Plus and Minus', () => {
    render(
      <Providers store={unitStore}>
        <App />
      </Providers>
    )

    const btnPlus = screen.getByTestId('btn-plus')
    fireEvent.click(btnPlus)
    expect(unitStore.dispatch).toHaveBeenCalledWith({ payload: undefined, type: 'store/increment' })

    const btnMinus = screen.getByTestId('btn-less')
    fireEvent.click(btnMinus)
    expect(unitStore.dispatch).toHaveBeenCalledWith({ payload: undefined, type: 'store/decrement' })
  })
})

describe('<App /> Integration Testing', () => {
  test('#1. Exist - Render default', () => {
    render(
      <Providers store={store}>
        <App />
      </Providers>
    )

    const app = screen.getByTestId('app')
    expect(app).toBeInTheDocument()
  })

  test('#2. It works - Plus and Minus', () => {
    render(
      <Providers store={store}>
        <App />
      </Providers>
    )

    const displayCount1: HTMLSpanElement = screen.getByTestId('display-count')
    expect(displayCount1.textContent).toBe('0')
    const btnPlus = screen.getByTestId('btn-plus')
    fireEvent.click(btnPlus)
    const displayCount2: HTMLSpanElement = screen.getByTestId('display-count')
    expect(displayCount2.textContent).toBe('1')
    const btnMinus = screen.getByTestId('btn-less')
    fireEvent.click(btnMinus)
    const displayCount3: HTMLSpanElement = screen.getByTestId('display-count')
    expect(displayCount3.textContent).toBe('0')
  })
})
