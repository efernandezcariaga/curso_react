// function saludar(nombre) {
//   return `Hola, ${nombre}`;
// }

const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar("Goku"));
console.log(saludar2("Goku"));
console.log(saludar3("Goku"));

const getUser = () => ({
    uid: "ABC123",
    username: "abcabc22",
});

console.log(getUser());

//Tarea

//Hecho como funcion normal
function getUsuarioActivo(nombre){
    return {
    uid: "ABC567",
    username: nombre
    }
};  

const usuarioActivo = getUsuarioActivo("Ezequiel");
console.log(usuarioActivo);

//Hecho con arrow function
const getUsuarioActivo2 = (nombre) => ({
    uid: "ABC123",
    username: nombre,
});

console.log(getUsuarioActivo2("Eze"));