import { useMemo } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { getHeroById } from "../../helpers/getHeroById";

export const HeroePage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const hero = useMemo(() => getHeroById(id), [id])

    const onNavigateReturn = () => {
        navigate(-1)
    }

    if (!hero) {
        return <span>Hero not found</span>
    }

    return(
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ `/assets/${hero.id}.jpg` }
                    alt={ hero.superhero } 
                    className="img-thumbnail"
                />
            </div>

            <div className="col-8">
                <h3>{ hero.superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li 
                        className="list-group-item"
                    >
                        <b>Alter ego: { hero.alter_ego }</b>
                    </li>
                    <li 
                        className="list-group-item"
                    >
                        <b>Publisher: { hero.publisher }</b>
                    </li>
                    <li 
                        className="list-group-item"
                    >
                        <b>First appearance: { hero.first_appearance }</b>
                    </li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{ hero.characters }</p>

                <button
                    className="btn btn-primary"
                    onClick={ onNavigateReturn }
                >
                    Regresar
                </button>
            </div>
        </div>
    );
}