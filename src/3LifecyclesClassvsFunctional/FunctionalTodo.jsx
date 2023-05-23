import React, { useState, useEffect } from 'react'

const FunctionalTodo = () => {

  const [todo, setTodo] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setTodo(json))
  }, [])

  return (
    <div>
      {todo &&
        <p>
          {todo.title}
        </p>
      }
    </div>
  )

}

export default FunctionalTodo