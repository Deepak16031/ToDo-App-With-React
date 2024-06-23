
import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  
  const {todos, todoVal, setTodoVal} = props

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} todoVal={todoVal} setTodoVal={setTodoVal} todoIndex={todoIndex}>
            <p color='red'>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
