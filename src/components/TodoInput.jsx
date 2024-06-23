import React from 'react'

export default function TodoInput(props) {
    const {addTodos, todoVal, setTodoVal} = props
    return (
        <header>
            <input value={todoVal} onChange={(e) => 
            setTodoVal(e.target.value)}
            placeholder='Enter todo...' />

            <button onClick={() => {
                addTodos(todoVal)
                setTodoVal('')
            }}>Add</button>
        </header>
    )
}
