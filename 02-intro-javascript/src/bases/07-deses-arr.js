const personajes = ["Goku", "Vegeta", "Trunks"];
console.log(personajes[0]);

const [ , , pj3] = personajes;
console.log(pj3);

const retornaArreglo = () => {
    return ["ABC", 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
const estado = ( valor ) => {
    return [valor, () => {console.log("Hola mundo")}];
}

const [nombre, setNombre] = estado("Goku");
console.log(nombre);
setNombre();