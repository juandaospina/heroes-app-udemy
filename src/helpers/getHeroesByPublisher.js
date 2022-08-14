import { heroes } from "../data/heroes";


export const getHeroesByPublisher = (publisher) => {

    const availablePublishers = ['DC Comics', 'Marvel Comics'];

    if (!availablePublishers.includes(publisher)) {
        throw new Error('Publisher is not valid');
    }

    return heroes.filter(heroe => heroe.publisher === publisher);
}