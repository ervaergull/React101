import React, { useState, useEffect } from 'react'

const FunctionalTodoRerender = () => {

  const [todo, setTodo] = useState(null)
  const [pageIndex, setPageIndex] = useState(0)

  const increasePageIndex = () => {
    setPageIndex(prevIndex => prevIndex + 1)
  }

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/' + pageIndex)
      .then(response => response.json())
      .then(json => setTodo(json))
  }

  useEffect(() => {
    fetchData()
  }, [pageIndex])

  return (
    <div>
      {todo &&
        <p>
          {todo.title}
        </p>
      }
      <p>PageIndex: {pageIndex}</p>
      <button onClick={increasePageIndex}>Fetch Next Page!</button>
    </div>
  )

}

export default FunctionalTodoRerender