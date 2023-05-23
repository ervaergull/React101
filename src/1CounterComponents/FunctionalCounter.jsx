import React, { useState } from 'react'

const FunctionalCounter = () => {

  const [count, setCount] = useState(0)

  const decrementCount = () => {
    setCount(prevState => prevState - 1)
  }

  const incrementCount = () => {
    setCount(prevState => prevState + 1)
  }

  return (
    <div className="counter-container">
      <h1>Counter Using Functional Components</h1>

      <div className="counter-content">
        <button onClick={decrementCount}>Decrement</button>
        <h2>{count}</h2>
        <button onClick={incrementCount}>Increment</button>
      </div>
    </div>
  )

}

export default FunctionalCounter