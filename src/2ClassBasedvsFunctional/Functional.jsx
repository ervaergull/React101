import React from 'react'
import { useState } from 'react'

const Functional = () => {

  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(prevState => prevState + 1)
  }

  return (
    <div>
      <div>
        <p>Current Count</p>{count}
        <button onClick={incrementCount}>Increment</button>
      </div>
    </div>
  )

}

export default Functional