import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        setLoading(true);
        await setTimeout(() => {
            if (true) {
                return console.log('Ingresando...');
            }
        }, 10000);
        setLoading(false);
        navigate('/marvel');
    }

    return(
        <div className="mt-5">
            <h2>Ingrese en su login</h2>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Ingresar
            </button>

            { loading && <span>CARGANDO...</span> }
        </div>
    );
}