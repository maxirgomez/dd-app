import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( active ) => {
    //El hero que yo estoy enviando tiene que ser el mismo al que tengo en la data
    
    return heroes.filter( person => person.active === active );
}

