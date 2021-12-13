import { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'
import axios from 'axios'

const AddTodo = () => {
    const [todos, setTodos] = useContext(TodoContext)
    const [inputValue, setInputValue] = useState('')

    const inputTask = e => {
        setInputValue(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault()
        if (!inputValue) {
            alert("Please add a task")
            return
        }
        addTodo()
        setInputValue('')
    }

    const addTodo = async () => {
        const body = { id: Math.random(), text: inputValue }
        const response = await axios.post('http://localhost:5000/tasks', body)
        setTodos([...todos, response.data])
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" onChange={inputTask} value={inputValue} />
            <button>Submit</button>
        </form>
    )
}

export default AddTodo
