import '../styles/todoList.scss'
import TodoItem from './TodoItem'

function TodoList ({ todoList, onRemoveTodo, onToggleCompleted }) {
  return (
    <div className="todo-body">
      <ul className="todo-list">
        {todoList
          .map((todo) => (
            <li
              key={todo.id}
              className={
                'todo-item' + (todo.completed ? ' completed' : '')
              }
            >
              <TodoItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                onToggleCompleted={onToggleCompleted}
                onRemoveTodo={onRemoveTodo}
              />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default TodoList
