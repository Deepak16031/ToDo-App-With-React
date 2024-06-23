
import React from 'react'

export default function TodoCard(props) {
  const { children, editTodos, deleteTodos, todoIndex } = props

  return (
    <li key={todoIndex} className='todoItem'>
      {children}

      <div className='actionsContainer'>
        <button onClick={()=> {editTodos(todoIndex)}}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={() => deleteTodos(todoIndex)}>
          <i className="fa-solid fa-trash-can" ></i>
        </button>
      </div>
    </li>
  )
}
