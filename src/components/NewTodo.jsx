import '../styles/NewTodo.scss'

function NewTodo ({ onToggleAll }) {
  return (
    <div className="new-todo-wrapper">
      <div className='toggle-all-wrapper'>
        <input className='toggle toggle-all' type="checkbox" name="toggle-all" id="toggle-all" onChange={(event) => { onToggleAll(event.target.checked) }} />
      </div>
      <input className='new-todo' type="text" placeholder="Add a todo..." />
      <button className='add-todo-button'>+</button>
    </div>
  )
}

export default NewTodo
