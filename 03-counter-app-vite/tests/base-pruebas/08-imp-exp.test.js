import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retornar un heroe por ID', () => {

        const id = 1;
        const hero = getHeroeById(id);


        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

    });

    test('getHeroeById debe retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });

    test('getHeroeByOwner debe retornar heroes de DC', () => {

        const owner = "DC";
        const heroes = getHeroesByOwner(owner);

        // console.log(heroes)

        expect(heroes.length).toBe(3);
        // expect(heroes).toEqual([
        //     { id: 1, name: 'Batman', owner: 'DC' },
        //     { id: 3, name: 'Superman', owner: 'DC' },
        //     { id: 4, name: 'Flash', owner: 'DC' }
        // ]);

        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    });

    test('getHeroeByOwner debe retornar heroes de MARVEL', () => {

        const owner2 = "Marvel";
        const heroes2 = getHeroesByOwner(owner2);

        // console.log(heroes2);
        expect(heroes2.length).toBe(2);
        expect(heroes2).toEqual(heroes2.filter( (heroe) => heroe.owner === owner2));
    });

})