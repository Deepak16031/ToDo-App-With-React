import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([]);
  const [todoVal, setTodoVal] = useState('')
  
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

    function editTodos(todoIndex) {
      const editTodoVal = todos[todoIndex]
      setTodoVal(editTodoVal)
      deleteTodos(todoIndex)
    }
  
  function addTodos(todo) {
    const newTodoList = [...todos, todo]
    setTodos(newTodoList)
    persistData(newTodoList)
  }

  function deleteTodos(todoIndex) {
    const filterTodos = todos.filter((val, index) => {
      return index != todoIndex
    })
    setTodos(filterTodos)
    persistData(filterTodos)
  }


  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput addTodos={addTodos} todoVal={todoVal} setTodoVal={setTodoVal} />
      <TodoList editTodos={editTodos} deleteTodos={deleteTodos} todos={todos}/>
    </>
  )
}

export default App