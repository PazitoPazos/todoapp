import '../styles/todoTabs.scss'

function TodoTabs () {
  return (
    <div className="todo-tabs">
      <div className="todo-tabs-left">
        <div className="filters">
          <div className="filter-item active">
            <span>All</span>
          </div>
          <div className="filter-item">
            <span>Active</span>
          </div>
          <div className="filter-item">
            <span>Completed</span>
          </div>
        </div>
      </div>
      <div className='todo-tabs-right'>
        <div className="clear-completed">
          <span>Clear completed</span>
        </div>
      </div>
    </div>
  )
}

export default TodoTabs
