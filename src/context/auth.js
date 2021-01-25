import React, {createContext, useReducer} from 'react';
import {auth} from '../reducer/auth';
import icon from '../assets/images/spotify-144.png';

/**
 * Create initial state
 * @type {{isLoading: boolean, name: string, endIcon: JSX.Element, label: string}}
 */
const initialState = {
    label: 'login',
    name: 'Login',
    isLoading: false,
    endIcon: <img src={icon} alt='spotify-icon' width={25} height={25}/>
};

/**
 * Create authentication context
 * @type {React.Context<{isLoading: boolean, name: string, endIcon: JSX.Element, label: string}>}
 */
export const AuthContext = createContext(initialState);

/**
 * Create authentication provider
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer(auth, initialState, undefined);

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
