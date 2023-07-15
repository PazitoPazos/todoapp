import '../styles/todoTabs.scss'

function TodoTabs ({ filterSelected, onFilterChange, onRemoveAllCompleted }) {
  const TODO_FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
  }

  const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]: {
      literal: 'All',
      href: `#/filter=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE]: {
      literal: 'Active',
      href: `#/filter=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED]: {
      literal: 'Completed',
      href: `#/filter=${TODO_FILTERS.COMPLETED}`
    }
  }

  return (
    <div className="todo-tabs">
      <div className="todo-tabs-left">
        <div className="filters">
          {Object.entries(FILTERS_BUTTONS).map(([filter, { literal, href }]) => (
            <div className='filter-item' key={filter}>
              <a
                href={href}
                className={filterSelected === filter ? 'selected' : ''}
                onClick={() => {
                  onFilterChange(filter)
                }}>{literal}</a>
            </div>
          ))}
        </div>
      </div>
      <div className='todo-tabs-right'>
        <div className="clear-completed">
          <a
            href='#/clear-completed'
            onClick={() => {
              onRemoveAllCompleted()
            }}>Clear completed</a>
        </div>
      </div>
    </div>
  )
}

export default TodoTabs
