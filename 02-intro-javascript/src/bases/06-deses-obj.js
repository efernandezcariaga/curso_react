const persona = {
    nombre: "Eze",
    edad: 22,
    clave: "Hulk",
};

const {nombre, edad, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const useContext = ({nombre, edad, clave, rango = "capo"}) => {
    //console.log(nombre,edad,clave,rando);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 123.123,
            lng: 123.123
        }
    }
}

//retornaPersona(persona);

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);
console.log(nombreClave,anios);
console.log(lat,lng);
