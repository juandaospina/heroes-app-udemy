import { HeroesList } from "../../containers/HeroesList";

export const MarvelPage = () => {
    return(
        <>
            <h2>Página de marvel</h2>
            <hr />

            <HeroesList
                publisher="Marvel Comics"
            />
        </>
    );
}