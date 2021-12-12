import { TodoContext } from "../context/TodoContext"
import { useContext, useEffect } from "react"

const Todos = () => {
    const [todos, setTodos] = useContext(TodoContext)
    useEffect(() => {
        const getTodos = async () => {
            const todosFromServer = await fetchTodos()
            setTodos(todosFromServer)
        }

        getTodos()
    }, [])

    const fetchTodos = async () => {
        const response = await fetch('http://localhost:5000/tasks')
        const data = await response.json();
        return data;
    }

    return (
        <>
        {todos.map(todo => (
            <h3 key={todo.id}>{todo.text}</h3>
        ))}
        </>
    )
}
export default Todos
