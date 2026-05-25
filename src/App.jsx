import React from 'react'
import Todo from './Components/Todo'
import { TodoProvider } from './Components/TodoContext'

function App() {
  return (
    <div>
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </div>
  )
}

export default App