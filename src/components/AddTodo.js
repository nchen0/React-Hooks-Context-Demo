import { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'

const AddTodo = () => {
    const [todos, setTodos] = useContext(TodoContext)
    const [task, setTask] = useState('')

    const inputTask = e => {
        setTask(e.target.value);
    }

    const addTodo = e => {
        e.preventDefault();
        setTodos(prevTodos => [...prevTodos, { id: todos.length, text: task }])
        setTask('');
    }

    return (
        <form>
            <input type="text" onChange={inputTask} value={task} />
            <button onClick={addTodo}>Submit</button>
        </form>
    )
}

export default AddTodo
