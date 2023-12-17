import { getHeoreById, getHeroesByOwner } from "./bases/08-imp-exp";
import heroes from "./data/heroes";

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         const heroe = getHeoreById(2);
//         resolve(heroe);
//         // reject("No se pudo encontrar el heroe");
//     }, 2000)
// }); 

// promesa.then( (heroe) => {
//     console.log("Then de la promesa", heroe);
// })
// .catch( (error) => {
//     console.warn(error);
// })
// .finally( () => {
//     setTimeout( () => {
//         console.log("Finally de la promesa");

//     }, 2000)
// });

const getHeroeByIdAsync = (id) => {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            const p1 = getHeoreById(id)
            if(p1 !== undefined){
                resolve(p1);
            } else{
                reject("No se pudo encontrar el heroe");
            }
        }, 2000)
    });
}

getHeroeByIdAsync(2)
// .then( heroe => console.log("Heroe", heroe))
// .catch( err => console.warn(err));
.then( console.log )
.catch( console.warn );