import { useState } from 'react'
import './App.scss'
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'
import TodoTabs from './components/TodoTabs'

const todos = [
  { id: '1', title: 'Learn React', completed: true },
  { id: '2', title: 'Learn CSS', completed: false },
  { id: '3', title: 'Learn JavaScript', completed: false }
]

function App () {
  const [todoList, setTodoList] = useState(todos)

  const handleRemove = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id)
    setTodoList(newTodoList)
  }

  const handleCompleted = ({ id, completed }) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })

    setTodoList(newTodoList)
  }

  const handleToggleAll = (completed) => {
    const newTodoList = todoList.map((todo) => {
      return {
        ...todo,
        completed
      }
    })

    setTodoList(newTodoList)
  }

  return (
    <>
      <div className="app">
        <h1>todos</h1>
        <div className="todo-container">
          <div className="todo-header">
            <TodoTabs todoList={todoList} />
            <NewTodo onToggleAll={handleToggleAll}/>
          </div>
          <span>Showing all ({todoList.length})</span>
          <TodoList
            todoList={todoList}
            onRemoveTodo={handleRemove}
            onToggleCompleted={handleCompleted}
          />
        </div>
      </div>
    </>
  )
}

export default App
