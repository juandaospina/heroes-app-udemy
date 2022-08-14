import { Link } from 'react-router-dom';


export const HeroeCard = ({ heroe }) => {

    const { id, superhero, alter_ego, first_appearance } = heroe;
    const heroImageUrl = `assets/${ id }.jpg` 

    return(
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ heroImageUrl }  className="card-img" alt="" />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">
                                { superhero }
                            </h5>
                            <p className="card-text">{ alter_ego }</p>
                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>

                            <Link
                                to={`/heroe/${ id }`}
                            >
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}