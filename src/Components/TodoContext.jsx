import { createContext, useState } from "react";
import "./Todo.css"

export const TodoContext = createContext();

export function TodoProvider({children}) {
    const[todos, setTodos]= useState([]);

    const addTodo  = (text) =>{
        setTodos([
            ...todos, { id: Date.now(), text, completed:false },
        ]);
    };
    const deleteTodo = (id)=> {
        setTodos(todos.filter((todo) => todo.id !==id));
    };
    const toggleTodo = (id)=>{
        setTodos(
        todos.map((todo)=> todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo)
        );
    };

return(
    <>
    <TodoContext.Provider value={{todos , addTodo , deleteTodo , toggleTodo}}>
        {children}
    </TodoContext.Provider>
  </>
);
}