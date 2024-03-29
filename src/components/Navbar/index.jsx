import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

export const Navbar = () => {

    const { user, onLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/login')
    }

    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <NavLink 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </NavLink>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        to="/marvel"
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive && 'active' }`}
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        to="/dc"
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive && 'active' }`}
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        to="/search"
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive && 'active' }`}
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    
                    <span  className="nav-item- nav-link text-primary">
                        { user?.name }
                    </span>

                    <button 
                        className='nav-item nav-link btn'
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    );
}