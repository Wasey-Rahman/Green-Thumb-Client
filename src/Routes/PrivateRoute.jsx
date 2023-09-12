import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location =useLocation();
    console.log('user in private route',user);
    if(user){
        return children;
    }
    return<Navigate state={{from :location}}to="/login"></Navigate> ;
};

export default PrivateRoute;