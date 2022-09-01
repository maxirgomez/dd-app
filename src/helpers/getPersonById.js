import { heroes } from "../data/heroes";

export const getPersonById = ( id ) => {
    return heroes.find( person => person.id === id );
}