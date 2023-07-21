import { useCounter } from '../Redux/hook'

function Counter() {
  const { inc, dec, count } = useCounter()

  return (
    <div>
      <div>
        <button data-testid='btn-less' onClick={dec}>
          -
        </button>
        <span data-testid='display-count'>{count}</span>
        <button data-testid='btn-plus' onClick={inc}>
          +
        </button>
      </div>
    </div>
  )
}

export default Counter
