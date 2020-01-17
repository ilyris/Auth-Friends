import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';


// pass in an object, with the Component as a value to 'component' then spread the rest of the object in.
// We also pass in our individual props we prop drilled.

export const ProtectedRoute = ({component: Component, ...restOfProps}) => {
    
    const isLoggedIn = useSelector(state => state.root.isLoggedIn);
    console.log(isLoggedIn);

    return(
    <Route {...restOfProps} render={props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />)} />
    )
}