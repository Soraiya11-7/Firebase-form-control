import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/Firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthProviderContext = createContext(null);


const AuthContext = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

const  name = 'habijabi';

const createUser = (email, password ) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}

const loginUser = (email, password ) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}

const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
}


useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
        
            setUser(currentUser)
            setLoading(false)
        })
        // else{
        //     setUser(null)
        // }
        
        return () => {
            unSubscribe();
        }

   
} ,[])

const authInfo = {
    name,
    user,
    setUser,
    loading,
    createUser,
    loginUser,
    signOutUser
}
    return (
       <AuthProviderContext.Provider value={authInfo}>
          {children}
       </AuthProviderContext.Provider>
    );
};

export default AuthContext;