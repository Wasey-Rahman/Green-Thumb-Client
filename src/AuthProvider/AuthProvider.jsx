import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../Firebase/firebase.config';




export const AuthContext=createContext();
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password,photoURL)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
        .then((result) => {
            const { user } = result;
            setUser({ ...user, photoURL });
            return result;
          })
          .finally(() => setLoading(false));
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
        .then((result) => {
            const { user } = result;
            setUser(user);
            return result;
          })
          .finally(() => setLoading(false));
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth)
        .then(() => {
            setUser(null);
          })
          .finally(() => setLoading(false));
      }

    useEffect(()=>{
       const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
      setLoading(false);
       });
       return ()=>{
        return unsubscribe();
       }
    },[])
    
    const authInfo={
       user,
       loading,
       createUser,
       signIn,
       logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
           
        </AuthContext.Provider>
            
        
    );
};

export default AuthProvider;
