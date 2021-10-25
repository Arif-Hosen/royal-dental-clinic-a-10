import React from 'react';
import useAuth from './../../hooks/useAuth';
import { Route, Redirect, Switch, useLocation, useHistory } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';



const PrivateRoute = ({ children, ...rest }) => {

    // destucture
    const { user, isLoading } = useAuth();
    // spinner set
    if (isLoading) {
        return <p style={{ marginBottom: '200px' }} className='text-center'><Spinner animation="border" variant="primary" /></p>
    }


    return (
        // private route
        <Route
            {...rest}
            // conditionally render
            render={({ location }) => user.email ? children :
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}>

                </Redirect>
            }>
        </Route>




    );
};

export default PrivateRoute;