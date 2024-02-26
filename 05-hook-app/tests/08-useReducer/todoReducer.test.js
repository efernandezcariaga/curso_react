import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas sobre todoReducer', () => {

    const initialState = [{
        id:1,
        description: 'Demo TODO',
        done: false,
    }]

    test('Debe regresar el estado inicial', () => {

        const newState = todoReducer(initialState, {}); 

        expect(newState).toBe(initialState);

    });

    test('Debe agregarse un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

    });

    test('Debe eliminarse un todo', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });

    test('Debe hacerce el toggle del todo', () => {
        
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1,
        }

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true );
    })

})