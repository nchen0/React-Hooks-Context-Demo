import { TodoContext } from "../context/TodoContext"
import { useContext, useEffect } from "react"
import Todo from "./Todo"
import axios from 'axios'

const Todos = () => {
    const [todos, setTodos] = useContext(TodoContext)

    useEffect(() => {
        const fetchTodos = async (url) => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setTodos(data)
            } catch (ex) {
                console.log(ex)
            }
        }

        fetchTodos("http://localhost:5000/tasks")
    }, [])

    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:5000/tasks/${id}`)
        const currentTodos = todos.filter(todo => !(todo.id === id))
        setTodos(currentTodos)
    }

    return (
        <>
        {todos.map(todo => (
            <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
        </>
    )
}
export default Todos
