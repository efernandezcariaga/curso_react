import { useEffect, useReducer } from "react";
import { todoReducer, TodoAdd, TodoList } from './';

const initialState = [

];

const init = () => {
    return JSON.parse(sessionStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    
    const [todos, dispatch] = useReducer(todoReducer , initialState, init );

    useEffect(() => {
        sessionStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id,
        }

        dispatch(action);
    }

    return (
        <>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo}/>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>

            </div>

        </>
    )
}
