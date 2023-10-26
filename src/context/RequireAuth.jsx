import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './AuthContext'





// hadi chghoul provider ==> pour proteger dashbord
const RequireAuth = ({children}) => {


    const {currentUser}=useAuth();

    //pour garder une location et y revenir apres 
    const location=useLocation();

    // ida mkch user connecté eddini l login ==> pour proteger dashbord
    if(!currentUser){
        return <Navigate to='/login' state={{path:location.pathname}}/>
    }
    return children;
}

export default RequireAuth