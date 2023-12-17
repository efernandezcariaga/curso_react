const persona = {
    nombre: "Ezequiel",
    apellido: "Fernandez Cariaga",
    edad: 22,
};

// console.table(persona);
console.log(persona);

const persona2 = {...persona};
persona2.nombre = "Peter";