import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

export const Login = () => {

    const { onLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const lastPath = localStorage.getItem('lastPath');

    const handleLogin = () => {
        onLogin('Juan David Ospina');
        // console.log(lastPath);
        navigate(lastPath, {
            replace: true
        });
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

        </div>
    );
}