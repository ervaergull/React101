import React from 'react'

import ClassCounter from './1CounterComponents/ClassCounter'
import FunctionalCounter from './1CounterComponents/FunctionalCounter'
import FunctionalTodo from './3LifecyclesClassvsFunctional/FunctionalTodo';
import ClassBasedTodo from './3LifecyclesClassvsFunctional/ClassBasedTodo';
import FunctionalTodoRerender from './4LifecyclesClassvsFunctional/FunctionalTodoRerender';
import ClassBasedTodoRerender from './4LifecyclesClassvsFunctional/ClassBasedTodoRerender';

const App = () => {

  return (
    <>
      {/* Counter - Demonstrating State */}
      <ClassCounter />
      <FunctionalCounter />

      {/* Todo - Demonstrating Component Mount*/}
      {/* <FunctionalTodo /> */}
      {/* <ClassBasedTodo /> */}

      {/* Todo - Demonstrating Component Re-render*/}
      {/* <FunctionalTodoRerender /> */}
      {/* <ClassBasedTodoRerender /> */}
    </>
  )

}

export default App