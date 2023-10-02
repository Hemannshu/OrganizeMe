import React, { useContext, useState } from 'react'
import { DataContext } from './DataProvider'
export default function Footer() {
  const [checkAll, setCheckALL] = useState(false)
  const [todos, setTodos] = useContext(DataContext)
  const handleCheckALL = () => {
    const newTodos = [...todos]
    newTodos.forEach(todo => {
      todo.complete = !checkAll
    })
    setTodos(newTodos)
    setCheckALL(!checkAll)
  }
  const newTodosComplete = () => {
    return todos.filter(todo => todo.complete === false)

  }
  const deleteTodo = () => {

    setTodos(newTodosComplete())
    setCheckALL(false)
  }

  return (
    <>
      {
        todos.length === 0 ? <h2>Start Planning Your Day ✍🏼</h2>
          : <div div className="row">
            <label htmlFor="all">
              <input type="checkbox" name="all" id="all" onChange={handleCheckALL} checked={checkAll} />Select All
            </label>
            <p>You have <span id="taskCount">{newTodosComplete().length}</span> tasks to complete</p>

            <button id="delete" onClick={deleteTodo}>Delete</button>
          </div>

      }
    </>

  )
}
