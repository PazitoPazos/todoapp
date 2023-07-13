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
      <button className="destroy" onClick={() => {
        onRemoveTodo(id)
      }} />
    </div>
  )
}

export default TodoItem
