import { Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

import { 
    Login, 
    About, 
    MarvelPage, 
    DCPage,
    HeroePage,
    SearchPage
} from '../pages';
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";


export const AppRouter = () => {
    return(
        <>
            <Navbar />
            <div className="container"> 
                <Routes>
                    <Route 
                        path='/'
                        element = { <Navigate to="/marvel"/> }
                    />
                    <Route 
                        path='/about'
                        element = { <About /> }
                    />   
                    <Route 
                        path='/marvel'
                        element = { <MarvelPage /> }
                    />
                    <Route 
                        path='/heroe/:id'
                        element = { <HeroePage /> }
                    />
                    <Route 
                        path='/dc'
                        element = { <DCPage /> }
                    />
                    <Route 
                        path='/search'
                        element = { <SearchPage /> }
                    />  
                </Routes>
            </div>
        </>
    );
}

export const AppRouterAuth = () => {
    return(
        <Routes> 
            <Route 
                path="/login"
                element = {
                    <PublicRoutes>
                        <Login />
                    </PublicRoutes>
                }
            />    

            <Route 
                path='/*'
                element = {
                    <PrivateRoutes>
                        <AppRouter/>
                    </PrivateRoutes> 
                }
            />
            
        </Routes>
    );
}
