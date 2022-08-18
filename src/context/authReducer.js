import { LOGIN, LOGOUT } from '../types';


export const authReducer = ( state = {}, action ) => {

    switch (action.type) {
        case LOGIN:
            return { 
                ...state,
                logged: true,
                user: action.payload
            };

        case LOGOUT:
            return {
                logged: false
            }
    
        default:
            return state;
    }
}