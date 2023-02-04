import { Navigate } from 'react-router-dom';
//import { useSelector } from 'react-redux';

//import {history} from '_helpers'
import { AuthContext } from './auth';
import { useContext } from 'react';

export { PrivateRoute };

function PrivateRoute({ children }) {
    let authToken = localStorage.getItem('authToken');
    console.log("auth token.....",authToken);
    if (!authToken) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/" />
    }

    // authorized so return child components
    return children;
}