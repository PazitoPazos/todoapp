import { useEffect, useState } from 'react'
import './App.scss'
import TodoList from './components/TodoList'
import TodoHeader from './components/TodoHeader'

function saveTodosToLocalStorage (todos) {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function recoverTodosFromLocalStorage () {
  const todos = JSON.parse(localStorage.getItem('todos'))
  return todos
}

let todos

if (localStorage.getItem('todos')) {
  todos = recoverTodosFromLocalStorage()
}

function App () {
  const [todoList, setTodoList] = useState(todos)
  const [filterSelected, setFilterSelected] = useState('all')

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

  const handleFilterChange = (filter) => {
    setFilterSelected(filter)
  }

  const filteredTodos = todoList.filter((todo) => {
    if (filterSelected === 'active') {
      return !todo.completed
    }

    if (filterSelected === 'completed') {
      return todo.completed
    }

    return todo
  })
  const activeCount = todoList.filter((todo) => !todo.completed).length

  const handleRemoveAllCompleted = () => {
    const activeTodoList = todoList.filter((todo) => !todo.completed)
    setTodoList(activeTodoList)
  }

  const handleAddTodo = ({ title }) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    const newTodoList = [...todoList, newTodo]
    setTodoList(newTodoList)
  }

  useEffect(() => {
    saveTodosToLocalStorage(todoList)
  }, [todoList])

  return (
    <>
      <div className="app">
        <h1 className='page-title'>
          <a href="/">todos</a>
        </h1>
        <div className="todo-container">
          <TodoHeader
            activeCount={activeCount}
            filterSelected={filterSelected}
            handleFilterChange={handleFilterChange}
            onToggleAll={handleToggleAll}
            onRemoveAllCompleted={handleRemoveAllCompleted}
            onAddTodo={handleAddTodo}
          />
          <TodoList
            todoList={filteredTodos}
            onRemoveTodo={handleRemove}
            onToggleCompleted={handleCompleted}
          />
        </div>
      </div>
    </>
  )
}

export default App
