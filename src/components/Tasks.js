import { useState } from "react"
import { TodoContext } from "../context/TodoContext"
import { useContext } from "react"

const Tasks = () => {
    const [todos, setTodos] = useContext(TodoContext)

    return (
        <>
        {todos.map(todo => (
            <h3 key={todo.id}>{todo.text}</h3>
        ))}
        </>
    )
}
export default Tasks
