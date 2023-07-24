import { FC } from 'react'
import { LoaderContainer } from './Loader.styled'
import { LoaderProps } from './interfaces'

const Loader: FC<LoaderProps> = ({ dataTestId = 'loader' }) => {
  return (
    <LoaderContainer data-testid={dataTestId}>
      <h1>Loader component</h1>
    </LoaderContainer>
  )
}

export default Loader
