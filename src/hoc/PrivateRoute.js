import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoadingIndicator from '../components/LoadingIndicator';
import { AuthContext } from '../auth/Auth';

const PrivateRoute = ({component: Component, ...props}) => {

    // Declare the useContext() so this component will have the same context as AuthContext.Provider
    const { isAuthenticated, isLoading } = useContext(AuthContext)

    return (
        <Route {...props} 
            render={ props => (
                !isLoading
                    ?
                    (
                        isAuthenticated
                            ?
                            <Component {...props} />
                            :
                            <Redirect to='/login' />
                    )
                    :
                    <LoadingIndicator />
            )}
        />    
    ) 
}

export default PrivateRoute;
    
    
        
        

       

