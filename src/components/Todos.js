import { TodoContext } from "../context/TodoContext"
import { useContext, useEffect } from "react"

const Todos = () => {
    const [todos, setTodos] = useContext(TodoContext)
    const fetchTodos = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        setTodos(data)
    }

    useEffect(() => {
        fetchTodos("http://localhost:5000/tasks")
    }, [])

    return (
        <>
        {todos.map(todo => (
            <h3 key={todo.id}>{todo.text}</h3>
        ))}
        </>
    )
}
export default Todos
