import { usContext } from "../../src/base-pruebas/06-deses-obj";


describe('Pruebas en 06-deses-obj', () => {

    test('usContext debe retornar un objeto', () => {

        const clave = 123;
        const edad = 22;
        
        const usarContexto = usContext({clave, edad});

        expect(usarContexto).toStrictEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
        }
        });
        
    });

})