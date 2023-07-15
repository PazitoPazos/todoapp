import { useState } from 'react'
import '../styles/newTodo.scss'

function NewTodo ({ onToggleAll, saveTodo }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (inputValue) => {
    saveTodo({ title: inputValue })
    setInputValue('')
  }

  function isEmptyOrSpaces (str) {
    return str === null || str.match(/^ *$/) !== null
  }

  return (
    <div className="new-todo-wrapper">
      <div className='toggle-all-wrapper'>
        <input
          className='toggle toggle-all'
          type="checkbox"
          name="toggle-all"
          id="toggle-all"
          onChange={(event) => { onToggleAll(event.target.checked) }}
        />
      </div>
      <input
        className='new-todo'
        type="text"
        placeholder="Add a todo..."
        value={inputValue}
        onChange={(event) => { setInputValue(event.target.value) }}
        onKeyDown={(event) => {
          if (!isEmptyOrSpaces(inputValue) && event.key === 'Enter') {
            handleSubmit(inputValue)
          }
        }}
        autoFocus
      />
      <button
        className='add-todo-button'
        onClick={() => {
          if (!isEmptyOrSpaces(inputValue)) {
            handleSubmit(inputValue)
          }
        }}
      >+</button>
    </div>
  )
}

export default NewTodo
