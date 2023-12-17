import heroes, {owners} from "../data/heroes";

// console.log(heroes);

export const getHeoreById = (id) => heroes.find((heroe) => heroe.id===id);

// console.log(getHeoreById(2));


export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)

// console.log(getHeroesByOwner("DC"));