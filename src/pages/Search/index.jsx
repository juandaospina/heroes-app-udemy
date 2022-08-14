import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from 'query-string';
import { HeroeCard } from "../../components/HeroeCard";
import { getHeroeByName } from "../../helpers/getHeroeByName";
import { useMemo } from "react";

export const SearchPage = () => {

    const { searchText, onInputChange, onResetValues } = useForm({
        searchText: ''
    });

    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const heroes =  useMemo(() => getHeroeByName(q), [q]);

    const handleSearchSubmit = (event) => { 
        event.preventDefault();
        navigate(`/search?q=${ searchText.trim() }`)
        onResetValues();
    }

    const showSearch = (q.length === 0)
    const showError = (q.length > 0) && heroes.length === 0
 
    return(
        <>
            <h1>Página de búsqueda</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={ handleSearchSubmit }>
                        <input 
                            type="text" 
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ onInputChange }
                        />

                        <button
                            className="btn btn-outline-primary mt-1"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    <div className="alert alert-primary" style={{ display: showSearch ? '' : 'none' }}>
                        <span>Search a hero</span>
                    </div>

                    <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
                        <span>Hero not found</span>
                    </div>

                    {
                        heroes.map( heroe => (
                            <HeroeCard 
                                key={ heroe.id }
                                heroe={ heroe }
                            />
                        ))
                    }
                </div>
            </div>

        </>
    );
}