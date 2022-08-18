import { useContext, useEffect, useMemo } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export const PrivateRoutes = ({ children }) => {

    const { logged } = useContext(AuthContext);
    const { pathname, search } = useLocation();
    

    const lastPath = pathname + search
    localStorage.setItem('lastPath', lastPath)

    // useEffect(() => {
    // }, [pathname, search])

    return (logged) 
        ? children 
        : <Navigate to="/login" />
}