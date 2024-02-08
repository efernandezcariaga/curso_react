
export const TodoItem = ({todo, onDeleteTodo}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{todo.description}</span>
            <span className="align-self-center">{JSON.stringify(todo.done)}</span>
            <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id) }>Borrar</button>
        </li> 
    )
}
