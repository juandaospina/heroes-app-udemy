import { HeroesList } from "../../containers/HeroesList";


export const DCPage = () => {
    return(
        <>
            <h2>Página de DC Héroes</h2>
            <hr />

            <HeroesList
                publisher="DC Comics"
            />
        </>
    );
}