import { createContext, useReducer } from 'react';
import { LOGIN, LOGOUT } from '../types';

import { authReducer } from './authReducer';


const init = () => {
    const user = JSON.parse( localStorage.getItem('user') )

    return {
        logged: !!user,
        user: user
    }
}

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer, {}, init )

    const onLogin = (name = '') => {

        const user = { id: 1017266161, name: name }

        dispatch({
            type: LOGIN,
            payload: user
        })

        localStorage.setItem('user', JSON.stringify(user))
    }

    const onLogout = () => {
        localStorage.removeItem('user');
        dispatch({
            type: LOGOUT,
        })
    }

    return(
        <AuthContext.Provider value={{ ...authState, onLogin, onLogout }}>
            { children }
        </AuthContext.Provider>
    );
}