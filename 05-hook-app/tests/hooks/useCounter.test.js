import {act, renderHook} from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas sobre useCounter', () => {
    
    test('Debe retornar los valores por defecto', () => {
        
        const {result} = renderHook(() => useCounter() );
        const {counter, increment, decrement, reset} = result.current;

        expect(counter).toBe(1);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('Debe generar el counter con el valor de 100', () => {
        const {result} = renderHook(() => useCounter(100) );
        
        expect(result.current.counter).toBe(100);
    });

    test('Debe incrementarse el contador', () => {

        const {result} = renderHook(() => useCounter(100) );
        const {increment} = result.current;

        act( () => {
            increment();
            increment(2);
        });
        
        expect(result.current.counter).toBe(103);
    });

    test('Debe decrementarse el contador', () => {

        const {result} = renderHook(() => useCounter(100) );
        const {decrement} = result.current;

        act( () => {
            decrement();
            decrement(2);
        });
        
        expect(result.current.counter).toBe(97);
    });

    test('Debe resetearse el contador', () => {

        const {result} = renderHook(() => useCounter(100) );
        const {increment, decrement, reset} = result.current;

        act( () => {
            increment(50);
            decrement(22);
            reset();
        });
        
        expect(result.current.counter).toBe(100);
    });


})