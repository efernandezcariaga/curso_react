import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('Pruebas en <GifItem />', () => {

    const title = 'Dragon Ball Z';
    const url = 'https://dragon-ball-z/goku.jpg';

    test('Debe hacer match con el snapshot', () => {

        const {container} = render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifItem title={title} url={url}/>);
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

        // console.log(screen.getByRole('img').src);
    });

    test('Debe mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
})