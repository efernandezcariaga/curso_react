import { render, screen } from "@testing-library/react"
import { GifExpertApp } from './../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {

    //-Escribir en el input --> Ya esta evaluado en AddCategory
    //-Mandar el formulario --> Ya esta evaluado en AddCategory
    //-Ver snapshot

    test('Debe hacer match con el snapshot', () => {

        const {container} = render(<GifExpertApp />)
        expect(container).toMatchSnapshot();
    });
})