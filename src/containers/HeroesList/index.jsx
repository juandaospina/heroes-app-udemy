import { useMemo } from 'react';
import PropTypes from 'prop-types';

import { HeroeCard } from '../../components/HeroeCard';
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher';


export const HeroesList = ({ publisher }) => {

    const getHeroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return(
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            { getHeroes.map( heroe => (
                <HeroeCard
                    key={ heroe.id} 
                    heroe={ heroe }
                />
            ))}
        </div>
    );
}

HeroesList.propTypes = {
    publisher: PropTypes.string.isRequired
}