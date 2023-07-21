import { Store } from '@reduxjs/toolkit'

export interface AppProps {
  dataTestId?: string
}

export interface ProvidersProps {
  children: JSX.Element
  store: Store
}
