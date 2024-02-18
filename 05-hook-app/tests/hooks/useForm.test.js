import {act, renderHook} from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas sobre useForm', () => {

    const initialForm = {
        name: 'Ezequiel',
        email: 'ezequiel@google.com',
        sex: 'male',
    }

    test('Debe regresar los valores por defecto', () => {
        const {result} = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            sex: initialForm.sex,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        })

    });


    test('Debe cambiarse el nombre del formulario', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const {onInputChange} = result.current;

        const newValue = 'Juan';

        act( () => {
            onInputChange({target: {name:'name', value:newValue}});
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);

    });


    test('Debe resetearse el formulario al estado inicial', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const {onInputChange, onResetForm} = result.current;

        const newValue = 'Juan';

        act( () => {
            onInputChange({target: {name:'name', value:newValue}});
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    
    });
})