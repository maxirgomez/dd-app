import { heroes } from "../data/heroes";

export const getPeopleByCause = (cause = '') => {

    cause = cause.toLocaleLowerCase().trim();
    if( cause.length === 0 ) return [];
    
    return heroes.filter(
        people => people.cause.toLocaleLowerCase().includes(cause)
    );
};