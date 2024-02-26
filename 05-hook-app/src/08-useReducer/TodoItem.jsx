
export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
    
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="justify-content-between">
                <input
                    type="checkbox" 
                    name="done" 
                    className="form-check-input align-self-center" 
                    onChange={() => onToggleTodo(todo.id)}
                />
                <span 
                    className= {`align-self-center text-start ms-3 ${(todo.done) ? 'text-decoration-line-through' : ''}`}
                    aria-label="span"
                >
                    {todo.description}
                </span>
            </div>
            <button 
                className="btn btn-danger" 
                onClick={() => onDeleteTodo(todo.id) }
            >
                Borrar
            </button>
        </li> 
    )
}
