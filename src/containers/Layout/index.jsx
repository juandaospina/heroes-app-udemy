import { useLocation } from "react-router-dom";
import { Navbar } from "../../components/Navbar";

export const Layout = ({ children }) => {

    const location = useLocation();

    return(
        <>
            {/* { 
                ['/', '/marvel', '/dc', '/search', '/hero', '/search'].includes( location.pathname ) 
                    ? <Navbar /> 
                    : null
            } */}
            <div>
                { children }
            </div>
        </>
    );
}