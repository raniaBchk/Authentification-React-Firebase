import { createContext,useContext,useState,useEffect } from "react";
import {createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    updateEmail,
    updatePassword
} from 'firebase/auth'
import auth from '../firebase'



const AuthContext=createContext();

const AuthProvider=({children})=>{


    const [currentUser, setCurrentUser]=useState()
    const [loading, setLoading]=useState(true)

    const signup=(email,password)=>{

       return createUserWithEmailAndPassword(auth,email,password); // elle nous retourne une reponse qu'on va recupérer dans component signUp
    }


    const logout=()=>{
       return signOut(auth);
    }

    const login=(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }

    const resetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email);
    }

    const updateUserEmail=(email)=>{
        console.log("email");
        return updateEmail(auth.currentUser,email)
    }

    const updateUserPassword=(password)=>{
        console.log("password");
        return updateEmail(auth.currentUser,password)
    }


    useEffect(()=>{

        // t9olelna ida user tbedel
       const unsubscribe= onAuthStateChanged(auth,(user)=>{
            // user tbedel yaani currentUser tbedlet w yaani loading tweli false psk c bon 3andna user 
            setCurrentUser(user);
            setLoading(false)
        })


        // nettoyage de useEffect pour eviter les fuites de memoire 

        return()=>{
            unsubscribe();
        }
    },[])


    return(
        <AuthContext.Provider value={{currentUser,signup,logout,login,resetPassword,updateUserEmail,updateUserPassword}}>
        {!loading && children}
        
        </AuthContext.Provider>
    )
  
}


//export provider
export default AuthProvider;


// export custom hook 

export const useAuth=()=>{
    return useContext(AuthContext);
}
