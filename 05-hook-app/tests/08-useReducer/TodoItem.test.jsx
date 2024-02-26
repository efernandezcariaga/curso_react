import {fireEvent, render, screen} from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';


describe('Pruebas sobre <ToodoItem/>', () => {

    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Debe mostrar el Todo pendiente a completar', () => {

        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between align-items-center')
        
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center text-start ms-3')
        expect(spanElement.className).not.toContain('text-decoration-line-through')

    });

    test('Debe mostrar el Todo completo', () => {

        todo.done = true;

        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />
        );
        
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through')

    });

    test('Checkbox debe llamar al ToggleTodo cuando se cambia el estado del checkbox', () => {

        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const checkBoxElement = screen.getByRole('checkbox');
        fireEvent.click(checkBoxElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

    });

    test('Button debe llamar al DeleteTodo cuando se hace click', () => {

        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    });



})