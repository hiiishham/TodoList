import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import "./Todo.css"

export default function Todo() {
    const { todos, addTodo, deleteTodo, toggleTodo } = useContext(TodoContext);

    const[text,setText] = useState("");

    const completedCount = todos.filter(t => t.completed).length;

    const handleSubmit = (i) =>{
        i.preventDefault();
        if (text.trim() === "") return;
        addTodo(text);
        setText("");
    };

    return (
        <>
        <div className="todo-app">
        <h1>Todo List</h1>

        <form className="todo-input" onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a new task" value={text}
        onChange={(e) => setText(e.target.value)}/>
        <button>Create</button>
        </form>

        <div className="todo-info">
        <span className="created"> Create tasks : <b>{todos.length}</b> </span>
        <span className="completed"> Completed : <b>{completedCount} of {todos.length}</b> </span>
        </div>

        <ul className="todo-list">
        {todos.map(todo => (
        <li key={todo.id} className="todo-item">
        <span className={`check ${todo.completed ? "done" : ""}`}
        onClick={() => toggleTodo(todo.id)} />
        <p className={todo.completed ? "text done" : "text"}> {todo.text} </p>
        <button className="delete" onClick={() => deleteTodo(todo.id)} >🗑</button>
        </li>
        ))}
        </ul>

        </div>   
        </>
    )
    
}