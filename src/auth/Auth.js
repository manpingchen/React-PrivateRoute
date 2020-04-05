import React, { useState, useEffect } from 'react';
import  * as localforage  from 'localforage' ;
import {  authLogin } from './authLogin';


// Create a Context for other child components to share the same context
export const AuthContext = React.createContext({})
export default function Auth ( {children} ) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        checkAuth()
    }, [isAuthenticated])


    const checkAuth = async () => {
        //check expired_at with current time
        const tokenValue = await localforage.getItem('token')
        setIsAuthenticated((!!tokenValue));
        setIsLoading(false)    
    } 

    const login = async (data) => {
        // call api, store token, expired_at

        // if data empty, redirect back to login page
        if (!data) {
            setIsAuthenticated(false)        
        }
        //run the function to set the value of 'expired_at' and 'token' in the IndexDB
        await authLogin(data)
        //set the isAuthenticated state to false
        setIsAuthenticated(true)    
        console.log('login: ' + isAuthenticated)
    }

    const logout = () => {
        //remove the value of 'expired_at' and 'token' stored in the IndexDB
        localforage.setItem('expire_at')
        localforage.setItem('token')
        //set the isAuthenticated state to false
        setIsAuthenticated(false)
    }

    return (
        // AuthContext.Provider will wrap the components
        // The wrapped components can use the value sent from the AuthContext.Provider
        // To use the value, the wrapped components should delcare 'useContext(AuthContext)' 
        <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
    
}
