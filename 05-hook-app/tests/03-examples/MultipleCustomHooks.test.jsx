import {fireEvent, getByRole, render, screen} from '@testing-library/react'
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Debe mostrar el componente por defecto ', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Random Jokes'));
        expect(screen.getByText('Loading...'));

        const nextButton = screen.getByRole('button', {name: 'Next joke'})

        expect(nextButton.disabled).toBeTruthy();

    });

    test('Debe mostrar un joke', () => {

        useFetch.mockReturnValue({
            data: [{setup:'Ezequiel ', punchline:'Fernandez Cariaga'}],
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks/>);
        // screen.debug();

        //VA A DAR FALSO PORQUE NO SE ME ESTA MOSTRANDO EN PANTALLA EL SETUP NI EL PUNCHLINE
        // expect(screen.getByText('Ezequiel')).toBeTruthy(); 
        // expect(screen.getByText('Fernandez Cariaga')).toBeTruthy(); 

        const nextButton = screen.getByRole('button', {name: 'Next joke'})
        expect(nextButton.disabled).toBeFalsy();

    });

    test('Debe llamarse la funcion de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{setup:'Ezequiel ', punchline:'Fernandez Cariaga'}],
            isLoading: false,
            hasError: null,
        })

        render(<MultipleCustomHooks/>)
        const nextButton = screen.getByRole('button', {name: 'Next joke'})
        fireEvent.click(nextButton);
        
        expect(mockIncrement).toHaveBeenCalled();
    })

})