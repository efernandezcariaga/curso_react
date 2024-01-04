import { fireEvent, getByDisplayValue, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas en <CounterApp />', () => {

    const valor = 100;

    test('Debe hacer match con el snapshot', () => {

        const {container} = render(<CounterApp value={valor}/>)
        expect(container).toMatchSnapshot();
        
    });

    test('Debe mostrar que el valor inicial es 100', () => {

        render(<CounterApp value={valor}/>);
        expect(screen.getByText(100)).toBeTruthy();

    });

    test('Debe de incrementar con el boton +1', () => {

        render(<CounterApp value={valor}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
    });

    test('Debe de decrementar con el boton -1', () => {

        render(<CounterApp value={valor}/>);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('99')).toBeTruthy();
    });

    test('Debe de funcionar el boton de reset', () => {

        render(<CounterApp value={valor}/>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        // fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))

        expect(screen.getByText(valor)).toBeTruthy();
    });
})