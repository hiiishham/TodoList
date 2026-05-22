import React from 'react'
import { TodoProvider } from './Components/Todocontext'
import Todo from './Components/Todo'

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
