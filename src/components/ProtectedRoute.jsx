import React, { use } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from './Loading';

const ProtectedRoute = ({children}) => {
    const {user,userLoading}=use(AuthContext);
    const location =useLocation();
    if(userLoading){
        return <Loading></Loading>
    }
    if(!user){
       return <Navigate state={location.pathname} to="/login"></Navigate>
    }

    return children;
    
};

export default ProtectedRoute;