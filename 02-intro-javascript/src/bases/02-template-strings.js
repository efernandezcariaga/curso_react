const nombre = 'Ezequiel';
const apellido = 'Fernandez Cariaga';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Saludo: ${getSaludo(nombreCompleto)}`)