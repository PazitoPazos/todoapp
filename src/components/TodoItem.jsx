import '../styles/todoItem.scss'

function TodoItem ({ id, title, completed, onRemoveTodo, onToggleCompleted }) {
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={(event) => {
          onToggleCompleted({ id, completed: event.target.checked })
        }}
      />
      <label>{title}</label>
      <div className='destroy'>
        <div className='button' onClick={() => {
          onRemoveTodo(id)
        }} />
      </div>
    </div>
  )
}

export default TodoItem
