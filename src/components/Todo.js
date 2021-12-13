import React from 'react'

const Todo = ({ todo, deleteTodo }) => {
    return (
        <div>
            <h3>{todo.text}</h3>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    )
}

export default Todo
