import React, { useState } from 'react'

export const TodoContext = React.createContext()

export const TodoProvider = props => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "doctor's appointment",
            day: "Feb 5th",
            reminder: false
        }
    ])
    return (
        <TodoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodoContext.Provider>
    )
}
