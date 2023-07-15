import '../styles/todoHeader.scss'
import NewTodo from './NewTodo'
import TodoTabs from './TodoTabs'

function TodoHeader ({ activeCount, filterSelected, handleFilterChange, onToggleAll, onRemoveAllCompleted, onAddTodo }) {
  return (
    <div className="todo-header">
      <TodoTabs
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
        onRemoveAllCompleted={onRemoveAllCompleted}
      />
      <NewTodo onToggleAll={onToggleAll} saveTodo={onAddTodo} />
      <h3>Left {activeCount} todo/s</h3>
    </div>
  )
}

export default TodoHeader
